import React from 'react';
import MainContainer from './containers/MainContainer'
import Navbar from './components/Navbar';
// import Contacto from './containers/Contacto';
// import Nosotros from './containers/Nosotros';
 import CreatePlacesContainer from './containers/CreatePlacesContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Crear from './containers/Crear';
//import Contacto from '/Containers/Contacto';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch> 
      <Route exact path = "/" component={MainContainer}></Route>
        {/* <Route exact path = "/contacto" component={Contacto}></Route>
        <Route exact path = "/nosotros" component={Nosotros}></Route>
        <Route exact path = "/crear" component={CreateTaskContainer}></Route> */}
    </Switch>  
    </BrowserRouter>
    </div>
  );
}

export default App; 
