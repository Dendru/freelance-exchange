<template>
  <div class="card" v-if="task">
    <h2>{{ task?.title }}</h2>
    <app-status :type="task?.status"></app-status>
    <p>
      <strong>Дэдлайн:</strong>
      {{ formatDate(task?.deadline) }}
    </p>
    <p>
      <strong>Описание:</strong>
      {{ task?.description }}
    </p>
  </div>
  <div v-else>Задача не найдена</div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
import AppStatus from "@/components/AppStatus.vue";
import { formatDate } from "@/utils/date";
export default {
  components: { AppStatus },
  setup() {
    const route = useRoute();
    const store = useStore();
    const taskId = route.params.id;
    const task = computed(() =>
      store.getters.allTasks.find((t) => t.id == taskId)
    );

    return {
      task,
      formatDate,
    };
  },
};
</script>

<style></style>
