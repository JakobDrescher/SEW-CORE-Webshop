<template>
  <div class="row m-3">
  <product v-for="p in productStore.products" :name="p.name" :description="p.description" :price="p.price" :img="p.img" :product-id="p.id"></product>
  </div>
</template>

<script setup>
import Product from "@/components/Product.vue";
import {useProductStore} from "@/stores/productStore.js";
const productStore=useProductStore();
</script>