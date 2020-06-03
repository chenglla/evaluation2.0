<template>
  <div class="pushList">
    <div class="push_header">
      <div class="title">职业案例</div>
    </div>
    <div class="search">
      <input type="text" placeholder='搜索关键词' >
      <i class="iconfont iconsousuo"></i>
    </div>
    <div class="push_split"></div>
    <div class="push-middle" ref="pushWrapper">
        <div class="push-content" style="padding: 20px 0 5px 0;">

          <div class="push-list" v-for="(caseList,index) in caseLists" :key="index" @click="toCaseDetail(caseList.caseId)">
            <div>
              <img src="../assets/img/火苗.png" alt="">
            </div>
            <div>
              <h4>{{caseList.caseName}}</h4>
              <!-- <span>{{caseLists.source}}</span>
              <span>{{caseLists.school}}</span>
              <span class="pushtime">{{caseLists.time}}</span> -->
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import {findCaseList} from '@/api/index'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      pushScroll: null,
      caseLists:[]

    }
  },
  mounted () {
    this.findCaseList ()
    this.init()

  },
  methods: {
    init () {
      this.$nextTick(() => {
        this.pushScroll = new BScroll(this.$refs.pushWrapper, {
          click: true,
          bounce: false,
        })
        //console.log(this.pushScroll)
      })
    },
    findCaseList () {
      findCaseList({
      }).then(res => {
        
        this.caseLists = res.data

      })
    },
    toCaseDetail (id) {
      console.log('id:', id)
      this.$router.push({
        path: '/caseDetail',
        query: {
          id: id
        }
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
    font-size: 20px;
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
    margin: 10px 18px;
    border-radius: 4px;
    position: relative;
    padding: 6px 0;
    input{
      color: white;
      width: 70vw;
      border: 0;
      padding-left: 15px;
      font-size: 14px;
      // 背景透明度
      background-color: rgba(0,0,0,0);

    }
    input[type=text]:focus{
      outline: none;
    }
    //修改placeholder的样式
    input::-webkit-input-placeholder{
      color: white;
      font-size: 14px;
    }

    .iconsousuo{
      font-size: 1.25rem;
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

    width:calc(100% - 62px);
    top: 7.25rem;
    //padding-top: 40px;
    padding: 0 16px 0 16px;
    z-index: 1;
    border-radius: 4px;
    background-color: white;
    margin: 0 15px;
    height: calc(100% - 145px);
    overflow: hidden;

  }

  // 具体列表
  .push-list{
    //height: 30px;
    //padding: 0 15px 3px 5px;
    //position: relative;
    //width: calc(100% - 30px);
    border-bottom: solid 1px #F7F7F7;
    font-size: 16px;
    color: #525252;
    margin-bottom: 15px;
    padding-bottom: 6px;
    display: flex;
    //background-color: green;
    push-list .img{
      width: 3px;
      height: 3px;
    }
    span{
      font-size: 12px;
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
