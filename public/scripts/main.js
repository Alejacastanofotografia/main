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

let modal = true,
  img,
  folderName,
  infoModal,
  numModal,
  totalAll,
  totalAnimales,
  totalFlores,
  total;
function toggleModal(e, folder, num, paisaje) {
  img = document.getElementById('mainImg');
  infoModal = document.getElementById('infoModal');
  totalAll = document.querySelectorAll('.totalModal').length;
  totalFlores= document.querySelectorAll('.totalModalFlores').length;
  totalAnimales= document.querySelectorAll('.totalModalAnimales').length;
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
function listener() {
  document.querySelector('#closeModal').addEventListener('click', toggleModal);
  document.querySelector('#prevModal').addEventListener('click', prevModal);
  document.querySelector('#nextModal').addEventListener('click', nextModal);
}
