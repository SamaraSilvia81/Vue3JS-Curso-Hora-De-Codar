<template>
    <!--Descrever uma pessoa-->
    <div id="info-person">
        <Picture/>
        <p v-if="is_working">I'm working actually with Developer Frontend</p>
        <p v-else>I'm looking for new opportunities!</p>
        <p>I use this technologies at work: </p>
        <ul>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>VueJS</li>
        </ul>
        <div class="show-email">
            <!--Directiva para função de click-->
            <button @click="showEmail">{{ textButton }}</button>
        </div>
        <p v-show="show_email">Send a message for : {{ email }} </p>
        <!--Usamos o v-bind, se não a url que passamos estaria ativa na própria tag e queremos que ela seja apenas uma referência. Assim como, ocorre com "is_working"-->
        <p>If you want acess my portfolio <a v-bind:href="my_link" target="_blank"> just click here </a> </p>
    </div>
</template>

<script lang="ts">

    import Picture from './Picture.vue';

    export default {
        name: "Info",
        components:{
            Picture
        },
        data(){
            return {
                is_working: true,
                show_email: false,
                email: "info@gmail.com",
                my_link: "http://google.com",
                textButton: "Show E-mail"
            }
        },
        methods:{
            showEmail(){
                this.show_email = !this.show_email;
                if(!this.show_email){
                    this.textButton = "Show E-mail"
                } else {
                    this.textButton = "Hide E-mail"
                }
            }
        }
    }
</script>