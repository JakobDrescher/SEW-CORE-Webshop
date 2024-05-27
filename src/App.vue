<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <nav class="container-fluid navbar bg-primary p-3">
      <h1 class="text-secondary title bg-white py-3">Dart Base</h1>
      <button @click="$router.push('add')" class="btn btn-secondary text-white">Add Product</button>
    </nav>
  </header>
  <main>
    <RouterView/>
  </main>
</template>