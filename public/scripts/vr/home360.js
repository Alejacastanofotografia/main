let imgHome = 'https://edcas804.github.io/360/img2.jpg';
let imgHome2 = 'https://edcas804.github.io/360/img1.jpg';
var viewer;

let changeImg = true;
function change() {
  if (changeImg) {
    viewer
      .setPanorama(imgHome2)
      .then(() => (changeImg = false));
  } else {
    viewer
      .setPanorama(imgHome)
      .then(() => (changeImg = true));
  }
}
//setInterval(start360, 10000);
function start360() {
  viewer = new PhotoSphereViewer.Viewer({
    container: document.querySelector('#viewer'),
    panorama: imgHome,
    defaultZoomLvl: 1,
    caption: 'Fotografía 360°',
    navbar: [
      'autorotate',
      {
        content: '<',
        className: 'prev-360',
        onClick: () => {
          change();
        },
      },
      'caption',

      {
        content: '>',
        className: 'next-360',
        onClick: () => {
          change();
        },
      },
      'fullscreen',
    ],

    lang: {
      autorotate: 'Automatic rotation',
    },
    autorotateDelay: 100,
    autorotateSpeed: '0.5rpm',
  });
}
window.onload = () => {
  call360();
  if (document.querySelector('#defaultHome'))
    document.querySelector('#defaultHome').addEventListener('click', call360);

  if (document.querySelector('#logo360'))
    document.querySelector('#logo360').addEventListener('click', call360);

  if (document.querySelector('#logo360'))
    document.querySelector('#logo360').addEventListener('click', call360);

  if (document.querySelector('#link360'))
    document.querySelector('#link360').addEventListener('click', reloadMain);

  if (document.querySelector('#toHome'))
    document.querySelector('#toHome').addEventListener('click', reloadMain);
};

function call360() {
  return setTimeout(start360, 50);
}
function reloadMain() {
  setTimeout(() => location.reload(), 50);
}
