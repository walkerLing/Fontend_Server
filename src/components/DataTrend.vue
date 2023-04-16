<template>
  <div class="com-container">
    <div class="com-chart" ref="trend_ref"></div>
  </div>
</template>

<script>
export default {
  name:'DataTrend',
  data () {
    return {
      chartInstane: null,
      allData: null, // 从服务器中获取的所有数据
      showChoice: false, // 是否显示可选项
      choiceType: 'map', // 显示的数据类型
      titleFontSize: 0 // 指明标题的字体大小
    }
  },
  mounted () {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
  },
  computed: {
    selectTypes () {
      if (!this.allData) {
        return []
      } else {
        return this.allData.type.filter(item => {
          return item.key !== this.choiceType
        })
      }
    },
    showTitle () {
      if (!this.allData) {
        return ''
      } else {
        return this.allData[this.choiceType].title
      }
    },
    // 设置给标题的样式
    comStyle () {
      return {
        fontSize: this.titleFontSize + 'px'
      }
    },
    marginStyle () {
      return {
        marginLeft: this.titleFontSize + 'px'
      }
    }
  },
  methods: {
    initChart () {
      this.chartInstane = this.$echarts.init(this.$refs.trend_ref, 'chalk')
      const initOption = {
        // title:'tubiao',
        grid: {
          left: '2%',
          top: '15%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          iconStyle:{
            borderColor:'black'
          },
          right:'5%',
          feature: {
          saveAsImage: {}, // 将图表保存为图片
          // dataView: {}, // 是否显示出原始数据
          // restore: {}, // 还原图表
          // dataZoom: {}, // 数据缩放
          magicType: { // 将图表在不同类型之间切换,图表的转换需要数据的支持
          type: ['bar', 'line']
            },
          },
    
        },
        legend: {
          left: 80,
          top: '0%',
          icon: 'circle',
          textStyle:{
              color:'black'
            }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel:{
            textStyle:{
              color:'black'
            },
          },
          axisLine:{
            lineStyle:{
              color:'black'
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLabel:{
            textStyle:{
              color:'black'
            }
          },
        }

      }
      this.chartInstane.setOption(initOption)
    },
    async getData () {
      // await this.$http.get()
      // 对allData进行赋值
      // const { data: ret } = await this.$http.get('trend')
      // this.allData = ret
      this.allData = {
              "map": {
                  "title": "近期温度数据",
                  "base": 310,
                  "unit": "万",
                  "data": [{
                      "name": "大棚内温度",
                      "data": ["155.13","154.65","171.46","164.38","237.23","300.65","240.29","232.07","193.31","136.70","48.64","90.20"]
                  }, {
                      "name": "光照",
                      "data": ["86.25","33.80","145.58","21.79","176.09","132.41","291.05","191.89","151.54","94.25","141.75","157.14"]
                  }, {
                      "name": "湿度",
                      "data": ["143.94","186.29","183.64","251.48","195.48","152.16","52.47","184.12","203.79","39.16","56.37","161.64"]
                  }, {
                      "name": "二氧化碳浓度",
                      "data": ["57.60","77.61","307.24","165.05","175.41","276.88","269.04","296.11","105.31","283.39","134.08","265.38"]
                  }, {
                      "name": "室外温度",
                      "data": ["200.82","215.56","249.80","222.67","216.98","60.12","309.68","273.35","150.99","251.97","26.15","186.99"]
                  }]
              },
              "common": {
                  "month": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
              },
              "type": [{
                  "key": "map",
                  "text": "地区销量趋势"
              }]
          }
      // console.log(this.allData)
      this.updateChart()
    },
    updateChart () {
      // 半透明的颜色值
      const colorArr1 = [
        'rgba(11, 168, 44, 0.5)',
        'rgba(44, 110, 255, 0.5)',
        'rgba(22, 242, 217, 0.5)',
        'rgba(254, 33, 30, 0.5)',
        'rgba(250, 105, 0, 0.5)'
      ]
      // 全透明的颜色值
      const colorArr2 = [
        'rgba(11, 168, 44, 0)',
        'rgba(44, 110, 255, 0)',
        'rgba(22, 242, 217, 0)',
        'rgba(254, 33, 30, 0)',
        'rgba(250, 105, 0, 0)'
      ]
      // 处理数据
      // 类目轴的数据
      const timeArr = this.allData.common.month
      // y轴的数据 series下的数据
      const valueArr = this.allData[this.choiceType].data
      const seriesArr = valueArr.map((item, index) => {
        return {
          name: item.name,
          type: 'line',
          data: item.data,
          stack: this.choiceType,
          smooth:true,
          areaStyle: {
            // 面积实现颜色渐变
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,//百分之0的状态
                color: colorArr1[index]
              }, // %0的颜色值
              {
                offset: 1,//百分之百的状态
                color: colorArr2[index]
              } // 100%的颜色值
            ])
          }
        }
      })
      // 图例的数据
      const legendArr = valueArr.map(item => {
        return item.name
      })
      const dataOption = {
        xAxis: {
          data: timeArr
        },
        legend: {
          data: legendArr
          
        },
        series: seriesArr
      }
      this.chartInstane.setOption(dataOption)
    },
    screenAdapter () {
      this.titleFontSize = this.$refs.trend_ref.offsetWidth / 100 * 3.6
      const adapterOption = {
        legend: {
          itemWidth: this.titleFontSize,
          itemHeight: this.titleFontSize,
          itemGap: this.titleFontSize,
          textStyle: {
            fontSize: this.titleFontSize / 2
          }
        }
      }
      this.chartInstane.setOption(adapterOption)
      this.chartInstane.resize()
    },
    handleSelect (currentType) {
      this.choiceType = currentType
      this.updateChart()
      this.showChoice = false
    }
  }
}
</script>