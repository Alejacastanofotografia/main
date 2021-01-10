import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, withRouter, HashRouter} from 'react-router-dom';

class Nav extends React.Component{
    active(e) {
	let link = document.querySelectorAll('.links');
	link.forEach(links => {
	    links.classList.remove('activeMenu')
	});
        document.getElementById(e).classList.add('activeMenu');
    }
    render(){
	return(
          <header className="menuHeader">
	    <nav>
              <ul>
                <li>
                  <Link className="links"to="/" id="menuLink" onClick={ () => this.active('menuLink')}>Home</Link>
                </li>
                <li>
                  <Link className="links"to="/sesiones"id="sesionesLink" onClick={ () => this.active('sesionesLink')}>Sesiones</Link>
                </li>
                <li>
                  <Link className="links"to="/books"id="bookslink" onClick={ () => this.active('bookslink')}>
	          Books
	          </Link>
                </li>
                <li className="wrapperLogo">
                  <Link className="Logo"to="/">
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
                  <Link className="links"to="/contacto"id="contactoLink" onClick={ () => this.active('contactoLink')}>Contacto</Link>
                </li>
                <li>
                  <Link className="links"to="/sobre_mi" id="sobreMiLink" onClick={ () => this.active('sobreMiLink')}>Sobre Mí</Link>
                </li>
                <li>
                  <Link className="links"to="/360" id="link360" onClick={ () => this.active('link360')}>360</Link>
                </li>
              </ul>
	    </nav>
          </header>
          	
	)
    }

}

export default Nav
