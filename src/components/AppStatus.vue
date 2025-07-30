<template>
  <span class="badge" :class="statusClass">{{ label }}</span>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const label = computed(() => {
      const map = {
        done: "Завершена",
        active: "Активен",
        cancelled: "Отменен",
        pending: "Выполняется",
      };
      return map[props.type] || "Неизвестно";
    });

    const statusClass = computed(() => {
      const map = {
        done: "primary",
        active: "warning",
        cancelled: "danger",
        pending: "",
      };
      return map[props.type] || "";
    });
    return {
      label,
      statusClass,
    };
  },
};
</script>
