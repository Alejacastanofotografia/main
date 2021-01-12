import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from 'react-router-dom';
import Home from './components/home';
import Slider from './components/slider';
import Sesiones from './components/sesiones';
import Section360 from './components/360';
import Books from './components/books';
import Nav from './components/nav';
import Contacto from './components/contacto';
import SobreMi from './components/sobreMi';

let click = true;
function App(props) {

  return (
    <Router>
        <Nav />

        <Switch>
          <Route path="/sesiones">
            <Sesiones />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/360">
            <Section360 />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/sobre_mi">
            <SobreMi />
          </Route>
          <Route path="/">
            <Slider />
            <Home />
            <SobreMi />
            <Contacto />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
