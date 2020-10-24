<template>
  <div class="C">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="C-body" ref="mywrapper">
      <div class="C-item">
        <div class="C-text">
          <el-button style="float: right;font: bolder;" type="text" size="medium" @click="addscore">新增
          </el-button>
          <el-table
            :data="scoreTable"
            stripe
            style="width: 100%">
            <el-table-column
              prop="examName"
              align="center"
              label="考试名称"
            >
            </el-table-column>
            <el-table-column
              prop="examTime"
              align="center"
              label="考试时间"
            >
            </el-table-column>
            <el-table-column
              prop="score"
              align="center"
              label="查看成绩">
              <template slot-scope="scope">
                <el-button size="medium" type="text" icon="el-icon-zoom-in" @click="toScoreDetail(scope.row)">查看成绩
                </el-button>
                <i class="iconfont icon_shanchu" style="color: #ff2b2b;float: right;margin-top: 7px" @click="deletescore(scope.row)"></i>
                <!--              <el-button size="mini" type="text" icon="el-icon-edit" @click="handleUpdate(scope.row)">修改</el-button>-->
                <!--              <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" @click="deletework">删除</el-button>-->
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div>
          <el-dialog :visible.sync="dialogVisible" title="录入成绩" width="80%">
            <el-form ref="form" :model="form" label-width="100px">
              <el-form-item label="考试名称">
                <el-input v-model="form.name"/>
              </el-form-item>
              <el-form-item label="考试时间">
                  <el-date-picker v-model="form.date" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"
                                  placeholder="选择日期" style="width: 100%;"/>
              </el-form-item>
              <el-form-item label="语文成绩:">
                <el-input v-model="form.chinese"/>
              </el-form-item>
              <el-form-item label="数学成绩:">
                <el-input v-model="form.math"/>
              </el-form-item>
              <el-form-item label="英语成绩:">
                <el-input v-model="form.english"/>
              </el-form-item>
              <el-form-item label="物理成绩:">
                <el-input v-model="form.physics"/>
              </el-form-item>
              <el-form-item label="化学成绩:">
                <el-input v-model="form.chemistry"/>
              </el-form-item>
              <el-form-item label="生物成绩:">
                <el-input v-model="form.biology"/>
              </el-form-item>
              <el-form-item label="政治成绩:">
                <el-input v-model="form.politics"/>
              </el-form-item>
              <el-form-item label="历史成绩:">
                <el-input v-model="form.history"/>
              </el-form-item>
              <el-form-item label="地理成绩:">
                <el-input v-model="form.geography"/>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="submitscore(form)">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getStudentScore, saveStudentScore,deleteStudentScore} from '@/api/index'
import BScroll from 'better-scroll'
import {mapState} from "vuex";

export default {
  name: "myscore",
  data() {
    return {
      dialogVisible: false,
      title: '学科成绩',
      scoreTable: [],
      collectLists: 3,
      form: {
        name:undefined,
        date:undefined,
        chinese:undefined,
        math:undefined,
        english:undefined,
        physics:undefined,
        chemistry:undefined,
        biology:undefined,
        politics:undefined,
        history:undefined,
        geography:undefined,
      },
    }
  },
  computed: {
    ...mapState({
      openid: state => state.user.openid
    })
  },
  mounted() {
    this.$nextTick(() => {
      // eslint-disable-next-line no-undef
      this.myScroll = new BScroll(this.$refs.mywrapper, {
        click: true
      })
    })
    this.getScore()
  },
  methods: {
    returnBack() {
      this.$router.go(-1)
    },
    getScore() {
      getStudentScore({
        userOpenid: '111'
      }).then(res => {
        this.scoreTable = res.data
      })
    },
    addscore() {
      this.dialogVisible = true
    },
    toScoreDetail(row) {
      console.log('row:', row)
      this.$router.push({
        path: '/scoreInfo',
        query: {
          list: row
        }
      })
    },
    submitscore(form){
      console.log(form.chinese)
      saveStudentScore({
        userOpenid: '111',
        chinese:form.chinese,
        mathematics:form.math,
        english:form.english,
        physics:form.physics,
        chemistry:form.chemistry,
        biology:form.biology,
        politics:form.politics,
        history:form.history,
        geography:form.geography,
        examTime:form.date,
        examName:form.name,
      }).then( res => {
        this.dialogVisible = false
         this.$message({
           type:"success",
           message:'新增成功'
         })
        this.getScore()
      })
    },
    deletescore(row) {
       console.log(row)
      this.$confirm('确认删除此条成绩记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteStudentScore({
          id:row.id,
        }).then(res =>{
            this.getScore()
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
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

.return__icon {
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
.C-body {
  position: relative;
  top: 45px;
  padding: 0;
  height: 100vh;
  background-color: #F7F7F7;
}

.C-item {
  margin: 0 auto 12px auto;
  width: 92vw;
  height: 100%;
  background-color: white;
  position: relative;
  top: 14px;
  box-shadow: 2px 2px 2px 2px #EFEEEE;
  //
  .C-Title {
    background-color: #40C5F7;
    width: 160px;
    //background-image: ;
    img {
      margin-left: 15px;
      float: left;
      width: 12px;
      height: 12px;
      padding-top: 2px;
    }
  }

  .C-title {
    width: 128px;
    height: 18px;

    font-size: 10px;
    color: white;
    margin-left: 35px;
    //text-align: center;
    vertical-align: middle;
  }

  // 段落
  .C-text {
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
    .C-name {
      font-size: 16px;
    }
  }

  // 发布时间
  .C-time {
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
.C-more {
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 30px;
  border-top: solid 2px #F7F7F7;

  span {
    color: green;
    vertical-align: middle;
    font-size: 10px;
    color: #A1A1A1;
    margin-left: 16px;
  }
}

.icon-youjiantou {
  font-size: 10px;
  color: red;
}

.box-card {
  height: 100vh;
  margin: 10px 10px 10px 10px;
}
/deep/ .el-table .cell{
  padding-right: 0px;
  padding-left: 0px;
}
</style>
