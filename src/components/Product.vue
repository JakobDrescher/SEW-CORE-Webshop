<template>
<div class="card col-2 m-3">
  <img :src="img" class="card-img-top object-fit-cover p-2">
  <div class="card-body p-3">
    <h3 class="card-title">{{name}}</h3>
    <h4 class="card-subtitle">{{price}}€</h4>
    <p class="card-text">{{description}}</p>
    <button class="btn btn-secondary text-white m-1" @click="productStore.deleteProduct(productId)">DELETE</button>
    <button class="btn btn-secondary text-white m-1" @click="$router.push('/edit/'+productId)">EDIT</button>
  </div>
</div>
</template>

<script setup>
const props = defineProps(['name','price','description','img','productId']);
import {useProductStore} from "@/stores/productStore.js";
const productStore=useProductStore();
</script>