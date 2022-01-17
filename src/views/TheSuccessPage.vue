<script>
export default {
  data () {
    return {
      isTextShow: false
    }
  },
  created () {
    this.isTextShow = true
  },
  methods: {
    beforeEnter (el) {
      console.log(el)
    },
    enter (el, done) {
      console.log(el)
      done()
    }
  }
}
</script>
<template>
  <div class="views__theSuccessPage bg-default">
    <v-container
      fill-height
      fluid
      class="d-flex flex-column"
    >
      <div>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <h1
            v-if="isTextShow"
            class="textSuccess__title animate__animated animate__bounce text-center"
          >
            大功告成!
          </h1>
        </transition>
      </div>

      <div class="mt-auto mb-5">
        <h3 class="textSuccess__subTitle">
          感謝您的支持
        </h3>
        <h3 class="my-5">
          點擊右上方登入按鈕，即可登入試用，如有使用上的問題，可撥打(02)-2873-6882聯繫客服。
        </h3>
      </div>
      <div>
        <v-btn
          to="/"
          rounded
          color="primary"
          depressed
          class="my-5"
          style="min-width:150px;"
        >
          回首頁
        </v-btn>
      </div>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.views__theSuccessPage {
  height: 100%;
  .textSuccess__title {
    letter-spacing: 40px;
  }
  .textSuccess__subTitle {
    letter-spacing: 25px;
  }
}

</style>
