<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-sm q-py-sm items-center justify-center">
      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <q-card style="height: 170px; border-radius: 20px">
          <q-card-section>
            <div class="text-right color-primary-green">مشاهده دوره</div>
            <div style="position: relative; right: 30px">
              <CircleProgress
                class=""
                :percent="30"
                :viewport="true"
                style="width: 119px; height: 119px; margin-left: 50px"
                :show-percent="true"
              />
              <span style="position: relative; left: 75px; bottom: 60px">
                مشاهده دوره
              </span>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <q-card style="height: 170px; border-radius: 20px">
          <q-card-section>
            <div class="text-right color-primary-green">مشاهده کارگاه</div>
            <div style="position: relative; right: 30px">
              <CircleProgress
                class=""
                :percent="17"
                :viewport="true"
                style="width: 119px; height: 119px; margin-left: 50px"
                :show-percent="true"
              />
              <span style="position: relative; left: 70px; bottom: 60px">
                مشاهده کارگاه
              </span>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <q-card style="height: 170px; border-radius: 20px">
          <q-card-section>
            <div class="text-right color-primary-green">تمارین</div>
            <div style="position: relative; right: 30px">
              <CircleProgress
                class=""
                :percent="23"
                :viewport="true"
                style="width: 119px; height: 119px; margin-left: 50px"
                :show-percent="true"
              />
              <span style="position: relative; left: 90px; bottom: 60px">
                تمرین
              </span>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <q-card style="height: 170px; border-radius: 20px">
          <q-card-section>
            <div class="text-right color-primary-green">آزمون ها</div>
            <div style="position: relative; right: 30px">
              <CircleProgress
                class=""
                :percent="17"
                :viewport="true"
                style="width: 119px; height: 119px; margin-left: 50px"
                :show-percent="true"
              />
              <span style="position: relative; left: 90px; bottom: 60px">
                آزمون
              </span>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
export default {
  name: "App",
  components: {
    CircleProgress: CircleProgress,
  },
  setup() {
    const percent = ref(75);

    onMounted(() => {
      setInterval(() => {
        if (percent.value === 25) {
          percent.value = 75;
        } else {
          percent.value = 25;
        }
      }, 1000);
    });

    return {
      percent,
    };
  },
};
</script>

<style>
</style>