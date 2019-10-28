new Vue({
	el: '#app',
  data: {
    title: 'Hello World',
    link: 'https://google.com',
    finishedLink: '<a href="https://google.com">Google</a>'
  },
  methods: {
  	sayHello: function(event) {
        this.title = 'Hello!';
    	return this.title;
    }
  }
});
