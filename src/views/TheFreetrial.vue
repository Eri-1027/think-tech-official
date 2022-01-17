<template>
  <div class="views__theFreetrial bg-default">
    <v-container>
      <v-row>
        <transition
          leave-active-class="animated fadeOutLeft"
          @after-leave="afterLeave"
        >
          <v-col
            v-if="isShow"
            cols="6"
          >
            <div
              class="textContent d-flex align-center justify-center"
            >
              <h2>小試身手即可駕輕就熟</h2>
            </div>
          </v-col>
        </transition>
        <transition leave-active-class="animated fadeOutRight">
          <v-col
            v-if="isShow"
            cols="6"
          >
            <div
              class="form__group"
            >
              <div class="form__header">
                <h1>試用申請</h1>
              </div>
              <div class="text-center">
                <ValidationObserver
                  ref="observer"
                >
                  <form>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="飯店名稱"
                      rules="required|max:40"
                    >
                      <v-text-field
                        v-model="tempRegistration.hotelName"
                        dense
                        class="py-2"
                        :error-messages="errors"
                        label="飯店名稱"
                        required
                        @keydown.enter="submitHandler"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="公司名稱"
                      rules="required|max:40"
                    >
                      <v-text-field
                        v-model="tempRegistration.companyName"
                        dense
                        class="py-2"
                        :error-messages="errors"
                        label="公司名稱"
                        required
                        @keydown.enter="submitHandler"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="公司統編"
                      rules="required|max:8"
                    >
                      <v-text-field
                        v-model="tempRegistration.taxNumber"
                        dense
                        :error-messages="errors"
                        label="公司統編"
                        class="mb-5 py-2"
                        required
                        @keydown.enter="submitHandler"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="聯絡人姓名"
                      rules="required|max:40"
                    >
                      <v-text-field
                        v-model="tempRegistration.name"
                        class="mt-5 py-2"
                        dense
                        :error-messages="errors"
                        label="聯絡人姓名"
                        required
                        @keydown.enter="submitHandler"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="電話"
                      rules="required|max:15"
                    >
                      <v-text-field
                        v-model="tempRegistration.phone"
                        dense
                        :error-messages="errors"
                        label="電話"
                        required
                        @keydown.enter="submitHandler"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="email"
                      rules="email|max:50"
                    >
                      <v-text-field
                        v-model="tempRegistration.email"
                        :error-messages="errors"
                        class="py-2"
                        label="email"
                        required
                        dense
                        @keydown.enter="submitHandler"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="密碼"
                      rules="required|password:@確認密碼"
                    >
                      <v-text-field
                        v-model="tempRegistration.password"
                        :error-messages="errors"
                        :append-icon="isEyeOpen ? 'mdi-eye' : 'mdi-eye-off'"
                        label="建立密碼"
                        required
                        class="py-2"
                        dense
                        :type="isEyeOpen ? 'text' : 'password'"
                        @keydown.enter="submitHandler"
                        @click:append="isEyeOpen = !isEyeOpen"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="確認密碼"
                      rules="required|max:20"
                    >
                      <v-text-field
                        v-model="tempRegistration.rePassword"
                        :type="isEyeOpen ? 'text' : 'password'"
                        :append-icon="isEyeOpen ? 'mdi-eye' : 'mdi-eye-off'"
                        :error-messages="errors"
                        class="py-2"
                        dense
                        label="確認密碼"
                        vid="confirm"
                        required
                        @keydown.enter="submitHandler"
                        @click:append="isEyeOpen = !isEyeOpen"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="checkbox"
                      rules="required"
                    >
                      <v-checkbox
                        v-model="isAllRead"
                        type="checkbox"
                        required
                        :error-messages="errors"
                      >
                        <template v-slot:label>
                          <div>
                            我閱讀並同意
                            <a
                              href="#"
                              @click.stop="newPageHandler('term')"
                            >服務條款</a>
                            和<a
                              href="#"
                              @click.stop="newPageHandler('policy')"
                            >
                              隱私權政策說明
                            </a>
                          </div>
                        </template>
                      </v-checkbox>
                    </ValidationProvider>
                    <!-- <div class="text-left mb-5">
                    <span
                      v-show="isAllRead === false"
                      class="isReadError ml-1"
                    >請先閱讀服務條款和隱私權政策說明</span>
                  </div> -->
                    <v-btn
                      class="mt-5"
                      rounded
                      color="primary"
                      depressed
                      x-large
                      style="width:240px;height:40px"
                      @click="submitHandler"
                    >
                      <h3 class="white--text">
                        馬上申請
                      </h3>
                    </v-btn>
                  </form>
                </ValidationObserver>
              </div>
            </div>
          </v-col>
        </transition>
      </v-row>
    </v-container>
    <t-dialog />
  </div>
</template>

<script>
const TDialog = () => import('../components/TDialog')
export default {
  components: {
    TDialog
  },
  data () {
    return {
      tempRegistration: {
        hotelName: '',
        companyName: '',
        taxNumber: '',
        name: '',
        phone: '',
        email: '',
        password: '',
        rePassword: ''
      },
      isEyeOpen: false,
      isAllRead: null,
      isShow: true
    }
  },
  methods: {
    afterLeave (el) {
      console.log(el)
      this.$router.push('/success')
    },
    async submitHandler () {
      const valid = await this.$refs.observer.validate()
      console.log(this.tempRegistration)
      if (!valid) return
      if (this.isAllRead) {
        fetch('https://testing.think-x-tech.com/hotelManagementSystem/trial.php', {
          body: JSON.stringify(this.tempRegistration),
          headers: { 'content-type': 'application/json' },
          method: 'POST',
          mode: 'cors'
        }).then(response => {
          console.log(response)
          return response.json()
        }).then((jsonData) => {
          if (jsonData.insertTrailMessage) {
            console.log(jsonData)
          }
        }).then(success => {
          const complete = this.$_dialogHandler({ message: '申請成功', type: 'success' })
          return complete
        }).then(show => {
          console.log(show)
          this.isShow = false
        }).catch(err => {
          console.log(err)
        })
      }
    },
    newPageHandler (page) {
      console.log(page)
      if (page === 'term') {
        const routeData = this.$router.resolve({ path: '/privacy_term' })
        window.open(routeData.href, '_blank')
      }
      if (page === 'policy') {
        const routeData = this.$router.resolve({ path: '/privacy_policy' })
        window.open(routeData.href, '_blank')
      }
    }
  }
}
</script>

<style lang="scss">
.views__theFreetrial {
  height: 100%;
  .textContent {
    height: 100%;
  }
  .form__group {
    padding: 40px;

    border-left: 2px solid #d0d0d0;
  }
}

</style>
