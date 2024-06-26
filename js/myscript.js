const { createApp } = Vue;

createApp({
    data() {
        return {
            taskList: [
                {text: "Fare lavatrice", done: true},
                {text: "Pulire bagno", done: true},
                {text: "Sistemare panni stesi", done: false},
                {text: "Lavare pavimento", done: true},
                {text: "Fare spesa", done: false}
            ],
            newTask: '',
        }
    },
    methods: {
        removeTask(indice) {
            this.taskList.splice(indice, 1);
        },

        addTask() {
            this.taskList.unshift({text: this.newTask, done: false}),
            this.newTask = '';
        },

        statusTask(indice) {
            if(this.taskList[indice].done === true) {
                this.taskList[indice].done = false;
            }else {
                this.taskList[indice].done = true;
            }
        }
    }
}).mount('#app');