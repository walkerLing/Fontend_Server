<template>
    <div id="content">
        <MyHeader></MyHeader>
        <MyContent></MyContent>
        <MyFooter></MyFooter>
      </div>
</template>

<script>
    import MyHeader from '../components/MyHeader';
    import MyFooter from '../components/MyFooter';
    import MyContent from '../components/MyContent';
    // node进行默认暴露
    export default {
        name: "TargetDetection",
        data() {
            return {};
        },
        components: {
            MyHeader,
            MyFooter,
            MyContent,
        },
        methods: {},
    }
</script>
<style scoped>
    #content{
        overflow-y:scroll;
        overflow-x: hidden;
        height: 550px;
        width: 1200px;
    }
     /*滚动条整体部分*/
     #content::-webkit-scrollbar{
        width: 20px;
        background-color: #F5F5F5;
    }
    /*滚动条轨道*/
    #content::-webkit-scrollbar-track{
        -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 5px;
        background: rgba(196, 248, 196, 0.5);
    }
    #content::-webkit-scrollbar-thumb{
        background-color: #fff;
        border-radius: 5px;
        background-image: -webkit-linear-gradient(top,
        #85250d 0%,
        #c26d49 30%,
        #d5beb7 60%,
        #e4f5fc 100%
        );
    }
</style>