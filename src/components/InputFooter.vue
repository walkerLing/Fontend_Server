<template>
    <div>

        <div id="body">
        <div id="content" >
            <div class="top">
                <div class="logo-details">
                  &nbsp;&nbsp;&nbsp;
                  <i class="el-icon-sugar"></i>
                    <b class="logo_name">关于我们</b>
                </div>
                <div class="media-icons">
                    <a href="#"><i class="el-icon-grape"></i></a>
                    <a href="#"><i class="el-icon-cherry"></i></a>
                    <a href="#"><i class="el-icon-apple"></i></a>
                    <a href="#"><i class="el-icon-pear"></i></a>
                    <a href="#"><i class="el-icon-orange"></i></a>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="link-boxes">
   
                <ul class="box">
                    <li class="link_name"><i class="el-icon-connection"></i>&nbsp;&nbsp;QQ</li>
                    <li><a href="#">410796551</a></li>
                    <li class="link_name"><i class="el-icon-connection"></i>&nbsp;&nbsp;E-mail</li>
                    <li><a href="#">lingyiming1024@163.com</a></li>
                </ul>
                <ul class="box">
                    <li class="link_name"><i class="el-icon-connection"></i>&nbsp;&nbsp;Github</li>
                    <li><a href="#">https://github.com/walkerLing</a></li>
                    <li class="link_name"><i class="el-icon-connection"></i>&nbsp;&nbsp;Gitee</li>
                    <li><a href="#">https://gitee.com/walkerling</a></li>
                </ul>
                <ul class="input-box">
                    <li class="link_name">Subscribe</li>
                    <li><input type="text" placeholder="Enter your e-mail"></li>
                    <li><input type="button" value="Subscribe"></li>
                </ul>
            </div>
        <p>Design by Yiming Ling/{{ msg }}</p>
    </div>
</div>
</div>

            
  </template>
  <script>
  export default {
    name: "InputFooter",
    data() {
      return {
        msg: "Copyright 2023.1.23",
      };
    },
  };
  </script>
  <style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "微软雅黑" ,sans-serif;
  }
  #body{
    min-height:70vh;
    width:100%;
    background: rgba(158, 153, 153, 0.5);
    bottom:0;
    left:0;
  }
  #body {
    /*background:#F2F6FC;*/
    padding: 6px;
    border-radius: 5px;
    width: 100%;
    height: 100px;
    margin-top: 40px;
  }
  .top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
  }
  .top .logo-details{
    color:#fff;
    font-size: 40px;
    padding-left: 5%;
    padding-top: 5%;
  }
  .top .media-icons a{
    height:40px;
    width:40px;
    margin:0 8px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 27px;
    text-decoration: none;
  }
  .top .media-icons a:hover{
    color:blue;
    background: #FFF
  }
  p {
    color: #FFF;
    text-align: center;
    margin: 50px 150px;
    font-size: 1.1em;
  }
  .link-boxes{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 10%;
    padding-top: 0%;
  }

 .link-boxes .box .link_name{
    color:#FFF;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    position: relative;
 }
 .link-boxes .box li{
    margin: 6px 0;
    list-style:none;
 }
 .link-boxes .input-box{
    list-style:none;
 }
 .link-boxes .input-box .link_name{
    color:#FFF;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    position: relative;
    margin-top: 12px;
 }
 .link-boxes .box li a{
    color: #FFF;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    opacity: 0.8;
 }
 .link-boxes .box li a:hover{
    opacity: 1;
    text-decoration: underline;
 }
 .link-boxes .input-box{
    margin-right: 13%;

 }
 .link-boxes .input-box input{
    height: 40px;
    width: calc(100% + 55px);
    outline: none;
    border: 2px solid white;
    background: rgb(149, 157, 149);
    border-radius: 4px;
    padding: 0 15px;
    font-size: 15px;
 }
.link-boxes .input-box input::placeholder{
    color: rgb(91, 89, 89);
    font-size: 16px;
    text-align: center;
}
.link-boxes .input-box input[type="button"]{
    background: rgb(84, 82, 82);
    color:white;
    border: none;
    font-size: 18px;
    font-weight: 500;
    margin: 20px 0;
}

  </style>
  
  
  