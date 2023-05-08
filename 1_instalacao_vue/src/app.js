// Instanciando um componente pai

const MyNameApp = {
    data() {
        return  {
            name: "",
            age: 19,
            input_name: ""
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            this.name = this.input_name // Atribuição de valores - Alteração simultânea
        }
    }
}

// Precisamos instanicar ele na page app
// Criação do App no Vue -> Colocado (montado) dentro do elemento id app

Vue.createApp(MyNameApp).mount("#app")