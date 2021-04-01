import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './components/menu';
import Slider from './components/slider'; import Sesiones from './components/sesiones';
import ModalSesiones from './components/modalSesiones.js';
import Home360 from './components/main360/home360';
import Main360 from './components/main360/main360';
import Books from './components/books';
import Nav from './components/nav';
import Contacto from './components/contacto';
import SobreMi from './components/sobreMi';
import Social from './components/socialMedia';
import VR360 from './components/a-frame';

function App(props) {
  return (
    <Router >
      <Switch>
        <Route path="/360">
          <Main360 />
        </Route>
        <Route path="/sesiones">
          <Nav active="sesionesLink" />
          <Sesiones />
          <Social />
          <ModalSesiones />
        </Route>
        <Route path="/books">
          <Nav active="bookslink" />
          <Books />
          <Social />
        </Route>
        <Route path="/contacto">
          <Nav active="contactoLink" />
          <Contacto />
          <Social />
        </Route>
        <Route path="/sobre_mi">
          <Nav active="sobreMiLink" />
          <SobreMi />
          <Social />
        </Route>
        <Route path="/">
          <Nav active="defaultHome" />
          <Slider />
          <Menu />
	      <VR360 />
          <SobreMi />
          <Contacto />
          <Social />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
