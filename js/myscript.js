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
            inputError: false
        }
    },
    methods: {
        removeTask(indice) {
            // tolgo solo task specifica
            this.taskList.splice(indice, 1);
        },

        addTask() {
            // controllo che la task inserita dall'utente abbia i requisiti corretti
            if(this.newTask.length >= 5 && this.newTask !== '') {
                // se li ha aggiungo nuovo obj alla lista
                this.taskList.unshift({text: this.newTask, done: false});
                // non faccio uscire messaggio di errore
                this.inputError = false;
            } else {
                // se non li ha faccio uscire messaggio di errore
                this.inputError = true;
            }
            // svuoto l'input ogni volta che l'utente clicca
            this.newTask = '';
        },

        statusTask(indice) {
            // cambio valore di 'done' sulla base dei click
            if(this.taskList[indice].done === true) {
                this.taskList[indice].done = false;
            }else {
                this.taskList[indice].done = true;
            }
        },

    }
}).mount('#app');