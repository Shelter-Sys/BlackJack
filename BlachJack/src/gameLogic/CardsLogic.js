

export default CardManager;







class CardManager {
    constructor() {
        this.apiUrl = "https://deckofcardsapi.com/api/deck";
        this.deck_id = "";
        this.playerHand = {};
        this.dealerHand = {};
        this.nextCardId = 1;
        this.backOfCard = "https://deckofcardsapi.com/static/img/back.png"
    }

    async createNewDecks(){
        try{
            const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`)
            const data = await response.json()
            console.log(data)
            this.deck_id = data.deck_id;
            console.log(this.deck_id);
        }catch(error){
            console.log("An Error appear during data fetching",error)
        }
    }

    async drawCard(deck_id,nbCardToDraw = 1,handGoTo,Hide = false){
        console.log(`${this.apiUrl}/${deck_id}/draw/?count=${nbCardToDraw}`)
        try {
            const response = await fetch(`${this.apiUrl}/${deck_id}/draw/?count=${nbCardToDraw}`)
            const data = await response.json()
            const cards = data.cards
            console.log(data)
            for(card of cards){
                if(handGoTo === "playerHand"){
                    this.playerHand[this.nextCardId] = {value: card.value, suit: card.suit, image: card.image, hide: Hide}
                    this.nextCardId++
                    console.log(this.playerHand)
                }else if(handGoTo === "dealerHand"){
                    this.dealerHand[this.nextCardId] = {value: card.value, suit: card.suit, image: card.image, hide: Hide}
                    this.nextCardId++
                    console.log(this.dealerHand)
                }
            }

        }catch(error){
            console.log("An Error appear during the drawing card",error)
        }
    }


}



