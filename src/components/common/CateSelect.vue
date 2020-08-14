<template>
  <div class="cateselect">
    <el-select :value="value" @change="cateChange" placeholder="请选择品类">
      <el-option
        v-for="item in cates"
        :key="item.id"
        :label="item.cate_zh"
        :value="item.cate">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
    props:{
        value:{
            type:String,
            require:true
        }
    },
    data:function(){
        return{
            cates:[]
        }
    },
    mounted(){
        this.$http.fetchAllCate({}).then(res=>{
            this.cates=res.list
        })
    },
    methods:{
        cateChange(val){
            this.$emit('input',val)
        }
    }
};
</script>

<style lang="scss" scoped></style>
