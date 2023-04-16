<template>
    <div class="mainBodyOfHome">
        <!--数据展示-->
        <div class="dataDisplayOfHome">
            <!--标题  -->
            <div class="headOfDataDisplay">
                <span style="flex: 9;font-size: 20px;font-weight: bold;color:white;">
                    <i class="el-icon-s-data"></i>
                    智慧果园动态变量监测
                </span>
                <span
                    style="flex: 2;font-size: 12px;font-weight: bold;color: #4E5C72;justify-content: end;display: flex;color:white;">
                    以下数据实时更新
                </span>
            </div>
            <!--            数据具体展示-->
            <div class="detailedData" >
                <!--            大棚内温度-->
                <div class="demoOfDivInDetailedData" style="background-color: #E1F3D8">
                    <div
                        style="flex: 1;width: 100%;height: 100%;display: flex;align-items: end;padding-left: 10px;font-weight: bold">
                        <span>大棚内温度</span>
                    </div>
                    <div
                        style="font-family: PingFangSC-Semibold,PingFang SC;font-size: 25px;font-weight: bold; flex: 2;width: 100%;height: 100%;display: flex;align-items: center;padding-left: 10px">
                        <span>{{ inforOfDaPeng.temperature }}37°</span>
                    </div>
                </div>
                <!--            大棚内人数-->
                <div class="demoOfDivInDetailedData" style="background-color: #FAECD8">
                    <div
                        style="flex: 1;width: 100%;height: 100%;display: flex;align-items: end;padding-left: 10px;font-weight: bold">
                        <span>光照</span>
                    </div>
                    <div
                        style="font-family: PingFangSC-Semibold,PingFang SC;font-size: 25px;font-weight: bold; flex: 2;width: 100%;height: 1;display: flex;align-items: center;padding-left: 10px">
                        <span>{{ inforOfDaPeng.luminance }}37lx</span>
                    </div>
                </div>
                <!--            大棚内风扇状态-->
                <div class="demoOfDivInDetailedData" style="background-color:#FDE2E2">
                    <div
                        style="flex: 1;width: 100%;height: 100%;display: flex;align-items: end;padding-left: 10px;font-weight: bold">
                        <span>湿度</span>
                    </div>
                    <div
                        style="font-family: PingFangSC-Semibold,PingFang SC;font-size: 25px;font-weight: bold; flex: 2;width: 100%;height: 100%;display: flex;align-items: center;padding-left: 10px">
                        <span>{{ inforOfDaPeng.humidity }}37%</span>
                    </div>
                </div>
                <!--            今日室温-->
                <div class="demoOfDivInDetailedData" style="background-color: #DAF3EE">
                    <div
                        style="flex: 1;width: 100%;height: 100%;display: flex;align-items: end;padding-left: 10px;font-weight: bold">
                        <span>室外温度</span>
                    </div>
                    <div
                        style="font-family: PingFangSC-Semibold,PingFang SC;font-size: 25px;font-weight: bold; flex: 2;width: 100%;height: 600px;display: flex;align-items: center;padding-left: 10px">
                        <span>23°</span>
                    </div>
                </div>
                <!--            团队人数-->
                <div class="demoOfDivInDetailedData" style="background-color:#E5EBFD">
                    <div
                        style="flex: 1;width: 100%;height: 100%;display: flex;align-items: end;padding-left: 10px;font-weight: bold">
                        <span>团队人数</span>
                    </div>
                    <div
                        style="font-family: PingFangSC-Semibold,PingFang SC;font-weight:bold;font-size: 20px; flex: 2;width: 100%;height: 100%;display: flex;align-items: center;padding-left: 10px">
                        <span>3人</span>
                    </div>
                </div>
            </div>
        </div>
        <!--数据可视化区域 -->
        <div class="visualizationOfHome">
            <DataTrend></DataTrend>
        </div>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
import MyFooter from '../components/MyFooter.vue';

import DataTrend from '../components/DataTrend'
export default {
    name: "Home",
    components: { DataTrend, MyFooter },
    data() {
        return {
            inforOfDaPeng: {},
        }
    },
    methods: {
        loadInforOfDaPeng() {
            this.request.get("http://localhost:9090/inforofdapeng/newData").then(res => {
                this.inforOfDaPeng = res.data
            })
        }
    },
    created() {
        this.loadInforOfDaPeng()
    }
}
</script>

<style scoped>
.mainBodyOfHome {
    width: 100%;
    align-content: center;
    height: 550px;
    align-items: stretch;
    justify-content: center;
    overflow-y: scroll;
    overflow-x: hidden;
}

.dataDisplayOfHome {
    flex: 3;
    height: 250px;
    width: 90%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.visualizationOfHome {
    flex:8;
    height: 70%;
    width: 85%;
    margin-left: 8%;
    margin-top: 2%;
    border-radius: 15px;
}

.headOfDataDisplay {
    flex: 2;
    margin-top: 5%;
    width: 100%;
    height: 650px;
    display: flex;
    align-items: end;
}

.detailedData {
    flex: 5;
    width: 100%;
    height: 650px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
}

.demoOfDivInDetailedData {
    width: 80%;
    height: 80px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

/*滚动条整体部分*/
.mainBodyOfHome::-webkit-scrollbar {
    width: 20px;
    background-color: #F5F5F5;
}

/*滚动条轨道*/
.mainBodyOfHome::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background: rgba(196, 248, 196, 0.5);
}

.mainBodyOfHome::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 5px;
    background-image: -webkit-linear-gradient(top,
            #85250d 0%,
            #c26d49 30%,
            #d5beb7 60%,
            #e4f5fc 100%);
}</style>