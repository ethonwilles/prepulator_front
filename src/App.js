import {BrowserRouter as BR, Switch, Route} from "react-router-dom"
import NavBar from "./components/navbar";
import Food from "./components/navbar-components/food";
import Home from "./components/navbar-components/home"
import Power from "./components/navbar-components/power";
import SelfDef from "./components/navbar-components/selfdef";
import Medical from "./components/navbar-components/medical";
import "./styles/main.scss";
function App() {
  return (
    <div className="App">
      <BR>
        <NavBar />


      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/food" component={Food}/>
        <Route path="/self-defense" component={SelfDef}/>
        <Route path="/power" component={Power}/>
        <Route path='/medical' component={Medical}/>
      </Switch>
      </BR>
      
    </div>
  );
}

export default App;
