import GameManager from './GameManager.js';






class GameLogic extends GameManager {
    constructor() {
        super();
        this.gameHand = {};
        this.gameHandTurnId = 1
        this.gameHandHistory = {};
        this.gameHistoryId = 1;
        this.betValue = null;
    }

    async newHand(){
        if(this.dealerHand.length || this.playerHand.length){
            this.gameHandHistory[this.gameHistoryId] = {gameHandHistory: this.gameHand };
            this.gameHistoryId++

            this.gameHand = {}
            this.gameHandTurnId++

            this.playerHand = {};
            this.dealerHand = {};
            this.nextCardId = 1;

            this.playerScore = 0;
            this.dealerScore = 0;
        }

        await this.drawCard(this.deck_id,2,'dealerHand',true);
        await this.drawCard(this.deck_id,2,'playerHand',false);
        this.dealerHand[1].hide = false;
        this.gameHand[this.gameHandTurnId] = {dealerHand: this.dealerHand, playerHand: this.playerHand, betValue: this.betValue};
        this.gameHandTurnId++
    }

    async placeBet(betValue){
        this.betValue = betValue
    }

    async hit(){
        await this.drawCard(this.deck_id,1,'playerHand',false);
        this.gameHand[this.gameHandTurnId] = {dealerHand: this.dealerHand, playerHand: this.playerHand, betValue: this.betValue};
        this.gameHandTurnId++
    }

    async stand(){
        await this.drawCard(this.deck_id,1,'dealerHand',false);
        this.gameHand[this.gameHandTurnId] = {dealerHand: this.dealerHand, playerHand: this.playerHand, betValue: this.betValue};
        this.gameHandTurnId++


    }

    handValue(hand){
        const  valueMap = {"Ace":[1,11],"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"JACK":10,"QUEEN":10,"KING":10};
        let valueOfTheHand = 0
        console.log(hand)
        for(const card in hand){
            if(hand[card].value === "Ace"){
                const valueAceChoose= prompt("Tu a tiré in As choisie sa valeur 1 ou 11  (entre la valeur desiré) ")
                if(valueAceChoose === "1"){
                    valueOfTheHand +=  1
                }else{
                    valueOfTheHand +=  11
                }

                // insert the needed (front) logic
            }else {
                valueOfTheHand +=  valueMap[hand[card].value]
            }
        }
        return valueOfTheHand;

    }


}


export default GameLogic;



