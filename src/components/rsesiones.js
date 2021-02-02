import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const routes = [
  {
    path: '/rsesiones',
    component: Rsesiones,
    routes: [
      {
        path: '/rsesiones/infantil',
        component: Infantil,
      },
      {
        path: '/rsesiones/boda',
        component: Boda,
      },
    ],
  },
];

export default function AllSesiones() {
  return (
    <Router>
      <div>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

function Rsesiones({routes}) {
  return (
    <div>
      <ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        <li>
          <Link to="/rsesiones/infantil">Infantil</Link>
        </li>
        <li>
          <Link to="/rsesiones/boda">boda</Link>
        </li>
      </ul>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}
function Infantil() {
  return <p>Sección infantil</p>;
}
function Boda() {
  return <p>Sección boda</p>;
}
