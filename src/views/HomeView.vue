<script setup></script>

<template>
  <main>
    <div class="basic_js">
      <h2>Basic JavaScript</h2>
      <ul>
        <li><router-link to="/task1">Задание 1</router-link></li>
        <li><router-link to="/task2">Задание 2</router-link></li>
        <li><router-link to="/task3">Задание 3</router-link></li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

  .basic_js {
    width: 90%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 10px;
  }

  .basic_js h2 {
    font-size: 24px;
    padding: 10px;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin: 0 10px;
    color: #fff;
    background: #0f69c9;
    padding: 10px 5px;
    border-radius: 5px;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

</style>
