<template>
  <div id="app">
    <Header/>
    <FirstComponent/>
    <LyfeCycle/>
    <Person/>
    <p>The data app is <span> {{ test }} </span></p>
  </div>
</template>

<script>

  import FirstComponent from './components/FirstComponent.vue';
  import Header from './components/Header.vue';
  import LyfeCycle from './components/LyfeCycle.vue';
  import Person from './components/Person.vue';

  export default {
    name: 'App',

    components: {
      FirstComponent,
      LyfeCycle,
      Person,
      Header
    },

    data(){
      return {
        test: "Testing"
      }
    }
  }
</script>