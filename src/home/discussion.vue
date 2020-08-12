<template>
  <div>
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">{{title}}</div>
    </div>
    <div class="D-body" ref="my-wrapper">
      <div class="D-item" v-for="(article, index) in articles" :key="index">
        <div class="D-text">
          今年高校毕业生规模高达874万人，增量，增幅均为今年之最。受新冠肺炎疫情等多种因素叠加影响，2020届普通高校毕业生就业面临较大压力。目前已有2/3省份的高校开学或明确开学计划，毕业生求职即将进入关键期。“百日冲刺”行动将从5月还需到8月中旬，在这关进的100天里，教育部及相关部门将重点组织展开升学扩招吸纳行动、充实基层专项计划行动、扩大毕业生参军入伍行动、开拓科研社区医疗基层岗位行动、重点帮扶湖北高校毕业生行动、助力脱贫攻坚行动、狠抓责任落实行动等十大专项行动。

        </div>
        <div class="D-text-bottom">
          <span class="D-name">{{article.name}}</span>
          <span class="D-time">{{article.time}}</span>
          <span class="D-num">{{article.num}}</span>
          <!-- <i class="iconfont iconxin"> </i> -->
          <img src="../assets/img/heart1.png" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  data () {
    return {
      title: '讨论圈',
      articles: [
        {
          name: '董鲁皖龙',
          time: '2020-05-07',
          num: 202
        },
        {
          name: '董鲁皖龙',
          time: '2020-05-07',
          num: 10
        },
        {
          name: '董鲁皖龙',
          time: '2020-05-07',
          num: 10
        },
        {
          name: '董鲁皖龙',
          time: '2020-05-07',
          num: 10
        },
        {
          name: '董鲁皖龙',
          time: '2020-05-07',
          num: 10
        },
        {
          name: '董鲁皖龙',
          time: '2020-05-07',
          num: 10
        },
        {
          name: '董鲁皖龙',
          time: '2020-05-07',
          num: 10
        },
        {
          name: '董鲁皖龙',
          time: '2020-05-07',
          num: 10
        }
      ]

    }
  },
  mounted () {
    this.$nextTick(() => {
      // eslint-disable-next-line no-undef
      this.myScroll = new BScroll(this.$refs.my - wrapper, {
        click: true
      })
    })
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
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
  .title{
    text-align: center;
    font-weight: bold;

  }
  //
  .D-body{
    height: 100vh;
    position: relative;
    top: 45px;
    background-color: #F7F7F7;
  }
  .D-item{
    width: 92vw;
    height: auto;
    background-color: white;
    margin: 0 auto 15px auto;
    position: relative;
    top: 15px;
    border-top: solid 6px #35C2F6;

  }
  .D-text{
    height: auto;
    // display: -webkit-box;
    // -webkit-box-orient: vertical;
    // -webkit-line-clamp: 1;
    // overflow:hidden;
    // text-overflow: ellipsis;

    padding: 12px;
    font-size: 2px;
    //border-bottom: solid 1px #F7F7F7;
    background-color: white;
    color: #545454;
  }
  .D-text-bottom{
    padding: 4px 12px 20px 12px;
    border-top: solid 2px #F7F7F7;
    font-size: 5px;
    .D-name{
     // float: left;
      border-right: solid 1px #AEAEAE;
      margin-right: 4px;
      padding-right: 6px;
      color: #AEAEAE;
    }
    .D-time{
      color: #FEB850;
    }
    .D-num{
        position: absolute;
        right: 30px;

        color: #AEAEAE;
    }
    img{
      position: absolute;
      bottom: 24px;
      right: 12px;
      //bottom: 20px;
      width: 12px;
      color: red;
    }
  }
</style>
