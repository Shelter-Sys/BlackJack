import CardManager from './CardsLogic.js';










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
export default GameManager;