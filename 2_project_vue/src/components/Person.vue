<template>
    <div id="person">
        <h2>Esta é a descrição da pessoa <span>{{ name }}</span> </h2>
        <Info/>
        <Form/>
    </div>
</template>

<script>

    import Info from './Info.vue';
    import Form from './Form.vue';

    export default {
        name: "Person",
        // Se eu coloco components embaixo não é renderizado
        components:{
            Info,
            Form
        },
        data(){
            return{
                name: "Samara",
            }
        }
    }
</script>
