<template>
  <div class="q-pa-lg">
    <div class="row">
      <div class="col-md-2 col-lg-2 col-sm-12 col-xs-12">
        <upload-modal />
      </div>
      <div class="col-md-2 q-ml-xs col-lg-2 col-sm-12 colxs-12">
        <AzmoonModal />
      </div>
      <div
        style="position: relative; left: 60px"
        class="col-md-7 q-ml-sm col-lg-7 col-sm-12 colxs-12"
      >
        <q-card
          style="height: 255px; border-radius: 30px"
          class="column"
          flat
          bordered
        >
          <q-card-section>
            <div>
              <div style="direction: rtl">
                در این درس شما ابتدا با مفهوم مارکتینگ آشنا می شوید سپس به بررسی
                تفاوت مارکتینگ و فروش می پردازیم در ادامه به بررسی عصر های
                مارکتینگ و مولفه زیربنای مارکتینگ می پردازیم و در نهایت فرآیند
                اجرایی مارکتینگ در سازمان را فرا می گیرید.
                <br />
                این درس توسط احمد نظری مهرابی از اساتید مدرسه کسب و کار ماهان در
                فضای استودیویی و با فیلم برداری و تدوین حرفه ای ارائه شده است.
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div
        style="position: relative; bottom: 120px"
        class="col-md-2 col-lg-2 col-sm-12 colxs-12"
      >
        <option-modal />
      </div>
      <div
        style="position: relative; bottom: 120px"
        class="col-md-2 q-ml-xs col-lg-2 col-sm-12 colxs-12"
      >
        <q-card
          style="border-radius: 30px; background-color: #008080"
          class="text-right"
        >
          <q-card-section class="text-center">
            <svg
              width="49"
              height="55"
              viewBox="0 0 49 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16667 48.8889H48.8889V55H9.16667C4.09444 55 0 50.9056 0 45.8333V9.16667C0 4.09444 4.09444 0 9.16667 0H48.8889V42.7778H9.16667C7.48611 42.7778 6.11111 44.1528 6.11111 45.8333C6.11111 47.5139 7.48611 48.8889 9.16667 48.8889ZM15.2778 38.1944V4.58333C15.2778 3.72778 14.6056 3.05556 13.75 3.05556C12.8944 3.05556 12.2222 3.72778 12.2222 4.58333V38.1944C12.2222 39.05 12.8944 39.7222 13.75 39.7222C14.6056 39.7222 15.2778 39.05 15.2778 38.1944Z"
                fill="white"
              />
            </svg>
            <div class="text-white">جزوات درسی</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import OptionModal from "./optionModal.vue";
import UploadModal from "./UploadModal.vue";
import AzmoonModal from "./AzmoonModal.vue";
</script>

<style>
</style>