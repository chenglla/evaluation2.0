<template>
  <div class="learnAbility_info">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">MBTI职业性格测试结果</div>
    </div>
    <div class="resultInfo" ref="resultInfo">
      <div style="padding-bottom: 15px">
        <div class="one-item">
          <h4 class="one__p">{{mbti.title}}</h4>
        </div>
        <div class="one-item">
          <div class="one-step">
            <div class="one-step__item" v-html="mbti.advanddis">
              <span class="ptext">{{mbti.advanddis}}</span>
            </div>
          </div>
        </div>
        <div class="one-item">
          <div class="one-step">
            <div class="one-step__item"  v-html="mbti.describe">
              <span>{{mbti.describe}}</span>
            </div>
            <h4 class="eval_content_h">职业推荐</h4>
            <x-button v-for="(item, index) in professionInfoList" :key="index" class="eval_content_p" @click.native="gotoMajor(item.id)">
              <span >{{item.ktname}}--{{item.submajorName}}</span>
            </x-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {postMBTIResult} from '@/api/index'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      mbti: [],
      professionInfoList: [],
      resultScroll: null
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
    this.getMBTIResult()
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
    gotoMajor (id) {
      console.log('id:', id)
      this.$router.push({
        path: '/major_info',
        query: {
          id: id
        }
      })
    },
    getMBTIResult () {
      postMBTIResult({
        openid: this.openid,
        evaluateType: 1,
        result: this.answerList,
      }).then(res => {
        this.mbti = res.data.data.mbti
        this.professionInfoList = res.data.data.professionInfoList
        // this.result = res.data.data
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
  .one-item{
    line-height: 27px;
    background: rgba(255,255,204, 0.1);
    padding: 16px;
    margin: 15px 20px 16px;
    box-shadow: 0 6px 6px rgba(75, 92, 178, 0.1);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    .one__p {
      text-align: center;
    }
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
