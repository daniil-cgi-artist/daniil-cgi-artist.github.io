import './App.css';
import { HashRouter, Route, Redirect} from "react-router-dom";

// pages:
import Toolbar from './components/Toolbar/Toolbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

function App() {

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div id="outer-container">
        <Toolbar id="page-wrap"/>
        <div className="App" id="page-wrap">
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Redirect from='/' to='/home'/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
