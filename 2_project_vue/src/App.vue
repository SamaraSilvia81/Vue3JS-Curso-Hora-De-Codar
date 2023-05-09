<template>
  <div id="app">
    <FirstComponent/>
    <p>The data app is {{ test }}</p>
    <LyfeCycle/>
  </div>
</template>

<script>

  import FirstComponent from './components/FirstComponent.vue';
  import LyfeCycle from './components/LyfeCycle.vue';

  export default {
    name: 'App',

    components: {
      FirstComponent,
      LyfeCycle
    },

    data(){
      return {
        test: "Testing"
      }
    }
  }
</script>