<script setup lang="ts">

import Navbar from "~/layouts/navbar.vue";

definePageMeta({
  middleware: "auth"
})

const config = useRuntimeConfig()
const url = config.public.baseApi

const { data: post } : any = await useAsyncData('post', () => $fetch(`${url}/hape/all`))

const deleteData = async (id: number) => {
  await $fetch(`${url}/hape/hapus/${id}`, {
      method: "DELETE"
  });

  refreshNuxtData('post')
}

</script>

<template>

  <navbar/>
  <div class="body">
  <h3>Daftar Hp</h3>
  <div class="top-container">
    <div class="search-bar">
      <input type="text" placeholder="Cari Hp" />
    </div>
    <NuxtLink class="add-new-button" to="/tambah"> Tambah Hp </NuxtLink>
  </div>
  <table>
    <tr>
      <th>Nama</th>
      <th>Foto</th>
      <th>Deskripsi</th>
      <th>Tahun Rilis</th>
      <th>Harga</th>
      <th>Aksi</th>
    </tr>
    <tr v-for="d of post" :key="d.id">
      <td>{{d.nama}}</td>
      <td><img :src="`http://localhost:8080/api/hape/poto/${d.id}`" alt=""></td>
      <td>{{d.deskripsi}}</td>
      <td>{{d.rilis}}</td>
      <td>{{d.harga}}</td>
      <td class="button-container">
        <NuxtLink class="edit-button" @click="$router.push(`edit/${d.id}`)"
        ><img src="../public/source/edit-logo.png" alt="logo edit"
        /></NuxtLink>
        <NuxtLink class="delete-button" @click="deleteData(d.id)"
        ><img src="../public/source/remove-logo.png" alt="logo hapus"
        /></NuxtLink>
      </td>
    </tr>
  </table>
  </div>
</template>

<style scoped>
.body {
  background-color: #f9f9fc;
  font-family: "Source Sans 3", sans-serif;
  font-weight: 200;
  margin: 0;
}

h3 {
  margin-left: 5%;
}

.top-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 90%;
  margin-left: 4%;
}

.search-bar {
  background-color: #fff;
  height: 25px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

input {
  margin-top: 5px;
  font-size: 14px;
  border: none;
}

.add-new-button {
  width: 120px;
  display: inline-block;
  background-color: #fff;
  color: #464e5f;
  padding: 5px;
  font-size: 15px;
  font-weight: 400;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

a {
  color: #000;
  text-decoration: none;
  text-align: left;
}

table {
  width: 90%;
  border-collapse: collapse;
  margin: 5px auto auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  font-size: 15px;
}

th {
  background-color: #fff;
  padding: 10px;
  text-align: center;
}

td {
  text-align: center;
  padding: 5px;
}

tr:nth-child(even) {
  background-color: #fff3da;
}

tr:nth-child(odd) {
  background-color: #fff;
}

td img {
  width: auto;
  height: 100px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 30px;
}

.edit-button {
  background-color: #2a93ff;
  width: 10%;
  height: 5%;
  margin: 2px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button {
  background-color: #ff1730;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination a {
  text-decoration: none;
  padding: 8px 16px;
  background-color: #fff;
  color: black;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.pagination li {
  margin-right: 10px;
}

.edit-button {
  width: 20px;
  height: 20px;
}
.delete-button {
  width: 20px;
  height: 20px;
}

a img {
  width: 18px;
  height: 18px;
  padding: 0;
}

@media (max-width: 380px) {

  .search-bar {
    background-color: #fff;
    height: 25px;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  input[type="text"] {
    font-size: 14px;
    margin-right: 10%;
    border: none;
  }

  table {
    width: 90%;
    height: 90vh;
    display: block;
    overflow-x: auto;
  }
  th,
  td {
    padding: 8px;
    font-size: 14px;
  }
}

@media only screen and (min-width: 381px) and (max-width: 990px) {
  table {
    display: block;
    overflow-x: auto;
  }
  th,
  td {
    min-width: 100px;
    padding: 8px;
    font-size: 14px;
  }
}


</style>