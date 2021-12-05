import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//import Rol from './Roles/pages/Rol';
//import Login from './Login/Login';
import Home from './Users/pages/Home';
//import PrivateRoute from "./Shared/components/PrivateRoute";
//import PrivateRouteAdmin from "./Shared/components/PrivateRouteAdmin";

function App() {
  return (
    <Router>
      <Routes>
        {/*<PrivateRouteAdmin path="/rol" exact component={Rol}></PrivateRouteAdmin>*/}
        <Route exact path="/" element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
