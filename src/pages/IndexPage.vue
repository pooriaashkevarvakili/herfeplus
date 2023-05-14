<template>
  <q-page>
    <image-one />
    <div
      class="q-mr-lg q-mt-sm"
      style="font-size: 20px; direction: rtl; font-weight: bold"
    >
      دوره های فعال من
    </div>
    <course-one />
    <course-two />

    <div class="q-pa-md">
      <div class="row items-start q-gutter-md">
        <q-responsive :ratio="16 / 9" class="col">
          <product-one />
        </q-responsive>

        <q-responsive style="height: 390px" :ratio="1" class="col">
          <q-card style="border-radius: 30px">
            <q-card-section>
              <div
                style="font-weight: bold"
                class="text-right q-mr-sm q-mt-sm color-primary-green"
              >
                میزان پیشرفت من
              </div>
            </q-card-section>
            <div class="q-mt-sm font row q-col-gutter-sm q-py-sm">
              <Pie width="221" height="226" :data="data" :options="options" />
            </div>
          </q-card>
        </q-responsive>
      </div>
    </div>
  </q-page>
</template>
<script >
import imageOne from "../components/home/imageOne.vue";
import courseTwo from "../components/home/courseTwo.vue";
import courseOne from "../components/home/courseOne.vue";
import productOne from "../components/home/productOne.vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import * as chartConfig from "./chartConfig.js";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.family = "IRANSans";
ChartJS.defaults.font.size = 14;
export default {
  name: "App",
  components: {
    Pie,
    imageOne,
    courseTwo,
    courseOne,
    productOne,
  },
  data() {
    return chartConfig;
  },
};
</script>
<style scoped>
.font {
  font-family: "IRANSans";
}
</style>



