<template>
    <div id="Moniter_main" style="height:'100%';weight:'100%'" >
        <h1 style="color:white;"><i class="el-icon-video-camera-solid"></i>&nbsp;&nbsp;智慧果园物联网实时监测</h1>
        <el-divider id="el-divider"></el-divider>
        <h4 style="color:white;"><i class="el-icon-video-camera">&nbsp;&nbsp;</i>地点1(1号摄影机)：</h4>
        <video id='video_introduction' controls src=".//videos/video1.mp4"></video>
        <el-divider id="el-divider"></el-divider>
        <h4 style="color:white;"><i class="el-icon-video-camera">&nbsp;&nbsp;</i>地点2(2号摄影机)：</h4>
        <video id='video_introduction' controls src=".//videos/video2.mp4"></video>
        <el-divider id="el-divider"></el-divider>
        <h4 style="color:white;"><i class="el-icon-video-camera">&nbsp;&nbsp;</i>地点3(3号摄影机)：</h4>
        <video id='video_introduction' controls src=".//videos/video3.mp4"></video>
        <el-divider id="el-divider"></el-divider>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
import MyFooter from '../components/MyFooter.vue';
    export default {
        name: "RealMonitor",
        components:{MyFooter}
    }
</script>

<style scoped>
    #el-divider{
        width:100%;
        height: 20px;
    }
    #Moniter_main{
        background-image:transparent;
        padding: 20%;
        padding-top:1%;
        padding-bottom: 2%;
        height: 550px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    #video_introduction{
        width: 100%;
    }
    /*滚动条整体部分*/
    #Moniter_main::-webkit-scrollbar{
        width: 20px;
        background-color: #F5F5F5;
    }
    /*滚动条轨道*/
    #Moniter_main::-webkit-scrollbar-track{
        -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 5px;
        background: rgba(196, 248, 196, 0.5);
    }
    #Moniter_main::-webkit-scrollbar-thumb{
        background-color: #fff;
        border-radius: 5px;
        background-image: -webkit-linear-gradient(top,
        #85250d 0%,
        #c26d49 30%,
        #d5beb7 60%,
        #e4f5fc 100%
        );
    }
    .el-icon-video-camera-solid{
        background-color: transparent;
        font-size: 40px;
        margin-bottom: 0px;
    }
</style>