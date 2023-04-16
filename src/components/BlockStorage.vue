<template>
  <!-- 区块链溯源相关信息可视化展示区域 -->
  <div class="visualizationOfBlock">
    <div id="info_patient" style="padding-left:7%">
      <!-- 卡片放置表格 -->
      <el-card style="border-radius: 30px;width:877px;text-align:center;background-color:transparent;">

        <div slot="header" class="clearfix">
          <span id="fonts" style="color: white;">存储信息表单如下</span>
        </div>



        <el-form :model="FormData" ref="FormData" label-position="left" label-width="80px">

          <el-form-item label="溯源码" prop="uuid" :rules="[
            { required: true, message: '溯源码不能为空' },
          ]">
            <el-input v-model="FormData.uuid" autocomplete="off" placeholder="请输入溯源码"></el-input>
          </el-form-item>


          <el-form-item label="仓库名称" prop="storehouse">
            <el-input v-model="FormData.storehouse" autocomplete="off" placeholder="请输入仓库名称"></el-input>
          </el-form-item>

          <el-upload ref="upload" accept=".jpg,.png" :limit="1" :on-exceed='limitCheck1' :file-list="fileList1"
            :on-remove="removeFile1" :on-change="fileChange1" :auto-upload="false" :before-upload="beforeUpload1"
            action="https://jsonplaceholder.typicode.com/posts/" style="margin-top:5%;margin-bottom:4%;">
            <el-button slot="trigger" size="large" type="primary">选取产地证书图片（最多1张,不可追加）</el-button>
            <el-button :disabled="fileList1.length < 1" style="margin-left: 10px;" size="large" type="success"
              @click="submitUpload1">图片上传
            </el-button>
            <div slot="tip" class="el-upload__tip">只能上传 jpg/png 文件，且不超过1M</div>
          </el-upload>

          <el-upload ref="upload" accept=".jpg,.png" :limit="1" :on-exceed='limitCheck2' :file-list="fileList2"
            :on-remove="removeFile2" :on-change="fileChange2" :auto-upload="false" :before-upload="beforeUpload2"
            action="https://jsonplaceholder.typicode.com/posts/" style="margin-bottom:5%;">
            <el-button slot="trigger" size="large" type="primary">选取产地实景图片（最多1张,可追加）</el-button>
            <el-button :disabled="fileList2.length < 1" style="margin-left: 10px;" size="large" type="success"
              @click="submitUpload2">图片上传
            </el-button>
            <div slot="tip" class="el-upload__tip">只能上传 jpg/png 文件，且不超过1M</div>
          </el-upload>

          <el-form-item label="温度" prop="plantDevelopmentReq.temperature">
            <el-input v-model="FormData.plantDevelopmentReq.temperature" autocomplete="off"
              placeholder="请输入温度"></el-input>
          </el-form-item>

          <el-form-item label="湿度" prop="plantDevelopmentReq.humidity">
            <el-input v-model="FormData.plantDevelopmentReq.humidity" placeholder="请输入湿度"></el-input>
          </el-form-item>

          <el-form-item label="光照强度" prop="plantDevelopmentReq.beam">
            <el-input v-model="FormData.plantDevelopmentReq.beam" placeholder="请输入光照强度"></el-input>
          </el-form-item>

          <el-form-item size="large">
            <el-button type="primary" @click="submitForm('FormData')">提交数据</el-button>
            <el-button @click="resetForm('FormData')">重置表单</el-button>
          </el-form-item>



        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'BlockStorage',
  data() {
    return {
      fileList1: {},
      fileList2: {},
      FormData: {
        uuid: "",
        certOfOrigin: "",
        storehouse: "",
        plantDevelopmentReq: {
          temperature: "",
          humidity: "",
          beam: "",
          images: [],
        }
      }
    }
  },
  methods: {
    // 选择文件、移除文件、上传文件成功/失败后，都会触发
    fileChange1(file, fileList) {
      this.fileList1 = fileList
      console.log(this.fileList1)
    },
    fileChange2(file, fileList) {
      this.fileList2 = fileList
    },
    // 移除文件时触发
    removeFile1(file, fileList) {
      this.fileList1 = fileList
    },
    removeFile2(file, fileList) {
      this.fileList2 = fileList
    },
    // 选择的文件超出限制的文件总数量时触发
    limitCheck1() {
      this.$message.warning('每次只能上传一个文件')
    },
    limitCheck2() {
      this.$message.warning('每次最多只能上传1个文件')
    },
    // 点击上传按钮
    submitUpload1() {
      // 将文件上传到服务器，先触发beforeUpload事件，对上传的文件进行校验，校验通过后才会上传
      console.log(this.fileList1);

      const form = new FormData()
      form.append("file", this.fileList1[0].raw)

      this.$axios.post("http://fruit.mingbyte.com:55001/gateway/fruit/uploadImage", form,
        {
          headers:
            { 'Content-Type': 'multipart/form-data' }
        }
      )
        .then(res => {
          this.notice17()
          console.log(res.data.data)
          this.FormData.certOfOrigin = res.data.data
          console.log("请求发送成功", res)
        })
        .catch(error => {
          this.notice16()
          console.log("请求发送失败", error)
        })
        this.$refs.upload.submit();
    },
    submitUpload2() {
      // 将文件上传到服务器，先触发beforeUpload事件，对上传的文件进行校验，校验通过后才会上传

      const form = new FormData()
      form.append("file", this.fileList2[0].raw)

      this.$axios.post("http://fruit.mingbyte.com:55001/gateway/fruit/uploadImage", form,
        {
          headers:
            { 'Content-Type': 'multipart/form-data' }
        }
      )
        .then(res => {
          this.notice15()
          console.log(res.data.data)
          // 本行代码用于控制产地实景图片
          // this.FormData.plantDevelopmentReq.images=res.data.data
          // 本行代码用于在线使用追加图片功能
          this.FormData.plantDevelopmentReq.images.push(res.data.data)
          console.log("请求发送成功", res)
        })
        .catch(error => {
          this.notice14()
          console.log("请求发送失败", error)
        })

        this.$refs.upload.submit();


      //使用FormData.append,将得到的响应字符串添加键值对到表单数据中
      // this.FormData.append(this.FormData.images,res2);
    },
    // 文件上传前的校验 —— 常见的校验有：校验文件类型，文件大小
    beforeUpload2(file) {
      // 允许上传的文件格式列表
      let acceptList = ["jpg", "png"]
      // 根据文件名获取文件的后缀名
      let fileType = file.name.split('.').pop().toLowerCase()
      // 判断文件格式是否符合要求
      if (acceptList.indexOf(fileType) === -1) {
        this.$message.error('只能上传 jpg/png 格式的文件 !');
        return false
      }
      // 判断文件大小是否符合要求
      // if (file.size / 1024 / 1024 > 1) {
      //   this.$message.error('上传文件大小不能超过 1M !');
      //   return false
      // }
      console.log(file);
      this.upload2 = file.row
    },
    beforeUpload1(file) {
      // 允许上传的文件格式列表
      let acceptList = ["jpg", "png"]
      // 根据文件名获取文件的后缀名
      let fileType = file.name.split('.').pop().toLowerCase()
      // 判断文件格式是否符合要求
      if (acceptList.indexOf(fileType) === -1) {
        this.$message.error('只能上传 jpg/png 格式的文件 !');
        return false
      }
      // 判断文件大小是否符合要求
      // if (file.size / 1024 / 1024 > 1) {
      //   this.$message.error('上传文件大小不能超过 1M !');
      //   return false
      // }
      console.log(file);
      this.upload1 = file.row
    },




    submitForm(FormData) {
      this.$refs[FormData].validate((valid) => {
        if (valid) {
          // alert('submit!');
          console.log(JSON.stringify(this.FormData))
          this.onSubmit();
        } else {
          // console.log('error submit!!');
          this.notice12();
          return false;
        }
      });
    },



    resetForm(FormData) {
      this.$refs[FormData].resetFields();
      this.notice13();
    },


    notice11() {
      this.$notify({
        title: "数据上传成功",
        message: "所填数据已成功上传到区块链",
        duration: 0,
        type: "success",
      })
    },
    notice13() {
      this.$notify({
        title: "数据重置成功",
        message: "所填数据已进行重置",
        duration: 0,
        type: "success",
      })
    },
    notice12() {
      this.$notify({
        title: "数据上传失败",
        message: "请检查数据类型或网络环境，稍后再次上传",
        duration: 0,
        type: "fail",
      })
    },
    notice14() {
      this.$notify({
        title: "产地实景图上传失败",
        message: "请检查数据类型或网络环境，稍后再次上传",
        duration: 0,
        type: "fail",
      })
    },
    notice15() {
      this.$notify({
        title: "产地实景图上传成功",
        message: "所传产地实景图将追加上传到区块链",
        duration: 0,
        type: "success",
      })
    },
    notice16() {
      this.$notify({
        title: "产地证书上传失败",
        message: "请检查数据类型或网络环境，稍后再次上传",
        duration: 0,
        type: "fail",
      })
    },
    notice17() {
      this.$notify({
        title: "产地证书上传成功",
        message: "所传产地证书将上传到区块链",
        duration: 0,
        type: "success",
      })
    },



    onSubmit() {
      this.$axios.post("http://fruit.mingbyte.com:55001/gateway/fruit/invokeChaincode", JSON.stringify(this.FormData))
        .then(res => {
          console.log("请求发送成功", res)
          this.notice11()
        })
        .catch(error => {
          console.log("请求发送失败", error)
          this.notice12()
        })
    }

  }
}

</script>
<style scoped>
.el-input {
  margin-bottom: 20px;
}

#el-divider {
  height: 10px;
}

.el-upload__input {

  display: none;

}
</style>
<style>
.el-upload input {
  display: none !important;
  ;
}
</style>