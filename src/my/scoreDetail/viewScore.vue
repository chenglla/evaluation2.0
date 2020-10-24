<template>
  <div class="C" >
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">{{title}}</div>
    </div>
    <div class="C-body" ref="mywrapper">
      <div class="C-item">
        <div class="C-text">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="examName"
              align="center"
              label="考试科目"
            >
            </el-table-column>
            <el-table-column
              prop="examscore"
              align="center"
              label="考试成绩"
            >
              <template slot-scope="scope">
                <div v-if="scope.row.inputflag">
                  <el-input v-model="scope.row.examscore" placeholder="请修改"></el-input>
                </div>
                <div v-else>
                  {{scope.row.examscore}}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="score"
              align="center"
              label="修改">
              <template slot-scope="scope">
                <el-button v-show="!scope.row.inputflag" size="medium" type="text" class="iconfont iconxiugai" style="color: #07cbff;" @click="scope.row.inputflag=true">修改</el-button>
                <el-button v-show="scope.row.inputflag" size="medium" type="text" class="iconfont icontijiao" style="color: #7ddc82" @click="sumitchangescore(scope.row)">提交</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import{updateStudentScore} from '@/api/index'
import BScroll from 'better-scroll'

export default {
  name: "viewScore",
  data () {
    return {
      title: '学科成绩',
      scoreTable:{},
      collectLists: 3,
      tableData: [],
      inputflag:false,
      subdict:{
        "语文": "chinese",
        "数学":"mathematics",
        "英语":"english",
        "物理": "physics",
        "化学":"chemistry",
        "生物":"biology",
        "政治":"politics",
        "历史":"history",
        "地理":"geography",
      }

    }
  },
  computed:{
    List(){
      return this.$route.query.list
    },
  },
  mounted () {
    this.$nextTick(() => {
      // eslint-disable-next-line no-undef
      this.myScroll = new BScroll(this.$refs.mywrapper, {
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
      // console.log(this.$route.query.row)
      this.list = this.$route.query.list
      this.tableData = [
        {
          examName: '语文',
          examscore: this.list.chinese,
          inputflag:false,
        }, {
          examName: '数学',
          examscore: this.list.mathematics,
          inputflag:false,
          mathematics:'',
          id:this.list.id,
          userOpenid:this.list.userOpenid,
        }, {
          examName: '英语',
          examscore: this.list.english,
          inputflag:false,
          english:'',
          id:this.list.id,
          userOpenid:this.list.userOpenid,
        }, {
          examName: '物理',
          examscore: this.list.physics,
          inputflag:false,
          physics:'',
          id:this.list.id,
          userOpenid:this.list.userOpenid,
        },{
          examName: '化学',
          examscore: this.list.chemistry,
          inputflag:false,
          chemistry:'',
          id:this.list.id,
          userOpenid:this.list.userOpenid,
        }, {
          examName: '生物',
          examscore: this.list.biology,
          inputflag:false,
          biology:'',
          id:this.list.id,
          userOpenid:this.list.userOpenid,
        }, {
          examName: '政治',
          examscore: this.list.politics,
          inputflag:false,
          politics:'',
          id:this.list.id,
          userOpenid:this.list.userOpenid,
        }, {
          examName: '历史',
          examscore: this.list.history,
          inputflag:false,
          history:'',
          id:this.list.id,
          userOpenid:this.list.userOpenid,
        },{
          examName: '地理',
          examscore: this.list.geography,
          inputflag:false,
          geography:'',
          id:this.list.id,
          userOpenid:this.list.userOpenid,
        },
      ]
      // getStudentScore({
      //   userOpenid:'111'
      // }).then( res => {
      //   this.scoreTable = res.data
      // })
    },
    findenglish(name){
      console.log('名字',name)
        for(let key in this.subdict){
          if(key == name){
            return this.subdict[key];
          }
        }
    },
    sumitchangescore(row){
      let key = this.findenglish(row.examName)
      console.log(key)
      this.list = this.$route.query.list
      this.scoreTable[key] = row.examscore
      this.scoreTable['id']  = this.list.id
      this.scoreTable['userOpenid'] = this.list.userOpenid
      console.log(this.scoreTable)
      updateStudentScore(this.scoreTable).then(res => {
        if( res.data.code == 0){
          this.$message({
            type:"success",
            message:'修改成功'
          })
        }else{
          this.$message({
            type:"danger",
            message:'修改失败'
          })
        }
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
