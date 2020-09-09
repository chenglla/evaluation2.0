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
        <!--        <h>本科门类列表：</h>-->
        <div class="ency-content">
          <el-collapse>
            <el-collapse-item >
              <template slot="title" >
                <div style="font-size:16px;color: #1db9ff"><span >本科门类：</span></div>
              </template>
              <div v-for="(item,index) in  this.categoryList" :key="index">
                <el-collapse>
                  <el-collapse-item>
                    <template slot="title">
                      <i class="iconfont iconanli"></i>
                      <span>{{index}}</span>
                    </template>
                    <div v-for="(i,index1) in item" :key="index1">
                      <el-collapse @change="getMajorList('本科',i)">
<!--                        <div v-show="view">-->
                          <el-collapse-item >
                            <template slot="title">
                              <span style="text-indent:2em;">{{i}}</span>
                            </template>
                            <div v-for="(j,index2) in majorList" :key="index2">
                              <el-collapse  @change="getMajorInfo('本科',j)">
                                <el-collapse-item >
                                  <template slot="title">
                                    <span style="text-indent:4em;">{{j}}</span>
                                  </template>
                                  <div>
                                    <span>专业描述：{{majorInfoDescribe}}</span>
                                  </div>
                                  <div>
                                    <span>主要课程：{{majorInfoCourses}}</span>
                                  </div>
                                </el-collapse-item>
                              </el-collapse>
                            </div>
                          </el-collapse-item>
<!--                        </div>-->
                      </el-collapse>

                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-collapse-item>
            <el-collapse-item >
              <template slot="title" >
                <div style="font-size:16px;color: #1db9ff"><span >专科门类：</span></div>
              </template>
              <div v-for="(item,index) in  this.categoryZhuanList" :key="index">
                <el-collapse>
                  <el-collapse-item>
                    <template slot="title">
                      <i class="iconfont iconanli"></i>
                      <span>{{index}}</span>
                    </template>
                    <div v-for="(k,index1) in item" :key="index1">
                      <el-collapse @change="getMajorList('专科',k)">
                          <el-collapse-item >
                            <template slot="title">
                              <span style="text-indent:2em;" >{{k}}</span>
                            </template>
                            <div v-for="(j,index2) in zhuanmap[k]" :key="index2" >
                              <el-collapse  @change="getMajorInfo('专科',j)">
                                <el-collapse-item >
                                  <template slot="title">
                                    <span  style="text-indent:4em;">{{j}}</span>
                                  </template>
                                  <div>
                                    <span>专业描述：{{majorInfoDescribe}}</span>
                                  </div>
                                  <div>
                                    <span>主要课程：{{majorInfoCourses}}</span>
                                  </div>
                                </el-collapse-item>
                              </el-collapse>
                            </div>
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
         temp:[],
        view:false,
        view2:false,
        treeNode:{},
        treeList:[],
        nodeId:0,
        temp1:[],
        map:{},
        major:[],
        mmap:{},
        s:[],
        j:0,
        majorInfoDescribe:'',
        majorInfoCourses:'',
        zhuanmajorInfoDescribe:'',
        zhuanmajorInfoCourses:'',
        categoryName:"",
        parentId:0,
        treeListData:[], // 无层级结构节点数据
        defaultProps:{
          children: 'childList',
          label: 'name'
          /* label: 'categoryName'*/
        },
        props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
        majorList:[],
        majorZhuanList:[],
        categoryBenList: [],
        categoryZhuanList: {},
        encyScroll: null,
        encyLists: [],
        subjectList:[],
        sub1: null,
        category:[],
        list:[],
        categoryList:{},
        zhuanmap:{},
        benmap:{},
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    mounted() {
      // this.getCategoryList()
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
          this.categoryList= res.data
          // console.log(this.categoryList)
        })
        getCategoryList({
          education:'专科'
        }).then(res => {
          // this.categoryZhuanList = res.data.map((item,index) =>{
          //   return{
          //     index: index,
          //     name: item,
          //     children: []
          //   }
          // })
          //   console.log(this.categoryZhuanList)
          this.categoryZhuanList =res.data
          // for(var tmp in this.categoryZhuanList){
          //   this.temp.push(this.categoryZhuanList[tmp])
          // }
          // for( var i in this.categoryZhuanList){
          //   for(var j= 0;j<this.categoryZhuanList[i].length;j++){
          //     console.log(this.categoryZhuanList[i][j])
          //     this.getmajor(this.categoryZhuanList[i][j])
          //   }
          //   // this.getMajorList(this.categoryZhuanList[i])
          // }
          // console.log(this.temp[0][1])
          // this.getMajorList('专科',this.temp[0][1])
          // console.log(this.categoryZhuanList)
        })

      },
      // getmajor(a){
      //   getMajor({
      //     education:'专科',
      //     subject: a
      //   }).then(res => {
      //     var  mmmajor = new Map()
      //     for ( var j = 0; j<res.data.length;j++){
      //       mmmajor.set(a,res.data[j])
      //       this.temp.push(mmmajor)
      //       // map[i] = res.data[j]
      //     }
      //     console.log(this.temp)
      //   })
      // },
      getMajorList(e,i){
        getMajor({
          education:e,
          subject: i
        }).then(res => {
          // console.log(e)
          // console.log(res.data)
          this.majorList = res.data
          // var  mmajor = new Map()
          console.log(res.data.length)
          if(e=='本科'){
            for ( var k = 0; k<res.data.length;k++){
              // mmajor.set(i,res.data[j])
              this.benmap[i] = res.data
              // this.temp.push(map[i])
              // console.log(res.data)
            }
          }
          if(e=='专科'){
            for ( var j = 0; j<res.data.length;j++){
              // mmajor.set(i,res.data[j])
              this.zhuanmap[i] = res.data
              // this.temp.push(map[i])
              // console.log(res.data)
            }
          }

          // console.log(this.map)
          // this.majorList = res.data.map((item, index) =>{
          //   return {
          //     parent:i,
          //     index: index,
          //     name: item,
          //     children: []
          //   }
          // }  )
          // console.log(this.majorList)
        })
      },
      getMajorInfo(e,j){
        this.loading = true
        // console.log(j)
       getMajorInfoDescribe({
         education:e,
         majorName:j
       }).then(res => {
         console.log(res.data)
         this.majorInfoDescribe =res.data.majorInfoDescribe
         this.majorInfoCourses =res.data.majorInfoCourses
       })

      },
      // getCategoryList(){
      //   getCategoryList({
      //     education:'本科'
      //   }).then(res => {
      //     console.log(res.data);
      //     this.categoryBenList = res.data
      //     for( var i=0; i<this.categoryBenList.length ;i++){
      //       // console.log(this.categoryBenList[i])
      //       var a = this.categoryBenList
      //       getSubject({
      //         education:'本科',
      //         category:this.categoryBenList[i]
      //       }).then(res =>{
      //           // this.sub1 = res.data;
      //         this.subjectList.push(res.data);
      //         // console.log(a[i])
      //         console.log(res.data)
      //       })
      //     }
      //   })
      //   // setTimeout(()=>{
      //   //   console.log(this.subjectList)
      //   // },1000)
      //
      // },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region' }]);
        }
        if (node.level > 1) return resolve([]);

        setTimeout(() => {
          const data = [{
            name: 'leaf',
            leaf: true
          }, {
            name: 'zone'
          }];

          resolve(data);
        }, 100);
      }
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
</style>
