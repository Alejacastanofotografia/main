function parrafosi() {
  var num = 0;
  interval = setInterval(functionInterval, 300);

  function functionInterval() {
    if (num >= 13) {
      clearInterval(interval);
      stop();
    } else {
      num++;
      elementoP = document.querySelector(
        '.fraseSlider i:nth-child(' + num + ')',
      );
      elementoP.style.color = '#bbb';
    }
  }
}
function stop() {
  var num = 14;
  interval2 = setInterval(functionInterval2, 300);

  function functionInterval2() {
    if (num <= 1) {
      clearInterval(interval2);
      parrafosi();
    } else {
      num--;
      elementoP = document.querySelector(
        '.fraseSlider i:nth-child(' + num + ')',
      );
      elementoP.style.color = 'transparent';
    }
  }
}
//parrafosi();
let modal = true;
function toggleModal(e, folder, num) {
  let img = document.getElementById('mainImg');
  if (modal) {
    document.getElementById('modalSesiones').classList.remove('hide');
    modal = false;
    if (folder) img.src = `/images/Galerias/${folder}/img${num}.jpg`;
  } else {
    document.getElementById('modalSesiones').classList.add('hide');
    modal = true;
  }
  listener();
}
function listener(){
  document.querySelector('#closeModal').addEventListener('click', toggleModal);
}
