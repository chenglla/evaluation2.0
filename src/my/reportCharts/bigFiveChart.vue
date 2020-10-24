<template>
<!--  <div class="app-container">-->

    <div class="content">
      <div id="test" style="width:313px;height: 400px;"/>
    </div>
<!--  </div>-->
</template>

<script>
import echarts from 'echarts'
import {postPersonResult} from '@/api/index'
import { mapState } from 'vuex'
require('echarts/theme/macarons') // echarts theme
export default {
  name: 'bigFiveChart',
  props: ['personassdata'],
  data (){
    return {
      personass:[],
      persondata:[],
      option: {},
      bigfivebrief:''
    }
  },
  computed: {
    ...mapState({
      openid: state => state.user.openid
    })
  },
  mounted () {
    // this.getChartData()
    this.personResult();
    setTimeout(() => {
      this.initChart();
    }, 1000);
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('test'), 'macarons')
      this.chart.setOption(this.option)
    },
    personResult: function () {
      console.log('結果：')
      console.log(this.personassdata);
      postPersonResult({
        openid: this.openid,
        result: this.personassdata
      }).then( res =>{

        console.log(res.data)
        if (res.data.code === 0) {
          this.personass = res.data.data
          for (let i in this.personass) {
            this.persondata.push(this.personass[i].score)
          }
        }

        this.bigfivebrief = this.personass[0].bigFive.brief
        console.log('ceshi',this.bigfivebrief)
        this.$emit('func1',this.bigfivebrief)
        // this.option.series.data[0].value=persondata;
        this.option = {
          tooltip: {},
          radar: {
            name: {
              textStyle: {
                color: '#ffffff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
              }
            },
            indicator: [
              { name: '神经质', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 60},
              { name: '尽责性', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 60},
              { name: '宜人性', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 60},
              { name: '开放性', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 60},
              { name: '外倾性', axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}, max: 60}
            ],
              radius: 100
          },
          series: [{
            name: '能力数值',
            type: 'radar',
            data: [
              {
                value: this.persondata,
              }
            ]
          }]
        }

        console.log('this.option:')
        console.log(this.option);
      })
    }
  }
}
</script>

<style scoped>

</style>
