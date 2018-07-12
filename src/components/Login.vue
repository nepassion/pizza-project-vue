<template>
    <div class="row mt-3">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../assets/icon.png" alt="">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="text" id="emial" class="form-control" v-model="email"/>
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="text" id="password" class="form-control" v-model="password"/>
                        </div>
                        <button class="btn btn-primary btn-block">登陆</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        onSubmit(){
            alert('yo')
        }
    }
}
</script>
