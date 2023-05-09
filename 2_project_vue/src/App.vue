<template>
  <div id="app">
    <FirstComponent/>
    <Person/>
    <!-- <p>The data app is <span> {{ test }} </span></p> -->
    <!-- <LyfeCycle/> -->
  </div>
</template>

<script>

  import FirstComponent from './components/FirstComponent.vue';
  import LyfeCycle from './components/LyfeCycle.vue';
  import Person from './components/Person.vue';

  export default {
    name: 'App',

    components: {
      FirstComponent,
      LyfeCycle,
      Person
    },

    data(){
      return {
        test: "Testing"
      }
    }
  }
</script>