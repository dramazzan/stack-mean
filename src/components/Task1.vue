<script setup>
import { ref } from "vue";

// task 1
const x = ref(0);
const result = ref(0);
const task1Open = ref(false);

const calculate = () => {
  result.value = x.value ** 2 + 2 * x.value - 1;
};

//task 2
const a = ref(0);
const b = ref(0);
const result2 = ref("");
const task2Open = ref(false);

const checkDivisible = () => {
  if (a.value % b.value === 0) {
    result2.value = "Divisible";
  } else {
    result2.value = "Not Divisible";
  }
};

// task 3
var person = {
  name: ref(""),
  surname: ref(""),
  city: ref(""),
  age: ref(0),
};
const task3Open = ref(false);

const checkPerson = () => {
  if (
    person.name.value === "" ||
    person.surname.value === "" ||
    person.city.value === "" ||
    person.age.value === 0
  ) {
    alert("Заполните все поля");
  } else {
    alert("Все поля заполнены");
  }
};

// task 4
const points = ref(0);
const result3 = ref("");
const task4Open = ref(false);

const checkPoints = () => {
  if (points.value > 100 || points.value < 0) {
    alert("Введите число от 0 до 100");
  } else if (points.value >= 90) {
    result3.value = "A";
  } else if (points.value >= 75) {
    result3.value = "B";
  } else if (points.value >= 60) {
    result3.value = "C";
  } else if (points.value >= 50) {
    result3.value = "D";
  } else {
    result3.value = "F";
  }
};

// task 5
const step = ref(1); // Шаг прогноза
const branch = ref(null); // Выбранная область
const profession = ref(""); // Рекомендуемая профессия
const task5Open = ref(false);

// Выбор области
const selectBranch = (selectedBranch) => {
  branch.value = selectedBranch;
  step.value = 2;
};

// Выбор специальности в зависимости от области
const selectSpecialty = (specialty) => {
  if (branch.value === 1) {
    if (specialty === 1) {
      profession.value = "You are Financier";
    } else if (specialty === 2) {
      profession.value = "You are Engineer";
    }
  } else if (branch.value === 2) {
    if (specialty === 1) {
      profession.value = "You are Historic or Diplomat";
    } else if (specialty === 2) {
      profession.value = "You are Translator";
    }
  } else if (branch.value === 3) {
    if (specialty === 1) {
      profession.value = "You are Painter or Architect";
    } else if (specialty === 2) {
      profession.value = "You are Singer or Tamada";
    }
  } else if (branch.value === 4) {
    if (specialty === 1) {
      profession.value = "You are footballer or Basketball player";
    } else if (specialty === 2) {
      profession.value = "You are boxer or tennis player";
    }
  }

  step.value = 3;
};

// Сброс процесса
const reset = () => {
  step.value = 1;
  branch.value = null;
  profession.value = "";
};

// task 6
const a6 = ref(0);
const b6 = ref(0);
const c6 = ref(0);
const result6 = ref(null);
const task6Open = ref(false);

// Функция для проверки существования треугольника
const checkTriangle = () => {
  if (
    a6.value + b6.value > c6.value &&
    a6.value + c6.value > b6.value &&
    b6.value + c6.value > a6.value
  ) {
    result6.value = "YES";
  } else {
    result6.value = "NO";
  }
};

// task 7
const tenge = ref(0);
const result7 = ref(null);
const task7Open = ref(false);

// Курс доллара в тенге
const exchangeRate = 380;

// Функция для конвертации
const convertCurrency = () => {
  const dollars = Math.floor(tenge.value / exchangeRate); // Целая часть в долларах
  const cents = Math.round(((tenge.value % exchangeRate) * 100) / exchangeRate); // Оставшиеся деньги в центах

  if (cents === 0) {
    result7.value = `ONLY ${dollars} USD`;
  } else {
    result7.value = `${dollars} USD and ${cents} cents`;
  }
};

// task 8
const minutes = ref(0);
const result8 = ref(null);
const task8Open = ref(false);

