<template>
  <div id="Header">
    <div class="top-left-edition">
      <span style="color: #fff; font-weight: bold;text-align:center;">
        <i class="el-icon-star-off" style="font-size: 23px"></i>在这里进行智慧果园目标检测任务<br/><br/>
      </span>
      <span style="color: #fff;">
        <i class="el-icon-time" style="font-size: 23px;color:#fff"></i>是个小仙女儿呀
      </span>
    </div>
    <div id="word">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  data() {
    return {
      msg: "MatDet·WEB检测端",
      activeIndex: "1",
    };
  },
  methods: {},
};
</script>
<style scoped>
#Header {
  width: 100%;
  margin-left: 10%;
}

#word {
  margin-left: 50%;
  margin-top: -50px;
  margin-bottom: 0%;
  height: 60px;
  line-height: 2.2em;
}

h1 {
  /*text-align: center;*/
  color: #fff;
  font-size: 2.3em;
  margin-top: 80px;
}

.el-menu-demo {
  width: 80%;
  margin: 0px auto;
  padding: 0px auto;
}

.top-left-edition span i {
  float: left;
  margin-right: 20px;
}

i,
input,
label {
  vertical-align: middle;
}

i {
  border: 0;
  display: block;
  cursor: pointer;
}

.top-left-edition span {
  float: left;
  font-size: 16px;
  color: #999999;
  line-height: 24px;
  margin-right: 40px;
}
</style>


