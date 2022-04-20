vw = Vue.createApp({
    data() {
      return {
          mode:1,
        birds:['pigeons','eagles','doves','parrots'],
        people:[
            {name:'solomon',age:22},
            {name:'samuel',age:20},
            {name:'kusito',age:22}
        ]
      };
    },
  }).mount("#app");