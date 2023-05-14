<template>
  <div class="q-pa-md">
    <div class="q-mt-sm row q-col-gutter-sm q-py-sm">
      <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
        <q-card style="height: 500px; border-radius: 30px">
          <q-card-section class="q-mt-sm">
            <select-cource />
          </q-card-section>
          <q-card-section>
            <Bar :data="data" style="height: 350px" :options="options" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script >
import SelectCource from "./SelectCource.vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar, Chart } from "vue-chartjs";
import * as chartConfig from "./chartConfig.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.defaults.font.family = "IRANSans";
ChartJS.defaults.font.size = 14;
export default {
  name: "App",
  components: {
    Bar,
    SelectCource,
    Chart,
  },

  data() {
    return chartConfig;
  },
};
</script>

<style>
canvas {
  font-family: "IRANSans";
}
</style>