import burgerMain from '../images/burgerMain.jpg';
import fiveGuys from '../images/5guys.png';
import gMap from '../images/mapG.jpg';
import './styles/HeroSection.css';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';

const HeroSection = () => {
    return ( 
        <div>
            <div id="heroMain">
                <div id="imgContainer">
                    <img src={burgerMain}></img>
                    <div id="imgText">
                        <h2>Handcrafted</h2>
                        <h1>Burgers and Fries</h1>
                        <h2>Since 1986</h2>
                        <button>Find Location</button>
                    </div>
                </div>
                <div id="leftSide">
                    <img id="guysImg" src={fiveGuys}></img>
                    <img id="gMap" src={gMap}></img>
                        
                    
                </div>                     
            </div>
        </div> 
    );
}
 
export default HeroSection;