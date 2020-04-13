Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})

Vue.component('blog-post-event', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

Vue.component('blog-post-event-value', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.5)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

componentsDemo = new Vue({
  el: '#components-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: "It's been short" },
      { id: 2, title: 'Blogging with Vue', content: "But it's been fun" },
      { id: 3, title: 'Why Vue is so based', content: "And it'll continue" }
    ]
  }
})

blogPostsEvents = new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: "It's been short" },
      { id: 2, title: 'Blogging with Vue', content: "But it's been fun" },
      { id: 3, title: 'Why Vue is so based', content: "And it'll continue" }
    ],
    postFontSize: 1,
    postValueFontSize: 1
  }
})
