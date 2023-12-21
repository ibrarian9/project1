<script setup lang="ts">

import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/authLogin";

const { authenticateUser } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore())

// Get Data From Form
const user = ref({
  username : '',
  password : ''
});

const router = useRouter();
const login = async () => {
  // call authenticateUser and pass the user object
  await authenticateUser(user.value)
  // redirect to homepage if user is authenticated
  if (authenticated) {
    await router.push('/');
  }
}

</script>

<template>
  <div class="body">
    <div class="container">
      <div class="container-header">
        <img src="../public/source/logo_toko.png" alt="logo toko" />
        <p>Masuk untuk terhubung ke Database</p>
      </div>
      <form @submit.prevent="">
        <div class="form-group">
          <input
              v-model="user.username"
              type="text"
              placeholder="Pengguna"
              required />
          <input
              v-model="user.password"
              type="password"
              placeholder="Kata Sandi"
              required />
        </div>
        <button class="button" @click="login"><b>MASUK</b></button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.body {
  font-family: "Source Sans 3", sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.01);
  width: 350px;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-header {
  background-color: #fab327;
  border-radius: 10px 10px 0 0;
  color: #000;
  text-align: center;
  width: 100%;
  padding: 0;
}

.container-header img {
  width: 25%;
  height: auto;
  margin-top: 0;
  padding-top: 30px;
}

.container-header p {
  font-weight: 600;
  text-shadow: -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff,
  0.5px 0.5px 0 #fff;
}

.form-group {
  margin-top: 30px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

input {
  width: 200px;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 10px;
}

.button {
  font-family: "Source Sans 3", sans-serif;
  background-color: #fab327;
  width: 200px;
  color: #000;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.button b {
  font-weight: 900;
  text-shadow: -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff,
  0.5px 0.5px 0 #fff;
}

@media (max-width: 380px) {
  .container {
    width: 90%;
    height: 85vh;
    display: flex;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.01);
    flex-direction: column;
    align-items: center;
    overflow-x: auto;
  }

  .container-header {
    text-align: center;
    width: 100%;
  }

  .form-group {
    margin-top: 30px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  input {
    width: 100px;
    margin-top: 10px;
  }

  .button {
    width: 80%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
}

@media only screen and (min-width: 381px) and (max-width: 990px) {
  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75%;
  }

  .container-header {
    border-radius: 10px 10px 0 0;
    text-align: center;
    width: 100%;
  }

  .form-group {
    margin-top: 30px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  input {
    width: 200px;
    padding: 8px;
  }

  .button {
    margin-top: 60px;
  }
}

</style>