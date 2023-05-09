<template>
    <div id="picture">
        <!--Podemos encurtar v-bind só colocando :-->
        <img :src="avatar" :alt="description">
    </div>
</template>

<script lang="ts">
    export default {
        name: "Picture",
        data(){
            return {
                avatar: "../img/avatar.jpg",
                description: "Avatar developer"
            }
        }
    }
</script>