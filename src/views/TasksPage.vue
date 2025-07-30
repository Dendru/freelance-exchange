<template>
  <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ tasksListLength }}</h3>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <div class="card">
          <h2 class="card-title">
            {{ task.title }}
            <app-status :type="task.status"></app-status>
          </h2>
          <p>
            <strong>
              <small>{{ formatDate(task.deadline) }}</small>
            </strong>
          </p>
          <button class="btn primary" @click="goToTask(task.id)">
            Посмотреть
          </button>
        </div>
      </li>
    </ul>
  </template>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import AppStatus from "@/components/AppStatus.vue";
import { formatDate } from "@/utils/date";
export default {
  components: { AppStatus },
  setup() {
    const store = useStore();
    const router = useRouter();
    const tasks = computed(() => store.getters.allTasks);

    const tasksListLength = computed(() => {
      return tasks.value.filter((task) => task.status === "active").length;
    });
    const goToTask = (id) => {
      router.push(`/tasks/${id}`);
    };
    return {
      tasks,
      formatDate,
      goToTask,
      tasksListLength,
    };
  },
};
</script>

<style></style>
