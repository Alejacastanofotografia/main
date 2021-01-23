import React from 'react';

class Social extends React.Component {
  render() {
    return (
      <div className="wrapperSocial">
        <nav>
          <ul>
            <li>
              <a className="itemSocial whatsapp" href="https://api.whatsapp.com/send?phone=573148582037&amp;text=From:&nbsp;alejacastanofotografía.com" target="_blank">
                <i className="fab">&#xf232;</i>
              </a>
            </li>
            <li>
              <a className="itemSocial instagram" href="https://www.instagram.com/aleja.c_a/?hl=es-la" target="_blank">
                <i className="fab">&#xf16d;</i>
              </a>
            </li>
            <li>
              <a className="itemSocial facebook" href="https://www.facebook.com/daleja16?_rdc=1&_rdr" target="_blank">
                <i className="fab">&#xf39e;</i>
              </a>
            </li>
          </ul>
        </nav>
        <p>
          Alejacastañofotografia 2021
          <br />
          <i>Todos los derechos reservados</i>
        </p>
          <div>
            Iconos diseñados por
            <a href="https://www.freepik.com" title="Freepik" target="_blank">
              Freepik
            </a>
            from}
            <a href="https://www.flaticon.es/" title="Flaticon" target="_blank">
              www.flaticon.es
            </a>
          </div>
      </div>
    );
  }
}
export default Social;
