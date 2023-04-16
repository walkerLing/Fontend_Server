<template>
    <div id="block_main">
        <div id="mainBodyOfBlock">
            <!-- 查询头部分 -->
            <div class="contentDisplayOfHome">
                <div class="headOfBlockDisplay">
                    <span style="flex:9;font-size:20px;font-weight:bold;color:white;">
                        <i class="el-icon-link"></i>
                        区块链产品溯源
                    </span>
                    <span
                        style="flex:2;font-size:12px;font-weight:bold;color:#4E5C72;justify-content:end;display:flex;color:white">
                        以下数据基于区块链技术支持
                    </span>
                </div>
                <!-- 信息查询部分 -->
                <el-card class="box-card">
                    <span style="flex:9;font-size:15px;font-weight:bold;color:white;">
                        <i class="el-icon-search"></i>
                        信息查询区<br />
                    </span>

                    <el-input v-model="input" placeholder="请输入溯源码进行查询" style="width:90%;margin-top:20px;"></el-input>
                    <el-button size="small" @click="serachData" style='margin-left:15px'>查询</el-button>

                    <el-card class="box-card">
                        <div class="detailBlock">
                            <BlockSearch></BlockSearch>
                        </div>
                    </el-card>
                </el-card>


                <!-- 信息修改部分 -->
                <el-card class="box-card">
                    <span style="flex:9;font-size:15px;font-weight:bold;color:white;">
                        <i class="el-icon-document-add"></i>
                        信息存储区<br />
                    </span>
                    <div class="detailBlock">
                        <BlockStorage></BlockStorage>
                    </div>
                </el-card>
            </div>
            <MyFooter></MyFooter>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import BlockSearch from '../components/BlockSearch';
import BlockStorage from '../components/BlockStorage';
import MyFooter from '../components/MyFooter.vue';
export default {
    name: 'BlockPage',
    components: { BlockSearch, BlockStorage, MyFooter,MyFooter },
    data() {
        return {
            input: '',
        };
    },
    methods: {
        notice2() {
            this.$notify({
                title: "数据查询成功",
                message: "以下数据来自实时区块链上链数据",
                duration: 0,
                type: "success",
            });
        },
        notice3() {
            this.$notify({
                title: "数据查询失败",
                message: "网络繁忙，请稍后重新查询",
                duration: 0,
                type: "fail",
            });
        },
        serachData() {
            console.log("正在查询数据");
            this.$axios.get(`http://fruit.mingbyte.com:55001/gateway/fruit/queryChaincode?uuid=${this.input}`).then(
                res => {
                    this.notice2()
                    console.log("请求成功了", res.data.data)
                    this.$bus.$emit('getStorage', res.data.data)
                },
                err => {
                    this.notice3()
                    console.log("请求失败了", err.message)
                },
            )
        }
    },
}
</script>

<style scoped>
.box-card {
    background-color: transparent;
    width: 100%;
    margin-top: 2%;
    margin-bottom: 2%;
}

.mainBodyOfBlock {
    display: flex;
    width: 100%;
    align-content: center;
    height: 100%;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
}

.contentDisplayOfHome {
    flex: 3;
    height: 100%;
    width: 90%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.headOfBlockDisplay {
    flex: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
    margin-top: 5%;
}

.detailBlock {
    flex: 5;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 5%;
}



#block_main {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 550px;
    width: 1200px;
}

/*滚动条整体部分*/
#block_main::-webkit-scrollbar {
    width: 20px;
    background-color: #F5F5F5;
}

/*滚动条轨道*/
#block_main::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background: rgba(196, 248, 196, 0.5);
}

#block_main::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 5px;
    background-image: -webkit-linear-gradient(top,
            #85250d 0%,
            #c26d49 30%,
            #d5beb7 60%,
            #e4f5fc 100%);
}</style>
