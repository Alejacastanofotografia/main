export function selectSesion(e, total, classNameD, folder, paisajes) {
  setTimeout(() => {
    let wrapper = document.querySelector('#mainSesiones');
    let wrapper2 = document.querySelector('#mainSesionesAnimales');
    let wrapper3 = document.querySelector('#mainSesionesFlores');
    wrapper.innerHTML = '';
    wrapper2.innerHTML = '';
    wrapper3.innerHTML = '';
    wrapper.setAttribute('class', classNameD);
    let desktopImg = '/img';
    let mobileImg = '/media/img';
    let responsive;

    if (window.screen.width >= 420) {
	responsive = desktopImg
    } else {
	responsive = mobileImg
    }

    for (let i = 1; i <= total; i++) {
      wrapper.innerHTML += `
            <li>
              <a
                href="#${folder}"
		onclick="toggleModal(event, '${folder}', ${i} , 'paisajes')"
                >
                <img
                  data-src="/images/Galerias/${folder}${responsive}${i}.jpg"
                  class="lazyload"
                />
                <div class="new totalModal" data-folder=${folder} ></div>
		
              </a>
            </li>
       `;
    }
    if (paisajes) {
      for (let i = 1; i <= 14; i++) {
        wrapper2.innerHTML += `
            <li>
              <a
                href="#animales"
		onclick="toggleModal(event, 'Animales', ${i}, 'animales')"
		>
                <img
                  data-src="/images/Galerias/Animales${responsive}${i}.jpg"
                  class="lazyload"
                />
                <div class="new totalModalAnimales" data-folder="Animales" ></div>
              </a>
            </li>
       `;
      }
      for (let i = 1; i <= 16; i++) {
        wrapper3.innerHTML += `
            <li>
              <a
                href="#flores"
		onclick="toggleModal(event, 'flores', ${i}, 'flores')"
		>
                <img
                  data-src="/images/Galerias/flores${responsive}${i}.jpg"
                  class="lazyload"
                />
                <div class="new totalModalFlores" data-folder="flores" ></div>
              </a>
            </li>
       `;
      }
    }
  }, 300);
}
