<template>
  <div class="my-info" ref="my-wrapper">
    <div class="my-content">
      <div class="my-up">
          <div>
            <div class="my-up-avatar">
              <img src="../assets/img/全头像.png" alt="">
            </div>
            <span class="user-name">用户名</span>
          </div>
          <div class="my-up-num">
            <div class="my-up-history">
              <div>43</div>
              <p>足迹</p>
            </div>
            <div class="my-up-collect">
              <div>9</div>
              <p>收藏</p>
            </div>
            <div class="my-up-star">
              <div>12</div>
              <p>喜欢</p>
            </div>
          </div>
        </div>
        <div class="my-down">
          <div class="my-down-box">
            <ul class="my-down-list">
              <li class="my-down-report">
                <img src="../assets/img/报告.png" alt="">
                <div>我的报告</div>
              </li>
              <li class="my-down-score">
                <img src="../assets/img/成绩.png" alt="">
                <div>我的成绩</div>
              </li>
              <li class="my-down-collect" @click="gotoOption('myCollect')">
                <img src="../assets/img/收藏.png" alt="">
                <div>我的收藏</div>
              </li>
              <li class="my-down-star" @click="gotoOption('myStar')" >
                <img src="../assets/img/赞.png" alt="">
                <div>我赞过的</div>
              </li>
              <li class="my-down-interest" @click="gotoOption('myinterest')" >
                <img src="../assets/img/兴趣的小心心.png" alt="">
                <div>我的兴趣 </div>
              </li>
            </ul>
          </div>
          <div class="my-down-test">
            <div>
              <div class="test-head"><p>未完成测评</p></div>
              <div v-if="testlist"></div>
              <div class="test-list" v-else="!testlist">
                <img src="../assets/img/测评里的图片.png" alt="">
                <div>
                  <b class="none">暂无测评</b>
                  <span class="tosee" @click="gotoOption('more')">去看看</span>
                </div>
                <p>你所有未完成的评价会显示在这里</p>
              </div>
            </div>
          </div>
        </div>

    </div>
 </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'my',
  data(){
    return {
      homeScroll: null,
      testlist:0,
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.myScroll = new BScroll(this.$refs.my-wrapper, {
        click: true
      })
    })
  },
  methods: {
    gotoOption (val) {
      this.$router.push({name: val})
    },
  }
}
</script>
<style scoped lang="scss">

  //上半部分
  .my-up{
    width: 100vw;
    height: 245px;
    background-image: url(../assets/img/背景图.png);
    background-repeat: no-repeat;
    background-color: #F7F7F7;
    background-size: 100%;
    text-align: center;

   }


  // 头像图片
  .my-up-avatar img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 35px;
  }
  //用户名
  .user-name{
    font-weight: 200;
    color: white;
  }
  // 用户名下的框
  .my-up-num{
    position: absolute;
    top: 150px;
    margin-left: 60px;
  }
  .my-up-num>div{
    margin-right: 72px;
    float: left;
    text-align: center;
  }
  .my-up-num>div>div{
    color:orange;
  }
  // 下半部分
  .my-down{
    background-color: #F7F7F7;
  }
  // 中间的盒子
  .my-down-box{
    width: 90vw;
    height: 10.9375rem;
    background-color: white;
    margin: 0 0.9375rem;


  }
  // ul列表
  .my-down-list{
    float: left;
    list-style-type: none;
    display: inline;
    padding-left: 5px;
    li{
      width: 70px;
      text-align: center;
      float: left;
      margin: 5px 5px 0 5px;
      //display: inline-block;
    }
  }
  // 我的报告等的图片
  li img{
    width: 38px;
    height: 38px;
    padding: 0;
    margin: 10px auto 0 auto;
  }
  //我的报告等文字
  li div{

    font-size: 12px;
    color: #686868;
  }
  // 未完成测试的大框
  .my-down-test{
    width: 90vw;
    height: 700px;
    background-color: white;
    margin: 20px;
    border-bottom-color: gray;
    border-width: 2px;
    p{
      left: 40px;
    }

  }
  // 未完成测试文字
  .test-head{
    width: 100vw;
    //height: 10px;
    padding: 10px ;
    font-weight: 600;
    border-bottom: solid 1px #F7F7F7;

  }
  // 未完成测试文字下面的div
  .test-list{
    text-align: center;
    position: relative;
    top: 40px;
  }
  // 未完成时的图片
  .test-list img{
    width: 43px;
    height: 43px;
    // 暂无测评
    .none{

      font-weight: 900;
      color: #666666;
    }

  }
  //  去看看
  .test-list .tosee{
    color: red;
    font-size: 8px;
    // 文本下划线
    text-decoration: underline;
    // 下滑线颜色，默认和字体颜色一样
    //text-decoration-color: green;
  }
  .test-list p{
    color: #A7A7A7;
    font-size: 5px;
  }

</style>
