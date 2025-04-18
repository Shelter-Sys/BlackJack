<template>
  <div class="game-table">
    <div class="dealer-area">
      <h2>Croupier</h2>
      <div class="cards">
        <!-- Affichage des cartes du croupier -->
        <div v-for="card in dealerCards" :key="card" class="card">{{ card }}</div>
      </div>
      <p>Score: {{ dealerScore }}</p>
    </div>

    <div class="player-area">
      <h2>Joueur</h2>
      <div class="cards">
        <!-- Affichage des cartes du joueur -->
        <div v-for="card in playerCards" :key="card" class="card">{{ card }}</div>
      </div>
      <p>Score: {{ playerScore }}</p>
    </div>

    <div class="controls">
      <button @click="hit">Hit</button>
      <button @click="stand">Stand</button>
      <button @click="doubleDown">Double</button>
      <button @click="split">Split</button>
      <button @click="newHand">New Hand</button>
    </div>

    <div class="messages">
      <p>{{ message }}</p>
    </div>

    <div class="bet-area">
      <p>Solde: {{ balance }}</p>
      <input v-model="bet" type="number" placeholder="Entrez votre mise" />
      <button @click="placeBet">Placer la mise</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameTable',
  data() {
    return {
      dealerCards: [],
      playerCards: [],
      dealerScore: 0,
      playerScore: 0,
      message: '',
      balance: 1000,
      bet: 0
    };
  },
  methods: {
    hit() {
      // Logique pour tirer une carte
    },
    stand() {
      // Logique pour rester
    },
    doubleDown() {
      // Logique pour doubler la mise
    },
    split() {
      // Logique pour séparer les cartes
    },
    newHand() {
      // Logique pour démarrer une nouvelle partie
    },
    placeBet() {
      // Logique pour placer la mise
    }
  }
}
</script>

<style scoped>
.game-table {
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  margin: 20px;
}

.dealer-area, .player-area {
  margin-bottom: 20px;
}

.cards {
  display: flex;
  justify-content: center;
}

.card {
  border: 1px solid #000;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}

.controls, .bet-area {
  margin-top: 20px;
}

.messages {
  margin-top: 20px;
  color: red;
}
</style>
