<template>
    <div id="content">
        <div class="jumbotron">
            <h3 style="color:white;">请在此处键入使用回馈或留言</h3>
            <el-divider id="el-divider"></el-divider>
            <el-input type="textarea" :autosize="{ minRows: 10, maxRows: 10 }" placeholder="输入系统使用回馈" v-model="textarea1">
            </el-input>
            <el-divider id="el-divider"></el-divider>
            <p align="right"><a class="btn btn-primary btn-lg" href="#" role="button" @click="submitmessage(textarea1)">
                    提交 </a></p>

        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInput',

    data() {
        return {
            textarea1: "",
        }
    },

    methods:{

        notice18() {
            this.$notify({
                title: "您的建议或者留言已上传成功",
                message: "所上传建议或者留言将上传到开发者服务器",
                duration: 0,
                type: "success",
            })
        },


        notice19(){
            this.$notify({
                title: "上传失败",
                message: "请检查网络环境",
                duration: 0,
                type: "fail",
            })
        }, 
        submitmessage(file){
            this.notice18();
        },
    }
};
</script>

<style scoped>
#el-divider {
    height: 8px;
}

#content {
    padding: 10%;
    padding-bottom: 0%;
    padding-top: 0%;
}

.jumbotron {
    background-color: transparent;
}
</style>