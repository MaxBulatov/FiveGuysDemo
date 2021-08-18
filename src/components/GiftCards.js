import './styles/GiftCards.css';
import card from '../images/card.png';

const GiftCards = () => {
    return ( 
        <div>
            <div id="giftMain">
                <div id="images">
                    <p>Check your gift card balance</p>
                    <img src={card}></img>
                </div>
                <div id="form">
                    <form>
                        <label>To check the balance of your Gift Card, please enter the gift card
                                number found on the back of your Gift Card or eGift Card.
                        </label>
                        <input type="text" id="numberG" name="numberG"></input>

                        <label>Pin#</label>
                        <input type="text" id="numberG" name="numberG"></input>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default GiftCards;