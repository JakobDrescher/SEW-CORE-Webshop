<template>
  <form class="container col-4 p-0 top-50 start-50 translate-middle position-fixed">
    <div class="row my-2 col-12 justify-content-between">
      <div class=" form-floating col-7 p-0">
        <input type="text" class="form-control" v-model="name" placeholder="NERF Jolt" id="productName">
        <label for="productName">Product Name</label>
      </div>
      <div class="form-floating col-2 p-0">
        <input type="number" class="form-control" v-model="id" placeholder="1" id="id">
        <label for="id">Product Nr</label>
      </div>
    </div>
    <div class="row my-2 col-12 justify-content-between">
      <div class="form-floating col-2 p-0">
        <input type="number" class="form-control" v-model="price" placeholder="10" id="price">
        <label for="price">Price</label>
      </div>
      <div class="form-floating col-9 p-0">
        <input type="text" class="form-control" v-model="img" placeholder="Image Source" id="imageSource">
        <label for="imageSource">Image Source</label>
      </div>
    </div>
    <div class="form-floating col-12 my-2 row">
      <input type="text" class="form-control" v-model="description" placeholder="Product Description"
             id="productDescription">
      <label for="productDescription">Product Description</label>
    </div>
    <button class="btn btn-primary col-3 form-floating row"
            @click="productStore.addProduct(name,price,description,img,id); $router.push('home');">Add Product
    </button>
  </form>
</template>

<script setup>
import {ref} from "vue";
import {useProductStore} from "@/stores/productStore.js";

const name = ref();
const price = ref();
const description = ref();
const img = ref();
const id = ref();
const productStore = useProductStore();
</script>
