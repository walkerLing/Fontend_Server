<template>
    <div id="Content">
          <el-carousel :interval="4000">
            <el-carousel-item v-for="item in imgList" :key="item.id">
                <img :src="item.url" style="width:100%;height: 100%;margin-bottom:5%;"/>
            </el-carousel-item>
          </el-carousel>

            <div class="jumbotron">
              <h1 align="right" style="color:white;margin-bottom:5%;">——项目总述</h1>
              <el-card style="border-radius: 30px;border-color:white;background-color: rgba(20, 177, 212,0.2);">
                <p  style="text-indent:3em;color:white">在实施乡村振兴战略和数字乡村建设的大背景下，
                    本项目利用农业元宇宙体系中的区块链技术、数字孪生技术以及人工智能计算机视觉技术，
                    构建了<b>（基于农业元宇宙架构下智慧果园管理解决方案平台）</b>。</p>
                <p  style="text-indent:2em;color:white">针对传统果园生长信息无法快速感知、
                    人力资源浪费大和果蔬质量安全无法有效监控等问题，
                    本项目实现了虚拟果蔬生长状态高精度模拟、无人化智能果园生产以及果实品质的精准溯源，
                    助力智慧农业的高质量发展。
                </p>
                <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
              </el-card>
            </div>
    




    

              <div class="jumbotron">
                <h1 align="right"  style="color:white;margin-bottom:5%;">——相关信息</h1>
                <el-card style="border-radius: 30px;background-color: rgba(20,177,212,0.2);">

                  <el-collapse class="el-collapse" v-model="activeNames" @change="handleChange" style="width:900px;" >
                    <el-collapse-item class="el-collapse-item" title="项目背景及简介（Background and Summary）" name="1" >
                      <div>在实施乡村振兴战略和数字乡村建设的大背景下，针对果蔬生长信息无法快速感知、人力资源损耗严重和果蔬质量安全无法有效监控等问题，</div>
                      <div>本项目利用农业元宇宙体系中的区块链技术、数字孪生技术以及人工智能计算机视觉技术，提出了基于农业元宇宙架构下智慧果园管理解决方案。</div>
                    </el-collapse-item>
                    <el-collapse-item title="项目研究过程及相关成果概述（Process and Outcome）" name="2">
                      <div>首先，我们提出了一种改进的果蔬成熟度目标检测算法，有效解决了复杂场景下果蔬成熟度检测准确率低、可靠性差、效率低等问题</div>
                      <div>（项目组成员一二作发表SCI三区算法创新论文一篇）。其次，结合提出的目标检测算法模型，同时运用农业元宇宙中的数字孪生以及区块链相关技术为平台赋能，</div>
                      <div>使本平台集果蔬生长情况的精确模拟、果蔬目标监测以及成熟度识别、园区远程监控、果实品质的精准溯源等功能为一体，形成了一套高效精准的智慧果园自动化管理解决方案。</div>
                      <div>（相关平台已获得国家计算机软件著作权登记证书）。最后，在禹城市畜牧业发展中心下属果园对平台的落地效果开展联调与测试。测试结果表明该平台的功能实现稳定，在提升果品产量和质量的前提下,</div>
                      <div>降低生产成本,提高资源利用率,切实提升生产效益。</div>
                    </el-collapse-item>
                    <el-collapse-item title="项目应用前景概述（Application Prospect）" name="3">
                      <div>本项目应用前景广阔，为智能采摘与果园估产提供理论与技术支撑，</div>
                      <div>驱动了农业智能化应用在实用化方向上的发展。</div>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </div>       
    </div>
</template>

<script>
export default {
    name: 'SlideShow',
    data() {
        return {
            // 图片地址数组
            imgList:[
                {url:require('../assets/images/banners/banner1.png')},
                {url:require('../assets/images/banners/banner2.png')},
                {url:require('../assets/images/banners/banner3.png')},
                {url:require('../assets/images/banners/banner4.png')},
                {url:require('../assets/images/banners/banner5.png')},
                {url:require('../assets/images/banners/banner6.png')},
            ],
            activeNames: ['1'],
        };
    },
};
</script>

<style scoped>

  .jumbotron{
    background-color: transparent;
    font-family: '幼圆';
    border-radius: 15px;
  }
  .el-collapse .el-collapse-item{
    background: rgba(160, 158, 139, 0.5);
    opacity: 0.8;
    margin: 0;
    text-align: center;
    border-radius: 15px;

  }
  
  #Content {
    width: 100%;
    height: 650px;
    padding: 10%;
    padding-top:2%;
    align-content: center;
  }
</style>