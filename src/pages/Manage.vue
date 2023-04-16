<template>
    <div id="Manage_Main">

        <div class="mainBody">
<!--        左侧边栏-->
        <div class="leftBar">
            <LeftNavBar/>
        </div>
<!--        数据可视化部分-->
        <div class="dataView" >
            <div id="dataView_background">

            </div>

            <transition
                    name="animate__animated animate__bounce router_view"
                    enter-active-class="animate__fadeIn"
                    leave-active-class="animate__fadeOut"
                    appear
            >
            <router-view style="transition: all 0.1s" />
            </transition>
            <!--        右侧个人中心组件-->
            <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__bounceInRight"
                    leave-active-class="animate__fadeOutRight"
                    appear
            >
            <div v-show="personalViewFlag" class="personalCenter">
                <PersonalView/>
            </div>
            </transition>
        </div>
        </div>
        <MyFooter></MyFooter>
    </div>
</template>
<script>
    import LeftNavBar from "../components/LeftNavBar";
    import PersonalView from "../components/PersonalView";
    import SlideShow from "../components/SlideShow.vue";
    import MyFooter from "../components/MyFooter.vue";
    export default {
        name: "Manage",
        components:{LeftNavBar,PersonalView,SlideShow,MyFooter},
        data(){
            return{
                personalViewFlag:false
            }
          },
        mounted() {
            this.$bus.$on('personalCenterChange',(data)=>{
                this.personalViewFlag=data
            })
        },
    }
</script>

<style scoped>

.mainBody{
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    background-image: url("../assets/images/background.png");
    background-size: 100%;
    position: relative;

}
    .dataView{
        width: 1200px;
        height: 550px;
        border-bottom-right-radius: 15px;
        border-top-right-radius: 15px;
        position: relative;
        box-shadow: 20px 20px 10px rgb(124, 128, 124);
        background-repeat: no-repeat;
        background-size:100%;
        background: rgba(196, 248, 196, 0.5)
    }
    
    .personalCenter{
        position: absolute;
        right: 0px;
        top: 0px;
        z-index:2;
    }
    .router_view-leave-active {
        opacity: 0;
    }

</style>