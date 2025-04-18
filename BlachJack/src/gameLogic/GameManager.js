import CardManager from './CardsLogic.js';

export default GameManager;








class GameManager extends CardManager {
    constructor() {
        super();
        this.deck = null;

    }

    async newDeck(){
        this.deck = await this.createNewDecks()
    }

    async newGame(){

    }



}
