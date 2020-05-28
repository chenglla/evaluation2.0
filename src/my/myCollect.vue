<template>
  <div class="C" >
    <div class="score_header">
        <div class="return__icon" @click="returnBack">
          <i class="iconfont iconfanhui"></i>
        </div>
      <div class="title">{{title}}</div>
    </div>
    <div class="C-body" ref="my-wrapper">

      <div class="C-item" v-for="(item, index) in collectLists" :key="index">
        <div class="C-Title">
          <img src="../assets/img/zan.png" alt="">
          <div class="C-title">{{title}}</div>
        </div>
        <div class="C-text">尊敬的用户，1.
          <span class="C-name">【亦庄生物医药园区】</span>
          于【3月5日00:00-】进行系统升级...
        </div>
        <div class="C-time">{{time}}</div>
        <div class="C-more" @click="">
          <span>查看详情</span>
          <i class="iconfont icon-youjiantou"></i>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
 import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        title:'我的收藏',

        time:'2019-3-6 10: 22: 23',
        collectLists:10

      }
    },
    mounted () {
      this.$nextTick(() => {
        this.myScroll = new BScroll(this.$refs.my-wrapper, {
          click: true
        })
      })
    },
    methods: {
      returnBack () {
        this.$router.go(-1)
      },
  },
 }
</script>

<style scoped lang="scss">

  // 头部导航
  .score_header {
    position: fixed;
    font-size: 16px;
    width: 100%;
    box-shadow: 2px 2px 2px 2px #F7F7F7;
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
// 标题栏以下
  .C-body{
    position: relative;
    top: 45px;
    padding: 0;
    height: 100vh;
    background-color: #F7F7F7;
  }
  .C-item{
    margin: 0 auto 12px auto;
    width: 92vw;
    height: 120px;
    background-color: white;
    position: relative;
    top: 14px;
    box-shadow: 2px 2px 2px 2px #EFEEEE;
    //
    .C-Title{
      background-color: #40C5F7;
      width: 160px;
      //background-image: ;
      img{
        margin-left: 15px;
        float: left;
        width: 12px;
        height: 12px;
        padding-top: 2px;
      }
    }
    .C-title{
      width: 128px;
      height: 18px;

      font-size: 10px;
      color: white;
      margin-left: 35px;
      //text-align: center;
      vertical-align: middle;
    }
    // 段落
    .C-text{
      // 多余文章显示省略号
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      //overflow: hidden;
      text-overflow: ellipsis;

      padding: 6px 16px 0px 16px;
      font-size: 14px;
      line-height: 18px;
      color: #5B5B5B;
      // 公司名称
      .C-name{
        font-size: 16px;
      }
    }
    // 发布时间
    .C-time{
      position: relative;
      margin-right: 10px;
      margin-top: 10px;
      padding-top: 10px 10px 10px 10px;
      bottom: 6px;
      float: right;
      color: #9C9C9C;
      font-size: 6px;

    }


  }
  // 更多
  .C-more{
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 30px;
    border-top: solid 2px #F7F7F7;
    span{
      color: green;
      vertical-align: middle;
      font-size: 10px;
      color: #A1A1A1;
      margin-left: 16px;
    }
  }
  .icon-youjiantou{
    font-size: 10px;
    color: red;
  }
</style>
