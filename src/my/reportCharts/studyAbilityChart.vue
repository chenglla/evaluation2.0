
<template>
  <div class="app-container">

    <div class="content">
      <div id="bility" style="width:100%;height: 400px"/>
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
            { name: '驱动力', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 1},
            { name: '互惠力', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 1},
            { name: '调节力', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 1},
            { name: '策应力', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 1},
            { name: '顺应力', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 1}
          ],
          radius: 100
        },
        series: [{
          // name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [0.2, 0.8, 0.5, 0.63, 0.32]
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
      this.chart = echarts.init(document.getElementById('bility'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
