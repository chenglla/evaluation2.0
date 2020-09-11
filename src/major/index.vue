<template>
  <div class="encyList">
    <div class="ency_header">
      <div class="title">百科列表</div>
    </div>
    <div class="search">
      <input type="text" placeholder='搜索关键词'>
      <i class="iconfont iconsousuo"></i>
    </div>
    <div class="ency_split"></div>
    <div class="w1">
      <div class="ency-middle" ref="wrapper">
        <div class="ency-content">
          <el-collapse>
            <!--        <h>本科门类列表：</h>-->
            <el-collapse-item >
              <template slot="title" >
                <div style="font-size:16px;color: #1db9ff"><span >本科门类：</span></div>
              </template>
              <div v-for="major in list">
                <el-collapse>
                  <el-collapse-item>
                    <template slot="title">
                      <i class="iconfont iconanli"></i>
                      <span>{{major.name}}</span>
                    </template>
                    <div v-for="(sub, inde) in major.children" :key="inde" @click.stop="getMajorList('本科',sub)">
                      <el-collapse>
                        <el-collapse-item >
                          <template slot="title">
                            <span style="text-indent:2em;">{{sub.middle_name}}</span>
                          </template>
                          <!--                            {{majorList.name}}-->
                          <ul v-for="(sun, ind) in major.children[sub.middle_index].middle_children" :key="ind" >
                            <li>
                              <div class="majorstyle" @click.stop="gotoPage('本科',sun.small_name)">
                                <el-button type="text">{{sun.small_name}}</el-button>
                              </div>
                            </li>
                          </ul>
                        </el-collapse-item>
                        <!--                        </div>-->
                      </el-collapse>

                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-collapse-item>
            <!--        <h>本科门类列表：</h>-->
            <el-collapse-item >
              <template slot="title" >
                <div style="font-size:16px;color: #1db9ff"><span >专科门类：</span></div>
              </template>
              <div v-for="majorzhuan in zhuanlist">
                <el-collapse>
                  <el-collapse-item>
                    <template slot="title">
                      <i class="iconfont iconanli"></i>
                      <span>{{majorzhuan.name}}</span>
                    </template>
                    <div v-for="(sub1, inde111) in majorzhuan.children" :key="inde111" @click.stop="getMajorList('专科',sub1)">
                      <el-collapse>
                        <el-collapse-item >
                          <template slot="title">
                            <span style="text-indent:2em;">{{sub1.middle_name}}</span>
                          </template>
                          <ul v-for="(sun1, ind1) in majorzhuan.children[sub1.middle_index].middle_children" :key="ind1" >
                            <li>
                              <div class="majorstyle" @click.stop="gotoPage('专科',sun1.small_name)">
                                <el-button type="text">{{sun1.small_name}}</el-button>
                              </div>
                            </li>
                          </ul>
                        </el-collapse-item>
                      </el-collapse>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getCategoryList,getMajor,getMajorInfoDescribe} from '@/api/index'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        majorList: [],
        majorList1:[],
        list:[],
        zhuanlist:[],
        encyScroll: null,
        categoryBenList: [],
        categoryBenList1:{},
        categoryZhuanList:[]
      }
    },
    mounted() {
      // this.getMajorDetails()
      this.getCategoryandSub()
    },
    methods: {
      initRight() {
        this.$nextTick(() => {
          this.encyScroll = new BScroll(this.$refs.wrapper, {
            click: true,
            scrollY: true
          })
        })
      },
      getCategoryandSub(){
        getCategoryList({
          education:'本科'
        }).then(res => {
          this.categoryBenList = res.data
          Object.keys(this.categoryBenList)
          this.majorList = Object.keys(this.categoryBenList)
          console.log(this.majorList)
          this.list = this.majorList.map((item,index) => {
            return {
                      show: false,
                      index: index,
                      name: item,
                      children: []=this.categoryBenList[item].map((item,index) =>{
                        return{
                          middle_show: false,
                          middle_index: index,
                          middle_name: item,
                          middle_children:[]
                        }
                      })
                    }
          })
          console.log(this.list)
        })
        getCategoryList({
          education:'专科'
        }).then(res => {
          this.categoryZhuanList = res.data
          this.majorList1 = Object.keys(this.categoryZhuanList)
          console.log(this.majorList1)
          this.zhuanlist = this.majorList1.map((item,index) => {
            return {
              show: false,
              index: index,
              name: item,
              children: []=this.categoryZhuanList[item].map((item,index) =>{
                return{
                  middle_show: false,
                  middle_index: index,
                  middle_name: item,
                  middle_children:[]
                }
              })
            }
          })
          console.log(this.zhuanlist)
        })

      },
      // getMajorList: _.debounce(function (e, i) {
      //     getMajor({
      //       education:e,
      //       subject: i.middle_name
      //     }).then(res => {
      //       if (res.data.code === 0) {
      //         // middleName.middle_children = res.data.data
      //         // middleName.middle_show = true
      //         console.log('专业小类：', res.data)
      //       }
      //     })
      // }, true, 50),
      getMajorList(e,i){
        getMajor({
          education:e,
          subject: i.middle_name
        }).then(res => {
          console.log('专业小类：', res.data)
          i.middle_children = res.data.map((item2, index2) => {
            return {
              small_show: false,
              small_index: index2,
              small_name: item2,
              small_children: []
            }
          })
          console.log('小类：', i)
        })
      },
      // getMajorDetails(){
      //   getMajorInfoDescribe({
      //     education:'专科',
      //     majorName: '通信技术'
      //   }).then( res => {
      //     // console.log(this.majorCode)
      //     console.log(res.data)
      //   })
      // },
      gotoPage (s,sun) {
        this.$router.push({ name: 'majorMsg', params: { edu:s ,major:sun}})
        // this.$router.push({ path: '/majorMsg/' + sun })
      },
    },
  }
</script>
<style lang="scss" scoped>
  .encyList {

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

  .return__icon {
    position: absolute;
    margin-left: 15px;
  }

  .title {
    text-align: center;
    font-weight: bold;
  }

  // 搜索框
  .search {
    border: solid 1px white;
    z-index: 1;
    margin: 5px 18px;
    border-radius: 4px;
    position: relative;

    input {
      color: white;
      border: 0;
      padding-left: 15px;
      font-size: 8px;
      // 背景透明度
      background-color: rgba(0, 0, 0, 0);
      padding-bottom: 4px;

    }

    input[type=text]:focus {
      outline: none;
    }

    //修改placeholder的样式
    input::-webkit-input-placeholder {
      color: white;
    }

    .iconsousuo {
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
    /*overflow-y: scroll;*/
    position: absolute;
    width: calc(100% - 30px);
    top: 90px;
    padding-top: 18px;
    z-index: 1;
    border-radius: 4px;
    display: flex;

    background-color: white;
    margin: 5px 15px 5px;
    height: calc(100% - 70px);

  }

  .ency-content {
    flex: 1;
    //height: auto;
    padding: 0 15px;
  }

  // 具体列表
  .ency-list {
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

  .iconxiajiantou {
    position: absolute;
    right: 30px;
    color: #BDC2CE;
  }
  /deep/ .el-tree-node__content{
    height: 50px;
  }
  .majorstyle{
    margin-left: 7vw;
    margin-bottom: 0.5vh;
  }
</style>
