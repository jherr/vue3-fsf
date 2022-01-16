<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div class="bg-blue-500 text-white p-5">
      <router-link to="/">Home</router-link> |
      <router-link to="/product">Product</router-link> |
      <router-link to="/profile">Profile</router-link>
    </div>
    <div class="mt-10">
      <router-view />
    </div>
  </div>
</template>