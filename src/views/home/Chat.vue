<template>
    <div class="chat">
        
        <div ref="chat" class="top">
            <div class="row" v-for='item in charArr' :key='item.id'>
                <div v-html="item.msg"></div>
            </div>
        </div>

        <div class="button">
            <el-input v-model="msg" v-model.trim="msg" type='text' @change="send" placeholder="请输入内容"></el-input>
            <el-button type="primary" @click="send">发送消息</el-button>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client'
export default {
    data(){
        return{
            msg:'',
            socket:null,
            charArr:[]
        }
    },
    mounted(){
        this.socket=io('http://localhost:3000')
        this.socket.on('connect',function(){
            console.log('soket连接成功')
        })
        // 接受服务器发来的聊天消息
        this.socket.on('client',msg=>{
            console.log('msg',msg)
            this.charArr.push({
                id:Date.now(),
                msg
            })
        })
    },
    updated(){
        // 让滚动条每次都滚动到底部
        this.$refs.chat.scrollTop=this.$refs.chat.scrollHeight
    },
    methods:{
        send(){
            // 客户向服务器发消息
            this.socket.emit('server',this.msg)
            this.msg=''
        }
    },
    befoerDestroy(){
        // 关闭socket
        this.soket=null
    }
}
</script>

<style lang="scss" scoped>
.chat{
    width: 800px;
    height: 600px;
    margin: 50px auto;
    background: coral;
    .top{
        width: 100%;
        height: 500px;
        background: cornflowerblue;
    }
    .button{
        padding-top: 20px;
        .el-input{
            width: 700px;
        }
    }
}
</style>