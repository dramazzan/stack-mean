<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const task1Open = ref(false);
const task2Open = ref(false);
const task3Open = ref(false);
const task4Open = ref(false);


const books = ref([
  {
    name: "Harry Potter and the Philosopher's Stone",
    author: "Joanne Rowling",
    isbn: "1233123",
    price: 50,
  },
  {
    name: "Harry Potter and the Chamber of Secrets",
    author: "Joanne Rowling",
    isbn: "222332",
    price: 40,
  },
  {
    name: "Harry Potter and the Prisoner of Azkaban",
    author: "Joanne Rowling",
    isbn: "452323",
    price: 55,
  },
  { name: "The Hobbit", author: "J.R.R. Tolkien", isbn: "543232", price: 30 },
  {
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isbn: "987654",
    price: 60,
  },
  {
    name: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "765432",
    price: 25,
  },
]);

const author = ref("");
const searchResult = ref([]);

const searchBooks = () => {
  searchResult.value = books.value.filter((book) =>
    book.author.toLowerCase().includes(author.value.toLowerCase())
  );
};

// Задание 2 - Логин
const users = ref([
  { login: "user1", password: "pass1" },
  { login: "user2", password: "pass2" },
  { login: "admin", password: "admin123" },
]);

const username = ref("");
const password = ref("");
const message = ref("");

const authenticateUser = () => {
  const user = users.value.find(
    (u) => u.login === username.value && u.password === password.value
  );

  if (user) {
    message.value = "Welcome, you are authenticated";
  } else {
    message.value = "User not found";
  }
};

// Задание 3 - Поиск автомобилей
const cars = ref([
  { name: "Toyota", price: 12000000, year: 2015, volume: 2.2 },
  { name: "Mercedes", price: 70000000, year: 2018, volume: 3.8 },
  { name: "Toyota", price: 7000000, year: 2013, volume: 2.0 },
  { name: "BMW", price: 11000000, year: 2011, volume: 3.0 },
  { name: "Lexus", price: 60000000, year: 2017, volume: 5.7 },
]);

const searchingBy = ref(0);
const searchName = ref("");
const startYear = ref(null);
const endYear = ref(null);
const startVolume = ref(null);
const endVolume = ref(null);
const startPrice = ref(null);
const endPrice = ref(null);
const searchResults = ref([]);

const chooseSearchCriterion = (criterion) => {
  searchingBy.value = criterion;
  resetSearchFields();
};

const resetSearchFields = () => {
  searchName.value = "";
  startYear.value = null;
  endYear.value = null;
  startVolume.value = null;
  endVolume.value = null;
  startPrice.value = null;
  endPrice.value = null;
  searchResults.value = [];
};

const searchByName = () => {
  searchResults.value = cars.value.filter((car) =>
    car.name.toLowerCase().includes(searchName.value.toLowerCase())
  );
};

const searchByYear = () => {
  searchResults.value = cars.value.filter(
    (car) => car.year >= startYear.value && car.year <= endYear.value
  );
};

const searchByVolume = () => {
  searchResults.value = cars.value.filter(
    (car) => car.volume >= startVolume.value && car.volume <= endVolume.value
  );
};

const searchByPrice = () => {
  searchResults.value = cars.value.filter(
    (car) => car.price >= startPrice.value && car.price <= endPrice.value
  );
};

const exit = () => {
  searchingBy.value = 0;
};

// Задание 4 - Система управления студентами
const students = ref([]);

const action = ref(0); // 1 - добавить студента, 2 - список студентов, 0 - выход
const newStudent = ref({
  name: "",
  surname: "",
  gpa: null,
});

const chooseAction = (actionValue) => {
  action.value = actionValue;
  if (actionValue === 1) {
    newStudent.value = {
      name: "",
      surname: "",
      gpa: null,
    };
  }
};

const addStudent = () => {
  if (
    newStudent.value.name &&
    newStudent.value.surname &&
    newStudent.value.gpa !== null
  ) {
    students.value.push({
      ...newStudent.value,
    });
    newStudent.value = { name: "", surname: "", gpa: null };
  } else {
    alert("Пожалуйста, заполните все поля");
  }
};

// Функция для выхода на главную страницу
const exitToHome = () => {
  router.push("/");
};
</script>

