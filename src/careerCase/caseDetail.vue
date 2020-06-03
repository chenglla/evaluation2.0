<template>
  <div class="case-detail">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">职业案例具体内容</div>
    </div>
    <div class="case-wrapper"  ref="caseWrapper">
      <div style="padding-top: 10px;">
        <div class="case"  v-for="(detailList,index) in detailLists" :key="index">

          <div class="case-title">{{detailList.title}}</div>
          <div class="case-list" v-for="(infolist,index) in detailList.infoList" :key="index" >
            <div class="list-labelname">{{infolist.labelName}}</div>
            <div class="list-info" v-html="infolist.info"></div>
            <div class="list-img"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {findCaseDetail} from '@/api/index'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        caseScroll: null,
        detailLists:[],
      }
    },
    mounted () {
      this.findCaseDetail ()
      this.init()
    },
    methods: {
      returnBack () {
        this.$router.go(-1)
      },
      init () {
        this.$nextTick(() => {
          this.caseScroll = new BScroll(this.$refs.caseWrapper, {
            click: true,
            bounce: false,
          })
          console.log(this.caseScroll)
        })
      },
      findCaseDetail () {
        console.log('id',this.$route.query.id)
        findCaseDetail ({
          caseId: this.$route.query.id,
        }).then(res => {
          this.detailLists = res.data
        })
      },
  },
 }
</script>

<style lang="scss" scoped>
  .case-detail{
    background-color: white;
    height: 100vh;
  }
  .score_header {
    box-shadow: 0 1px 2px #37a3ff;

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
  // 标题以下
  .case-wrapper{

    height: calc(100% - 50px);
    overflow: hidden;

  }
  // 第一层循环
  .case{
    width: 90vw;
    height: auto;
    margin: 20px auto;
    background-color: white;
    box-shadow: 0 6px 6px rgba(75, 92, 178, 0.1);
    border-radius: 4px;
    // 每个框小题目
    .case-title{
      border-radius: 4px;
      background-color: rgb(46,170,225);
      font-weight: 600;
      color: white;
      padding: 4px 8px;
    }
    // 小框的体
    .case-list{
      padding: 10px 5vw;

      // 每个小框里的二级题目
      .list-labelname{
        font-weight: 600;

      }
      .list-info{
        padding: 0 8px;
      }

    }
    }
</style>
