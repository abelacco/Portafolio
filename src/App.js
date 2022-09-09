import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch} from 'react-router-dom'; 
import Home from "../src/Componentes/Home"
import Menu from './Componentes/Menu';
import AboutMe from "./Componentes/AboutMe";
import Projects from "./Componentes/Projects";
import ContactMe from "./Componentes/ContactMe";
import Resume from "./Componentes/Resume";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AboutMe" component={AboutMe} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/ContactMe" component={ContactMe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
