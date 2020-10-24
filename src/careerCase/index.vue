<template>
  <div class="majorList">
    <div class="major_header">
      <div class="title">职业案例</div>
    </div>
    <div class="search">
      <input  v-model="key" @focus="gotoPageSearch('caseSearch')" type="text" placeholder='搜索关键词'>
      <i class="iconfont iconsousuo"></i>
    </div>
    <div class="major_split"></div>
    <div class="major-middle" ref="wrapper">
      <div class="major-content" style="padding:20px 0 5px 0;">
        <div class="major-list" v-for="(majorlist,index) in majorLists" :key="index" >
          <div @click.stop="dropDown(majorlist)" style="margin-bottom: 0.5vh">
            <img src="../assets/img/百科里的图片.png" alt="">
            <span>{{majorlist.name}}</span>
            <i class="iconfont iconxiajiantou"></i>
          </div>
          <div  v-for="(sub,inde) in majorlist.children" :key="inde" v-show="majorlist.show" style="margin-top: 13px">
            <div style="float: left">
              <img src="../assets/img/火苗.png" alt="">
            </div>
            <div @click.stop="toCaseDetail(sub.middle_name.caseName,sub.middle_name.caseId)">
              <h4>{{sub.middle_name.caseName}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getProfessionInfo,getCaseNameByPro} from '@/api/index'
import BScroll from 'better-scroll'
import _ from 'underscore'
export default {
  data () {
    return {
      majorScroll: null,
      majorLists:[],
      key:'',
      showProfessionList:0,
      pulDownLists:[],

    }
  },
  mounted () {
    this.getProfessionInfo()
    this.init()
  },
  methods: {
    init() {
      this.$nextTick(() => {
        setTimeout(()=>{
          this.majorScroll = new BScroll(this.$refs.wrapper, {
            click: true,
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
        this.majorLists = res.data.map((item,index) => {
          return {
            show: false,
            index: index,
            name: item,
            children: []
          }
        })
        console.log(this.majorLists)

      })
    },
    dropDown: _.debounce(function (majorList) {

      if (!this.majorLists[majorList.index].show) {
        getCaseNameByPro ({
          pro: majorList.name,
        }).then(res => {
          this.majorLists[majorList.index].children = res.data.map((item2, index2) => {
            return {
              middle_show: false,
              middle_index: index2,
              middle_name: item2,
              middle_children: []
            }
          })
          console.log( this.majorLists)
          this.majorLists[majorList.index].show = true
        })
      }
      this.majorLists[majorList.index].show = false
      // this.list[major.index].show = !this.list[major.index].show
    }),
    gotoPageSearch(name){
      this.$router.push({ name: name })
    },
    toCareerDetail (id) {
      console.log('id:', id)
      this.$router.push({
        path: '/major_info',
        query: {
          id: id
        }
      })
    },
    toCaseDetail (name,id) {
      console.log('id:', id)
      this.$router.push({
        path: '/caseDetail',
        query: {
          name:name,
          id: id
        }
      })
    },
    // },
    // toCareerDetail(majorDetail){
    //   console.log('1111',majorDetail)
    //   this.$router.push({
    //     path: '/careerDetail',
    //     query: {
    //       majorDetail: majorDetail
    //     }
    //   })
    // }
    // dropDown (majorList) {
    //   majorList.show = !majorList.show
    //     findCareerInfo ({
    //       ktName: majorList.name,
    //     }).then(res => {
    //       console.log('结果2：', res.data)
    //       this.pulDownLists = res.data
    //
    //     })
    // }
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
