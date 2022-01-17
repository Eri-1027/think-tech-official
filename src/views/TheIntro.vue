<script>
import { VueTyper } from 'vue-typer'
export default {
  components: {
    VueTyper
  },
  computed: {
    rwd () {
      return this.$vuetify.breakpoint.name
    }
  }
}
</script>
<template>
  <div
    ref="intro"
    class="views__theIntro"
  >
    <section class="hero">
      <div class="hero__body--left hero__body--top" />
      <div
        class="hero__body--border d-flex align-center"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <div class="hero__body--border__text d-flex align-center">
          <div class="textContent">
            <template v-if="rwd === 'xs'">
              <h3 class="deep--text">
                <vue-typer
                  :text="['智能旅店','無人旅店','自助入住','旅宿管理']"
                  erase-style="backspace"
                  :erase-delay="150"
                  :type-delay="150"
                />
              </h3>
              <h3 class="deep--text">
                你要的，你想的，在耀想
              </h3>
            </template>
            <template v-else>
              <h2 class="deep--text">
                <vue-typer
                  :text="['智能旅店','無人旅店','自助入住','旅宿管理']"
                  erase-style="backspace"
                  :erase-delay="150"
                  :type-delay="150"
                />
              </h2>
              <h2 class="deep--text">
                你要的，你想的，在耀想
              </h2>
            </template>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        class="hero__body--right hero__body--bottom"
      >
        <v-img
          src="~@/assets/img/home/girl.png"
          max-height="540"
          min-height="400"
        />
      </div>
    </section>

    <section class="hero">
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-hover v-slot:default="{ hover }">
            <div
              class="textOnImg__group"
              data-aos="fade-up"
            >
              <router-link to="product_pms">
                <v-img
                  src="~@/assets/img/home/section2_left.png"
                  aspect-ratio="1"
                  gradient="to bottom ,rgba(256,256,256,.7),rgba(200, 200, 200, 0)"
                />
              </router-link>
              <div
                class="textOnImg__text text-center"
                data-aos="flip-left"
                data-aos-delay="1000"
              >
                <template v-if="rwd === 'xs'">
                  <h3 class="secondary--text my-1">
                    一件可以融入每間旅店的裝置藝術
                  </h3>
                </template>
                <template v-else>
                  <h2 class="secondary--text my-5">
                    一件可以融入每間旅店的裝置藝術
                  </h2>
                </template>
                <p class="secondary--text my-3">
                  它是機台，卻跟你看過的機台截然不同，差別無需多言，只需感受。
                </p>
              </div>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="textOnImg__text--large d-flex justify-center transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text"
                  style="position:absolute;bottom:-10px"
                >
                  <div>
                    <router-link to="product_pms">
                      <span class="white--text">Think自助櫃檯</span>
                    </router-link>
                  </div>
                </div>
              </v-expand-transition>
            </div>
          </v-hover>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-hover v-slot:default="{ hover }">
            <div
              class="textOnImg__group"
              data-aos="fade-up"
            >
              <router-link to="product_pms">
                <v-img
                  src="~@/assets/img/home/section2_right.png"
                  aspect-ratio="1"
                  gradient="to bottom ,rgba(0,0,0,.5),rgba(200, 200, 200, 0)"
                />
              </router-link>
              <div
                class="textOnImg__text text-center"
                data-aos="flip-right"
                data-aos-delay="1000"
              >
                <template v-if="rwd === 'xs'">
                  <h3 class="white--text my-1">
                    這將會是你用過最好上手的PMS
                  </h3>
                </template>
                <template v-else>
                  <h2 class="white--text my-5">
                    這將會是你用過最好上手的PMS
                  </h2>
                </template>
                <p class="white--text my-3">
                  專為旅店設計，訂房入住到收款結帳一氣呵成。
                </p>
              </div>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="textOnImg__text--large d-flex justify-center transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text"
                  style="position:absolute;bottom:-10px"
                >
                  <div>
                    <span class="white--text">Think PMS</span>
                  </div>
                </div>
              </v-expand-transition>
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </section>

    <section class="hero">
      <div
        class="hero__body--left dark d-flex align-center justify-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="textbox">
          <template v-if="rwd === 'xs'">
            <h1 class="white--text px-4 pt-2">
              <span class="info--text">F</span>oreword
            </h1>
            <div class="info--divider px-4" />
          </template>
          <template v-else>
            <h1
              class="white--text"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <span class="info--text">F</span>oreword
            </h1>
            <div class="info--divider" />
          </template>

          <blockquote
            class="white--text mb-3"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            在這個無人化、自助化的浪潮下，我們始終相信總有一天旅館業可以達成「全自助」、「全無人」，而如何打造一款「零」轉換成本的自助Check In機是團隊所努力達成的目標，希望每個用上我們系統的旅館與旅客都能感受我們對產品的用心打磨。
          </blockquote>
        </div>
      </div>

      <v-img
        class="hero__body--right"
        data-aos="fade-up"
        data-aos-delay="300"
        src="~@/assets/img/home/foreword.png"
        max-height="540"
        min-height="400"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.views__theIntro {
  @media (max-width: 600px) {
    .hero {
      position: relative;
      //background: #000;
      .hero__body--top {
        //border: 1px solid firebrick;
        width: 100%;
        height: 110px;
      }
      .hero__body--bottom {
        width: 100%;
      }
      .hero__body--border {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 5%;

        width: 90%;
        height: 32%;

        border: 6px solid #d0d0d0;
      }
      .textContent {
        position: absolute;
        left: -6px;
        //border: 1px solid royalblue;

        background: #fff;
        h2 {
          margin: 0 auto;
        }
      }
      .textbox {
        blockquote {
          padding:2px 15px;
        }
      }
    }
    .info--divider {
      position: relative;

      width: 10%;
      height: 50px;
    }
    .info--divider::before {
      position: absolute;
      top: 50%;

      width: 100%;
      height: 1px;

      content: '';

      background: #6ddde1;
    }
    .info--divider::after {
      position: absolute;
      top: calc(50% - 1px);
      right: -50%;

      width: 3px;
      height: 3px;

      content: '';

      border-radius: 50%;
      background: #6ddde1;
    }
  }
  @media (min-width: 600px) {
    .hero {
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      max-width: 1306px;
      height: 653px;
      .textbox {
        width: 60%;
      }

      .hero__body--border {
        position: absolute;
        z-index: 1;
        top: 30%;
        left: 10%;

        width: 44%;
        height: 40%;

        border: 4px solid #d0d0d0;
      }
      .hero__body--border__text {
        position: absolute;
        left: -8px;

        height: 50%;

        background: #fff;
      }

      .hero__body--left {
        width: 37%;
        min-height: 540px;
        max-height: 540px;
      }
      .hero__body--right {
        //position: relative;
        width: 63%;
      }
      .textContent {
        h2 {
          margin-bottom: 15px;
        }
      }
    }
    .info--divider {
      position: relative;

      width: 10%;
      height: 50px;
    }
    .info--divider::before {
      position: absolute;
      top: 50%;

      width: 100%;
      height: 1px;

      content: '';

      background: #6ddde1;
    }
    .info--divider::after {
      position: absolute;
      top: calc(50% - 1px);
      right: 0;

      width: 3px;
      height: 3px;

      content: '';

      border-radius: 50%;
      background: #6ddde1;
    }
  }
  @media (max-width: 600px) and (max-width: 960px) {
  }
  @media (min-width: 960px) and (max-width: 1264px) {
  }
  @media (min-width: 1264px) and (max-width: 1904px) {
  }
  @media (min-width: 1904px) {
  }

  .textOnImg__group {
    position: relative;
    .textOnImg__text {
      position: absolute;
      top: 10px;

      width: 100%;
    }
    .textOnImg__text--large {
      font-size: 50px;
      font-weight: 800;

      width: 100%;

      color: #fff;
    }
  }
}

</style>
