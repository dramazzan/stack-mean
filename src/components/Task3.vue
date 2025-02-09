<script setup>
import { ref } from "vue";

const users = ref([
  { login: "user1", password: "pass1" },
  { login: "user2", password: "pass2" },
  { login: "admin", password: "admin123" },
]);

const username = ref("");
const password = ref("");
const message = ref("");
const isError = ref(false);

const authenticateUser = () => {
  const user = users.value.find(
    (u) => u.login === username.value && u.password === password.value
  );

  if (user) {
    message.value = "Welcome, you are authenticated";
    isError.value = false;
  } else {
    message.value = "User not found";
    isError.value = true;
  }
};
</script>

<template>
  <main>
    <div class="task-3 task">
      <h1>Задание 3</h1>
      <div class="form-box">
        <h2>Логин</h2>
        <div class="form-group">
          <label for="username">Логин:</label>
          <input
            v-model="username"
            type="text"
            id="username"
            placeholder="Введите логин"
            :class="{ 'error-border': isError }"
          />
        </div>

        <div class="form-group">
          <label for="password">Пароль:</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Введите пароль"
            :class="{ 'error-border': isError }"
          />
        </div>

        <button @click="authenticateUser">Войти</button>

        <div v-if="message">
          <p>{{ message }}</p>
        </div>
      </div>
      <div class="close_button">
        <router-link to="/">Выйти</router-link>
      </div>
    </div>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Montserrat, sans-serif;
}

.task {
  margin-bottom: 20px;
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
}

input {
  border: 1px solid #0f69c9;
  padding: 5px;
  border-radius: 5px;
  margin: 5px;
}

button {
  padding: 5px 10px;
  background: #0f69c9;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  margin: 5px;
}

.error-border {
  border: 2px solid red;
}

.form-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.task-3 {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close_button {
  width: 100px;
  margin: 10px auto;
  padding: 20px;
  background-color: #0f69c9;
  border-radius: 10px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close_button a {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #fff;
  text-align: center;
}
</style>
