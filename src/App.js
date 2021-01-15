import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from 'react-router-dom';
import Menu from './components/menu';
import Slider from './components/slider';
import Sesiones from './components/sesiones';
import Section360 from './components/360';
import Books from './components/books';
import Nav from './components/nav';
import Contacto from './components/contacto';
import SobreMi from './components/sobreMi';
import Social from './components/socialMedia';

function App(props) {

  return (
    <Router>
        <Nav />

        <Switch>
          <Route path="/sesiones">
            <Sesiones />
            <Social />
          </Route>
          <Route path="/books">
            <Books />
            <Social />
          </Route>
          <Route path="/360">
            <Section360 />
          </Route>
          <Route path="/contacto">
            <Contacto />
            <Social />
          </Route>
          <Route path="/sobre_mi">
            <SobreMi />
            <Social />
          </Route>
          <Route path="/">
            <Slider />
            <Menu />
            <Section360 />
            <SobreMi />
            <Contacto />
            <Social />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
