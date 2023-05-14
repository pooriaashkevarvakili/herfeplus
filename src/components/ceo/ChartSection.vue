<template>
  <div class="q-pa-lg">
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <q-card style="height: 250px; border-radius: 30px">
          <div class="row">
            <div>
              <CircleProgress
                class="q-mt-lg"
                :percent="17"
                :viewport="true"
                style="width: 149px; height: 149px; margin-left: 50px"
                :show-percent="true"
              />
              <span style="position: relative; left: 85px; bottom: 60px">
                مشاهده کارگاه
              </span>
            </div>
            <div>
              <CircleProgress
                :percent="30"
                style="width: 149px; height: 149px; margin-left: 60px"
                class="q-ml-xl q-mt-lg"
                :viewport="true"
                :show-percent="true"
              />
              <span style="position: relative; left: 95px; bottom: 60px">
                مشاهده دوره
              </span>
            </div>
            <div>
              <CircleProgress
                :percent="12"
                class="q-ml-xl q-mt-lg"
                style="width: 149px; height: 149px; margin-left: 80px"
                :viewport="true"
                :show-percent="true"
              />
              <span style="position: relative; left: 135px; bottom: 60px">
                تمرین
              </span>
            </div>
            <div>
              <CircleProgress
                :percent="23"
                class="q-ml-xl q-mt-lg"
                style="width: 149px; height: 149px; margin-left: 110px"
                :viewport="true"
                :show-percent="true"
              />
              <span style="position: relative; left: 165px; bottom: 60px">
                آزمون
              </span>
            </div>
          </div>
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
