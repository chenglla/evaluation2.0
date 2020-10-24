<template>
  <div class="learnAbility_info">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">计划力测试</div>
    </div>
    <div class="resultInfo" ref="resultInfo">
      <div style="padding-bottom: 15px">
        <div class="one-item">
          <h4 class="one__p">测试结果：</h4>
        </div>
        <div class="one-item">
          <div class="one-step">
            <div class="one-step__item">
              <p v-for="(item,index) in fenge" :key = 'index'>{{item}}<br/><br/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {postPlanResult} from '@/api/index'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      mes: '',
      Plan: [],
      professionInfoList: [],
      resultScroll: null,
      fenge: []
    }
  },
  computed: {
    ...mapState({
      openid: state => state.user.openid
    }),
    answerList () {
      return JSON.parse(this.$route.query.list)
    }
  },
  mounted () {
    this.getPlanResult()
    this.init()
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    init () {
      this.$nextTick(() => {
        // console.log()
        this.resultScroll = new BScroll(this.$refs.resultInfo, {
          click: true,
          bounce: false
        })
        // console.log(this.resultScroll)
      })
    },

    getPlanResult () {
      postPlanResult({
        openid: this.openid,
        result: this.answerList,
        type: 11
      }).then(res => {
        console.log(this.answerList)
        this.mes = res.data.msg
        this.Plan = res.data.data
        var start = 0
        var pos = this.Plan.describe.indexOf('。')
        while (pos > -1) {
          this.fenge.push(this.Plan.describe.substr(start, pos - start))
          start = pos + 1
          pos = this.Plan.describe.indexOf('。', pos + 1)
        }
        console.log(this.fenge)
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .learnAbility_info {
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
  .resultInfo {
    /*margin-top: 15px;*/
    height: calc(100% - 50px);
    overflow: hidden;
    /*position: absolute;*/
    /*top: 45px;*/
    /*left: 0;*/
  }
  // body里的大框
  .one-item{
    line-height: 27px;
    background: rgba(255,255,204, 0.1);
    padding: 16px;
    margin: 15px 20px 16px;
    box-shadow: 0 6px 6px rgba(75, 92, 178, 0.1);
    border-radius: 4px;
    position: relative;
    overflow: hidden;

  }
  .eval_content_h{
    margin: 10px 5px;
  }
  .eval_content_p{
    /*text-indent: 2em;*/
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    text-align: center;
    background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);
    border-radius: 8px;
    color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .5);
  }
</style>
