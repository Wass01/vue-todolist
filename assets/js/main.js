var app = new Vue(
  {
    el: '#root',
    data: {
      utentText: '',
      todos: [
        {
          title: 'Inserire i miei todos',
        }
      ]
    },
    methods: {
      // richiamao evento invio
      add: function() {
        if(this.utentText != ''){
          const obj = {
            title: this.utentText,
          }
          this.todos.push(obj);
          this.utentText = '';
        }
      }
  }
  }
);
