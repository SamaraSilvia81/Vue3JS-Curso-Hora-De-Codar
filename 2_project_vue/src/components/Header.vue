<template>
    <div id="header">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </template>
  
<script>
    export default {
      name: 'Header'
    }
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
    }

    li {
        margin-right: 1rem;
    }

    a {
        color: rgb(185, 128, 238);
        text-decoration: none;
        transition: .5s;
        padding: .5rem;
    }
    
    a:hover{
      color: aliceblue;
      background-color: rgb(183, 136, 226);;
    }
</style>