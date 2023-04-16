"use strict";(self["webpackChunkling_project"]=self["webpackChunkling_project"]||[]).push([[610],{2920:function(t,e,a){a.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"Footer"}},[e("p",[t._v(t._s(t.msg))])])},o=[],s={name:"MyFooter",data(){return{msg:"Design by Yiming Ling/Copyright 2023.1.23"}}},l=s,r=a(1001),n=(0,r.Z)(l,i,o,!1,null,"bb0dfcf2",null),c=n.exports},4610:function(t,e,a){a.r(e),a.d(e,{default:function(){return S}});var i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"block_main"}},[e("div",{attrs:{id:"mainBodyOfBlock"}},[e("div",{staticClass:"contentDisplayOfHome"},[t._m(0),e("el-card",{staticClass:"box-card"},[e("span",{staticStyle:{flex:"9","font-size":"15px","font-weight":"bold",color:"white"}},[e("i",{staticClass:"el-icon-search"}),t._v(" 信息查询区"),e("br")]),e("el-input",{staticStyle:{width:"90%","margin-top":"20px"},attrs:{placeholder:"请输入溯源码进行查询"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),e("el-button",{staticStyle:{"margin-left":"15px"},attrs:{size:"small"},on:{click:t.serachData}},[t._v("查询")]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"detailBlock"},[e("BlockSearch")],1)])],1),e("el-card",{staticClass:"box-card"},[e("span",{staticStyle:{flex:"9","font-size":"15px","font-weight":"bold",color:"white"}},[e("i",{staticClass:"el-icon-document-add"}),t._v(" 信息存储区"),e("br")]),e("div",{staticClass:"detailBlock"},[e("BlockStorage")],1)])],1),e("MyFooter")],1)])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"headOfBlockDisplay"},[e("span",{staticStyle:{flex:"9","font-size":"20px","font-weight":"bold",color:"white"}},[e("i",{staticClass:"el-icon-link"}),t._v(" 区块链产品溯源 ")]),e("span",{staticStyle:{flex:"2","font-size":"12px","font-weight":"bold",color:"white","justify-content":"end",display:"flex"}},[t._v(" 以下数据基于区块链技术支持 ")])])}],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"visualizationOfBlock"},[e("div",{attrs:{id:"info_patient"}},[e("el-card",{staticStyle:{"border-radius":"30px","background-color":"rgba(20, 177, 212,0.2)",width:"876px","text-align":"center"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{attrs:{id:"fonts"}},[t._v("相关信息如下")])]),e("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"原产地证书",name:"first",id:"certificate"}},[e("Transition",[e("div",{staticStyle:{"font-family":"Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif","font-size":"large",margin:"5%",color:"darkred"}},[t._v(" 产地证书 ")])]),e("div",{staticClass:"cer_pic"},[e("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.url_0}})],1),e("Transition",[e("div",{staticStyle:{"font-family":"Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif","font-size":"large",margin:"5%",color:"darkred"}},[t._v(" 产地证书 ")])])],1),e("el-tab-pane",{attrs:{label:"有关信息",name:"second",id:"information"}},[e("Transition",[e("div",{staticStyle:{"font-family":"Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif","font-size":"large",margin:"5%",color:"yellow"}},[t._v(" 仓库名称："+t._s(t.storage.data.storehouse)+" ")])]),e("Transition",[e("div",{staticStyle:{"font-family":"Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif","font-size":"large",margin:"5%",color:"yellow"}},[t._v(" 区块高度："+t._s(t.storage.height)+" ")])]),e("Transition",[e("div",{staticStyle:{"font-family":"Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif","font-size":"large",margin:"5%",color:"yellow"}},[t._v(" 区块哈希："+t._s(t.storage.txId)+" ")])])],1),e("el-tab-pane",{attrs:{label:"温度（℃）",name:"third",id:"temperatureList"}},[[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.storage.data.plantDevelopment.temperatureList}},[e("el-table-column",{attrs:{prop:"data",label:"温度（℃）",width:"400px",align:"center"}}),e("el-table-column",{attrs:{prop:"time",label:"时间",width:"400px",align:"center"}})],1)]],2),e("el-tab-pane",{attrs:{label:"湿度（%rh）",name:"fourth",id:"humidityList"}},[[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.storage.data.plantDevelopment.humidityList}},[e("el-table-column",{attrs:{prop:"data",label:"湿度（%rh）",width:"400px",align:"center"}}),e("el-table-column",{attrs:{prop:"time",label:"时间",width:"400px",align:"center"}})],1)]],2),e("el-tab-pane",{attrs:{label:"光照强度（lx）",name:"fifth",id:"beamList"}},[[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.storage.data.plantDevelopment.beamList}},[e("el-table-column",{attrs:{prop:"data",label:"光照强度（lx）",width:"400px",align:"center"}}),e("el-table-column",{attrs:{prop:"time",label:"时间",width:"400px",align:"center"}})],1)]],2),e("el-tab-pane",{attrs:{label:"原产地图片",name:"sixth",id:"images"}},[e("Transition",[e("div",{staticStyle:{"font-family":"Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif","font-size":"large",margin:"5%",color:"darkred"}},[t._v(" 产地实景 ")])]),t._l(this.url_1,(function(t){return e("div",{key:t,staticClass:"place_pic"},[e("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t}})],1)})),e("Transition",[e("div",{staticStyle:{"font-family":"Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif","font-size":"large",margin:"5%",color:"darkred"}},[t._v(" 产地实景 ")])])],2)],1)],1)],1)])},l=[],r=(a(7658),{name:"BlockSearch",data(){return{storage:{},url_0:[],url_1:[],activeName:"second"}},mounted(){this.$bus.$on("getStorage",(t=>{console.log("我是BlockSearch组件，收到数据",t.data.plantDevelopment.images),this.storage=t,this.$axios.get(`http://fruit.mingbyte.com:55001/gateway/fruit/image?key=${this.storage.data.certOfOrigin}`,{timeout:12e4}).then((t=>{this.url_0=t.request.responseURL,console.log("获取产地证书成功",t.request.responseURL)}),(t=>{console.log("请求产地证书失败",t.message)})),this.storage.data.plantDevelopment.images.forEach(((t,e)=>{this.$axios.get(`http://fruit.mingbyte.com:55001/gateway/fruit/image?key=${t}`,{timeout:12e4}).then((t=>{this.url_1.push(t.request.responseURL),console.log("获取实景图片成功",t.request.responseURL)}),(t=>{console.log("请求实景图片失败",t.message)}))}))}))}}),n=r,c=a(1001),p=(0,c.Z)(n,s,l,!1,null,"b112abf2",null),m=p.exports,d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"visualizationOfBlock"},[e("div",{staticStyle:{"padding-left":"7%"},attrs:{id:"info_patient"}},[e("el-card",{staticStyle:{"border-radius":"30px",width:"877px","text-align":"center","background-color":"transparent"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticStyle:{color:"white"},attrs:{id:"fonts"}},[t._v("存储信息表单如下")])]),e("el-form",{ref:"FormData",attrs:{model:t.FormData,"label-position":"left","label-width":"80px"}},[e("el-form-item",{attrs:{label:"溯源码",prop:"uuid",rules:[{required:!0,message:"溯源码不能为空"}]}},[e("el-input",{attrs:{autocomplete:"off",placeholder:"请输入溯源码"},model:{value:t.FormData.uuid,callback:function(e){t.$set(t.FormData,"uuid",e)},expression:"FormData.uuid"}})],1),e("el-form-item",{attrs:{label:"仓库名称",prop:"storehouse"}},[e("el-input",{attrs:{autocomplete:"off",placeholder:"请输入仓库名称"},model:{value:t.FormData.storehouse,callback:function(e){t.$set(t.FormData,"storehouse",e)},expression:"FormData.storehouse"}})],1),e("el-upload",{ref:"upload",staticStyle:{"margin-top":"5%","margin-bottom":"4%"},attrs:{accept:".jpg,.png",limit:1,"on-exceed":t.limitCheck1,"file-list":t.fileList1,"on-remove":t.removeFile1,"on-change":t.fileChange1,"auto-upload":!1,"before-upload":t.beforeUpload1,action:"https://jsonplaceholder.typicode.com/posts/"}},[e("el-button",{attrs:{slot:"trigger",size:"large",type:"primary"},slot:"trigger"},[t._v("选取产地证书图片（最多1张,不可追加）")]),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{disabled:t.fileList1.length<1,size:"large",type:"success"},on:{click:t.submitUpload1}},[t._v("图片上传 ")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传 jpg/png 文件，且不超过1M")])],1),e("el-upload",{ref:"upload",staticStyle:{"margin-bottom":"5%"},attrs:{accept:".jpg,.png",limit:1,"on-exceed":t.limitCheck2,"file-list":t.fileList2,"on-remove":t.removeFile2,"on-change":t.fileChange2,"auto-upload":!1,"before-upload":t.beforeUpload2,action:"https://jsonplaceholder.typicode.com/posts/"}},[e("el-button",{attrs:{slot:"trigger",size:"large",type:"primary"},slot:"trigger"},[t._v("选取产地实景图片（最多1张,可追加）")]),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{disabled:t.fileList2.length<1,size:"large",type:"success"},on:{click:t.submitUpload2}},[t._v("图片上传 ")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传 jpg/png 文件，且不超过1M")])],1),e("el-form-item",{attrs:{label:"温度",prop:"plantDevelopmentReq.temperature"}},[e("el-input",{attrs:{autocomplete:"off",placeholder:"请输入温度"},model:{value:t.FormData.plantDevelopmentReq.temperature,callback:function(e){t.$set(t.FormData.plantDevelopmentReq,"temperature",e)},expression:"FormData.plantDevelopmentReq.temperature"}})],1),e("el-form-item",{attrs:{label:"湿度",prop:"plantDevelopmentReq.humidity"}},[e("el-input",{attrs:{placeholder:"请输入湿度"},model:{value:t.FormData.plantDevelopmentReq.humidity,callback:function(e){t.$set(t.FormData.plantDevelopmentReq,"humidity",e)},expression:"FormData.plantDevelopmentReq.humidity"}})],1),e("el-form-item",{attrs:{label:"光照强度",prop:"plantDevelopmentReq.beam"}},[e("el-input",{attrs:{placeholder:"请输入光照强度"},model:{value:t.FormData.plantDevelopmentReq.beam,callback:function(e){t.$set(t.FormData.plantDevelopmentReq,"beam",e)},expression:"FormData.plantDevelopmentReq.beam"}})],1),e("el-form-item",{attrs:{size:"large"}},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("FormData")}}},[t._v("提交数据")]),e("el-button",{on:{click:function(e){return t.resetForm("FormData")}}},[t._v("重置表单")])],1)],1)],1)],1)])},u=[],g={name:"BlockStorage",data(){return{fileList1:{},fileList2:{},FormData:{uuid:"",certOfOrigin:"",storehouse:"",plantDevelopmentReq:{temperature:"",humidity:"",beam:"",images:[]}}}},methods:{fileChange1(t,e){this.fileList1=e,console.log(this.fileList1)},fileChange2(t,e){this.fileList2=e},removeFile1(t,e){this.fileList1=e},removeFile2(t,e){this.fileList2=e},limitCheck1(){this.$message.warning("每次只能上传一个文件")},limitCheck2(){this.$message.warning("每次最多只能上传1个文件")},submitUpload1(){console.log(this.fileList1);const t=new FormData;t.append("file",this.fileList1[0].raw),this.$axios.post("http://fruit.mingbyte.com:55001/gateway/fruit/uploadImage",t,{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{this.notice17(),console.log(t.data.data),this.FormData.certOfOrigin=t.data.data,console.log("请求发送成功",t)})).catch((t=>{this.notice16(),console.log("请求发送失败",t)})),this.$refs.upload.submit()},submitUpload2(){const t=new FormData;t.append("file",this.fileList2[0].raw),this.$axios.post("http://fruit.mingbyte.com:55001/gateway/fruit/uploadImage",t,{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{this.notice15(),console.log(t.data.data),this.FormData.plantDevelopmentReq.images.push(t.data.data),console.log("请求发送成功",t)})).catch((t=>{this.notice14(),console.log("请求发送失败",t)})),this.$refs.upload.submit()},beforeUpload2(t){let e=["jpg","png"],a=t.name.split(".").pop().toLowerCase();return-1===e.indexOf(a)?(this.$message.error("只能上传 jpg/png 格式的文件 !"),!1):t.size/1024/1024>1?(this.$message.error("上传文件大小不能超过 1M !"),!1):(console.log(t),void(this.upload2=t.row))},beforeUpload1(t){let e=["jpg","png"],a=t.name.split(".").pop().toLowerCase();return-1===e.indexOf(a)?(this.$message.error("只能上传 jpg/png 格式的文件 !"),!1):t.size/1024/1024>1?(this.$message.error("上传文件大小不能超过 1M !"),!1):(console.log(t),void(this.upload1=t.row))},submitForm(t){this.$refs[t].validate((t=>{if(!t)return this.notice12(),!1;console.log(JSON.stringify(this.FormData)),this.onSubmit()}))},resetForm(t){this.$refs[t].resetFields(),this.notice13()},notice11(){this.$notify({title:"数据上传成功",message:"所填数据将上传到区块链",duration:0,type:"success"})},notice13(){this.$notify({title:"数据重置成功",message:"所填数据已进行重置",duration:0,type:"success"})},notice12(){this.$notify({title:"数据上传失败",message:"请检查数据类型或网络环境，稍后再次上传",duration:0,type:"fail"})},notice14(){this.$notify({title:"产地实景图上传失败",message:"请检查数据类型或网络环境，稍后再次上传",duration:0,type:"fail"})},notice15(){this.$notify({title:"产地实景图上传成功",message:"所传产地实景图将追加上传到区块链",duration:0,type:"success"})},notice16(){this.$notify({title:"产地证书上传失败",message:"请检查数据类型或网络环境，稍后再次上传",duration:0,type:"fail"})},notice17(){this.$notify({title:"产地证书上传成功",message:"所传产地证书将上传到区块链",duration:0,type:"success"})},onSubmit(){this.$axios.post("http://fruit.mingbyte.com:55001/gateway/fruit/invokeChaincode",JSON.stringify(this.FormData)).then((t=>{console.log("请求发送成功",t),this.notice11()})).catch((t=>{console.log("请求发送失败",t),this.notice12()}))}}},f=g,h=(0,c.Z)(f,d,u,!1,null,"4e70954c",null),v=h.exports,b=a(2920),y={name:"BlockPage",components:{BlockSearch:m,BlockStorage:v,MyFooter:b.Z,MyFooter:b.Z},data(){return{input:""}},methods:{notice2(){this.$notify({title:"数据查询成功",message:"以下数据来自实时区块链上链数据",duration:0,type:"success"})},notice3(){this.$notify({title:"数据查询失败",message:"网络繁忙，请稍后重新查询",duration:0,type:"fail"})},serachData(){console.log("正在查询数据"),this.$axios.get(`http://fruit.mingbyte.com:55001/gateway/fruit/queryChaincode?uuid=${this.input}`).then((t=>{this.notice2(),console.log("请求成功了",t.data.data),this.$bus.$emit("getStorage",t.data.data)}),(t=>{this.notice3(),console.log("请求失败了",t.message)}))}}},x=y,_=(0,c.Z)(x,i,o,!1,null,"455e5832",null),S=_.exports}}]);
//# sourceMappingURL=610.83a18ad1.js.map