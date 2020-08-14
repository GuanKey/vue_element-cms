<template>
  <div class="app">
    <router-view name='login' v-if='$route.path=="/login"'></router-view>

    <Layout v-else></Layout>
  </div>
</template>

<script>
export default {
  name:'App',
  components: {
    Layout:()=>import('@/components/layout/Layout.vue')
  }
}
</script>

<style lang="scss">
html,body{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app{
  width: 100%;
  height: 100%;
  
}
.avatar-uploader .el-upload {
  border: 1px dashed #8c939d;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
