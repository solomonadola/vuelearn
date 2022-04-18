const vw = Vue.createApp({
    data() {
        return {
            firstName: 'Solomon',
            lastName: 'Adola',
            middleName: '',
            age: 20,

        }

    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        },
        increment() {
            this.age++;

        },
        updateLastName(mes, event) {
            console.log(mes)
            this.lastName = event.target.value
        },
        updatefirstName(mes, event) {
            console.log(mes)
            this.firstName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value

        }


    },
}).mount('#app');