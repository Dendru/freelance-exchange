import { createStore } from "vuex";
import { saveTasksToStorage, getTasksFromStorage } from "./utils/storage";

export default createStore({
  state() {
    return {
      tasksList: [],
    };
  },
  mutations: {
    SET_ALL_TASKS(state, tasks) {
      state.tasksList = tasks;
    },
    CREATE_TASK(state, newTask) {
      state.tasksList.push(newTask);
    },
    SET_STATUS(state, { id, status }) {
      const task = state.tasksList.find((t) => t.id == id);
      if (task) task.status = status;
    },
  },
  actions: {
    initTasks({ commit }) {
      const tasks = getTasksFromStorage();
      commit("SET_ALL_TASKS", tasks);
    },
    createTask({ commit }, taskData) {
      commit("CREATE_TASK", taskData);
      saveTasksToStorage(this.state.tasksList);
    },
    setStatus({ commit }, payload) {
      commit("SET_STATUS", payload);
      saveTasksToStorage(this.state.tasksList);
    },
  },
  getters: {
    allTasks: (state) => state.tasksList,
    allTasksLength: (state) => state.tasksList.length,
  },
});
