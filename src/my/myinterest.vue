<template>
  <div class="my-interest">

    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">我的兴趣</div>
    </div>
    <div class="XBody">
      <group >
        <x-textarea title="编辑" :max="200" style="font-size: 20px;background-color:white;font-size: 15px;box-shadow: 2px 2px 1px 1px #EFEDED;"   :placeholder="placeholder" :show-counter="false" :height="20" :rows="1" :cols="10"></x-textarea>
      </group>
      <div class="XAdded">
        <p>已添加的标签：</p>
        <ul class="label-list">
          <li class="XLabel">{{label[0]}}</li>
          <li class="XLabel">{{label[1]}}</li>
          <li class="XLabel">{{label[2]}}</li>
          <li class="XLabel">{{label[3]}}</li>
          <li class="XLabel">{{label[4]}}</li>
          <li class="XLabel">{{label[5]}}</li>
        </ul>
      </div>

      <div class="XAdded">
        <p>点击添加符合自己的标签：</p>
        <!-- <li class="XLabel" id="chooselabel" v-for="(item,index) in labelLists" :key='index' @click="chooseLabel" >{{label[index]}}</li> -->
        <li class="XLabel" id="chooselabel0"  @click="chooseLabel(chooselabel0)" >{{label[0]}}</li>
        <li class="XLabel" id="chooselabel1"  @click="chooseLabel(chooselabel1)" >{{label[1]}}</li>
        <li class="XLabel" id="chooselabel2"  @click="chooseLabel(chooselabel2)" >{{label[2]}}</li>
        <li class="XLabel" id="chooselabel3"  @click="chooseLabel(chooselabel3)" >{{label[3]}}</li>
        <li class="XLabel" id="chooselabel4"  @click="chooseLabel(chooselabel4)" >{{label[4]}}</li>
        <li class="XLabel" id="chooselabel5"  @click="chooseLabel(chooselabel5)" >{{label[5]}}</li>
        <li class="XLabel" id="chooselabel6"  @click="chooseLabel(chooselabel6)" >{{label[6]}}</li>
        <li class="XLabel" id="chooselabel7"  @click="chooseLabel(chooselabel7)" >{{label[7]}}</li>
      </div>
    </div>
  </div>
</template>

<script>
  import { XHeader,XTextarea } from 'vux'
  export default {
    components: {
      XHeader,
      XTextarea,
    },
    data(){
      return {
        title:'我的兴趣',
        placeholder:'兴趣爱好',
        label:['旅游','教育','音乐','影视','运动','美食','数码','旅游'],
        labelLists:8

      }
    },
    methods: {
      returnBack () {
        this.$router.go(-1)
      },
      chooseLabel(val){
        console.log(chooselabel0);
        document.getElementById("chooselabel0").style.background="blue";
        //document.getElementById(val).style.background="blue";
      },
    },
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
.XBody{
  position: relative;
  top: 45px;
  height: 100vh;
  padding: 16px;
  background-color: #F8F8F8;
}
// 添加标签&&已添加标签
.XAdded{
  border-top: solid 6px #34C2F7;
  width: 91vw;
  height: 140px;
  margin-top: 20px;
  background-color: #FFFFFF;
  box-shadow: 2px 2px 1px 1px #EFEDED;
  p{
    padding-top: 16px;
    margin-left: 12px;
    margin-bottom: 23px;
  }
  .XLabel{
    text-align: center;
    //文本的垂直居中
    //vertical-align: middle;
    font-size: 8px;
    color: #989796;
    list-style: none;
    width: 60px;
    height: 20px;
    //background-color: white;
    //background-color: #34C2F7;
    margin-left: 16px;
    margin-bottom: 14px;
    float: left;
    border-radius: 10px;
    border: solid 2px #D5D5D5;
  }
}
</style>
