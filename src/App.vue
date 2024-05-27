<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <nav class="container-fluid navbar bg-primary p-3">
      <img src="./assets/DartBaseLogo.svg" class="col-2" @click="$router.push('/home')">
      <button @click="$router.push('/add')" class="btn btn-secondary text-white">Add Product</button>
    </nav>
  </header>
  <main>
    <RouterView/>
  </main>
</template>