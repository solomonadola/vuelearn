const vw = Vue.createApp({
  data() {
    return {
      firstName: "Solomon",
      lastName: "Adola",
      middleName: "",
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(mes, event) {
      console.log(mes);
      this.lastName = event.target.value;
    },
    updateFirstName(mes, event) {
      console.log(mes);
      this.firstName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("the computed property was called");
      return `${this.firstName} ${this.middleName} ${this.lastName} `;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount("#app");
