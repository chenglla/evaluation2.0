<template>
  <div class="C" >
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">{{title}}</div>
    </div>
    <div class="C-body" ref="my-wrapper">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <!--          <span>卡片名称</span>-->
          <el-button style="float: right; padding: 3px 0;font: bolder" type="text">新增</el-button>
        </div>
        <el-table
          :data="scoreTable"
          stripe
          style="width: 100%">
          <el-table-column
            prop="examName"
            label="考试名称"
          >
          </el-table-column>
          <el-table-column
            prop="examTime"
            label="考试时间"
          >
          </el-table-column>
          <el-table-column
            prop="score"
            label="查看成绩">
            <template slot-scope="scope">
              <el-button size="mini" type="text" icon="el-icon-zoom-in" @click="view(scope.row)">查看成绩</el-button>
              <!--              <el-button size="mini" type="text" icon="el-icon-edit" @click="handleUpdate(scope.row)">修改</el-button>-->
              <!--              <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" @click="deletework">删除</el-button>-->
            </template>
          </el-table-column>
        </el-table>
      </el-card>

      <!--            <div class="C-item" >-->
      <!--<div style="float: right">-->
      <!--  <span>新增</span>-->
      <!--</div>-->
      <!--        <div class="C-Title">-->
      <!--          <img src="../assets/img/zan.png" alt="">-->
      <!--        </div>-->
      <!--        <div class="C-more">-->
      <!--          <i class="iconfont icon-youjiantou"></i>-->
      <!--        </div>-->
      <!--      </div>-->

    </div>
  </div>
</template>

<script>
import{getStudentScore,saveStudentScore} from '@/api/index'
import BScroll from 'better-scroll'

export default {
  name: "addScore",
  data () {
    return {
      title: '学科成绩',
      scoreTable:[],
      collectLists: 3,
      tableData: [{
        time: '2016-05-02',
        name: '王小虎',
      }, {
        date: '2016-05-04',
        name: '王小虎',
      }, {
        date: '2016-05-01',
        name: '王小虎',
      }, {
        date: '2016-05-03',
        name: '王小虎',
      }]

    }
  },
  mounted () {
    this.$nextTick(() => {
      // eslint-disable-next-line no-undef
      this.myScroll = new BScroll(this.$refs.my - wrapper, {
        click: true
      })
    })
    this.getScore()
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    getScore(){
      getStudentScore({
        userOpenid:'111'
      }).then( res => {
        this.scoreTable = res.data
      })
    }
  }
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
  height: 100%;
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
    padding-top: 10px;
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
.box-card {
  height: 100vh;
  margin: 10px 10px 10px 10px;
}

</style>
