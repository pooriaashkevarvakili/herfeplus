<template>
  <div dir="rtl">
    <q-select
      standout="bg-white"
      v-model="model"
      :options="options"
      label="انتخاب دروس"
    />
  </div>
</template>

<script setup>
const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
</script>

<style>
</style>