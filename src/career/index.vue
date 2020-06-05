<template>
  <div class="majorList">
    <div class="major_header">
      <div class="title">百科列表</div>
    </div>
    <div class="search">
      <input type="text" placeholder='搜索关键词' >
      <i class="iconfont iconsousuo"></i>
    </div>
    <div class="major_split"></div>
    <div class="major-middle" ref="wrapper" >
        <div class="major-content" style="padding:20px 0 5px 0;">
          <div class="major-list" v-for="(majorlist,index) in majorLists" :key="index">
            <img src="../assets/img/百科里的图片.png" alt="">
            <span>{{majorlist}}</span>
            <i class="iconfont iconxiajiantou" @click="dropDown(majorlist)"></i>
            <!-- <div v-if="">
              <div class="" v-for="(pullDownList,index) in pulDownLists" :key="index" v-if="showProfessionList">
                {{pullDownList.submajorName}}
              </div>
            </div> -->
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import {getProfessionInfo,findCareerInfo} from '@/api/index'
import BScroll from 'better-scroll'
//let wrapper = document.querySelector('.wrapper')
//let majorScroll = new BScroll(wrapper,{})
export default {
  data () {
    return {
      majorScroll: null,
      majorLists:[],
      showProfessionList:0,
      pulDownLists:[],
    }
  },
  mounted () {
	this.getProfessionInfo()
  this.init()
  this.dropDown()
  },
  methods: {
    init() {
      this.$nextTick(() => {
        setTimeout(()=>{
          this.majorScroll = new BScroll(this.$refs.wrapper, {
            click: true,
            //scrollY:true,
            bounce: false,
          },1000)
        })
        console.log(this.majorScroll)
      })
    },
	getProfessionInfo () {
	  getProfessionInfo({
	  }).then(res => {
	    console.log('结果1：', res.data)
	    this.majorLists = res.data
	  })
	},
  // findCareerInfo (val) {
  //   console.log('名字：',val)
  // },
  dropDown (val) {
    this.showProfessionList = !this.showProfessionList
    //if (this.showProfessionList!=0) {
      console.log('名字：',val)
      findCareerInfo ({
        ktName: val,
      }).then(res => {
        console.log('结果2：', res.data)
        this.pulDownLists = res.data
      })
    //}
  }
 }
}
</script>
<style lang="scss" scoped>
  .majorList {
    height: 100vh;
    /*width: 100%;*/
    display: flex;
    flex-direction: column;
    background: #EDEDED;
  }
  // 标题部分
  .major_header {
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
      color: white;
      position: absolute;
      right: 15px;
    }
  }
  // 蓝色部分背景
  .major_split {
    position: absolute;
    /*background-color: #19bdff;*/
    background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);
    height: calc(30% - 45px);
    margin-top: 45px;
    width: 100%;
  }
  // 中间的百科列表
  .major-middle {
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
  .major-list{
    position: relative;
    border-bottom: solid 1px #F7F7F7;
    //background-color: green;
    font-size: 16px;
    letter-spacing: 1px;
    color: #525252;
    margin-bottom: 8px;
    padding-bottom: 2px;
    img{
      width: 14px;
    }
  }
  .iconxiajiantou{
    position: absolute;
    right: 4px;
    color: #BDC2CE;
  }
</style>
