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
          <div class="cardBack">
            <img class="cardImg" :src="require('@/assets/images/' + f + '.png')" />
          </div>
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