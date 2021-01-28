import React from 'react';
import {Link} from 'react-router-dom';
import {selectSesion} from './scripts/sesiones.js';

class NavDesktop extends React.Component {
  constructor(props) {
    super(props);

    this.activeCom = this.activeCom.bind(this);
    this.selectSesion = this.sesion.bind(this);
  }
sesion(e, total, classNameD, folder, paisajes) {
    selectSesion(e, total, classNameD, folder, paisajes);
  }
  
  activeCom(e, menu) {
    let link = document.querySelectorAll('.links');
    link.forEach(links => {
      links.classList.remove('activeMenu');
    });
    e.target.classList.add('activeMenu');
    if (menu) {
      link.forEach(links => {
        links.classList.remove('activeMenu');
      });
      document.querySelector('#defaultHome').classList.add('activeMenu');
    }
  }
  render() {
    return (
      <header className="menuHeader">
        <nav>
          <ul>
            <li>
              <Link
                className="links "
                id="defaultHome"
                to="/"
                onClick={this.activeCom}>
                Home
              </Link>
            </li>
            <li onClick={e => this.selectSesion(e, 18, 'galeriaV', 'Adulto')}>
              <Link
                className="links"
                to="/sesiones"
                id="sesionesLink"
                onClick={this.activeCom}>
                Sesiones
              </Link>
            </li>
            <li>
              <Link
                className="links"
                to="/books"
                id="bookslink"
                onClick={this.activeCom}>
                Books
              </Link>
            </li>
            <li className="wrapperLogo">
              <Link
                className="Logo"
                to="/"
                id="logo360"
                onClick={e => this.activeCom(e, 'menu')}>
                <h1>
                  Aleja Castaño
                  <br />
                  <span>F</span>
                  <span>o</span>
                  <span>t</span>
                  <span>o</span>
                  <span>g</span>
                  <span>r</span>
                  <span>a</span>
                  <span>f</span>
                  <span>í</span>
                  <span>a</span>
                </h1>
              </Link>
            </li>
            <li>
              <Link
                className="links"
                to="/contacto"
                id="contactoLink"
                onClick={this.activeCom}>
                Contacto
              </Link>
            </li>
            <li>
              <Link
                className="links"
                to="/sobre_mi"
                id="sobreMiLink"
                onClick={this.activeCom}>
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link className="links" to="/360" id="link360">
                360
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default NavDesktop;
