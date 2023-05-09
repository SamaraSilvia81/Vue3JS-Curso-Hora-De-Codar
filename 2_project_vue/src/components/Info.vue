<template>
    <!--Descrever uma pessoa-->
    <div id="info-person">
        <!--As diretivas permite implemntar lógica js no html-->
        <!--Tudo que estiver dentro de "" é lógica JS-->
        <!--If sempre precisa do else-->
        <p v-if="is_working">I'm working actually with Developer Frontend</p>
        <p v-else>I'm looking for new opportunities!</p>
        <p>I use this technologies at work: </p>
        <ul>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>VueJS</li>
        </ul>
        <!--Caso não queira usar o if pode usar ele - É um toogle -->
        <p v-show="show_email">Send a message for : {{ email }} </p>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Info",
        data(){
            return {
                is_working: true,
                show_email: true,
                email: "info@gmail.com"
            }
        }
    }
</script>