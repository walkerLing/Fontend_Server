<template>
  <div id="Content">
    <el-carousel :interval="4000">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.url" style="width:100%;height: 100%;margin-bottom:5%;" />
      </el-carousel-item>
    </el-carousel>

    <div class="jumbotron">
      <h1 align="right" style="color:white;margin-bottom:5%;">——项目总述</h1>
      <el-card style="border-radius: 30px;border-color:white;background-color: rgba(20, 177, 212,0.2);">
        <p style="text-indent:3em;color:white">在实施乡村振兴战略和数字乡村建设的大背景下，
          本项目利用农业元宇宙体系中的区块链、人工智能计算机视觉等技术，
          构建了<b>（基于农业元宇宙架构下智慧果园管理平台）</b>。</p>
        <p style="text-indent:2em;color:white">本平台将构想的智慧果园解决方案落实在了区块链智能合约的开发和应用、
          目标检测模型的创新和生产环境部署、B/S模式浏览器端应用平台的开发和部署之上。人工智能技术、区块链技术是农业元宇宙架构中的重要组成部分，
          在本平台中用户可以进行对果园中农产品进行溯源、对果园中果实进行精准目标检测定位、对果园有关动态变量进行监测以及意见反馈等操作。
        </p>
      </el-card>
    </div>


    <div class="jumbotron">
      <h1 align="right" style="color:white;margin-bottom:5%;">——相关创新</h1>
        <el-card style="border-radius: 30px;border-color:white;background-color: rgba(20, 177, 212,0.2);">
          <p style="color:white">1. 计算机视觉目标检测算法创新</p>
          <br><p style="text-indent:3em;color:white;font-size:large;">通过改进传统的深度学习目标检测模型，提出了果蔬成熟度目标检测模型MatDet。</p>
            <br><p style="text-indent:3em;color:white;font-size:large;">➢ 引入 ResNet-101 主干特征提取网络
            该模型由标识块与卷积块两种瓶颈块经过多次堆叠而成。其结构使该模型能够更好地拟合恒等函数，解决了的网络退化问题。</p>
            <br><p style="text-indent:3em;color:white;font-size:large;">➢ 引入 RoI Align 特征映射算法
            采用双线性插值计算并池化每个小单元中在四个采样点位置提高特征的精确值，进而解决了人为量化操作产生误差的问题。</p>
            <br><p style="text-indent:3em;color:white;font-size:large;">➢ 引入 PANet 多尺度特征融合网络
            引入路径聚合网络，提升模型在枝叶遮挡和果实重叠等复杂情况下的识别精度。</p>
          <p style="color:white">2. 平台开发创新</p>
          <br><p style="text-indent:3em;color:white;font-size:large;">本平台将智慧果园解决方案进行落实，将溯源、检测等功能集成部署开发，具有独创性。
          </p>
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
      imgList: [
        { url: require('../assets/images/banners/banner1.png') },
        { url: require('../assets/images/banners/banner2.png') },
        { url: require('../assets/images/banners/banner3.png') },
        { url: require('../assets/images/banners/banner4.png') },
        { url: require('../assets/images/banners/banner5.png') },
        { url: require('../assets/images/banners/banner6.png') },
      ],
      activeNames: ['1'],
    };
  },
};
</script>

<style scoped>
.jumbotron {
  background-color: transparent;
  font-family: '幼圆';
  border-radius: 15px;
}

.el-collapse .el-collapse-item {
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
  padding-top: 2%;
  align-content: center;
}
</style>