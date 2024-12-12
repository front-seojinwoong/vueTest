<template>
  <div class="cardDeck">
     <div>
      <!-- <li><button type="button" v-on:click="start">START!</button></li>
      <li><button type="button" v-on:click="start">NEXT</button></li>
      <li><button type="button" v-on:click="start">NEXT</button></li> -->
      <button v-show="show" type="button" v-on:click="start">{{ btnText[this.stage] }}</button>
    </div>
    <ul class="cardList">
      <li v-on:click="flip(f, index)" v-for="(f, index) in present" :key="index"
        :class="[
          { flip: clicked.indexOf(index) > -1 || shortTime },
          { active: correct.indexOf(f) > -1 }
        ]"
      >
        <div class="card">
          <div class="cardFront"></div>
          <div class="cardBack" :style="{ backgroundImage: 'url(/images/' + f + '.png)' }"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CardDeck',
  props: {
    msg: String
  },
  data() {
    return {
      stage: 0,
      card: [3, 6, 9],
      present: [],
      success: false,
      cardSet: [],
      clicked: [],
      correct: [],
      show: true,
      shortTime: false,
      btnText: ['START!', 'NEXT', 'NEXT']
    }
  },
  
  methods: {
    start() {
      const cardList = ['hat', 'socks', 'Mistletoe', 'bell', 'present', 'calender', 'candle', 'star', 'snowman'];
      const stageCard = this.card;
      const stage = this.stage;

      const startNum = 0;
      const endNum = stageCard[stage];

      let cardNum = cardList.slice(startNum, endNum);
      let cardPlus = [...cardNum, ...cardNum];

      this.present = [];
      this.correct = [];
      this.shuffle(cardPlus);
      this.show = false;
      this.firstShow();
    },
    firstShow() {
      setTimeout(() => this.shortTime = true, 1000);
      this.firstHide();
    },
    firstHide() {
      setTimeout(() => this.shortTime = false, 4000);
    },
    shuffle(cardArray) {
      this.present = [];
      while (cardArray.length > 0) {
        const pickOne = Math.floor(Math.random() * cardArray.length);
        const mixed = cardArray.splice(pickOne, 1)[0];
        this.present.push(mixed);
      }
    },
    flip(pickCard, index) {
      const cardIndex = index;
      this.clicked.push(cardIndex);
      this.cardSet.push(pickCard); 

      if (this.clicked.length >= 2) {
        setTimeout(() => this.checkMatch(), 600)
      }
    },
    checkMatch() {
      if (this.cardSet[0] == this.cardSet[1]) {
        this.correct.push(this.cardSet[0]);
        this.correct.push(this.cardSet[1]);

        if (this.present.length === this.correct.length) {
          switch (this.stage) {
            case 0:
              this.stage += 1;
              this.show = true;
              console.log(this.stage);
              break;
            case 1:
              this.stage += 1;
              this.show = true;
              console.log(this.stage)
              break;
            case 2:
              this.stage += 1;
              this.show = true;
              // statement3;
          }
        }
      } 

      this.clicked = [];
      this.cardSet = [];
    }
  }
}


</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cardList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.cardList > li {
   width: 120px;
   height: 180px;
   overflow: hidden;
   position: relative;
}
.card {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
  cursor: pointer;
}
.flip .card,
.active .card {
    transform: rotateY(180deg);
}
/* .card:hover {
    transform: rotateY(180deg);
} */
.card > div {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: 100%;
  position: absolute;
  overflow: hidden;
  width: 100%;
  border-radius: 8px;
}
.cardFront {
  background: #fa5a5a url(/public/images/cardBack3.jpg) no-repeat center center/cover;
  height: 100%;
}
.cardBack {
  background: #016839;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  transform: rotateY(180deg);
  /* transform: rotateY(180deg); */
}
/* .cardBack:hover {
  transform: rotateY(180deg);
} */
</style>
