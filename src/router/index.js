import { createRouter, createWebHistory } from "vue-router";
import NewPage from "../views/NewPage.vue";
import TasksPage from "@/views/TasksPage.vue";
import TaskPage from "@/views/TaskPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/tasks", component: TasksPage, alias: "/" },
    { path: "/new", component: NewPage },
    { path: "/task", component: TaskPage },
    {
      path: "/tasks/:id",
      name: "TaskDetails",
      component: () => import("@/views/TaskDetails.vue"),
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
