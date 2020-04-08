var app1 = new Vue({
  el: '#app-1',
  data: {
    isActive: true,
    hasError: false,
    color: green
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    classObject: {
      active: true,
      'text-danger': false,
      color: red
    }
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    isActive: true,
    error: null,
    color: blue
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal',
        color: this.color
      }
    }
  }
})
