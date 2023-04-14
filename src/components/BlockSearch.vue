<template>
  <!-- 区块链溯源相关信息可视化展示区域 -->
  <div class="visualizationOfBlock">
    <div id="info_patient">
      <!-- 卡片放置表格 -->
      <el-card style="border-radius: 30px;background-color: rgba(20, 177, 212,0.2);width:876px;text-align:center;">
        <div slot="header" class="clearfix">
          <span id="fonts">相关信息如下</span>
        </div>
        <el-tabs v-model="activeName">

          <!-- 获取并展示原产地证书 -->
          <el-tab-pane label="原产地证书" name="first" id="certificate">
            <Transition>
              <div
                style="font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;font-size:large;margin:5%;color:darkred;">
                产地证书
              </div>
            </Transition>
            <div class="cer_pic">
              <el-image style="width: 100%; height: 100%" :src="url_0"></el-image>
            </div>
            <Transition>
              <div
                style="font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;font-size:large;margin:5%;color:darkred;">
                产地证书
              </div>
            </Transition>
          </el-tab-pane>



          <el-tab-pane label="有关信息" name="second" id="information">
            <!-- 存放有关信息 -->
            <Transition>
              <div style="font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;
                                                  font-size:large; 
                                                  margin:5%; 
                                                  color:yellow;">
                仓库名称：{{ storage.data.storehouse }}
              </div>
            </Transition>
            <Transition>
              <div style="font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;
                                                  font-size:large; 
                                                  margin:5%;
                                                  color:yellow;">
                区块高度：{{ storage.height }}
              </div>
            </Transition>

            <Transition>
              <div style="font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;
                                                  font-size:large;
                                                  margin:5%;
                                                  color:yellow;">
                区块哈希：{{ storage.txId }}
              </div>
            </Transition>

          </el-tab-pane>


          <el-tab-pane label="温度（℃）" name="third" id="temperatureList">
            <!-- 存放六日的温度 -->
            <template>
              <el-table :data="storage.data.plantDevelopment.temperatureList" style="width: 100%">
                <el-table-column prop="data" label="温度（℃）" width="400px" align="center">
                </el-table-column>
                <el-table-column prop="time" label="时间" width="400px" align="center">
                </el-table-column>
              </el-table>
            </template>
          </el-tab-pane>


          <el-tab-pane label="湿度（%rh）" name="fourth" id="humidityList">
            <!-- 存放六日的湿度 -->
            <template>
              <el-table :data="storage.data.plantDevelopment.humidityList" style="width: 100%">
                <el-table-column prop="data" label="湿度（%rh）" width="400px" align="center">
                </el-table-column>
                <el-table-column prop="time" label="时间" width="400px" align="center">
                </el-table-column>
              </el-table>
            </template>
          </el-tab-pane>


          <el-tab-pane label="光照强度（lx）" name="fifth" id="beamList">
            <!-- 存放六日的光照强度 -->
            <template>
              <el-table :data="storage.data.plantDevelopment.beamList" style="width: 100%">
                <el-table-column prop="data" label="光照强度（lx）" width="400px" align="center">
                </el-table-column>
                <el-table-column prop="time" label="时间" width="400px" align="center">
                </el-table-column>
              </el-table>
            </template>
          </el-tab-pane>

          <el-tab-pane label="原产地图片" name="sixth" id="images">
            <Transition>
              <div
                style="font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;font-size:large;margin:5%;color:darkred;">
                产地实景
              </div>
            </Transition>
            <div class="place_pic" v-for="item in this.url_1" :key="item">

              <el-image style="width: 100%; height: 100%" :src="item">
              </el-image>

            </div>
            <Transition>
              <div
                style="font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;font-size:large;margin:5%;color:darkred;">
                产地实景
              </div>
            </Transition>
          </el-tab-pane>

        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'BlockSearch',
  data() {
    return {
      // percentage: 0,
      // fullscreenLoading: false,
      // opacitys: {
      //   opacity: 0,
      // },
      // dialogTableVisible: false,
      storage: {},
      url_0: [],
      url_1: [],
      // images: [
      //   { image: require('.//environments/all_ripe1.jpg') },
      //   { image: require('.//environments/all_ripe2.jpg') },
      //   { image: require('.//environments/all_ripe3.jpg') },
      //   { image: require('.//environments/all_ripe4.jpg') },
      //   { image: require('.//environments/all_ripe5.jpg') },
      // ],
      activeName: "second",
    }
  },

  mounted() {
    this.$bus.$on("getStorage", (storage) => {
      console.log('我是BlockSearch组件，收到数据', storage.data.plantDevelopment.images)
      this.storage = storage;

      this.$axios.get(`http://fruit.mingbyte.com:55001/gateway/fruit/image?key=${this.storage.data.certOfOrigin}`, { timeout: 1000 * 60 * 2 }).then(
        res => {
          this.url_0 = res.request.responseURL
          console.log("获取产地证书成功", res.request.responseURL)
        },
        err => {
          console.log("请求产地证书失败", err.message)
        },
      )


      this.storage.data.plantDevelopment.images.forEach((image, index) => {
        this.$axios.get(`http://fruit.mingbyte.com:55001/gateway/fruit/image?key=${image}`, { timeout: 1000 * 60 * 2 }).then(
          res => {
            this.url_1.push(res.request.responseURL);
            // this.$set(this.url_1, index, res.request.responseURL);
            console.log("获取实景图片成功", res.request.responseURL)
          },
          err => {
            console.log("请求实景图片失败", err.message)
          },
        )
      })
    })
  },
}
</script>


<style scoped>
.demo-image {
  margin: 50px;
}

.visualizationOfBlock {
  flex: 6;
  border-radius: 15px;
  width: 985px;
  margin-left: 9%;
}

#info_patient {
  margin-top: 10px;
  margin-right: 160px;
}
</style>