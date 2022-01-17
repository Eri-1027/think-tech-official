<script>
import TMenu from '../components/TMenu'
export default {
  components: {
    TMenu
  },
  data () {
    return {
      drawer: false,
      offsetTop: 0,
      address: '台北市士林區天母東路69巷1-1號7樓',
      menuProductsIntroItems: [
        {
          title: 'Think PMS',
          link: '/product_pms'
        },
        {
          title: 'Think 自助櫃檯',
          link: '/product_autocounter'
        }
      ],
      menuPriceItems: [
        {
          title: 'Think PMS',
          link: '/price_pms'
        },
        {
          title: 'Think 自助櫃檯',
          link: '/price_autocounter'
        }
      ]
    }
  },
  computed: {
    rwd () {
      return this.$vuetify.breakpoint.name
    }
  },
  created () {
    document.addEventListener('aos:in', ({ detail }) => {
      //
    })
  },
  methods: {
    setNavigation (show) {
      console.log(show)
      if (this.rwd === 'xs') {
        if (!show) {
          this.$refs.drawer.style.opacity = '0'
          this.$refs.drawer.style.width = '0'
          this.drawer = false
        }
      }
    },
    navigation (e) {
      if (this.rwd === 'xs') {
        console.log(this.drawer)
        if (this.drawer) {
          this.$refs.drawer.style.opacity = '0'
          this.$refs.drawer.style.width = '0'
          this.drawer = false
        } else {
          this.$refs.drawer.style.opacity = '1'
          this.$refs.drawer.style.width = '300px'
          this.drawer = true
        }
      }
    },
    capture () {},
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
      console.log(this.offsetTop)
    },
    loginHandler () {
      window.location.href = 'https://testing.think-x-tech.com'
    }
  }
}
</script>

