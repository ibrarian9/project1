<script setup lang="ts">

import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/authLogin'; // import the auth store we just created

const { logOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
  logOut();
  return navigateTo('/login');
};


</script>

<template>
  <div class="navbar">
    <div class="navbar-logo">
      <NuxtLink to="/"
      ><img src="../public/source/logo_toko.png" alt="logo toko"
      /></NuxtLink>
    </div>
    <div class="admin-container">
      <h4>Admin</h4>
      <NuxtLink @click="logout"><img src="../public/source/logout.png" alt="log out"></NuxtLink>
    </div>
  </div>
</template>

<style scoped>

.navbar {
  font-family: "Source Sans 3", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fab327;
  color: #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.navbar img {
  width: 60px;
  height: auto;
  margin-left: 10px;
}

.admin-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
}

.admin-container h4 {
  font-weight: 600;
}

.admin-container img {
  width: 20px;
  height: auto;
  margin: 7px 20px 0 20px;
}

</style>