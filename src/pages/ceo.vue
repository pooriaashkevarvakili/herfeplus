<template>
  <SeoSection />
  <!-- <div class="q-pa-md">
    <div class="row items-start q-gutter-md">
      <q-responsive :ratio="4 / 3" class="col" style="max-height: 250px">
       <chart-section /> 
      </q-responsive>
    </div>
  </div> -->
  <div class="q-pa-md">
    <div class="row items-start q-gutter-md">
      <q-responsive :ratio="4 / 3" class="col" style="max-height: 250px">
        <Courseprofessors />
      </q-responsive>
    </div>
  </div>
  <marketingprinciples />
  <marketingprinciples-one />
</template>

<script setup>
import Courseprofessors from "../components/ceo/Courseprofessors.vue";
import SeoSection from "../components/ceo/CeoSection.vue";
import ChartSection from "../components/ceo/ChartSection.vue";
import Marketingprinciples from "../components/ceo/marketingprinciples.vue";
import MarketingprinciplesOne from "../components/ceo/marketingprinciplesOne.vue";
</script>

<style></style>