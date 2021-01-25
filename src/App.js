import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './components/menu';
import Slider from './components/slider';
import Sesiones from './components/sesiones';
import ModalSesiones from './components/modalSesiones.js';
import Home360 from './components/main360/home360';
import Main360 from './components/main360/main360';
import Books from './components/books';
import Nav from './components/nav';
import Contacto from './components/contacto';
import SobreMi from './components/sobreMi';
import Social from './components/socialMedia';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/360">
          <Main360 />
        </Route>
        <Route path="/sesiones">
          <Nav />
          <Sesiones />
          <Social />
          <ModalSesiones />
        </Route>
        <Route path="/versesiones">
          <ModalSesiones />
        </Route>
        <Route path="/books">
          <Nav />
          <Books />
          <Social />
        </Route>
        <Route path="/contacto">
          <Nav />
          <Contacto />
          <Social />
        </Route>
        <Route path="/sobre_mi">
          <Nav />
          <SobreMi />
          <Social />
        </Route>
        <Route path="/">
          <Nav />
          <Slider />
          <Menu />
          <Home360 />
          <SobreMi />
          <Contacto />
          <Social />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
