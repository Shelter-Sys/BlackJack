import CardManager from "./src/gameLogic/CardsLogic.js";
import GameLogic from "./src/gameLogic/GameLogic.js";


const cardManager = new CardManager();
cardManager.createNewDecks().then(() =>{
        cardManager.drawCard(cardManager.deck_id,2,"playerHand",false).then(() => {
                const gameLogic = new GameLogic();
                console.log(gameLogic.handValue(cardManager.playerHand));
            }
        )

    }
    )


