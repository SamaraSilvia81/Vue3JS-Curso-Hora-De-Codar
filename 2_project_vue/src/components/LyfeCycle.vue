<template>
    <h1>My name is: {{ name }}</h1>
</template>

<script>
export default {
    name: 'LyfeCycle',
    data() {
        return {
            name: "I don't know yet"
        }
    },
    // Hook que vai refletir na minha aplicação
    // Me ajudará a tornar dinâmico os meus dados
    created(){
        // this.name = "Samara"
        // Ao fazer isso passamos por cima do "mounted"
        setTimeout(() => {
            this.name = "Samara"
        }, 1000)
    },
    // Hook que está acima da hierarquia
    mounted(){
        // Isso nos ajuda a vê melhor o que está acontecendo
        setTimeout(() => {
            this.name = "Matheus"
        }, 2000)
    }
}
</script>