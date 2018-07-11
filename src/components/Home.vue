<template>
    <div>
        <h1>Home</h1>
        <button @click="gotoMenu" class="btn btn-primary">go to order</button>
    </div>
</template>
<script>
export default {
    methods:{
        gotoMenu(){
            // this.$router.go(-1);
            //this.$router.replace('/menu');
            // this.$router.replace({name:'menuLink'});
            // this.$router.push('/menu');
            this.$router.push({name:'menuLink'})
        }
    }
}
</script>

