<template>
    <div id="content">
        <div class="jumbotron" >
            <h3 style="color:white;">请在此处键入使用回馈</h3>
            <el-divider id="el-divider"></el-divider>
            <el-input
            type="textarea"
            :autosize="{ minRows: 10, maxRows: 10}"
            placeholder="输入系统使用回馈"
            v-model="textarea2">
            </el-input>
        <el-divider id="el-divider"></el-divider>
        <p align="right"><a class="btn btn-primary btn-lg" href="#" role="button">    提交    </a></p>

        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInput',

    data() {
        return {
            textarea1: '',
            textarea2: ''
        };
    }
};
</script>

<style scoped>
    #el-divider{
        height: 8px;
    }
    #content{
        padding:10%;
        padding-bottom: 0%;
        padding-top: 0%;
    }
    .jumbotron{
        background-color: transparent;
    }
</style>