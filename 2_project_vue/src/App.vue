<template>
  <!--<h1>Hello World</h1>-->
  <!--Essa chamada funciona com letras minusculas e um (-) separando tbm-->
  <FirstComponent/>
</template>

<script>
  import FirstComponent from './components/FirstComponent.vue';

  export default {
    // Assim o vue irá saber que esse template é a minha página app
    name: 'App',
    // Criando um outro objeto declarando ao vue que usaremos components
    components: {
      FirstComponent
    }
  }
</script>