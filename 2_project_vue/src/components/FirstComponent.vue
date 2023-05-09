<template>
    <!--Devemos colcoar um elemento pai-->
    <div id="first-component">
        <h1>Hello Vue!!</h1>
        <p>I'm <span> {{ name }} </span> and my ocupation is <span> {{ ocupation }} </span></p>
    </div>
</template>

<script>
    export default {
        name: 'FirstComponent',
        // Evocada como uma função com ()
        data () {
            return {
                // Esses dados só podem ser utilizados dentro do componente
                name: "Samara",
                ocupation: "Developer FrontEnd"
            }
        }
    }
</script>