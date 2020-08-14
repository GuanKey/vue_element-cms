<template>
  <div class="login">
    <div class="title">登录系统</div>
    <el-input v-model="username" placeholder="用户名"></el-input>
    <el-input v-model="password" placeholder="密码"></el-input>
    <el-button type="primary" round @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
    name:'login',
    data:function(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            let data={
                username:this.username,
                password:this.password
            }
            this.$http.fetchLogin(data).then(res=>{
                localStorage.setItem('token',res.token)
                // this.$router.push('/home')
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.login{
    width: 300px;
    height: 500px;
    margin: 100px auto;
    .title{
        font-size: 35px;
        text-align: center;
    }
    >div:nth-of-type(2){
        margin: 10px 0;
        width: 300px;
    }
    >div:nth-of-type(3){
        margin: 10px 0;
        width: 300px;
    }
    >button:nth-of-type(1){
        margin: 10px auto;
        width: 100px;
        display: block;
    }
}
</style>
