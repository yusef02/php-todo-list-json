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
}).mount("#app");
