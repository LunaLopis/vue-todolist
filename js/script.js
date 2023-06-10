const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'creare un pessimo markup',
                    done: false
                },
                {
                    text: 'passare al file javascript',
                    done: false
                },
                {
                    text: 'creare array per questa lista',
                    done: false
                },
                {
                    text: 'capire come scrivere gli eventi da collegare',
                    done: false
                },
                {
                    text: '...e come collegarli',
                    done: false
                },
                {
                    text: 'fare tanti errori',
                    done: false
                },
                {
                    text: 'completare questo esercizio',
                    done: false
                }
            ],
            newTask: ''
        };
    },
    methods: {
        toggleTaskStatus(index) {
            this.tasks[index].done = !this.tasks[index].done;
        },
        deleteTask(index) {
          this.tasks.splice(index, 1);
        },
        addTask() {
          if (this.newTask.trim() !== '') {
            this.tasks.push({
              text: this.newTask,
              done: false
            });
            this.newTask = ''; 
          }
        },
        
    }
}).mount('#app');