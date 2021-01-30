let modal = true,
  auto = true,
  img,
  folderName,
  infoModal,
  numModal,
  totalAll,
  totalAnimales,
  totalFlores,
  total,
  play,
  stop,
  userBar, //barra de progreso de modal auto
  intervalAuto, //setInterval para cambiar la imagen del modal de forma automática
  intervalProgress, //setInterval para cambiar la barra de progreso
  intervalCont, //setInterval que detiene todos los intervalos cuando "cont" es igual al número total de imagenes de la sesión
  numProgress = 0, //contador de 0 a 100 para la barra de progreso
  cont = 1, //contador que aumenta hasta que es igual a la cantidad de imagenes de cada sesión para deterner los setInterval activos
  time = 2000, //intervalo para cambiar la imagen en pantalla
  timeProgress; // intervalo con el que aumentará el progreso
//main modales
function toggleModal(e, folder, num, paisaje) {
  play = document.getElementById('play');
  stop = document.getElementById('stop');
  userBar = document.getElementById('userBar');
  img = document.getElementById('mainImg');
  infoModal = document.getElementById('infoModal');
  totalAll = document.querySelectorAll('.totalModal').length;
  totalFlores = document.querySelectorAll('.totalModalFlores').length;
  totalAnimales = document.querySelectorAll('.totalModalAnimales').length;
  if (modal) {
    document.getElementById('modalSesiones').classList.remove('hide');
    modal = false;
    if (folder) img.src = `/images/Galerias/${folder}/img${num}.jpg`;
  } else {
    document.getElementById('modalSesiones').classList.add('hide');
    modal = true;
  }
  if (paisaje === 'paisajes') total = totalAll;
  else if (paisaje === 'animales') total = totalAnimales;
  else if (paisaje === 'flores') total = totalFlores;
  folderName = e.target.dataset.folder;
  numModal = num;
  infoModales(folderName, total);
  listener();
}
//prev
function prevModal() {
  numModal--;
  if (numModal == 0) {
    numModal = total;
  }
  img.src = `/images/Galerias/${folderName}/img${numModal}.jpg`;
  infoModales(folderName, total);
}
//next
function nextModal() {
  numModal++;
  if (numModal > total) {
    numModal = 1;
  }
  img.src = `/images/Galerias/${folderName}/img${numModal}.jpg`;
  infoModales(folderName, total);
}
//foler con información sobre el nombre y número de imagen actual
function infoModales(folderName, total) {
  infoModal.innerHTML = `${folderName} ${numModal}/${total}`;
}
//detener modal automatico
function stopModal() {
  if (!auto) {
    clearInterval(intervalAuto);
    clearInterval(intervalProgress);
    clearInterval(intervalCont);
    auto = true;
    cont = 1;
    play.classList.remove('hide');
    stop.classList.add('hide');
    userBar.style.width = '1px'; 
      numProgress = 0;
    console.log(auto)
  }
}
function progress() {
    userBar.style.width = `${numProgress}%`;
  numProgress = numProgress + 0.25;
}
//iniciar modal automático
function autoModal() {
  timeProgress = (parseInt(total) * parseInt(time)) / 400;
  if (auto) {
    intervalAuto = setInterval(nextModal, time);
    intervalProgress = setInterval(progress, timeProgress);
    intervalCont = setInterval(() => {
      if (cont < total) {
        cont++;
      } else {
        stopModal();
      }
    }, time);
    auto = false;
    play.classList.add('hide');
    stop.classList.remove('hide');
  } else {
    stopModal();
  }
    console.log(auto)
}
function listener() {
  document.querySelector('#closeModal').addEventListener('click', toggleModal);
  document.querySelector('#closeModal').addEventListener('click', stopModal);

  document.querySelector('#prevModal').addEventListener('click', prevModal);
  document.querySelector('#prevModal').addEventListener('click', stopModal);

  document.querySelector('#nextModal').addEventListener('click', nextModal);
  document.querySelector('#nextModal').addEventListener('click', stopModal);
}

document.addEventListener('keydown', e => {
  if (!modal) {
    if (e.keyCode == 39) nextModal(); stopModal(); //arrowRight
    if (e.keyCode == 37) prevModal();stopModal(); //arrowLeft
    if (e.keyCode == 27) toggleModal();stopModal(); //esc
    if (e.keyCode == 32) autoModal();
  }
});
