
<template>
  <div class="app-container">

    <div class="content">
      <div id="bility" style="width:313px;height: 400px;"/>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import {postLearnAnswer} from '@/api/index'
import { mapState } from 'vuex'
require('echarts/theme/macarons') // echarts theme
export default {
  name: 'bigFiveChart',
  props: ['learndata'],
  data () {
    return {
      learn: [],
      learnData: [],
    }
  },
  computed: {
    ...mapState({
      openid: state => state.user.openid
    })
  },
  mounted () {

    this.learnDataResult()
    setTimeout(()=>{
      this.initChart()
    },1000)
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('bility'), 'macarons')
      this.chart.setOption(this.option)
    },
    learnDataResult(){
      postLearnAnswer({
        openid: this.openid,
        evaluateType: 3,
        result: this.learndata
      }).then(res =>{
        this.learn = res.data.data
        console.log('come',this.learn)
        this.$emit('func',this.learn)
        this.learnData.push(this.learn['drivingForceScale'])
        this.learnData.push(this.learn['reciprocityNumScale'])
        this.learnData.push(this.learn['accommodationForceNumScale'])
        this.learnData.push(this.learn['engineeringStressNumScale'])
        this.learnData.push(this.learn['resilienceNumScale'])
      })
      this.option = {
        title: {
          // text: '基础雷达图'
        },
        tooltip: {},
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
          name: '能力数值',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: this.learnData
              // name: '预算分配（Allocated Budget）'
            }
          ]
        }]
      }
    }

  }
}
</script>

<style scoped>

</style>
