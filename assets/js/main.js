var app = new Vue(
  {
    el: '#root',
    data: {
      utentText: '',
      todos: [
        {
          title: 'Inserire i miei todos',
          status: 'todo',
        }
      ]
    },

    // function per ordinare prima i todo da fare
    // e poi quelli eliminati
    computed:{
      todoCpu: function() {
        let todosOk = this.todos.filter((item) => item.status == 'todo');
        let todosDel = this.todos.filter((item) => item.status == 'delete');

        return[...todosOk, ...todosDel];
      }
    },

    methods: {
      // richiamao evento invio
      add: function() {
        if(this.utentText != ''){
          const obj = {
            title: this.utentText,
            status: 'todo',
          }
          this.todos.push(obj);
          this.utentText = '';
        }
      },

      // click icon check
      check: function(todo) {
        let index = this.todos.indexOf(todo);
        this.todos[index].status = 'delete';
      }
  }
  }
);
