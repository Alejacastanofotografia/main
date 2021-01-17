import React from 'react';

class Social extends React.Component {
  render() {
    return (
      <div className="wrapperSocial">
        <nav>
          <ul>
            <li>
              <a className="itemSocial" href="#">
                <i className="fab">&#xf232;</i>
              </a>
            </li>
            <li>
              <a className="itemSocial" href="#">
                <i className="fab">&#xf16d;</i>
              </a>
            </li>
            <li>
              <a className="itemSocial" href="#">
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
      </div>
    );
  }
}
export default Social;
