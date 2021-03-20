var dark = true;
export function changeTheme(){
	alert('enter');
  let root = document.documentElement.style.setProperty;
  if (dark) {
    root('--background-main', 'hsl(0, 0%, 90%)');
    root(
      '--main-gradient',
      'linear-gradient(to bottom, hsl(0, 0%, 80%), hsl(0, 0%, 100%))',
    );
    root(
      '--main-gradient-right',
      'linear-gradient(to right, hsl(0, 0%, 80%),hsl(0, 0%, 100%))',
    );
    root('--white-color', '#202020');
    root('--black-color', '#eee');
    root('--black-rbga-media', 'rgba(200, 200, 200, 0.9)');
    dark = false;
  } else {
    root('--background-main', '#202020');
    root(
      '--main-gradient',
      'linear-gradient(to bottom, hsl(0, 0%, 5%), hsl(0, 0%, 18%))',
    );
    root(
      '--main-gradient-right',
      'linear-gradient(to right, hsl(0, 0%, 5%),hsl(0, 0%, 18%))',
    );
    root('--white-color', '#eee');
    root('--black-color', '#202020');
    root('--black-rbga-media', 'rgba(0, 0, 0, 0.9)');

    dark = true;
  }
}

