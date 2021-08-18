import React, { useState } from 'react';
import './styles/Contact.css';
import { Dropdown } from 'react-bootstrap';
import Footer from './Footer';

const Contact = () => {
    const [show, setShow] = useState(false);

    return ( 
        <div id="main">
            <div id="contactMain">
                <h1>Contact Us</h1>
                <p>Thank You for reaching out! We look forward to getting back to you
                   . To help you direct you to the appropriate person, please select
                </p>

                <button id="toggle" onClick={() => setShow(!show)}>Select an option</button>
                {show ? 
                    (<div id="dropdown">
                        <p>Franchise</p>
                        <p>General Inquiry</p>
                        <p>Real Estate</p>
                    </div>) : ""
                }
                
                <p id="career">Intered in a career at Five Guys? Check out our Careers page.</p>

                <p id="feedback" >Customer Feedback Hotline (8AM-12AM CST) <br></br> <b>866-345-GUYS (4897)</b></p>

                <p id="info">Five Guys Enterprises, LLC 10718 Richmond Highway, Lorton, VA 22079 USA</p>
            </div>

            <Footer/>
        </div>
    );
}
 
export default Contact;