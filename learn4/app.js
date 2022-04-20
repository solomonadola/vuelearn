vw = Vue.createApp({
  data() {
    return {
      people: [{
          name: "solomon",
          message: "hello this is solomon writing vue code",
        },
        {
          name: "sam",
          message: "i like the way you do ",
        },
        {
          name: "kdk",
          message: "driving on the sky is cool"
        },
      ],
    }

  },
  methods: {
    move() {
      const first = this.people.shift()
      this.people.push(first)
    }
  },
}).mount("#app");