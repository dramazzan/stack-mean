import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Task1 from "../components/Task1.vue";
import Task2 from "../components/Task2.vue";
import Task3 from "../components/Task3.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    { path: "/task1", component: Task1 },
    { path: "/task2", component: Task2 },
    { path: "/task3", component: Task3 },
  ],
});

export default router;