<template>
  <div
    class="views__theHome"
    @click="navigation($event)"
  >
    <v-app-bar
      v-show="rwd === 'xs'"
      flat
      fixed
    >
      <v-app-bar-nav-icon @click.stop="navigation($event)" />
      <v-list-item
        class="pl-1 logo__img"
        @click="setNavigation(false)"
      >
        <router-link to="/">
          <v-img
            src="~@/assets/img/navbar-brand.png"
            max-height="60"
            max-width="130"
          />
        </router-link>
      </v-list-item>
    </v-app-bar>
    <div
      ref="drawer"
      class="sidenav"
      @click.stop="capture"
    >
      <v-list class="bd">
        <v-list-item
          class="pl-1"
          @click="setNavigation(false)"
        >
          <router-link to="/">
            <v-img
              src="~@/assets/img/navbar-brand.png"
              max-height="60"
              max-width="130"
            />
          </router-link>
        </v-list-item>
        <v-list-group @click.stop="capture">
          <template v-slot:activator>
            <v-list-item-title>產品介紹</v-list-item-title>
          </template>
          <v-list-item
            v-for="(item, i) in menuProductsIntroItems"
            :key="i"
            :to="item.link"
            @click="setNavigation(false)"
          >
            <v-list-item-title

              v-text="item.title"
            />
          </v-list-item>
        </v-list-group>

        <v-list-group @click.stop="capture">
          <template v-slot:activator>
            <v-list-item-title>價格方案</v-list-item-title>
          </template>
          <v-list-item
            v-for="(item, i) in menuPriceItems"
            :key="i"
            :to="item.link"
            @click="setNavigation(false)"
          >
            <v-list-item-title
              v-text="item.title"
            />
          </v-list-item>
        </v-list-group>

        <v-list-item
          link
          to="warranty"
          @click="setNavigation(false)"
          v-text="'保固服務'"
        />

        <v-list-item
          link
          to="about"
          @click="setNavigation(false)"
          v-text="'關於我們'"
        />

        <v-list-item
          link
          light
          @click="loginHandler"
        >
          <span class="primary--text">登入</span>
        </v-list-item>

        <v-list-item
          link
          light
          to="freetrial"
          color="primary"
          @click="loginHandler"
        >
          <span class="primary--text">30天免費試用</span>
        </v-list-item>
      </v-list>
    </div>

    <v-app-bar
      v-show="rwd !== 'xs'"
      app
      flat
      fixed
      color="#fff"
    >
      <template slot:extension>
        <v-container
          class="barContainer d-flex align-center"
        >
          <router-link to="/">
            <v-img
              src="~@/assets/img/navbar-brand.png"
              max-height="80"
              max-width="140"
            />
          </router-link>

          <v-spacer />
          <t-menu
            :list-items="menuProductsIntroItems"
            title="產品介紹"
          />
          <t-menu
            :list-items="menuPriceItems"
            title="價格方案"
            to="privacy_term"
          />
          <v-btn
            text
            to="/warranty"
            color="secondary"
            class="mx-1"
            rounded
          >
            保固服務
          </v-btn>
          <v-btn
            rounded
            text
            to="about"
            class="mx-1"
            color="secondary"
          >
            關於我們
          </v-btn>

          <v-btn
            rounded
            color="primary"
            outlined
            class="ml-1 mrn-5 -3 borderCustom"
            @click="loginHandler"
          >
            登入
          </v-btn>
          <v-btn
            rounded
            color="primary"
            depressed
            to="/freetrial"
            class="mr-1"
          >
            30天免費試用
          </v-btn>
        </v-container>
      </template>
    </v-app-bar>
    <v-main
      class="main d-flex justify-center"
    >
      <v-container
        class="barContainer"
        fill-height
      >
        <v-row class="tRow">
          <v-col
            cols="12"
          >
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer inset>
      <v-card
        class="before-footer"
        flat
        width="100%"
        color="#f5f5f5"
      >
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              sm="4"
            >
              <div
                class="d-flex align-center"
                :class="{
                  'justify-start':rwd === 'xs',
                  'justify-center':rwd !== 'xs'
                }"
              >
                <div class="px-3">
                  <v-img
                    src="~@/assets/img/footerIcons/footer_icon1.png"
                    max-height="30"
                    max-width="30"
                    contain
                  />
                </div>
                <div>
                  (02)2873-6882
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="4"
            >
              <div
                class="d-flex align-center"
                :class="{
                  'justify-start':rwd === 'xs',
                  'justify-center':rwd !== 'xs'
                }"
              >
                <div class="px-3">
                  <v-img
                    src="~@/assets/img/footerIcons/footer_icon2.png"
                    max-height="30"
                    max-width="30"
                    contain
                  />
                </div>
                <div>
                  <a
                    class="text--secondary"
                    href="#"
                  >service@think-x-tech.com</a>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="4"
            >
              <div
                class="d-flex align-center"
                :class="{
                  'justify-start':rwd === 'xs',
                  'justify-center':rwd !== 'xs'
                }"
              >
                <div class="px-3">
                  <v-img
                    src="~@/assets/img/footerIcons/footer_icon3.png"
                    max-height="30"
                    max-width="30"
                    contain
                  />
                </div>
                <div>
                  <a
                    class="text--secondary"
                    :href="`http://maps.google.com/?q=${address}`"
                  >台北市士林區天母東路69巷1-1號7樓</a>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider />
        <v-card-text class="text-center">
          Think x Technology.,Ltd 2018 © All Rights Reserved.
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<style lang="scss" scoped>
.views__theHome {
  height: 100%;
  .logo__img {
    position: absolute;
    left:calc(50% - 76px);
  }
  .barContainer {
    max-width: 1280px; // 這個不能寫死，跟響應式有關
    .tRow {
      height: 100%;
    }
  }
  .tContainer::v-deep {
    max-width: 1000px;

    text-align: center;
  }
  .mrn-5 {
    margin-right: -15px;
  }
  .borderCustom {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .main {
    height: calc(100% - 153px);
  }
  .sidenav {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;

    overflow-x: hidden;

    width: 0;
    height: 100%;

    transition: .3s;

    background-color: #FFF;
  }
}

</style>
