var dark = true;
export function changeTheme() {

  let root = document.documentElement;
  if (dark) {
    root.style.setProperty('--background-main', 'hsl(0, 0%, 90%)');
    root.style.setProperty(
      '--main-gradient',
      'linear-gradient(to bottom, hsl(0, 0%, 80%), hsl(0, 0%, 100%))',
    );
    root.style.setProperty(
      '--main-gradient-right',
      'linear-gradient(to right, hsl(0, 0%, 80%),hsl(0, 0%, 100%))',
    );
    root.style.setProperty('--white-color', '#202020');
    root.style.setProperty('--black-color', '#ccc');
    root.style.setProperty('--black-rgba-media', 'rgba(200, 200, 200, 0.9)');
    dark = false;
	activeRotate(-180);
  } else {
    root.style.setProperty('--background-main', '#202020');
    root.style.setProperty(
      '--main-gradient',
      'linear-gradient(to bottom, hsl(0, 0%, 5%), hsl(0, 0%, 18%))',
    );
    root.style.setProperty(
      '--main-gradient-right',
      'linear-gradient(to right, hsl(0, 0%, 5%),hsl(0, 0%, 18%))',
    );
    root.style.setProperty('--white-color', '#ccc');
    root.style.setProperty('--black-color', '#202020');
    root.style.setProperty('--black-rgba-media', 'rgba(0, 0, 0, 0.9)');

    dark = true;
	activeRotate( 180);
  }

}
function activeRotate(trans) {
  let rotate = document.querySelectorAll('.rotate');
  rotate.forEach(element => {
    element.style.transform = `rotate(${trans}deg)`;
  });
}
var rotate = document.querySelectorAll('.rotate');
rotate.forEach(element => {
  element.addEventListener('click', activeRotate);
});
