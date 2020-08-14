<template>
  <div class="list">
    <h1>商品列表</h1>

    <div class="select">
      <el-row type="flex" align="middle">
        <el-col :span="2">品类筛选：</el-col>
        <el-col :span="4">
          <CateSelect v-model="cate" />
        </el-col>
      </el-row>
    </div>

    <div class="table">
      <el-table :data="list" border style="width: 1300px">
        <el-table-column label="商品" width="150" align="center">
          <template v-slot="scope">
            <img class="table-img" :src="img.imgBaseUrl + scope.row.img" />
            <div class="table-name" v-text="scope.row.name"></div>
          </template>
        </el-table-column>

        <el-table-column
          prop="desc"
          label="商品描述"
          width="400"
          align="center"
        >
        </el-table-column>

        <el-table-column prop="price" label="价格" width="80" align="center">
        </el-table-column>

        <el-table-column prop="cate" label="品类" width="150" align="center">
        </el-table-column>

        <el-table-column prop="hot" label="是否热销" width="100" align="center">
        </el-table-column>

        <el-table-column
          prop="rank"
          label="商品排名"
          width="100"
          align="center"
        >
        </el-table-column>

        <el-table-column
          prop="create_time"
          label="创建时间"
          width="160"
          align="center"
        >
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="100">
          <template v-slot="scope">
            <el-button type="text" size="small" @click="skipAdd(scope.row)"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="skipRemove(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="list-page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :current-page='page'
        :page-size="2"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import CateSelect from "@/components/common/CateSelect.vue";
import img from "@/utils/img";
export default {
  components: {
    CateSelect,
  },
  data() {
    return {
      img,
      cate: "",
      page: 1,
      list: [],
      total: 0,
    };
  },
  watch: {
    cate() {
      this.page = 1;
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let params = {
        cate: this.cate,
        page: this.page,
      };
      this.$http.fetchGoodList(params).then((res) => {
        res.list.map(function(item){
          item.hot=item.hot==true ? '是' : '否' // 把布尔值换成字符串
        })
        console.log(res)
        this.list = res.list;
        this.total = res.total;
      });
    },
    pageChange(page) {
      this.page = page;
      this.init();
    },
    skipAdd(row) {
      this.$router.push("/goodadd/" + row._id);
    },
    skipRemove(row){
      this.$http.fetchRemoveList({id:row._id}).then(res=>{
        if(res.err==0){
          this.$message({
          message: '删除成功',
          type: 'success'
        });
        this.pageChange(1)
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 60%;
  padding: 25px 150px 0;
}
.table {
  padding: 25px 150px 0;
  .table-img {
    display: block;
    height: 100px;
    width: 100px;
    margin: 0 auto;
  }
  .table-name {
    display: block;
    width: 100px;
    height: 20px;
    text-align: center;
    margin: 5px auto;
  }
}
.list-page {
  margin: 20px 150px 0;
}
</style>
