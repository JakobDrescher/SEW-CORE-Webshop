<template>
<div class="card col-2 m-3">
  <img :src="img" class="card-img-top object-fit-cover">
  <div class="card-body p-3">
    <h3 class="card-title">{{name}}</h3>
    <h4 class="card-subtitle">{{price}}€</h4>
    <p class="card-text">{{description}}</p>
  </div>
</div>
</template>

<script setup>
const props = defineProps(['name','price','description','img'])
</script>