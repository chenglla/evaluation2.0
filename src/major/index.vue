<template>
  <div class="encyList">
    <div class="ency_header">
      <div class="title">百科列表</div>
    </div>
    <div class="search">
      <input type="text" placeholder='搜索关键词' >
      <i class="iconfont iconsousuo"></i>
    </div>
    <div class="ency_split"></div>
    <div class="w1">
      <div class="ency-middle" ref="wrapper">
          <div class="ency-content" >
            <div class="ency-list" v-for="(encylist,index) in encyLists" :key="index">
              <i class="iconfont iconanli"></i>
              <span>{{encylist}}</span>
              <i class="iconfont iconxiajiantou"></i>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
// let wrapper = document.querySelector('.wrapper')
// let encyScroll = new BScroll(wrapper,{})
export default {
  data () {
    return {
      encyScroll: null,
      encyLists: [
        '生物解刨学类', '地质学类', '天文学类', '语言学类', '财政学类', '金融学类', '生物解刨学类', '地质学类', '生物解刨学类', '地质学类', '天文学类', '语言学类', '财政学类', '金融学类', '生物解刨学类', '地质学类', '天文学类', '语言学类', '心理学类', '财政学类'
      ]

    }
  },

  methods: {
    initRight () {
      this.$nextTick(() => {
        this.encyScroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollY: true
        })
      })
    }

  }
}
</script>
<style lang="scss" scoped>
  .encyList {
    height: 100vh;
    /*width: 100%;*/
    display: flex;
    flex-direction: column;
    background: #EDEDED;
  }
  // 标题部分
  .ency_header {
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
   .title {
    text-align: center;
    font-weight: bold;
  }
  // 搜索框
  .search{
    border: solid 1px white;
    z-index: 1;
    margin: 5px 18px;
    border-radius: 4px;
    position: relative;
    input{
      color: white;
      border: 0;
      padding-left: 15px;
      font-size: 8px;
      // 背景透明度
      background-color: rgba(0,0,0,0);
      padding-bottom: 4px;

    }
    input[type=text]:focus{
      outline: none;
    }
    //修改placeholder的样式
    input::-webkit-input-placeholder{
      color: white;
    }

    .iconsousuo{
      color: white;
      position: absolute;
      right: 15px;
    }

  }
  // 蓝色部分背景
  .ency_split {
    position: absolute;
    /*background-color: #19bdff;*/
    background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);
    height: calc(30% - 45px);
    margin-top: 45px;
    width: 100%;
  }
  // 中间的百科列表

  .ency-middle {
    position: absolute;
    width:calc(100% - 30px);
    top: 90px;
    padding-top: 18px;
    z-index: 1;
    border-radius: 4px;
    display: flex;

    background-color: white;
    margin: 5px 15px 5px;
    height: calc(100% - 70px);
    overflow: hidden;

  }
  .ency-content{
    flex: 1;
    //height: auto;
    padding: 0 15px;
  }
  // 具体列表
  .ency-list{
    width: 84vw;
    //width: calc(100vw - 15px);
    border-bottom: solid 1px #F7F7F7;
    //background-color: green;
    font-size: 14px;
    letter-spacing: 1px;
    color: #525252;
    margin-bottom: 8px;
    padding-bottom: 2px;
  }
  .iconxiajiantou{
    position: absolute;
    right: 30px;
    color: #BDC2CE;
  }
</style>
