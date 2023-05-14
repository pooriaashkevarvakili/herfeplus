<template>
  <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
    <q-card style="border-radius: 30px">
      <q-card-section
        style="color: #008080; font-weight: 700"
        class="text-right q-mr-sm q-mt-sm"
        >از بین محصولات متنوع انتخاب کنید</q-card-section
      >
      <div class="q-mt-sm row q-col-gutter-sm q-py-sm">
        <div class="col-lg-6 col-sm-12 col-xs-12 col-md-6">
          <q-card style="border-radius: 30px" class="my-card" flat bordered>
            <q-img src="herfe.png" />
            <q-card-section class="q-pt-xs">
              <div class="q-mt-sm q-mb-xs text-right">دوره مدیراجرایی</div>
              <div style="color: #343434" class="text-caption text-right">
                177فایل
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="text-caption text-primary">مشاهده</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-6 col-sm-12 col-xs-12 col-md-6">
          <q-card style="border-radius: 30px" class="my-card" flat bordered>
            <q-img src="modiramel.png" />
            <q-card-section class="q-pt-xs">
              <div class="q-mt-sm q-mb-xs text-right">
                دوره مدیرعامل حرفه پلاس
              </div>
              <div style="color: #343434" class="text-caption text-right">
                177فایل
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="text-caption text-primary">مشاهده</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>