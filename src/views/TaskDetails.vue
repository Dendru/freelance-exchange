<template>
  <div class="card" v-if="task">
    <h2>{{ task?.title }}</h2>
    Статус:
    <app-status :type="task?.status"></app-status>
    <p>
      <strong>Дэдлайн:</strong>
      {{ formatDate(task?.deadline) }}
    </p>
    <p>
      <strong>Описание:</strong>
      {{ task?.description }}
    </p>
    <button class="btn" @click="getStatus('pending')">Взять в работу</button>
    <button class="btn primary" @click="getStatus('done')">Завершить</button>
    <button class="btn danger" @click="getStatus('cancelled')">Отменить</button>
  </div>
  <div v-else class="task-not-found">
    <strong>Задачи с id = {{ taskId }} нет</strong>
  </div>
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

    const getStatus = (newStatus) => {
      store.dispatch("setStatus", {
        id: task.value.id,
        status: newStatus,
      });
    };

    return {
      task,
      taskId,
      formatDate,
      getStatus,
    };
  },
};
</script>

<style scoped>
.task-not-found {
  font-size: large;
  color: aliceblue;
  text-align: center;
}
</style>
