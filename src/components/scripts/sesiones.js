export function selectSesion(e, total, classNameD, folder, paisajes) {
    if(folder === 'Adulto') console.log('entramos al adulto');
  setTimeout(() => {
    let wrapper = document.querySelector('#mainSesiones');
    let wrapper2 = document.querySelector('#mainSesionesAnimales');
    let wrapper3 = document.querySelector('#mainSesionesFlores');
    wrapper.innerHTML = '';
    wrapper2.innerHTML = '';
    wrapper3.innerHTML = '';
    wrapper.setAttribute('class', classNameD);
    for (let i = 1; i <= total; i++) {
      wrapper.innerHTML += `
            <li>
              <a
                href="#${folder}"
		onclick="toggleModal(event, '${folder}', ${i})"
                >
                <img
                  src="/images/Galerias/${folder}/img${i}.jpg"
                  class="lazyload"
                />
                <div class="new"></div>
              </a>
            </li>
       `;
    }
    if (paisajes) {
      for (let i = 1; i <= 11; i++) {
        wrapper2.innerHTML += `
            <li>
              <a
                href="#animales"
		onclick="toggleModal(event, 'Animales', ${i})"
		>
                <img
                  src="/images/Galerias/Animales/img${i}.jpg"
                  class="lazyload"
                />
                <div class="new"></div>
              </a>
            </li>
       `;
      }
      for (let i = 1; i <= 16; i++) {
        wrapper3.innerHTML += `
            <li>
              <a
                href="#flores"
		onclick="toggleModal(event, 'flores', ${i})"
		>
                <img
                  src="/images/Galerias/Flores/img${i}.jpg"
                  class="lazyload"
                />
                <div class="new"></div>
              </a>
            </li>
       `;
      }
    }
  }, 300);
}

