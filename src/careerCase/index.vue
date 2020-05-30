<template>
  <div class="pushList">
    <div class="push_header">
      <div class="title">文章推送</div>
    </div>
    <div class="search">
      <input type="text" placeholder='搜索关键词' >
      <i class="iconfont iconsousuo"></i>
    </div>
    <div class="push_split"></div>
    <div class="w1">
      <div class="push-middle" ref="wrapper">
          <div class="push-content" >
            <div class="push-list" v-for="(pushlist,index) in pushlists" :key="index">
              <div>
                <img src="../assets/img/火苗.png" alt="">
              </div>
              <div>
                <h4>{{pushlist.title}}</h4>
                <span>{{pushlist.source}}</span>
                <span>{{pushlist.school}}</span>
                <span class="pushtime">{{pushlist.time}}</span>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
//let wrapper = document.querySelector('.wrapper')
//let pushScroll = new BScroll(wrapper,{})
export default {
  data () {
    return {
      pushScroll: null,
      pushlists:[
        {
          title:'南京工业大学浦江学院2020年本科生招生简章',
          source:'来源',
          school:'南京工业大学',
          time:'2020-04-21',
        },
		{
		  title:'南京工业大学浦江学院2020年本科生招生简章',
		  source:'来源',
		  school:'南京工业大学',
		  time:'2020-04-21',
		},
		{
		  title:'南京工业大学浦江学院2020年本科生招生简章',
		  source:'来源',
		  school:'南京工业大学',
		  time:'2020-04-21',
		},
		{
		  title:'南京工业大学浦江学院2020年本科生招生简章',
		  source:'来源',
		  school:'南京工业大学',
		  time:'2020-04-21',
		},
		{
		  title:'南京工业大学浦江学院2020年本科生招生简章',
		  source:'来源',
		  school:'南京工业大学',
		  time:'2020-04-21',
		},
        {
          title:'南京工业大学浦江学院2020年本科生招生简章',
          source:'来源',
          school:'南京工业大学',
          time:'2020-04-21',
        },
        {
          title:'南京工业大学浦江学院2020年本科生招生简章',
          source:'来源',
          school:'南京工业大学',
          time:'2020-04-21',
        },
        {
          title:'南京工业大学浦江学院2020年本科生招生简章',
          source:'来源',
          school:'南京工业大学',
          time:'2020-04-21',
        },
        {
          title:'南京工业大学浦江学院2020年本科生招生简章',
          source:'来源',
          school:'南京工业大学',
          time:'2020-04-21',
        },
        {
          title:'南京工业大学浦江学院2020年本科生招生简章',
          source:'来源',
          school:'南京工业大学',
          time:'2020-04-21',
        },
        {
          title:'南京工业大学浦江学院2020年本科生招生简章',
          source:'来源',
          school:'南京工业大学',
          time:'2020-04-21',
        }
      ]

    }
  },

  methods: {
    initRight () {
      this.$nextTick(() => {
        this.pushScroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollY:true,
        })
      })
    },

  }
}
</script>
<style lang="scss" scoped>
  .pushList {
    height: 100vh;
    /*width: 100%;*/
    display: flex;
    flex-direction: column;
    background: #EDEDED;
  }
  // 标题部分
  .push_header {
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
      padding-bottom: 8px;
      //background-color: green;

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
      top: 4px;
    }

  }
  // 蓝色部分背景
  .push_split {
    position: absolute;
    /*background-color: #19bdff;*/
    background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);
    height: calc(30% - 45px);
    margin-top: 45px;
    width: 100%;
  }
  // 中间的百科列表

  .push-middle {
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
  .push-content{
    flex: 1;
    //height: auto;
    padding: 0 15px;
  }
  // 具体列表
  .push-list{
    position: relative;
    width: 82vw;
    border-bottom: solid 1px #F7F7F7;
    font-size: 14px;
    color: #525252;
    margin-bottom: 8px;
    padding-bottom: 2px;

    display: flex;
    push-list .img{
      width: 3px;
      height: 3px;
    }
    span{
      font-size: 8px;
      color: rgb(181,181,181);
    }
  }
  .pushtime{
    position: absolute;
    right: 10px;
  }

  h4{
    color: rgb(84,84,84);
    margin-left: 6px;
  }
</style>
