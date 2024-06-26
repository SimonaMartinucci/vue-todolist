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
        }
    },
    methods: {
    }
}).mount('#app');