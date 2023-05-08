// Instanciando um componente pai

const MyNameApp = {
    data() {
        return  {
            name: "Samara",
            age: 19
        }
    }
}

// Precisamos instanicar ele na page app
// Criação do App no Vue -> Colocado (montado) dentro do elemento id app

Vue.createApp(MyNameApp).mount("#app")