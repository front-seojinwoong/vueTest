<template>
  <div class="hello">
     <div>
      <button type="button" v-on:click="start">START!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameButton',
  props: {
    msg: String
  },
  data() {
    return {
      stage: 1,
      card: [2, 4, 10],
    }
  },
   
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
/* .cardList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.cardList > li {
   border: 1px solid #989fb0;
   border-radius: 5px;
   width: 120px;
   height: 180px;
   overflow: hidden;
}
.cardFront {
  background: #fff;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.cardBack {
   background: navy;
   height: 100%;
} */
</style>
