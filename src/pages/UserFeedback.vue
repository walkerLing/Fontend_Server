<template>
    <div>
        <div id="feedback_main">
            <UserInput></UserInput>
            <InputFooter></InputFooter>
        </div>
    </div>

</template>

<script>
    import InputFooter from '../components/InputFooter';
    import UserInput from '../components/UserInput'
    export default {
        name: "UserFeedback",
        components:{UserInput,InputFooter}
    }
</script>

<style scoped>
    #feedback_main{
        overflow-y: scroll;
        overflow-x: hidden;
        height: 550px;
        width: 1200px;
    }
    /*滚动条整体部分*/
    #feedback_main::-webkit-scrollbar{
        width: 20px;
        background-color: #F5F5F5;
    }
    /*滚动条轨道*/
    #feedback_main::-webkit-scrollbar-track{
        -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 5px;
        background: rgba(196, 248, 196, 0.5)
    }
    /*滚动条里面的小方块*/
    #feedback_main::-webkit-scrollbar-thumb{
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