<template>
  <div class="q-pr-sm">
    <div class="q-mt-sm row q-col-gutter-sm q-py-sm flex flex-center">
      <div class="col-md-12 col-xs-12 col-lg-12 col-sm-12">
        <div dir="rtl" class="q-mr-sm">
          <q-select
            standout="bg-white"
            class="q-mr-sm"
            v-model="model"
            :options="options"
            label="انتخاب دوره"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const model = ref(null);
const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
</script>

<style>
.q-field--auto-height.q-field--labeled .q-field__control-container {
  border-radius: 10px;
}
</style>