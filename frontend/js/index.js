const { createApp } = Vue;

createApp({
  data() {
    return {
      taskList: [
        { text: "task", done: false },
        { text: "task", done: true },
        { text: "task", done: true },
        { text: "task", done: false },
        { text: "task", done: false },
      ],
      newTask: { text: "", done: false },
    };
  },
  methods: {
    deleteTask(taskIndex) {
      this.taskList.splice(taskIndex, 1);
    },
    addTask(newTask) {
      if (newTask.text !== "") {
        this.taskList.push({ ...newTask });
        newTask.text = "";
      } else alert("inserire una descrizione per aggiungere la task");
    },
    doneTask(taskIndex) {
      this.taskList[taskIndex].done = true;
    },
    redoTask(taskIndex) {
      this.taskList[taskIndex].done = false;
    },
  },
}).mount("#app");
