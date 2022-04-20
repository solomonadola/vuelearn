const vw = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selected: "",
      size: 150,
    };
  },
  computed: {
    circle_classes() {
      return {
        purple: this.isPurple,
      };
    },
    style() {
      return {
        width: this.size + "px",
        height: this.size + "px",
        lineHeight: size + "px",
        transform: "rotate(30deg)",
      };
    },
  },
}).mount("#app");
