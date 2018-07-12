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
                        <div class="form-group">
                            <label for="checkPassword">确认密码</label>
                            <input type="text" id="checkPassword" class="form-control" v-model="checkPassword"/>
                        </div>
                        <button class="btn btn-success btn-block">注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs';
export default {
    data(){
        return{
            email:'',
            password:'',
            checkPassword:''
        }
    },
    methods:{
        onSubmit(){
            if(this.password===this.checkPassword){
                const user={
                    email:this.email,
                    password:this.password,
                    checkPassword:this.checkPassword
                }

                axios.post('user',qs.stringify(user))
                .then(res=>{
                    console.log(res)
                    this.$router.push({name:'loginLink'})
                })
            }else{
                alert('两次密码不一致')
            }
        }
    }
}
</script>
