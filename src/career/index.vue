<template>
  <div class="career">
    <div class="score_header">
        <div class="return__icon" @click="returnBack">
          <i class="iconfont iconfanhui"></i>
        </div>
      <div class="title">{{title}}</div>
    </div>

    <div class="career-body" ref="my-wrapper">
      <div class="career-content">
        <div class="career-detail">
            <div class="detail-title">职业详情</div>
            <h4>职业定义</h4>
            <p> 今年高校毕业生规模高达874万人，增量，增幅均为今年之最。受新冠肺炎疫情等多种因素叠加影响，2020届普通高校毕业生就业面临较大压力。目前已有2/3省份的高校开学或明确开学计划，毕业生求职即将进入关键期。“百日冲刺”行动将从5月还需到8月中旬，在这关进的100天里，教育部及相关部门将重点组织展开升学扩招吸纳行动、充实基层专项计划行动、扩大毕业生参军入伍行动、开拓科研社区医疗基层岗位行动、重点帮扶湖北高校毕业生行动、助力脱贫攻坚行动、狠抓责任落实行动等十大专项行动。</p>
            <h4>附加项</h4>
            <p>职业是参与社会分工，利用专门的知识和技能，为社会创造物质财富和精神财富，获取合理报酬，作为物质生活来源，并满足精神需求的工作。</p>
          </div>
          <div class="career-tool">
            <div class="tool-title">常用工具</div>
            <p>职业是参与社会分工，利用专门的知识和技能，为社会创造物质财富和精神财富，获取合理报酬，作为物质生活来源，并满足精神需求的工作。</p>
            <img src="../assets/img/职业图片.png" alt="">
            <div class="tool-bottom">
              <div @click="collectArticle">
                <i class="iconfont iconshoucang1" v-if="hadcollect" ></i>
                <i class="iconfont iconshoucang" v-else></i>
              </div>
              <span>收藏</span>
            </div>
        
          </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      title:'职业详情',
      hadcollect: 0 ,
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.myScroll = new BScroll(this.$refs.my-wrapper, {
        click: true
      })
    })
  },
  methods:{
    returnBack () {
      this.$router.go(-1)
    },
    collectArticle () {
      console.log(this.hadcollect)
      this.hadcollect = !this.hadcollect
    }
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
  //标题栏以下
  .major-body{
    height: 100vh;
    background-color: #F7F7F7;
  }
  .career-content{
    color: #4E4E4E;
    height: auto;
    position: relative;
    top: 50px;
    background-color: #F7F7F7;
    padding: 4%;
  }
  //职业详情
  .career-detail{
    background-color: white;
    margin-bottom: 15px;
    padding-bottom: 20px;
    .detail-title{
      //height: 24px;
      padding: 4px 15px;
      color: white;
      //padding-left: 15px;
      font-weight: 400;
      background-color: #35C2F6;
      font-size: 12px;
    }
    h4{
      padding: 10px 5% 0 5%;
    }
  }
  p{
    padding: 10px 4% 0 4%;
    // 文本缩进
    text-indent: 26px;
    // 文本两端对齐
    text-align: justify;
    font-size: 10px;
  }
  // 常用工具
  .career-tool{
    background-color: white;
    margin-bottom: 15px;

    .tool-title{
      padding: 4px 15px;
        color: white;
        //padding-left: 15px;
        font-weight: 400;
        background-color: #35C2F6;
        font-size: 12px;
      }
    img{
      width: 74vw;
      // 图片居中要这两个一起用
      margin: 15px auto;
      display: block;

      //text-align: center;
    }
  }
  // 常用工具底部
  .tool-bottom{
    padding-right: 4%;
    height: 30px;
    width: auto;
    border-top: solid 2px #F7F7F7;
    display: flex;
    //background-color:green ;
    text-align: right;
    position: relative;

    span{
      position: absolute;
      top: 4px;
      right: 30px;
      font-size: 12px;
    }
  }
  .iconshoucang1,.iconshoucang{
    position: absolute;
    //top: 2px;
    right: 58px;
  }
  .iconshoucang1{
    color: orange;
  }
</style>
