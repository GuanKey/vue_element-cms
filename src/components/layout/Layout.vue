<template>
  <div class="layout">
    <el-container>

      <el-aside width="200px">
          <Aside></Aside>
      </el-aside>

      <el-container>
        <el-header>
            <Header></Header>
        </el-header>

        <el-main>
            <Main></Main>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    components:{
        Aside:()=>import('./Aside.vue'),
        Header:()=>import('./Header.vue'),
        Main:()=>import('./Main.vue')
    }
};
</script>

<style lang="scss" scoped>
body,html{
  width: 100%;
  height: 100%;
}
.layout{
    height: 100%;
    .el-container {
    height: 100%;
    .el-aside {
      background: #545c64;
      color: white;
      height: 100%;
    }
  }
  .el-header {
    background: white;
    border-bottom: 1px solid #ccc;
  }
  .el-main {
    background: rgb(238, 240, 243);
    box-sizing: border-box;
    padding: 15px;
    width: 100%;
    height: 100%;
  }
}
</style>
