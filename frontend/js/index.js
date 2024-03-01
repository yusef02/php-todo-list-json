const { createApp } = Vue;

createApp({
  data() {
    return {
      taskList: [],
      newTask: { text: "", done: false },
    };
  },
  methods: {
    fetchTasksList() {
      axios.get("../backend/api/get-tasks.php").then((res) => {
        this.taskList = res.data;
      });
    },

    fetchDeleteTask(taskIndex) {
      const data = { index: taskIndex };
      const params = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      axios.post("../backend/api/delete-task.php", data, params).then((res) => {
        this.taskList = res.data;
      });
    },

    fetchAddTask(newTask) {
      if (newTask.text !== "") {
        const data = { text: newTask.text, done: newTask.done };
        const params = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };

        axios
          .post("../backend/api/add-new-task.php", data, params)
          .then((res) => {
            this.taskList = res.data;
          });

        newTask.text = "";
      } else alert("inserire una descrizione per aggiungere la task");
    },
    fetchUpgradeTaskState(taskIndex) {
      this.taskList[taskIndex].done = true;
    },
  },
  created() {
    this.fetchTasksList();
  },
}).mount("#app");
