<template>
  <div dir="rtl" class="q-pa-md">
    <div class="row q-col-gutter-sm q-mt-sm">
      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <q-card style="border-radius: 10px">
          <div>
            <q-card-section style="margin-top: -10px">
              <div class="flex">
                <img style="width: 49px; height: 51px" src="user.png" />
                <div class="flex-1 q-mt-sm">
                  <div style="font-weight: bold" class="q-mr-xs">
                    دوره مدیرعامل
                  </div>
                  <q-linear-progress
                    rounded
                    size="10px"
                    :value="progress"
                    color="process"
                    class="q-mt-sm"
                  />
                </div>
                <div style="color: #008080" class="q-mt-sm">30%</div>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <q-card style="border-radius: 10px">
          <div>
            <q-card-section style="margin-top: -10px">
              <div class="flex">
                <img style="width: 49px; height: 51px" src="user.png" />
                <div class="flex-1 q-mt-sm">
                  <div style="font-weight: bold" class="q-mr-xs">
                    دوره مدیرعامل
                  </div>
                  <q-linear-progress
                    rounded
                    size="10px"
                    :value="progress"
                    color="process"
                    class="q-mt-sm"
                  />
                </div>
                <div style="color: #008080" class="q-mt-sm">30%</div>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <q-card style="border-radius: 10px">
          <div>
            <q-card-section style="margin-top: -10px">
              <div class="flex">
                <img style="width: 49px; height: 51px" src="user.png" />
                <div class="flex-1 q-mt-sm">
                  <div style="font-weight: bold" class="q-mr-xs">
                    دوره مدیرعامل
                  </div>
                  <q-linear-progress
                    rounded
                    size="10px"
                    :value="progress"
                    color="process"
                    class="q-mt-sm"
                  />
                </div>
                <div style="color: #008080" class="q-mt-sm">30%</div>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <q-card style="border-radius: 10px">
          <div>
            <q-card-section style="margin-top: -10px">
              <div class="flex">
                <img style="width: 49px; height: 51px" src="user.png" />
                <div class="flex-1 q-mt-sm">
                  <div style="font-weight: bold" class="q-mr-xs">
                    دوره مدیرعامل
                  </div>
                  <q-linear-progress
                    rounded
                    size="10px"
                    :value="progress"
                    color="process"
                    class="q-mt-sm"
                  />
                </div>
                <div style="color: #008080" class="q-mt-sm">30%</div>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const progress = ref(0.4);
</script>

<style>
</style>