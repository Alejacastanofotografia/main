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
  intervalAuto;
function toggleModal(e, folder, num, paisaje) {
  play = document.getElementById('play');
  stop = document.getElementById('stop');
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
function prevModal() {
  numModal--;
  if (numModal == 0) {
    numModal = total;
  }
  img.src = `/images/Galerias/${folderName}/img${numModal}.jpg`;
  infoModales(folderName, total);
}
function nextModal() {
  numModal++;
  if (numModal > total) {
    numModal = 1;
  }
  img.src = `/images/Galerias/${folderName}/img${numModal}.jpg`;
  infoModales(folderName, total);
}
function infoModales(folderName, total) {
  infoModal.innerHTML = `${folderName} ${numModal}/${total}`;
}
function stopModal() {
  if (!auto) {
    clearInterval(intervalAuto);
    auto = true;
    play.classList.remove('hide');
    stop.classList.add('hide');
  }
}
function listener() {
  document.querySelector('#closeModal').addEventListener('click', toggleModal);
  document.querySelector('#closeModal').addEventListener('click', stopModal);
    
  document.querySelector('#prevModal').addEventListener('click', prevModal);
  document.querySelector('#prevModal').addEventListener('click', stopModal);
    
  document.querySelector('#nextModal').addEventListener('click', nextModal);
  document.querySelector('#nextModal').addEventListener('click', stopModal);
}

function autoModal() {
  if (auto) {
    intervalAuto = setInterval(nextModal, 2000);
    auto = false;
    play.classList.add('hide');
    stop.classList.remove('hide');
  } else {
    clearInterval(intervalAuto);
    auto = true;
    play.classList.remove('hide');
    stop.classList.add('hide');
  }
}

document.addEventListener('keydown', e => {
  if (!modal) {
    if (e.keyCode == 39) nextModal(); //arrowRight
    if (e.keyCode == 37) prevModal(); //arrowLeft
    if (e.keyCode == 27) toggleModal(); //esc
    if (e.keyCode == 32) autoModal();
  }
});
