<template>
  <q-card flat bordered @click="dialog = true" style="background-color: #008080; border-radius: 30px" class="text-right">
    <q-card-section class="text-center">
      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M50.4167 10.6944C49.2011 10.6944 48.0353 11.1773 47.1758 12.0369C46.3162 12.8964 45.8333 14.0622 45.8333 15.2778V18.3333H55V15.2778C55 14.0622 54.5171 12.8964 53.6576 12.0369C52.798 11.1773 51.6322 10.6944 50.4167 10.6944ZM55 21.3889H45.8333V46.5972L50.4167 53.4722L55 46.5972V21.3889ZM0 4.58333V50.4167C0 51.6322 0.482886 52.798 1.34243 53.6576C2.20197 54.5171 3.36776 55 4.58333 55H38.1944C39.41 55 40.5758 54.5171 41.4353 53.6576C42.2949 52.798 42.7778 51.6322 42.7778 50.4167V4.58333C42.7778 3.36776 42.2949 2.20197 41.4353 1.34243C40.5758 0.482886 39.41 0 38.1944 0H4.58333C3.36776 0 2.20197 0.482886 1.34243 1.34243C0.482886 2.20197 0 3.36776 0 4.58333ZM21.3889 13.75C21.3889 13.3448 21.5498 12.9562 21.8364 12.6697C22.1229 12.3832 22.5115 12.2222 22.9167 12.2222H35.1389C35.5441 12.2222 35.9327 12.3832 36.2192 12.6697C36.5057 12.9562 36.6667 13.3448 36.6667 13.75C36.6667 14.1552 36.5057 14.5438 36.2192 14.8303C35.9327 15.1168 35.5441 15.2778 35.1389 15.2778H22.9167C22.5115 15.2778 22.1229 15.1168 21.8364 14.8303C21.5498 14.5438 21.3889 14.1552 21.3889 13.75ZM22.9167 18.3333C22.5115 18.3333 22.1229 18.4943 21.8364 18.7808C21.5498 19.0673 21.3889 19.4559 21.3889 19.8611C21.3889 20.2663 21.5498 20.6549 21.8364 20.9414C22.1229 21.2279 22.5115 21.3889 22.9167 21.3889H35.1389C35.5441 21.3889 35.9327 21.2279 36.2192 20.9414C36.5057 20.6549 36.6667 20.2663 36.6667 19.8611C36.6667 19.4559 36.5057 19.0673 36.2192 18.7808C35.9327 18.4943 35.5441 18.3333 35.1389 18.3333H22.9167ZM21.3889 33.6111C21.3889 33.2059 21.5498 32.8173 21.8364 32.5308C22.1229 32.2443 22.5115 32.0833 22.9167 32.0833H35.1389C35.5441 32.0833 35.9327 32.2443 36.2192 32.5308C36.5057 32.8173 36.6667 33.2059 36.6667 33.6111C36.6667 34.0163 36.5057 34.4049 36.2192 34.6914C35.9327 34.9779 35.5441 35.1389 35.1389 35.1389H22.9167C22.5115 35.1389 22.1229 34.9779 21.8364 34.6914C21.5498 34.4049 21.3889 34.0163 21.3889 33.6111ZM22.9167 38.1944C22.5115 38.1944 22.1229 38.3554 21.8364 38.6419C21.5498 38.9284 21.3889 39.317 21.3889 39.7222C21.3889 40.1274 21.5498 40.516 21.8364 40.8025C22.1229 41.089 22.5115 41.25 22.9167 41.25H35.1389C35.5441 41.25 35.9327 41.089 36.2192 40.8025C36.5057 40.516 36.6667 40.1274 36.6667 39.7222C36.6667 39.317 36.5057 38.9284 36.2192 38.6419C35.9327 38.3554 35.5441 38.1944 35.1389 38.1944H22.9167ZM9.16667 33.6111V38.1944H13.75V33.6111H9.16667ZM7.63889 30.5556H15.2778C15.683 30.5556 16.0716 30.7165 16.3581 31.003C16.6446 31.2895 16.8056 31.6781 16.8056 32.0833V39.7222C16.8056 40.1274 16.6446 40.516 16.3581 40.8025C16.0716 41.089 15.683 41.25 15.2778 41.25H7.63889C7.2337 41.25 6.8451 41.089 6.55859 40.8025C6.27207 40.516 6.11111 40.1274 6.11111 39.7222V32.0833C6.11111 31.6781 6.27207 31.2895 6.55859 31.003C6.8451 30.7165 7.2337 30.5556 7.63889 30.5556V30.5556ZM17.8857 14.8301C18.164 14.542 18.318 14.1561 18.3145 13.7555C18.311 13.3549 18.1503 12.9717 17.8671 12.6885C17.5838 12.4052 17.2006 12.2445 16.8001 12.2411C16.3995 12.2376 16.0136 12.3916 15.7254 12.6699L10.6944 17.7008L8.71903 15.7254C8.43089 15.4471 8.04497 15.2931 7.64439 15.2966C7.24381 15.3001 6.86062 15.4608 6.57736 15.744C6.2941 16.0273 6.13342 16.4105 6.12994 16.8111C6.12646 17.2116 6.28045 17.5976 6.55875 17.8857L10.6944 22.0214L17.8857 14.8301Z"
          fill="white" />
      </svg>

      <div class="text-white">نظردهی استاد</div>

      <q-dialog v-model="dialog">
        <q-card style="max-width: 800px; width: 1000px; height: 800px">
          <q-layout dir="rtl" view="Lhh lpR fff" container class="bg-white">
            <q-header class="bg-primary">
              <q-toolbar>
                <q-btn flat v-close-popup round dense icon="close" />

                <q-toolbar-title class="flex flex-center">نظرسنجی درس اصول مارکتینگ</q-toolbar-title>
              </q-toolbar>
            </q-header>
            <q-page-container>
              <q-page>
                <div class="q-pa-md justify-start">
                  <div>
                    <q-card style="border-radius: 20px">
                      <q-card-section>
                        <div class="col">
                          <div class=" q-pa-md">
                            <div class="col">
                              <div dir="rtl">
                                <div class="q-mt-sm">
                                  <label>
                                    1- کدامیک یک از گزینه های زیر غلط است
                                  </label>
                                </div>
                                <div class="q-mt-sm label-form">
                                  <input v-model="form" id="bat" value="bat"
                                    style="width:20px;height:20px;position: relative;top:10px;right:660px" type="radio" />
                                  <label style="position: relative;left:10px" for="bat" class="q-pa-xs">
                                    اهداف فروش ومارکتینگ گاها متفاوت است.
                                  </label>
                                </div>
                                <div class="label-form q-mt-sm">
                                  <div class=" q-mt-xs">
                                    <input v-model="form" id="friend" value="friend"
                                      style="width:20px;height:20px;position: relative;top:5px;right:660px"
                                      type="radio" />
                                    <label style="position: relative;left:10px" for="friend">
                                      نگاه فروش بلند مدت ونگاه مارکتینگ کوتاه مدت است.
                                    </label>
                                  </div>
                                </div>
                                <div class="q-mt-sm label-form">
                                  <div class="q-mt-xs ">
                                    <input v-model="form" id="upload" value="upload"
                                      style="width:20px;height:20px;position: relative;top:5px;right:660px"
                                      type="radio" />
                                    <label style="position: relative;left:10px" for="upload">
                                      نقطه شروع فرایندفروش،محصولات فعلی است.
                                    </label>
                                  </div>
                                </div>
                                <div class="q-mt-sm label-form">
                                  <div class="q-mt-xs ">
                                    <input v-model="form" id="download" value="download"
                                      style="width:20px;height:20px;top:2px;position: relative;right:660px"
                                      type="radio" />
                                    <label style="position: relative;left:10px" for="download">
                                      نقطه شروع فرایندمارکتینگ،نیازمشتریان است.
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>

                  </div>
                </div>

              </q-page>

            </q-page-container>

          </q-layout>
          <q-card class="shadow-up-16"
            style="box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12); border:1px solid #d3d3d3;border-radius: 20px;max-width: 750px;width:750px;left:20px;position: relative;bottom:200px;border-radius: 20px">
            <form-two />
          </q-card>
        </q-card>
      </q-dialog>
    </q-card-section>
  </q-card>
</template>
  
<script setup>
import formTwo from "./formTwo.vue";
import { ref } from "vue";
const dialog = ref(false);
const group = ref(null);
const form = ref();
const download = ref(false)
const bat = ref(false)
const upload = ref(false)
const friend = ref(false)
</script>
  
<style lang="scss">
.label-form {
  border: 1px solid #D3D3D3;
  height: 40px;
  border-radius: 10px;
}

.label-form:hover {
  border: 1px solid #00CECE;
}
</style>