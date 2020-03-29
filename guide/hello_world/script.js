var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something nice and cool' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat ((normies))' }
    ]
  }
})

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

var app8 = new Vue({
  el: '#app-8',
  data: obj
})

new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }
})

var app9 = new Vue({
  el: '#app-9',
  data: {
    msg: "NEVER EVER"
  },
  methods: {
    updateMessage: function() {
      console.log("Trying to change!");
      this.msg = this.msg + 'changed!';
    }
  }
})

var app10 = new Vue({
  el: '#app-10',
  data: {
    rawHtml: '<span style="color:red">This should be red.</span>'
  }
})

var app11 = new Vue({
  el: '#app-11',
  data: {
    isButtonDisabled: true
  }
})

var app12 = new Vue({
  el: '#app-12',
  data: {
    ok: true
  },
  methods: {
    flipOk: function() {
      this.ok = !this.ok;
    }
  }
})

var app13 = new Vue({
  el: '#app-13',
  data: {
    eventname: "click",
    eventCount: 0
  },
  methods: {
    updateEventName: function() {
      this.eventname = this.eventname == 'click' ? 'dblclick' : 'click'
      this.incrementEventCount();
    },
    incrementEventCount : function() {
      this.eventCount++;
    }
  }
})

var app14 = new Vue({
  el: '#app-14',
  data: {
    text: 'Click Me!'
  },
  methods: {
    updateButton: function(){
      this.text = "Gasp, I've been clicked!";
    }
  }
})

var computedProp = new Vue({
  el: '#computed-prop',
  data: {
    message: 'Hello',
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    makeReversedMessage: function() {
      return this.message.split('').reverse().join('');
    }
  }
})

var watchedProp = new Vue({
  el: '#watched-prop',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function(val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})

var computedSetter = new Vue({
  el: '#computed-setter',
  data: {
    firstName: 'Nathan',
    lastName: 'Smith',
  },
  computed: {
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      set: function(newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
})

computedSetter.fullName = 'Neagan Smorf';
console.log("First name: " + computedSetter.firstName);
console.log("Last name: " + computedSetter.lastName);