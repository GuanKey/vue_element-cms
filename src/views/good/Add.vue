<template>
  <div class="good-add">
    <h1 v-if="this.$route.params.id==0">商品新增</h1>
    <h1 v-else>商品修改</h1>

    <div class="form">
      <!-- 第一行 -->
      <el-row type="flex" align="middle">
        <el-col :span="2">
          <span>商品名称：</span>
        </el-col>
        <el-col :span="20">
          <el-input v-model="info.name" placeholder="请输入商品名称"></el-input>
        </el-col>
      </el-row>

      <!-- 第二行 -->
      <el-row type="flex" align="middle">
        <el-col :span="2">
          <span>商品简介：</span>
        </el-col>
        <el-col :span="20">
          <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 4 }"
            placeholder="请输入商品简介"
            v-model="info.desc"
            resize="none"
          >
          </el-input>
        </el-col>
      </el-row>

      <!-- 第三 -->
      <el-row type="flex" align="middle">
        <el-col :span="2">
          <span>商品价格：</span>
        </el-col>
        <el-col :span="4">
          <el-input v-model="info.price" placeholder="请选择商品价格">
          </el-input>
        </el-col>
      </el-row>

      <!-- 第四 -->
      <el-row type="flex" align="middle">
        <el-col :span="2">
          <span>商品品类：</span>
        </el-col>
        <el-col :span="20">
          <CateSelect v-model="info.cate" />
        </el-col>
      </el-row>

      <!-- 第五 -->
      <el-row type="flex" align="middle">
        <el-col :span="2">
          <span>商品图片：</span>
        </el-col>
        <el-col :span="20">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8080/api/upload/img"
            :show-file-list="false"
            :on-success="imgUpload"
          >
            <img v-if="info.img" :src="img.imgBaseUrl+info.img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-row>

      <!-- 第六行 -->
      <el-row type="flex" align="middle">
        <el-col :span="2">
          <span>是否热销：</span>
        </el-col>
        <el-col :span="20">
          <el-radio v-model="info.hot" :label="true">是</el-radio>
          <el-radio v-model="info.hot" :label="false">否</el-radio>
        </el-col>
      </el-row>

      <!-- 第七行 -->
      <el-row type="flex" align="middle">
        <el-col :span="2">
          <span>商品排名：</span>
        </el-col>
        <el-col :span="20">
          <el-input-number
            v-model="info.rank"
            :min="1"
            :max="100000"
            label="给商品排序"
          ></el-input-number>
        </el-col>
      </el-row>

      <!-- 第八行 -->
      <el-row type="flex" align="middle">
        <el-col :span="2"></el-col>
        <el-col :span="20">
          <el-button v-if="this.$route.params.id==0" type="primary" @click="createGood" round
            >新增商品</el-button
          >
          <el-button v-else type="primary" @click="createGood" round
            >修改商品</el-button
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import CateSelect from "@/components/common/CateSelect.vue";
import img from '@/utils/img'
export default {
  components: {
    CateSelect,
  },
  data:function() {
    return {
      img,
      info: {
        name: "",
        desc: "",
        price: "",
        cate: "",
        img: "",
        hot: false,
        rank: 0,
      },
    };
  },
  mounted(){
    let id = this.$route.params.id
    if(id!=0){
      // 编辑
      this.$http.fetchDetail({id}).then(res=>{
        console.log(id)
        this.info=res
      })
    }
  },
  methods: {
    imgUpload(res) {
      this.info.img = res.data.url;
    },
    createGood() {
      let id = this.$route.params.id
      let data = this.info
      if(id){
        data.id=id
      }
      this.$http.fetchCreateGood(data).then(() => {
        this.$message({
          message: "添加商品成功",
          type:'success'
        });
        this.info = {
          name: "",
          desc: "",
          price: "",
          cate: "",
          img: "",
          hot: false,
          rank: 0,
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 60%;
  margin: 35px auto;
  .el-row {
    margin-bottom: 20px;
  }
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
</style>
