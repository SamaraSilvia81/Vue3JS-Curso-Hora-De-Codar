<template>
    <div id="form">
        <form action="">
            <!--Isso permite uma independência de componentes-->
            <InputText/>
            <InputText/>
            <Submit/>
        </form>
    </div>
</template>

<script>

    import InputText from '../components/form/InputText.vue';
    import Submit from '../components/form/Submit.vue';

    export default {
        name: 'Form',
        components:{
            InputText,
            Submit
        }
    }
</script>