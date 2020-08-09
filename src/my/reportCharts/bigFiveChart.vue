<template>
  <div class="app-container">

    <div class="content">
      <div id="test" style="width:100%;height: 400px"/>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
export default {
  name: 'bigFiveChart',
  data () {
    return {
      option: {
        title: {
          // text: '基础雷达图'
        },
        tooltip: {},
        legend: {
          data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '神经质', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 50},
            { name: '尽责性', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 50},
            { name: '宜人性', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 50},
            { name: '开放性', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 50},
            { name: '外倾性', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 50}
          ],
          radius: 100
        },
        series: [{
          // name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [27, 22, 29, 30, 23]
              // name: '预算分配（Allocated Budget）'
            }
          ]
        }]
      }
    }
  },
  mounted () {
    this.initChart()
    this.getChartData()
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('test'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
