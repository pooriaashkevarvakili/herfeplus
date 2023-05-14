<template>
  <q-card
    style="border-radius: 30px"
    flat
    bordered
    @click="dialog = true"
    class="text-right bg-primary"
  >
    <q-card-section class="text-center">
      <svg
        width="42"
        height="55"
        viewBox="0 0 42 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.0625 14.6094V0H2.57812C1.14941 0 0 1.14941 0 2.57812V52.4219C0 53.8506 1.14941 55 2.57812 55H38.6719C40.1006 55 41.25 53.8506 41.25 52.4219V17.1875H26.6406C25.2227 17.1875 24.0625 16.0273 24.0625 14.6094ZM31.0643 37.8136H24.0625V46.4073C24.0625 47.3569 23.2934 48.1261 22.3438 48.1261H18.9062C17.9566 48.1261 17.1875 47.3569 17.1875 46.4073V37.8136H10.1857C8.65176 37.8136 7.88584 35.9562 8.9751 34.8745L19.3327 24.5942C20.0471 23.8842 21.2008 23.8842 21.9151 24.5942L32.2728 34.8745C33.3631 35.9562 32.5982 37.8136 31.0643 37.8136ZM40.498 11.2793L29.9814 0.751953C29.498 0.268555 28.8428 0 28.1553 0H27.5V13.75H41.25V13.0947C41.25 12.418 40.9814 11.7627 40.498 11.2793Z"
          fill="white"
        />
      </svg>
      <div class="text-white">آپلود تمرین</div>
    </q-card-section>

    <q-dialog v-model="dialog">
      <q-card style="max-width: 800px; width: 1000px; height: 950px">
        <q-layout dir="rtl" view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-toolbar>
              <q-btn flat v-close-popup round dense icon="close" />

              <q-toolbar-title class="flex flex-center"
                >آپلودتمرین درس اصول مارکتینگ</q-toolbar-title
              >
            </q-toolbar>
          </q-header>
          <q-page-container>
            <q-page>
              <div class="flex q-pa-md justify-start">
                <div>
                  <div class="col flex flex-center">
                    <div class="flex q-mt-lg">
                      <div class="flex flex-center">
                        <q-card
                          style="
                            width: 700px;
                            height: 200px;
                            border-radius: 20px;
                          "
                        >
                          <q-card-section>
                            <div dir="rtl">
                              سلام دانش پذیر
                              <br />
                              عزیز امیدوارم که محتوای آموزشی را به صورت کامل
                              دیده باشید.
                              <br />
                              در این قسمت تمرین کاربردی برای شما طراحی شده است.
                              از شما خواهشمندیم تمرین ارائه شده را با دقت انجام
                              داده و در سایت آپلود کنید.
                              <br />
                              در صورتی که در پروسه انجام تمرین ابهام دارید، در
                              قسمت پرسش و پاسخ مطرح فرمائید. ( در ابتدای پرسش
                              حتما قید کنید که در مورد تمرین سوال دارید. )
                              <br />
                              متن تمرین
                              <br />
                              با توجه به مطالب بیان شده در درس، برای کسب و کار
                              خود S.T.P و آمیخته بازاریابی مشخص نمایید.
                            </div>
                          </q-card-section>
                        </q-card>
                      </div>
                    </div>
                  </div>
                  <div class="col flex flex-center">
                    <div class="flex q-mt-lg">
                      <div>
                        <div class="border-dotted">
                          <div class="flex flex-center">
                            <button
                              style="
                                width: 650px;
                                margin-top: 20px;
                                height: 45px;
                                border: none;
                                border-radius: 10px;
                                background: linear-gradient(
                                  90deg,
                                  rgba(0, 128, 128, 1) 0%,
                                  rgba(3, 157, 157, 1) 100%
                                );
                                cursor: pointer;
                              "
                              @click="myFilePdf.click()"
                              class="bg-primary q-mt-sm text-white"
                            >
                              <div class="row">
                                <div>فایل مورد نظر را آپلود کنید</div>
                                <q-space />

                                <q-icon name="fa fa-plus" />
                              </div>
                              <input
                                accept="video/*"
                                type="file"
                                v-show="ok"
                                ref="myFilePdf"
                              />
                            </button>
                          </div>
                          <div class="flex flex-center">
                            <q-linear-progress
                              size="20px"
                              style="width: 650px"
                              class="q-mt-sm"
                              :value="progress1"
                              color="green"
                            >
                              <div class="absolute-full flex flex-center">
                                <q-badge
                                  color="white"
                                  text-color="accent"
                                  :label="progressLabel1"
                                />
                              </div>
                            </q-linear-progress>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="q-mt-lg">
                      <table class="q-mr-sm" id="customers">
                        <tr>
                          <th>
                            <div class="flex flex-center">فایل</div>
                          </th>
                          <th>
                            <div class="flex flex-center">تاریخ</div>
                          </th>
                          <th>
                            <div class="flex flex-center">وضعیت</div>
                          </th>
                          <th>
                            <div class="flex flex-center">توضیحات</div>
                          </th>
                        </tr>

                        <tr>
                          <td>
                            <div class="flex flex-center">
                              <button
                                class="download-file"
                                @click="download.click()"
                              >
                                <i class="fa fa-plus"></i>
                                دانلودفایل
                                <input
                                  accept="video/*"
                                  type="file"
                                  v-show="ok"
                                  ref="download"
                                />
                              </button>
                            </div>
                          </td>
                          <td>
                            <div class="flex flex-center">1401/06/17</div>
                          </td>
                          <td>
                            <div class="flex flex-center">ردشده</div>
                          </td>
                          <td>
                            <div class="flex flex-center">
                              سلام و احترام پاسخ مناسب و مرتبط نمی باشد. لطفا
                              پاسخ مرتبط بارگذاری شود.
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </q-page>
          </q-page-container>
        </q-layout>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script setup>
import { ref, computed } from "vue";
const dialog = ref(false);

const group = ref(null);
const download = ref();
const myFile = ref();
const myFilePdf = ref();
const progress1 = ref(0.3);
const progressLabel1 = computed(() => (progress1.value * 100).toFixed(2) + "%");
</script>

<style>
</style>