<template>
    <div class="bodyOfManage">
       <div class="leftNavbar" :style="{width: withOfIconType}">
<!--            头像区-->
           <div class="profileArea">
               <el-tooltip class="item" effect="dark" content="个人中心" placement="bottom">
                   <img v-if="user.adurl" :src="user.adurl" @click="personalCenterApper">
                   <img v-if="!user.adurl"  src="../assets/images/touxiang.png" @click="personalCenterApper">
               </el-tooltip>
           </div>
<!--           导航栏区-->
           <div class="barArea">
<!--               文字导航栏-->
               <transition
                       name="animate__animated animate__bounce"
                       enter-active-class="animate__fadeInUp"
                       leave-active-class="animate__zoomOut"
                       appear
               >
             <div v-show="flagOfShow" style="width: 100%;position: absolute">
                 <router-link :to="{name:'TeamIntroduction'}" active-class="active" >项目介绍</router-link>
                 <router-link :to="{name:'Home'}" active-class="active" >主页信息</router-link>
                 <router-link :to="{name:'TargetDetection'}" active-class="active" >目标检测</router-link>
                 <router-link :to="{name:'RealMonitor'}" active-class="active" >物联监测</router-link>
                 <router-link :to="{name:'BlockPage'}" active-class="active" >产品溯源</router-link>
                 <router-link :to="{name:'UserFeedback'}" active-class="active" >联系我们</router-link>
             </div>
               </transition>
               <transition
                       name="animate__animated animate__bounce"
                       enter-active-class="animate__fadeInUp"
                       leave-active-class="animate__zoomOut"
                       appear
               >
<!--               图标导航栏-->
               <div v-show="!flagOfShow" style="width: 100%;">
                   <el-tooltip class="item" effect="dark"  content="项目介绍" placement="right">
                   <router-link style="font-size: 20px" :to="{name:'TeamIntroduction'}"  active-class="active2"><li class="el-icon-s-marketing"></li></router-link>
                   </el-tooltip>
                   <el-tooltip class="item" effect="dark" content="主页信息" placement="right">
                   <router-link style="font-size: 20px" :to="{name:'Home'}" active-class="active2"><li class="el-icon-s-home"></li></router-link>
                   </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="目标检测" placement="right">
                   <router-link style="font-size: 20px" :to="{name:'TargetDetection'}"  active-class="active2"><li class="el-icon-picture"></li></router-link>
                   </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="物联监测" placement="right">
                   <router-link style="font-size: 20px" :to="{name:'RealMonitor'}" active-class="active2"><li class="el-icon-video-camera-solid"></li></router-link>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="产品溯源" placement="right">
                    <router-link style="font-size: 20px" :to="{name:'BlockPage'}" active-class="active2"><li class="el-icon-link"></li></router-link>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="联系我们" placement="right">
                   <router-link style="font-size: 20px" to="UserFeedback" active-class="active2"><li class="el-icon-user-solid"></li></router-link>
                   </el-tooltip>
               </div>
               </transition>
           </div>

<!--           转换格式按钮-->
           <div class="changeArea">
               <li class="el-icon-guide" @click="changeToIcon"></li>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "LeftNavBar",
        data(){
            return{
                withOfIconType:'100px',
                flagOfShow:true,
                flagOfPersonalCenter:true,
                user: localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{},
            }
        },
        methods:{
            changeToIcon(){
                //文字导航栏
                // if(this.withOfIconType=== '100px') {
                //     this.withOfIconType='80px';
                //     this.flagOfShow= false
                // }else{
                //  //图标样式导航栏
                //     this.withOfIconType='100px';
                //     this.flagOfShow=true
                // }
                this.flagOfShow= !this.flagOfShow
            },
            personalCenterApper(){
                // this.flagOfPersonalCenter = !this.flagOfPersonalCenter
                this.$bus.$emit("personalCenterChange",this.flagOfPersonalCenter)
            }
        },

        mounted() {
        //    绑定全局事件
            this.$bus.$on('updataAdurl',(data)=>{

                this.user.adurl = data;
                console.log("@@@@@"+data)
            })
        },
        beforeDestroy() {
        //    解绑事件
            this.$bus.$off('updataAdurl')
        }

    }
</script>

<style scoped>
    .active{
        background: rgba(196, 248, 196, 0.5);
        color: rgb(105, 66, 66);
    }
    .active2{
        background: rgba(196, 248, 196, 0.5);
        color: rgb(105, 66, 66);
    }
    a{
        position: relative;
        text-decoration: none;
        display: block;
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: white;
        font-family:  '幼圆';
    }
    a::before{
        display: block;
        content: "";
        width: 3px;
        height: 50px;
        position: absolute;
        border-radius: 10px;
        color: rgb(121, 70, 101);

    }
    a:hover::before{
        color:white;
    }
    .bodyOfManage{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .leftNavbar{
        transition: 0.5s linear;
        overflow: hidden;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        height: 550px;
        width: 100px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(153, 75, 76, 0.6);
    }
    .profileArea{

        width: 100%;
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .profileArea:hover img{
        cursor: pointer;
    }
    .barArea{
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex: 7;
        font-weight: bold;
        position: relative;
    }
    .profileArea img{
        border-radius: 10px;
        width: 50px;
        height:50px;
    }
    .changeArea{
        flex: 2;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .changeArea li{
       font-size: 18px;
    }
    .changeArea li:hover{
        color: #257B5E;
        cursor: pointer;
    }


</style>