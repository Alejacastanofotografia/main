var modal = true,
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

  let desktopImg = '/img';
  let mobileImg = '/media/img';
  if (window.screen.width >= 420) {
    responsive = desktopImg;
  } else {
    responsive = mobileImg;
  }

  if (modal) {
    document.getElementById('modalSesiones').classList.remove('hide');
    modal = false;
    if (folder) img.src = `/images/Galerias/${folder}${responsive}${num}.jpg`;
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

  //eventos touch para moviles
  swipe();
}
//control para los efectos touch en moviles
function swipe() {
  let next_prev;
  let numTouch = 0;
  let numTranslate = 0;
  let evtChange = 0;
  let screenWidth = screen.width - screen.width / 3;
  let containerH = document.getElementById('mainImg');

  containerH.addEventListener('touchstart', evt => {
    numTouch = evt.changedTouches[0].clientX;

    containerH.addEventListener('touchmove', fun);
  });
  containerH.addEventListener('touchend', stopTranslate);

  function fun(evt) {
    evtChange = evt.changedTouches[0].clientX.toString();
    //swipe to left
    if (numTouch > evtChange) {
      next_prev = true;
      numTranslate = numTranslate - 3;
      if (numTranslate < `-${screenWidth}`) {
        stopTranslate(true);
        // numTranslate = 0;
        containerH.removeEventListener('touchmove', fun);
      }

      //swipe to right
    } else {
      next_prev = false;
      numTranslate = numTranslate + 3;
      if (numTranslate > screenWidth) {
        //numTranslate = 0;
        stopTranslate(false);
        containerH.removeEventListener('touchmove', fun);
      }
    }
    containerH.style.transform = `translateX(${numTranslate}px)`;
  }
  function stopTranslate() {
    numTranslate = Math.abs(numTranslate);
    let translate = Math.abs(numTranslate);
    let screenThis = screen.width;
    console.log(numTranslate);
    if (next_prev) {
          nextModal();
    } else {
      prevModal();
    }
    containerH.removeEventListener('touchmove', fun);
    containerH.style.transform = `translateX(0px)`;
  }
}
//prev
function prevModal() {
  numModal--;
  if (numModal == 0) {
    numModal = total;
  }
  img.src = `/images/Galerias/${folderName}/img${numModal}.jpg`;
  infoModales(folderName, total);
  transitionImg(-200, 'prev');
}
//next
function nextModal() {
  numModal++;
  if (numModal > total) {
    numModal = 1;
  }
  img.src = `/images/Galerias/${folderName}/img${numModal}.jpg`;
  infoModales(folderName, total);
  transitionImg(200, 'next');
}
//transition cambio de imagen
function transitionImg(numM, next_prev) {
  //animacion para cambio de cada imagen
  let numThis = numM;
  let numOpacity = 0.7;
  let animationImg = setInterval(trans, 1);
  function trans() {
    if (next_prev === 'next') {
      if (numThis <= 0) {
        stopTrans();
      } else {
        numThis--;
        startTrans(numThis);
      }
    } else {
      if (numThis >= 0) {
        stopTrans();
      } else {
        numThis++;
        startTrans(numThis);
      }
    }
  }
  function stopTrans() {
    clearInterval(animationImg);
    numThis = numM;
    numOpacity = 0.5;
  }
  function startTrans(numThis) {
    numOpacity = numOpacity + 0.005;
    if (numOpacity >= 1) {
      numOpacity = 1;
    }
    img.style.transform = `translateX(${numThis}px)`;
    img.style.opacity = `${numOpacity}`;
  }
}
//foler con información sobre el nombre y número de imagen actual
function infoModales(folderName, total) {
  infoModal.innerHTML = `${folderName} ${numModal}/${total}`;
}
function progress() {
  userBar.style.width = `${numProgress}%`;
  numProgress = numProgress + 0.25;
}
//iniciar modal automático
function autoModal() {
  timeProgress = (parseInt(total) * parseInt(time)) / 400;
  if (auto) {
    auto = false;
    play.classList.add('hide');
    stop.classList.remove('hide');
    console.log('play');
    intervalAuto = setInterval(nextModal, time);
    intervalProgress = setInterval(progress, timeProgress);
    intervalCont = setInterval(() => {
      if (cont < total) {
        cont++;
      } else {
        stopModal();
        console.log('detenido');
      }
    }, time);
  } else if (!auto) {
    clearInterval(intervalAuto);
    clearInterval(intervalProgress);
    clearInterval(intervalCont);
    console.log('stopñ');
  }
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
    console.log(auto);
  }
}
function listener() {
  document.querySelector('#closeModal').addEventListener('click', toggleModal);
  document.querySelector('#closeModal').addEventListener('click', stopModal);

  document.querySelector('#prevModal').addEventListener('click', prevModal);
  document.querySelector('#prevModal').addEventListener('click', stopModal);

  document.querySelector('#nextModal').addEventListener('click', nextModal);
  document.querySelector('#nextModal').addEventListener('click', stopModal);

  play.addEventListener('click', autoModal);
  stop.addEventListener('click', stopModal);
}

//activar eventos con teclas
document.addEventListener('keydown', e => {
  if (!modal) {
    if (e.keyCode == 39) nextModal();
    stopModal(); //arrowRight
    if (e.keyCode == 37) prevModal();
    stopModal(); //arrowLeft
    if (e.keyCode == 27) toggleModal();
    stopModal(); //esc
    if (e.keyCode == 32) autoModal();
  }
});
