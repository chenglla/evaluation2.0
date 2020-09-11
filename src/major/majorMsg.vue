<template>
  <div style="height: 100%;width: 100%;display:flex;flex-direction: column;">
    <div class="majortitle">
      <div class="return__icon" @click="gotoPage">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div style="text-align: center;font-weight: bold;">
        {{majorName}}
      </div>
    </div>
    <div class="majorbox">
      <el-card shadow="always">
        <div slot="header">
          <span>专业简介</span>
        </div>
        <p>{{majorDescribe}}</p>
      </el-card>
    </div>
    <div class="majorbox">
      <el-card class="box-card" shadow="always">
        <div slot="header">
          <span>专业课程</span>
        </div>
       <p>{{majorCourses}} </p>
      </el-card>
    </div>
  </div>
<!--  <div style="height: 100%;width: 100%;display:flex;flex-direction: column;">-->

</template>
<script>
  import {getMajorInfoDescribe} from '@/api/index'
    export default {
        name: "majorMsg",
      data(){
          return{
            majorDescribe:'',
            majorCourses:''
          }
      },
        computed: {
          eduName(){
            return this.$route.params.edu
          },
          majorName () {
          return this.$route.params.major
        }
      },
      mounted () {
        this.getMajor()
      },
      methods:{
        gotoPage () {
          this.$router.back()
        },
        getMajor(){
          getMajorInfoDescribe({
            education:this.eduName,
            majorName:this.majorName
          }).then( res => {
            this.majorCourses = res.data.majorInfoCourses
            this.majorDescribe = res.data.majorInfoDescribe
          })
        }
      }
    }
</script>

<style scoped>
  .majortitle{
    position: relative;
    font-size: 1rem;
    width: 100%;
    background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);
    /*background-color: #19bdff;*/
    color: #fff;
    height: 8vh;
    line-height: 8vh;
    flex: none;
    z-index: 1;
  }
  .return__icon{
    position: absolute;
    margin-left: 15px;
  }
  .iconfont {
    font-size: 28px;
    color: #fff;
    line-height: 50px;
    text-align: center;
  }
  .iconfanhui {
    font-size: 18px;
  }
  .majorbox{
    margin: 1vh 3vw 3vh 3vw;
  }
  /deep/ .el-card__header{
    padding: 1vh 0vw 1vh 3vw;
    background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);
    color: #fff;

  }
</style>
