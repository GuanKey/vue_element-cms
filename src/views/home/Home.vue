<template>
  <div class="home">
    <h1>首页管理</h1>
    <el-row type="flex" align="middle">
      <el-col :span="2">
        <span>轮播图：</span>
      </el-col>
      <el-col :span="10">
        <el-input
          v-model="imgText"
          label="轮播图名："
          placeholder="请输入内容"
        ></el-input>
      </el-col>
    </el-row>

    <el-row type="flex" align="middle">
      <el-col :span="2">
        <span>轮播图：</span>
      </el-col>
      <el-col :span="20">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8080/api/upload/img"
          :show-file-list="false"
          :on-success="imgUpload"
        >
          <img v-if="loadImg" :src="img.imgBaseUrl + loadImg" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-col>
    </el-row>

    <el-row type="flex" align="middle">
      <el-col :span="2">
      </el-col>
      <el-col :span="20">
        <el-button type="primary" @click="submit">上传轮播图</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import img from "@/utils/img";
export default {
  name: "Home",
  data() {
    return {
      img,
      imgText: "",
      loadImg: "",
    };
  },
  methods: {
    imgUpload(res) {
      this.loadImg = res.data.url;
    },
    submit() {
      let data = {
        img: this.loadImg,
        text: this.imgText,
      };
      this.$http.fetchAdsCreate(data).then(() => {
        this.$message({
          message: "上传轮播图成功",
          type: "success",
        });
        this.imgText = "";
        this.loadImg = "";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row{
    width: 60%;
    margin-top: 20px;
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
