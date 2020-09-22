<template>
  <div class="control_info">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">情绪稳定测试结果</div>
    </div>
    <div class="learnAbility_second">
      <p>结果分析：</p>
      <p class="jielun">{{this.emotionResult.describe}}</p>
    </div>
  </div>
</template>

<script>
import {emotionResult} from "@/api/index";
export default {
name: "emotionResult",
  data () {
    return {
      emotionResult: {}
    }
  },
  computed: {
    answerList () {
      return JSON.parse(this.$route.query.list)
    }
  },
  mounted () {
    this.getEmotionResult()
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    getEmotionResult () {
      emotionResult({
        openid: '111',
        type: 8,
        result: this.answerList
      }).then(res => {
        console.log('情绪稳定')
        console.log(res.data)
        this.emotionResult = res.data.data
      })
    }
  }
}
</script>

<style scoped>
.control_info {
  height: 100%;
  /*width: 100%;*/
  display: flex;
  flex-direction: column;
  background: #fff;
}
.score_header {
  position: relative;
  font-size: 16px;
  width: 100%;
  background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);
  /*background-color: #19bdff;*/
  color: #fff;
  height: 45px;
  line-height: 45px;
  flex: none;
  z-index: 1;
}
.return__icon{
  position: absolute;
  margin-left: 15px;
}
.iconfanhui {
  font-size: 18px;
}
.title {
  text-align: center;
  font-weight: bold;
}
/*.learnAbility_second {*/
/*  margin-top: 10px;*/
/*  padding: 5px 15px;*/
/*}*/
.learnAbility_second {
  margin: 25px 10px 15px;
  padding: 5px;
  box-shadow: 1px 1px 5px 1px rgba(66,185,130,0.4);
  border-radius: 10px;
  background-color: #fff;
p {
  text-indent: 1.5em;
}
}
.resultInfo {
  margin-top: 15px;
  height: calc(100% - 50px);
  overflow: hidden;
  /*position: absolute;*/
  /*top: 45px;*/
  /*left: 0;*/
}
.radar_chart {
  padding-top: 5px;
  height: 200px;
}
.type3_four_tip {
  /*border: 4px dashed rgba(66,185,130,0.4);*/
  border-radius: 10px;
  /*box-shadow: 1px 1px 5px 1px rgba(66,185,130,0.4);*/
  padding: 0 5px 10px;
  margin: 3px 15px 15px;
}
li {
  /*text-indent: 2em;*/
  color: #9c9c9c;
  font-size: 12px;
  line-height: 26px;
}
</style>
