import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch} from 'react-router-dom'; 
import Home from "../src/Componentes/Home"
import Menu from './Componentes/Menu';
import AboutMe from "./Componentes/AboutMe";
import Projects from "./Componentes/Projects";
import ContactMe from "./Componentes/ContactMe";
import Skills from "./Componentes/Skills";
import Education from './Componentes/Education';
import Experience from './Componentes/Experience';

function App() {
  return (
    <div className="App">
      <BrowserRouter>        
      <Menu />
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Skills" component={Skills} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Education" component={Education} />
          <Route exact path="/Experience" component={Experience} />
          <Route exact path="/ContactMe" component={ContactMe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
