<template>
  <div class="gameBox">
    <RouterView>
    <!-- <CardDeck mag="card deck" /> -->
    <!-- <div class="gameBox">
      <div class="gameBoxIn">
        <div class="ornament">
          <img class="bell" src="/images/bell.png" alt="">
          <img class="present" src="/images/present.png" alt="">
          <img class="snowman" src="/images/snowman.png" alt="">
          <router-link to="/cardDeck">
            <button class="bubble">
                <p><span>Where is</span><br/>My ornament?</p>
            </button>
          </router-link>
        </div>
      </div>
    </div> -->
  </RouterView>
  </div>
</template>

<script>

// import CardDeck from './components/CardDeck.vue';
// import StartView from './components/StartView.vue';

export default {
  name: 'App',
  components: {
    // CardDeck,
    // StartView,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap');
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cardDeck {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.gameBox {
  position: relative;
  margin: 0 auto;
  width: 80%;
  height: 80%;
  border-radius: 20px;
  overflow: hidden;
}
.gameBoxIn {
  width: 100%;
  height: 100%;
  background: url(/public/images/gameBg.jpg) no-repeat left center/cover;
  animation: close 1s linear 6.5s forwards;
}
.ornament {
  position: absolute;
  left: 3%;
  width: 100%;
  max-width: 600px;
  height: 100vh;
}
.ornament img {
  position: absolute;
  width: 30%;
  max-width: 300px;
}
.ornament .bell {
  left: 10%;
  top: 10%;
  animation: hide 1s linear 3s forwards;
}
.ornament .snowman {
  left: 65%;
  top: 30%;
  animation: hide 1s linear 4s forwards;
}
.ornament .present {
  left: 30%;
  top: 40%;
  animation: hide 1s linear 5s forwards;
}
.bubble {
  font-family: "Mountains of Christmas", serif;
  font-weight: 700;
  font-style: normal;
  width: 600px;
  height: 300px;
  background: url(/public/images/bubble.png) no-repeat center center/contain;
  position: absolute;
  right: -20%;
  top: 40%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: bubbleShow 1s ease-in-out 7.5s forwards;
}
.bubble > p {
  font-size: 70px;
  line-height: 62px;
  color: #fd654e;
}
.bubble > p > span {
  color: #078f71;
}
@keyframes hide {
  0% {opacity: 1;}
  100% {opacity: 0;}
}
@keyframes close {
  0% {transform: translate(0, 0) scale(1);}
  100% {transform: translate(15%, 0) scale(1.35)}
}
@keyframes bubbleShow {
  0% {transform: translate(0, 0) scale(0); opacity: 0;}
  100% {transform: translate(90%, -20%) scale(1); opacity: 1;}
}
</style>
