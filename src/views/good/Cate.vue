<template>
  <div class="cate">
    <!-- 添加品类 -->
    <h1>添加品类</h1>
    <div class="cate-add">
      <el-row type="flex">
        <el-col :span="8"></el-col>
        <el-col :span="8"
          ><el-input v-model="cate_zh" placeholder="品类中文"></el-input
        ></el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="8"></el-col>
        <el-col :span="8"
          ><el-input v-model="cate" placeholder="品类英文"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="11"></el-col>
        <el-col :span="8"
          ><el-button type="primary" @click="submit" round>添加品类</el-button>
        </el-col>
      </el-row>
    </div>

    <!-- 展示全部品类 -->
    <div class="cate-all">
      <el-table :data="list" border style="width:100%">
        <el-table-column fixed prop="cate" label="品类英文" width="200">
        </el-table-column>

        <el-table-column prop="cate_zh" label="品类中文" width="200">
        </el-table-column>

        <el-table-column prop="create_time" label="时间" width="200">
        </el-table-column>

        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              @click="handleClick('edit', scope.row)"
              type="text"
              size="small"
              >编辑</el-button
            >
            <el-button
              @click="handleClick('del', scope.row)"
              type="text"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cate_zh: "",
      cate: "",
      id: "",
      list: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$http.fetchAllCate({}).then((res) => {
        this.list = res.list;
      });
    },
    submit() {
      let data = {
        cate: this.cate,
        cate_zh: this.cate_zh,
      };
      let id = this.id;
      if (id) {
        data.id = id;
      }
      this.$http.fetchAddCate(data).then(() => {
        this.$message({
          message: "成功添加商品品类",
          type: "success",
        });
        this.cate = "";
        this.cate_zh = "";
        this.init();
      });
    },
    handleClick(type, item) {
      if (type == "edit") {
        this.$http.fetchCateDetial({ id: item._id }).then((res) => {
          console.log(res);
          this.cate_zh = res.cate_zh;
          this.cate = res.cate;
          this.id = res._id;
        });
      } else {
        this.$http.fetchRemoveCate({ id: item._id }).then(() => {
          this.$message({
            message: "删除品类成功",
            type: "success",
          });
          this.init()
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.cate-all {
  margin: 50px auto 0;
  width: 702px;
}
</style>
