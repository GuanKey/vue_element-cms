<template>
  <div class="aside">
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      unique-opened
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      :router="true"
    >
      <!-- 一级菜单 -->
      <el-submenu v-for="nav in navs" :index="nav.id + ''" :key="nav.id">
        <template slot="title">
          <i :class="nav.icon"></i>
          <span v-text="nav.title" exact-active-class="on"></span>
        </template>

        <!-- 二级菜单 -->
        <el-menu-item
          v-for="item in nav.children"
          :key="item.id"
          :index="item.id + ''"
          :route="{ 'path': item.path.replace(':id',0), 'component': item.comm }"
        >
            <i :class="item.icon"></i>
            <span v-text="item.title"></span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import navs from "@/utils/navs";
export default {
  data: function() {
    return {
      navs,
    };
  },
  methods: {
    handleOpen() {},
    clickhandler() {
      console.log("aaaaaa");
    },
  },
};
</script>

<style lang="scss" scoped>
.aside {
  & > h1 {
    text-align: center;
    line-height: 50px;
  }
  .on {
    color: #ffd04b;
  }
}
</style>
