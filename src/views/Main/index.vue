<template>
  <div class="gameBoxIn">
    <div class="ornament">
      <img class="bell" src="@/assets/images/bell.png" alt="">
      <img class="present" src="@/assets/images/present.png" alt="">
      <img class="snowman" src="@/assets/images/snowman.png" alt="">
      <RouterLink to="/cardDeck">
        <button class="bubble">
            <p><span>Where is</span><br/>My ornament?</p>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartView',
  props: {
    msg: String
  },
  // 변수 선언
  data() {
    return {
    }
  },
  // 데이터 변경 감지
  watch: {
  },
  // created 시 실행할 함수
  created() {
    console.log("created")
  },
  // mounted 시 실행할 함수
  mounted() {
    console.log("mounted")
  }
}
</script>