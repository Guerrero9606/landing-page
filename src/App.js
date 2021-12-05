import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import Register from './Sales/pages/Register';
import Sales from './Sales/pages/Sales';
import Products from "./productsManagement/pages/gestionProductos.jsx"
import Rol from './Roles/pages/Rol';
import PrivateLayout from './RegistroProductos/layouts/PrivateLayout';
import Productos from "./RegistroProductos/RegistroyEdicion";
import Login from './Login/Login';
import PrivateRoute from "./Shared/components/PrivateRoute";
import PrivateRouteAdmin from "./Shared/components/PrivateRouteAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <PrivateRouteAdmin path="/rol" exact component={Rol}></PrivateRouteAdmin>
        <Route exact path="/" element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
