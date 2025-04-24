import CardManager from "./src/gameLogic/CardsLogic.js";
import GameLogic from "./src/gameLogic/GameLogic.js";


let apiUrl = "https://deckofcardsapi.com/api/deck";
let deck_id = "m6r1sntlan21";
let playerHand = {};
let dealerHand = {};
let nextPlayerCardId = 1;
let nextDealerCardId = 1;
let backOfCard = `https://deckofcardsapi.com/static/img/back.png`

const cardManager = new CardManager();
cardManager.createNewDecks().then(() =>{
        cardManager.drawCard(cardManager.deck_id,2,"playerHand",false).then(() => {
                const gameLogic = new GameLogic();
                console.log(gameLogic.handValue(cardManager.playerHand));
            }
        )

    }
    )


