import Header from "./Header"
import menuBG from '../images/menuBG.jpg'
import './styles/Menu.css';
import Footer from './Footer';

const Menu = () => {
    return ( 
        <div>
            <div id="imgC">
                    <img src={menuBG}></img>
                    <div id="imgT">
                        <h1>Menu</h1>
                        <p>Five Guys passion for food is shared with our fans,
                            which is why we never compromise, Freash ingrediants
                            hand prepared that satisfy your craving.
                        </p>
                        <a href="#menuC"class="arrow down"></a>
                    </div>
            </div>

            <div id="menu2">
                <p id="allergins">Ingrediants and Allergen Guide</p>

                <div id="menuC">
                        <div id="Dogs">
                            <ul>
                                <h2>Dogs</h2>
                                <li>Koshar Style Hotdog</li>
                                <li>Cheese Dog</li>
                                <li>Bacon Dog</li>
                                <li>Bacon Cheese Dog</li>
                            </ul>
                        </div>
                        <div id="Burgers">
                            <ul>
                            <h2>Burgers</h2>
                                <li>Hamburger </li>
                                <li>CheeseBurger</li>
                                <li>Bacon Burger</li>
                                <li>Bacon CheeseBurger</li>
                                <li>Little Hamburger </li>
                                <li>Little CheeseBurger</li>
                                <li>Bacon Bacon Burger</li>
                                <li>Bacon Bacon CheeseBurger</li>
                            </ul>
                        </div>
                        <div id="Sandwiches">
                            <ul>
                            <h2>Sandwiches</h2>
                                <li>Veggie Sandwiches</li>
                                <li>Cheese Veggie Sandwiches</li>
                                <li>Grilled Cheese</li>
                                <li>BLT</li>
                            </ul>
                        </div>
                    </div>

                    <div id="toppings">
                        <p>Choose as many of our free toppings.</p>
                        <ul>
                            <li>Mayo <span class="dot"></span> </li>
                            <li>Lettuce <span class="dot"></span> </li>
                            <li>Pickles <span class="dot"></span> </li>
                            <li>Tomatoes <span class="dot"></span> </li>
                            <li>Grilled Oinions </li>
                        </ul>
                        <ul>
                            <li>Grilled Mushrooms <span class="dot"></span> </li>
                            <li>Ketchup <span class="dot"></span></li>
                            <li>Mustard <span class="dot"></span></li>
                            <li>Relish <span class="dot"></span></li>
                            <li>Onions</li>
                        </ul>
                        <ul>
                            <li>Jalepeno Peppers <span class="dot"></span> </li>
                            <li>Green Peppers <span class="dot"></span></li>
                            <li>Bar-b-Que Sauce <span class="dot"></span></li>
                            <li>Hot Sauce <span class="dot"></span></li>
                            <li>A1 Sauce</li>
                        </ul>
                    </div>

                    <div id="fries">
                        <h1>Fries</h1>
                        <h3>Freash Cut potatoes cooked in pure, no cholestrol, 100% peanut oil.</h3>
                        <ul>
                            <li>Five Guys Style</li>
                            <li>Cajun Style</li>
                            <li>Poutine*</li>
                        </ul>
                    </div>

                    <div id="milkshakes">
                        <h1>Milkshakes</h1>
                        <h4>Handspun vanilla milkshakes with or without whipped cream. Choose as many of our mix-ins.</h4>
                        <p>Bacon <span class="dot"></span> Bananas <span class="dot"></span> 
                            Strawberries <span class="dot"></span> Chocolate <span class="dot"></span> 
                            MaltedMilk <span class="dot"></span> 
                        </p>
                        <p>Orea Cookie Pieces <span class="dot"></span> Peanut Butter <span class="dot"></span> 
                            Salted Caramel <span class="dot"></span> Vanilla <span class="dot"></span> 
                        </p>       
                    </div>

                    <div id="drinks">
                        <h1>Drinks</h1>
                        <h3>We proudly serve Coca-Cola products.</h3>
                    </div>
            </div>

        <div id="ourStory">
            <button>Our Story</button>
        </div>

        <Footer/>        
        </div> 
    );
}
 
export default Menu;