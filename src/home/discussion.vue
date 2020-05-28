<template>
  <div>
    <x-header :left-options="{backText: ''}" style="background-color: #00A3FF;">讨论圈</x-header>
    <div class="D-body">
      <div class="D-item" v-for="(article, index) in articles" :key="index">
        <div class="D-text">
          今年高校毕业生规模高达874万人，增量，增幅均为今年之最。受新冠肺炎疫情等多种因素叠加影响，2020届普通高校毕业生就业面临较大压力。目前已有2/3省份的高校开学或明确开学计划，毕业生求职即将进入关键期。“百日冲刺”行动将从5月还需到8月中旬，在这关进的100天里，教育部及相关部门将重点组织展开升学扩招吸纳行动、充实基层专项计划行动、扩大毕业生参军入伍行动、开拓科研社区医疗基层岗位行动、重点帮扶湖北高校毕业生行动、助力脱贫攻坚行动、狠抓责任落实行动等十大专项行动。

        </div>
        <div>
          <div class="D-name">{{article.name}}</div>
          <div class="D-time">{{article.time}}</div>
          <div class="D-num">{{article.num}}</div>
          <img src="../assets/img/heart1.png" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { XHeader,Cell } from 'vux'
  import BScroll from 'better-scroll'

   export default {
     components: {
       XHeader,
       Cell,
     },
     data () {
       return {
         articles:[
           {
             name:'董鲁皖龙',
             time:'2020-05-07',
             num:10,
           }
         ]

       }
     },
     mounted () {
       this.$nextTick(() => {
         this.myScroll = new BScroll(this.$refs.my-wrapper, {
           click: true
         })
       })
     },
   }
</script>

<style>
   .D-body{
     background-color: #F7F7F7;
   }
  .D-item{
    width: 92vw;
    height: 120px;
    background-color: #F8F8F8;
    margin: 0 auto;
    position: relative;
    top: 15px;
    border-top: solid 4px #35C2F6;

  }
  .D-text{
    height: 92px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow:hidden;
    text-overflow: ellipsis;

    padding: 12px;
    font-size: 2px;
    border-bottom: solid 1px #F7F7F7;
    background-color: white;
    color: #545454;
  }
</style>