const convertTime = () => {
  const hours = Math.floor(minutes.value / 60);
  const remainingMinutes = minutes.value % 60;

  if (remainingMinutes === 0) {
    result8.value = `ONLY ${hours} HOURS`;
  } else {
    result8.value = `${hours} HOURS and ${remainingMinutes} MINUTES`;
  }
};
</script>

<template>
  <main>
    <div class="task-1 task">
      <h1 @click="task1Open = !task1Open">Задание 1</h1>
      <div v-if="task1Open">
        <p>
          Создайте программу на языке JavaScript, где я смогу выполнить
          следующее уравнение: y = x2 + 2x - 1
        </p>
        <h2>Результат: {{ result }}</h2>
        <input type="number" v-model.number="x" placeholder="Введите x" />
        <button @click="calculate">Вычислить</button>
      </div>
    </div>

    <div class="task-2 task">
      <h1 @click="task2Open = !task2Open">Задание 2</h1>
      <div v-if="task2Open">
        <p>
          Создайте программу, которая запрашивает два числа a и b через браузер.
          Если a делится на b, то выведите через функцию alert() слово -
          "Divisible", иначе "Not Divisible".
        </p>
        <h2>Результат: {{ result2 }}</h2>
        <input type="number" placeholder="Введите a" v-model.number="a" />
        <input type="number" placeholder="Введите b" v-model.number="b" />
        <button @click="checkDivisible">Проверить</button>
      </div>
    </div>

    <div class="task-3 task">
      <h1 @click="task3Open = !task3Open">Задание 3</h1>
      <div v-if="task3Open">
        <p>
          Создайте программу, которая запрашивает пользователя ввести имя,
          фамилию, город и возраст. В конце программа должна вывести результат
          через alert() в таком формате:
        </p>
        <div class="person-form">
          <input
            type="text"
            placeholder="Введите имя"
            v-model="person.name.value"
          />
          <input
            type="text"
            placeholder="Введите фамилию"
            v-model="person.surname.value"
          />
          <input
            type="text"
            placeholder="Введите город"
            v-model="person.city.value"
          />
          <input
            type="text"
            placeholder="Введите возраст"
            v-model.number="person.age.value"
          />
          <button @click="checkPerson">Проверить</button>
        </div>
        <div class="person-data">
          <p>
            Name: {{ person.name }} <br />
            Surname: {{ person.surname }} <br />
            City: {{ person.city }} <br />
            Age: {{ person.age }}
          </p>
        </div>
      </div>
    </div>

    <div class="task-4 task">
      <h1 @click="task4Open = !task4Open">Задание 4</h1>
      <div v-if="task4Open">
        <p>
          Напишите программу, где я ввожу количество баллов за семестр по "Web
          Technologies". Программа должна отобразить, какую я оценку получил за
          семестр в буквах. Система оценки выглядит таким образом: 90 и выше - A
          75 и выше - B 60 и выше - C 50 и выше - D Иначе - F
        </p>
        <h2>Результат: {{ result3 }}</h2>
        <input
          type="number"
          v-model.number="points"
          placeholder="Введите количество баллов"
        />
        <button @click="checkPoints">Отправить</button>
      </div>
    </div>

    <div class="task-5 task">
      <h1 @click="task5Open = !task5Open">Задание 5</h1>
      <div v-if="task5Open">
        <p>
          Напишите программу, которая может определить вашу будущую профессию по
          вашим способностям. Программа будет задавать несколько вопросов и
          примерно по ним определит кем вам нужно стать в будущем.
        </p>
        <div>
          <h1>Определите свою будущую профессию</h1>

          <div v-if="step === 1">
            <h3>Choose your branch:</h3>
            <div class="button5_box">
              <button @click="selectBranch(1)">1 - Science</button>
              <button @click="selectBranch(2)">
                2 - Humanitarian subjects
              </button>
              <button @click="selectBranch(3)">3 - Art</button>
              <button @click="selectBranch(4)">4 - Sport</button>
            </div>
          </div>

          <div v-if="step === 2">
            <h3 v-if="branch === 1">Вы выбрали Науку (Science)</h3>
            <h3 v-if="branch === 2">
              Вы выбрали Гуманитарные предметы (Humanitarian subjects)
            </h3>
            <h3 v-if="branch === 3">Вы выбрали Искусство (Art)</h3>
            <h3 v-if="branch === 4">Вы выбрали Спорт (Sport)</h3>

            <button v-if="branch === 1" @click="selectSpecialty(1)">
              1 - Math
            </button>
            <button v-if="branch === 1" @click="selectSpecialty(2)">
              2 - Physics
            </button>

            <button v-if="branch === 2" @click="selectSpecialty(1)">
              1 - History
            </button>
            <button v-if="branch === 2" @click="selectSpecialty(2)">
              2 - Foreign Languages
            </button>

            <button v-if="branch === 3" @click="selectSpecialty(1)">
              1 - Drawing
            </button>
            <button v-if="branch === 3" @click="selectSpecialty(2)">
              2 - Singing
            </button>

            <button v-if="branch === 4" @click="selectSpecialty(1)">
              1 - Team
            </button>
            <button v-if="branch === 4" @click="selectSpecialty(2)">
              2 - Individual
            </button>
          </div>

          <div v-if="step === 3">
            <h3>Рекомендованная профессия: {{ profession }}</h3>
            <button @click="reset">Сбросить</button>
          </div>
        </div>
      </div>
    </div>

    <div class="task-6 task">
      <h1 @click="task6Open = !task6Open">Задание 6</h1>
      <div v-if="task6Open">
        <p>Напишите программу, которая проверяет, существует ли треугольник.</p>
        <input
          type="number"
          placeholder="Введите сторону a"
          v-model.number="a6"
        />
        <input
          type="number"
          placeholder="Введите сторону b"
          v-model.number="b6"
        />
        <input
          type="number"
          placeholder="Введите сторону c"
          v-model.number="c6"
        />
        <button @click="checkTriangle">Проверить</button>
        <p>Результат: {{ result6 }}</p>
      </div>
    </div>

    <div class="task-7 task">
      <h1 @click="task7Open = !task7Open">Задание 7</h1>
      <div v-if="task7Open">
        <p>
          Создайте программу, которая конвертирует валюту из тенге в доллары
          США. 1 доллар = 380 тенге
        </p>
        <input
          type="number"
          v-model.number="tenge"
          placeholder="Введите сумму"
        />
        <button @click="convertCurrency">Конвертировать</button>
        <p>Результат: {{ result7 }}</p>
      </div>
    </div>

    <div class="task-8 task">
      <h1 @click="task8Open = !task8Open">Задание 8</h1>
      <div v-if="task8Open">
        <p>Напишите программу, которая переводит минуты в часы и минуты.</p>
        <input
          type="number"
          v-model.number="minutes"
          placeholder="Введите количество минут"
        />
        <button @click="convertTime">Перевести</button>
        <p>Результат: {{ result8 }}</p>
      </div>
    </div>
    <div class="close_button">
      <router-link to="/">Выйти</router-link>
    </div>
  </main>
</template>

<style scoped>
.task {
  width: 90%;
  margin: 10px auto;
  border-radius: 10px;
  padding: 20px;
  background-color: lightblue;
  text-align: left;
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

.task h1 {
  cursor: pointer;
}

.task p {
  font-size: 16px;
  text-align: left;
}

.task input,
.task button {
  margin-top: 10px;
}

.task-1,
.task-2,
.task-3,
.task-4,
.task-5,
.task-6,
.task-7,
.task-8 {
  background-color: #eee;
}

.task-3 {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.task-3 h1 {
  text-align: left;
}

.task-3 p {
  font-size: 16px;
  text-align: left;
}

.task-3 .person-form input {
  display: block;
  margin-top: 10px;
}

.task-3 .person-form button {
  margin-top: 10px;
}
</style>