<template>
  <main>
    <div class="task">
      <h1 @click="task1Open = !task1Open">Задание 1</h1>
      <div v-if="task1Open">
        <h2>Поиск книг по автору</h2>
        <div>
          <label for="author">Введите имя автора:</label>
          <input
            v-model="author"
            type="text"
            id="author"
            placeholder="Введите имя автора"
          />
        </div>

        <button @click="searchBooks">Поиск</button>

        <div v-if="searchResult.length > 0">
          <ul>
            <li v-for="(book, index) in searchResult" :key="index">
              {{ book.name }} - {{ book.author }} - {{ book.isbn }} -
              {{ book.price }}$
            </li>
          </ul>
        </div>
        <div v-else>
          <p>Книги не найдены.</p>
        </div>
      </div>
    </div>

    <div class="task">
      <h1 @click="task2Open = !task2Open">Задание 2</h1>
      <div v-if="task2Open">
        <h2>Логин</h2>

        <div>
          <label for="username">Логин:</label>
          <input
            v-model="username"
            type="text"
            id="username"
            placeholder="Введите логин"
          />
        </div>

        <div>
          <label for="password">Пароль:</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Введите пароль"
          />
        </div>

        <button @click="authenticateUser">Войти</button>

        <div v-if="message">
          <p>{{ message }}</p>
        </div>
      </div>
    </div>

    <div class="task" >
      <h1 @click="task3Open = !task3Open">Задание 3</h1>
      <div v-if="task3Open">
        <h2>Поиск машин</h2>
        <button @click="chooseSearchCriterion(1)">Поиск по имени</button>
        <button @click="chooseSearchCriterion(2)">Поиск по году выпуска</button>
        <button @click="chooseSearchCriterion(3)">
          Поиск по объему двигателя
        </button>
        <button @click="chooseSearchCriterion(4)">Поиск по цене</button>
        <button @click="exitToHome">Выйти на главную</button>

        <div v-if="searchingBy === 1">
          <h3>Введите название машины:</h3>
          <input v-model="searchName" placeholder="Название машины" />
          <button @click="searchByName">Найти</button>
          <div v-if="searchResults.length">
            <h4>Результаты поиска:</h4>
            <ul>
              <li v-for="car in searchResults" :key="car.name">
                {{ car.name }} - {{ car.year }} - {{ car.volume }} liters -
                {{ car.price }} KZT
              </li>
            </ul>
          </div>
        </div>

        <div v-if="searchingBy === 2">
          <h3>Введите диапазон года:</h3>
          <input
            v-model="startYear"
            placeholder="Начальный год"
            type="number"
          />
          <input v-model="endYear" placeholder="Конечный год" type="number" />
          <button @click="searchByYear">Найти</button>
          <div v-if="searchResults.length">
            <h4>Результаты поиска:</h4>
            <ul>
              <li v-for="car in searchResults" :key="car.name">
                {{ car.name }} - {{ car.year }} - {{ car.volume }} liters -
                {{ car.price }} KZT
              </li>
            </ul>
          </div>
        </div>

        <div v-if="searchingBy === 3">
          <h3>Введите диапазон объема двигателя:</h3>
          <input
            v-model="startVolume"
            placeholder="Начальный объем"
            type="number"
            step="0.1"
          />
          <input
            v-model="endVolume"
            placeholder="Конечный объем"
            type="number"
            step="0.1"
          />
          <button @click="searchByVolume">Найти</button>
          <div v-if="searchResults.length">
            <h4>Результаты поиска:</h4>
            <ul>
              <li v-for="car in searchResults" :key="car.name">
                {{ car.name }} - {{ car.year }} - {{ car.volume }} liters -
                {{ car.price }} KZT
              </li>
            </ul>
          </div>
        </div>

        <div v-if="searchingBy === 4">
          <h3>Введите диапазон цены:</h3>
          <input
            v-model="startPrice"
            placeholder="Начальная цена"
            type="number"
          />
          <input v-model="endPrice" placeholder="Конечная цена" type="number" />
          <button @click="searchByPrice">Найти</button>
          <div v-if="searchResults.length">
            <h4>Результаты поиска:</h4>
            <ul>
              <li v-for="car in searchResults" :key="car.name">
                {{ car.name }} - {{ car.year }} - {{ car.volume }} liters -
                {{ car.price }} KZT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="task">
      <h1 @click="task4Open = !task4Open">Задание 4</h1>
      <div v-if="task4Open">
        <h2>Система управления студентами</h2>
        <button @click="chooseAction(1)">Добавить студента</button>
        <button @click="chooseAction(2)">Список студентов</button>
        <button @click="exitToHome">Выйти на главную</button>

        <div v-if="action === 1">
          <h3>Добавление студента</h3>
          <div>
            <label for="student-name">Имя:</label>
            <input v-model="newStudent.name" id="student-name" />
          </div>
          <div>
            <label for="student-surname">Фамилия:</label>
            <input v-model="newStudent.surname" id="student-surname" />
          </div>
          <div>
            <label for="student-gpa">Средний балл:</label>
            <input
              type="number"
              step="0.1"
              v-model="newStudent.gpa"
              id="student-gpa"
            />
          </div>
          <button @click="addStudent">Добавить студента</button>
        </div>

        <div v-if="action === 2">
          <h3>Список студентов</h3>
          <ul>
            <li v-for="student in students" :key="student.name">
              {{ student.name }} {{ student.surname }} - {{ student.gpa }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="close_button">
      <router-link to="/">Выйти</router-link>
    </div>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Montserrat, sans-serif;
}

.task {
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer; /* Указатель, чтобы было понятно, что на задачу можно кликнуть */
  transition: background-color 0.3s;
  width: 90%;
  margin: 10px auto;
  border-radius: 10px;
}

.task:hover {
  background-color: #e0e0e0; /* Цвет при наведении */
}

input {
  border: 1px solid #0f69c9;
  padding: 8px;
  margin: 10px;
}

button {
  padding: 10px;
  background-color: #0f69c9;
  color: white;
  border: none;
  cursor: pointer;
  margin: 10px;
}

button:hover {
  background-color: #073d7c;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px; /* Отступ снизу */
}

h2,
h3,
h4 {
  font-size: 18px;
  margin-bottom: 8px;
}

ul {
  list-style: none;
  padding-left: 20px;
}

li {
  margin-bottom: 5px;
}

p {
  font-size: 16px;
  color: #666;
}

label {
  font-size: 16px;
  color: #444;
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
