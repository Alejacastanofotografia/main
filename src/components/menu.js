import React from 'react';
import {Link} from 'react-router-dom';
import {selectSesion} from './scripts/sesiones.js';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.selectSesion = this.sesion.bind(this);
  }
  sesion(e, total, classNameD, folder, paisajes) {
    selectSesion(e, total, classNameD, folder, paisajes);
  }
  render() {
    return (
      <div className="menu">
        <div className="wrapper">
          <Link
            to="/sesiones"
            className="wrapperImg"
            onClick={e => this.selectSesion(e, 20, 'galeriaV', 'Adulto')}>
            <img src="/images/menu/img4.jpg" alt="Retraro" title="retrato" />
            <div className="wrapperText">
              <p>Retratos</p>
            </div>
          </Link>
          <Link
            to="sesiones"
            className="wrapperImg"
            onClick={e =>
              this.selectSesion(e, 25, 'galeria', 'Paisajes', 'paisajes')
            }>
            <img src="/images/menu/img2.jpg" alt="Retraro" title="retrato" />
            <div className="wrapperText">
              <p>Paisajes</p>
            </div>
          </Link>
          <Link
            to="/sesiones"
            className="wrapperImg"
            onClick={e => this.selectSesion(e, 10, 'galeria', 'Pcomunion')}>
            <img src="/images/menu/img1.jpg" alt="Retraro" title="retrato" />
            <div className="wrapperText">
              <p>
                Primera <br />
                Comunión
              </p>
            </div>
          </Link>
          <Link
	    to="/sesiones"
            className="wrapperImg"
            onClick={e => this.selectSesion(e, 15, 'galeriaV', 'Prequinces')}>
            <img src="/images/menu/img20.jpg" alt="Retraro" title="retrato" />
            <div className="wrapperText">
              <p>Quinces</p>
            </div>
          </Link>
          <Link to="/sesiones"className="wrapperImg" onClick={e => this.selectSesion(e, 12, 'galeriaV', 'Boda')}>
            <img src="/images/menu/img10.jpg" alt="Retraro" title="retrato" />
            <div className="wrapperText">
              <p>Bodas</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
