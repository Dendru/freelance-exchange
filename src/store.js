import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      tasksList: [],
    };
  },
  mutations: {
    CREATE_TASK(state, newTask) {
      state.tasksList.push(newTask);
    },
    SET_STATUS(state, { id, status }) {
      const task = state.tasksList.find((t) => t.id == id);
      if (task) task.status = status;
    },
  },
  actions: {
    createTask({ commit }, taskData) {
      commit("CREATE_TASK", taskData);
    },
    setStatus({ commit }, payload) {
      commit("SET_STATUS", payload);
    },
  },
  getters: {
    allTasks: (state) => state.tasksList,
    allTasksLength: (state) => state.tasksList.length,
  },
});
