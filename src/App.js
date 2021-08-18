import logo from './logo.svg';
import './App.css';
import Header from'./components/Header';
import HeroSection from './components/HeroSection';
import Menu from './components/Menu';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GiftCards from './components/GiftCards';
import Contact from './components/Contact';
import Map from './components/Map';

function App() {
  return (
    <Router>
      <Header/>

      <Switch>
        <Route exact path="/">
          <HeroSection/>
          <Footer/>
        </Route>
        <Route path="/Menu">
          <Menu/>
        </Route>
        <Route path="/Gift">
          <GiftCards/>
        </Route>
        <Route path="/Contact">
          <Contact/>
        </Route>
        <Route path="/Locations">
          <Map/>
        </Route>
      </Switch>
      
    </Router>
    
  );
}

export default App;
