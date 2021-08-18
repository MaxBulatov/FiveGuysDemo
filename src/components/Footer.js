import carboard from '../images/carboard.jpg';
import './styles/Footer.css';
import SocialMediaButtons from 'react-social-media-buttons';

const Footer = () => {
    const links = ['https://www.instagram.com/fiveguysca/', 'https://twitter.com/FiveGuysCanada', 'https://www.snapchat.com/add/fiveguys'];
 
    const buttonStyle = {
        // backgroundColor: 'black',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        marginRight: '8px'
    };
 
    const iconStyle = { color: '#ffffff' };

    return ( 
        <div >
            <nav style={{backgroundImage: `url(${carboard})`}} id="footerMain">
                <ul id="links">
                        <li>
                            <a href="#"><b>Careers</b></a>
                        </li>
                        <li>
                            <a href="#">Gift Cards</a>
                            <a href="#" style={{fontSize: 15}}>Balance Inquiry</a>       
                        </li>
                        <li>
                            <a href="#">Fans</a>
                            <a href="#" style={{fontSize: 15}}>The Five Guys Story</a>
                        </li>
                        <li>
                            <a href="#">Follow Us</a>
                            <SocialMediaButtons links={links} buttonStyle={buttonStyle} iconStyle={iconStyle} />
                        </li>
                </ul>

                <ul id="secondarylinks">
                        <li>
                            <a href="#">2021 Five Guys Enterprises,LLC</a>
                        </li>
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                </ul>
            </nav>
        </div> 
    );
}
 
export default Footer;