vw = Vue.createApp({
  
//   template: ``,
});
vw.component('hello',{
    template: '<h1>{{message}}</h1>',
    data() {
        return{
            message: "hello world",
        }
    }
})
vw.mount("#app");
// let vw2 = Vue.createApp({
//   data() {
//     return {
//       message: "hello world",
//     }
//   },
//   render() {
//       return Vue.h(
//           'h1',
//           this.message
//       )
//   },
// }).mount("#app2");
