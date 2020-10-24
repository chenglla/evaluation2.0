<template>
  <div style="height: 100%;width: 100%;display:flex;flex-direction: column;">
    <div class="majortitle">
      <div class="return__icon" @click="gotoPage">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div style="text-align: center;font-weight: bold;">
        {{majorName}}
        <i @click="clickAgree(majorId)">
          <i v-if="!istrue" class="iconfont iconfavorite" style="float: right;margin-right: 20px"></i>
          <i v-else class="iconfont iconshoucang11" style="color:#ff9c00;float: right;margin-right: 20px"></i>
        </i>
      </div>
    </div>
    <div class="majorbox">

      <el-card shadow="always">
        <div slot="header">
          <span>专业简介</span>
        </div>
        <p>{{majorDescribe.majorInfo.describtion}}</p>
      </el-card>
    </div>
    <div class="majorbox">
      <el-card class="box-card" shadow="always">
        <div slot="header">
          <span>专业课程</span>
        </div>
        <p>{{majorDescribe.majorInfo.majorCourses}}</p>
      </el-card>
    </div>
    <div class="majorbox">
      <el-card class="box-card" shadow="always">
        <div slot="header">
          <span>相似专业</span>
        </div>
        <span  v-for="item in majorDescribe.majorSimilarList">{{item}}<el-divider direction="vertical"></el-divider></span>
      </el-card>
    </div>
    <div class="majorbox">
      <el-card class="box-card" shadow="always">
        <div slot="header">
          <span>适合职业</span>
        </div>
        <el-button type="text" v-for="(item,index) in majorDescribe.professionList"  :key="index">{{index}}<el-divider direction="vertical"></el-divider></el-button>
      </el-card>
    </div>
  </div>
<!--  <div style="height: 100%;width: 100%;display:flex;flex-direction: column;">-->
</template>
<script>
  import {getMajorInfo,saveGreat} from '@/api/index'
  import {mapState} from "vuex";
    export default {
        name: "majorMsg",
      data(){
          return{
            majorDescribe:{},
            value: null,
            istrue:false

          }
      },
        computed: {
          ...mapState({
            openid: state => state.user.openid
          }),
          majorName(){
            return this.$route.params.name
          },
          majorId () {
          return this.$route.params.id
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
          getMajorInfo({
            majorId:this.majorId
          }).then( res => {
            this.majorDescribe = res.data
          })
        },
        clickAgree(id) {
          this.istrue = !this.istrue
          console.log(id)
          console.log(this.openid)
          saveGreat({
            uid: this.openid,
            aid: id
          }).then( res => {
          })
        },
      }
    }
</script>

<style scoped>
  .majortitle{
    position: relative;
    font-size: 1.2rem;
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
