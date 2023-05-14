<template>
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
                  style="width:20px;height:20px;position: relative;top:5px;right:660px" type="radio" />
                <label style="position: relative;left:10px" for="friend">
                  نگاه فروش بلند مدت ونگاه مارکتینگ کوتاه مدت است.
                </label>
              </div>
            </div>
            <div class="q-mt-sm label-form">
              <div class="q-mt-xs ">
                <input v-model="form" id="upload" value="upload"
                  style="width:20px;height:20px;position: relative;top:5px;right:660px" type="radio" />
                <label style="position: relative;left:10px" for="upload">
                  نقطه شروع فرایندفروش،محصولات فعلی است.
                </label>
              </div>
            </div>
            <div class="q-mt-sm label-form">
              <div class="q-mt-xs ">
                <input v-model="form" id="download" value="download"
                  style="width:20px;height:20px;top:2px;position: relative;right:660px" type="radio" />
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
</template>

<script setup>
import { ref } from "vue";
const groupOne = ref(null);
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