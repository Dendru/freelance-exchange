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
  },
  actions: {
    createTask({ commit }, taskData) {
      commit("CREATE_TASK", taskData);
    },
  },
  getters: {
    allTasks: (state) => state.tasksList,
    allTasksLength: (state) => state.tasksList.length,
  },
});
