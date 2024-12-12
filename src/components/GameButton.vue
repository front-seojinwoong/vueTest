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