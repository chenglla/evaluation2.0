<template>
  <div class="case-detail">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title"> 职业案例详情
        <i @click="clickAgree(caseId)">
          <i v-if="!istrue" class="iconfont iconfavorite" style="float: right;margin-right: 20px"></i>
          <i v-else class="iconfont iconshoucang11" style="color:#ff9c00;float: right;margin-right: 20px"></i>
        </i>
      </div>
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
  import {findCaseDetail,saveGreat,getGreatList,whetherGreat} from '@/api/index'
  import BScroll from 'better-scroll'
  import {mapState} from "vuex";
  export default {
    data () {
      return {
        caseScroll: null,
        detailLists:[],
        istrue:false,
        flag:false,
      }
    },
    computed: {
      ...mapState({
        openid: state => state.user.openid
      }),
      caseId(){
        return this.$route.query.id
      },
    },
    mounted () {
      this.findCaseDetail ()
      this.init()
      // this.judgeAgree()
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
        whetherGreat({
          uid:this.openid,
          aid:this.caseId
        }).then( res => {
          this.istrue = res.data
        })
      },
      clickAgree(id) {
        this.istrue = !this.istrue
        console.log(id)
        console.log(this.openid)
        saveGreat({
          uid: this.openid,
          aid: id
        }).then( res => {
        })
      },
      // judgeAgree(){
      //   getGreatList({
      //     uid: this.openid
      //   }).then( res => {
      //
      //   })
      // }
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
    font-size: 1.2rem;
    width: 100%;
    background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);
    /*background-color: #19bdff;*/
    color: #fff;
    height: 8vh;
    line-height: 8vh;
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
  .changecolor{
    color: #E6A23C;
  }
  .iconfont {
    font-size: 28px;
    color: #fff;
    line-height: 50px;
    text-align: center;
  }
  .return__icon {
    position: absolute;
    margin-left: 15px;
  }

</style>
