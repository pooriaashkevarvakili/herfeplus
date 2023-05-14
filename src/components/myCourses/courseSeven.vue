<template>
  <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
    <q-card style="border-radius: 30px">
      <q-card-section>
        <div style="font-weight: 700" class="text-center">
          دوره مدیرعامل حرفه پلاس
        </div>
        <div class="q-mt-xs flex flex-center">
          <div class="q-ml-sm flex items-center">
            <span style="color: #008080; font-weight: 700">26درس</span>
            <svg width="17" height="17" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.0612 8.6026V2.39996C10.0612 1.7833 9.62283 1.32594 9.09054 1.37733H9.0637C8.12436 1.46983 6.69747 2.01969 5.90126 2.59524L5.82522 2.65177C5.6955 2.74427 5.4808 2.74427 5.35108 2.65177L5.23925 2.57469C4.44305 2.00427 3.02063 1.45955 2.08129 1.37219C1.549 1.3208 1.11511 1.7833 1.11511 2.39483V8.6026C1.11511 9.09594 1.46401 9.55844 1.89342 9.6201L2.02314 9.64066C2.99379 9.78969 4.49226 10.355 5.35108 10.8945L5.36897 10.9048C5.48974 10.9819 5.68209 10.9819 5.79838 10.9048C6.65721 10.3601 8.16015 9.78969 9.13527 9.64066L9.28288 9.6201C9.71229 9.55844 10.0612 9.09594 10.0612 8.6026Z"
                stroke="#008080" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.58826 2.82117V10.5295" stroke="#008080" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.68746 4.36292H2.68103" stroke="#008080" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.02294 5.90454H2.68103" stroke="#008080" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="q-ml-sm flex items-center">
            <span style="color: #008080; font-weight: 700" class="q-ml-sm">183فایل</span>
            <svg width="17" height="17" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.81543 9.25005V3.59728C1.81543 1.54172 2.26273 1.02783 4.05195 1.02783H7.18308C8.97229 1.02783 9.4196 1.54172 9.4196 3.59728V8.73617C9.4196 8.80811 9.4196 8.88005 9.41512 8.952"
                stroke="#008080" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M3.09025 7.70825H9.4196V9.50686C9.4196 10.4987 8.71733 11.3055 7.85403 11.3055H3.38099C2.5177 11.3055 1.81543 10.4987 1.81543 9.50686V9.17284C1.81543 8.36603 2.38798 7.70825 3.09025 7.70825Z"
                stroke="#008080" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.82837 3.59717H7.4068" stroke="#008080" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.82837 5.39587H6.06489" stroke="#008080" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div class="flex q-mt-sm flex-center">
          <div class="">
            <div class="row">
              <div class="flex q-mr-sm flex-center time-card">0</div>
              <div class="flex q-mr-sm flex-center time-card">0</div>
              <div style="
                  width: 60px;

                  border-radius: 15%;
                  border: 1px solid #f1f1f1;
                  height: 35px;
                  background-color: #f1f1f1;
                  color: #00cece;
                " class="flex q-mr-sm flex-center">
                0
              </div>
              <div style="
                  width: 60px;

                  border-radius: 15%;
                  border: 1px solid #f1f1f1;
                  height: 35px;
                  background-color: #f1f1f1;
                  color: #00cece;
                " class="flex q-mr-sm flex-center">
                0
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="flex flex-center" style="font-size: 10px; margin-left: 5px; margin-top: 5px">
                  آزمون
                </div>
                <div class="flex flex-center" style="font-size: 10px; margin-left: 16px; margin-top: 5px">
                  تمرین
                </div>
                <div class="flex flex-center" style="font-size: 10px; margin-left: 21px; margin-top: 5px">
                  مشاهده کارگاه
                </div>
                <div class="flex flex-center" style="font-size: 10px; margin-left: 13px; margin-top: 5px">
                  مشاهده دوره
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row items-center justify-center q-mt-lg">
          <router-link class="btn-courses" to="/markting">نمودارپیشرفت تحصیلی دوره</router-link>
          <router-link class="q-ml-xs btn-courses" to="/ceo">
            مشاهده دوره
          </router-link>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
  
<script>
export default {};
</script>
  
<style></style>