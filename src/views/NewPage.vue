<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="form.nameInput" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="form.dateInput" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="form.descriptionInput"></textarea>
    </div>

    <button class="btn primary" :disabled="!isFilled">Создать</button>
  </form>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const form = reactive({
      nameInput: "",
      dateInput: "",
      descriptionInput: "",
    });

    const isFilled = computed(() => {
      return form.nameInput && form.dateInput && form.descriptionInput;
    });

    const createTask = () => {
      const now = new Date();
      const deadlineDate = new Date(form.dateInput);

      let status = deadlineDate < now ? "cancelled" : "active";

      store.dispatch("createTask", {
        id: Date.now(),
        title: form.nameInput,
        deadline: form.dateInput,
        description: form.descriptionInput,
        status,
      });

      form.nameInput = "";
      form.dateInput = "";
      form.descriptionInput = "";

      router.push("/tasks");
    };

    return {
      form,
      isFilled,
      createTask,
    };
  },
};
</script>
