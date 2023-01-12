import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Index from './screens/Index';
import Login from './screens/Login';
import Carrusel from './screens/Carruselnav';
import Upload from './screens/Upload';
import Home from './screens/Home';
import cammovil from './screens/cammovil';
import Exito from './screens/Exito';
import Fallo from './screens/Fallo';
function App() {
  return(
  <HashRouter>
    <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route path="/Exito" component={Exito} />
      <Route path="/Fallo" component={Fallo} />
      <Route path="/cammovil" component={cammovil} />
      <Route path="/Home" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Index" component={Index} />
      <Route path="/Carrusel" component={Carrusel} />
      <Route path="/Upload" component={Upload} />
    </HashRouter>
  );
}

export default App;

