<template>
  <div class="q-pa-md">
    <div class="row items-start q-gutter-md">
      <q-responsive :ratio="4 / 3" class="col" style="max-height: 100px">
        <div dir="rtl">
          <q-input
            class="search"
            rounded
            autogrow
            standout="bg-white text-green"
            v-model="text"
            label="جستجوآزمون"
          >
            <template v-slot:append>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.32637 0.666626C12.6737 0.666626 16.208 4.21663 16.208 8.58329C16.208 12.95 12.6737 16.5 8.32637 16.5C3.97903 16.5 0.444734 12.95 0.444734 8.58329C0.444734 4.21663 3.97903 0.666626 8.32637 0.666626ZM8.32637 10.4583H10.8153C11.1555 10.4583 11.4375 10.175 11.4375 9.83329C11.4375 9.49163 11.1555 9.20829 10.8153 9.20829H8.32637C7.98622 9.20829 7.70414 9.49163 7.70414 9.83329C7.70414 10.175 7.98622 10.4583 8.32637 10.4583ZM5.83743 7.95829H10.8153C11.1555 7.95829 11.4375 7.67496 11.4375 7.33329C11.4375 6.99163 11.1555 6.70829 10.8153 6.70829H5.83743C5.49728 6.70829 5.2152 6.99163 5.2152 7.33329C5.2152 7.67496 5.49728 7.95829 5.83743 7.95829Z"
                  fill="#888888"
                />
              </svg>
            </template>
          </q-input>
        </div>
      </q-responsive>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const text = ref("");
</script>

<style lang="scss">
</style>