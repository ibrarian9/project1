<script setup lang="ts">
  import Navbar from "~/layouts/navbar.vue";

  definePageMeta({
    middleware: "auth"
  })

  useSeoMeta({
    title: "Edit Data Hp"
  })
  // Define id
  const route = useRoute()

  const router = useRouter()
  const config = useRuntimeConfig()
  const url = config.public.baseApi

  // Call api edit data by id
  const { data: post } : any = await useFetch(`${url}/hape/tampil/${route.params.id}`)

  // Form Data
  const nama = ref(post.value.nama);
  const deskripsi = ref(post.value.deskripsi);
  const rilis = ref(post.value.rilis);
  const harga = ref(post.value.harga);
  const errors : any = ref({})

  const updateData = async() => {

    let formData = new FormData();

    formData.append('nama', nama.value);
    formData.append('deskripsi', deskripsi.value);
    formData.append('rilis', rilis.value);
    formData.append('harga', harga.value);

    await $fetch(`${url}/hape/tampil/${route.params.id}`,{
      method: "PUT",
      contentType: false,
      body: formData
    }).then(() => {
      router.push({ path: "/"})
    }).catch((error) => {
      errors.value = error.data
    });
  }

</script>

<template>
  <navbar/>

  <h4>Edit Data Hp</h4>
  <div class="container body">
    <div class="form-container">
      <form @submit.prevent="updateData">
        <div class="form-group-top">
          <label for="nama">Nama Handphone</label>
          <input
              type="text"
              id="nama"
              name="nama"
              v-model="nama"
          />
        </div>
        <div class="form-group">
          <label for="deskripsi">Deskripsi Handphone</label>
          <textarea
              id="deskripsi"
              name="deskripsi"
              v-model="deskripsi"
              placeholder="Masukkan deskripsi handphone disini"
              rows="3"
              required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="tahun-rilis">Tahun Rilis Handphone</label>
          <input
              type="text"
              id="tahun-rilis"
              name="tahun-rilis"
              v-model="rilis"
              placeholder="Masukkan tahun rilis handphone disini"
              required
          />
        </div>
        <div class="form-group">
          <label for="harga">Harga Handphone</label>
          <input
              type="text"
              id="harga"
              name="harga"
              v-model="harga"
              placeholder="Masukkan harga handphone disini"
              required
          />
        </div>
      </form>
    </div>
  </div>
  <div class="button">
    <NuxtLink class="cancel-button" to="/"><b>Batal</b></NuxtLink>
    <NuxtLink class="save-button" type="submit" @click="updateData"><b>Simpan</b></NuxtLink>
  </div>
</template>

<style scoped>
.body {
  background-color: #f9f9fc;
  font-family: "Public Sans", sans-serif;
  margin: 0;
}

.navbar img {
  width: 60px;
  height: 60px;
  padding: 0;
}

.admin-container button {
  font-family: "Public Sans", sans-serif;
  border: none;
  background-color: transparent;
  padding: 10px;
  margin-right: 40px;
  font-weight: 500;
  cursor: pointer;
}

.admin-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.admin-menu li {
  padding: 10px;
}

.admin-menu a {
  text-decoration: none;
  color: #333;
}

h4 {
  margin-left: 8.25%;
}

a {
  font-size: 13px;
  color: #000;
  text-decoration: none;
  text-align: left;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-container {
  background-color: #fff;
  width: 83%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.form-group {
  font-family: "Public Sans", sans-serif;
  margin: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.form-group-top {
  font-family: "Public Sans", sans-serif;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

label {
  font-weight: 600;
  font-size: small;
}

input,
textarea {
  font-family: "Public Sans", sans-serif;
  width: 35%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 10px;
}

.button {
  margin-top: 20px;
  margin-bottom: 10%;
  margin-right: 7%;
  text-align: right;
}

.cancel-button {
  font-family: "Public Sans", sans-serif;
  background-color: #ff1730;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.save-button {
  font-family: "Public Sans", sans-serif;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .button {
    margin-right: 6%;
    text-align: right;
  }

  input,
  textarea {
    width: 35%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .button {
    margin-right: 6%;
    text-align: right;
  }

  input,
  textarea {
    width: 35%;
  }
}

</style>