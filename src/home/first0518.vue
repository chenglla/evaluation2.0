<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        v-for="(item, i) in pictures"
        :key="i"
        class="swiper-slide"
      >
        <!-- 具体内容 -->
        <img
          class="swiper-img"
          :class='{active:currentIndex===i}'
          :src="item"
          @click='itemClick(i)'
        >
        <p class="swiper_desc"></p>
      </div>
    </div>
    <!-- 分页符 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  data () {
    return {
      // activeClass: '.swiper-container', // 滑动模块名称
      pictures: [require('../assets/img/sy_banner.png'), require('../assets/img/c_s_1.jpg'), require('../assets/img/cs_2.jpg'), require('../assets/img/cs_3.jpg'), require('../assets/img/cs4.jpg')],
      currentIndex: -1
    }
  },
  methods: {
    itemClick (i) {
      this.currentIndex = i
      console.log(this.currentIndex)
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: true,
      // slidesPerView: 3,
      // loopedSlides: 5,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 12,
      observer: true,
      observeParents: true,
      // 分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 150px;
    overflow: visible!important;
    background: url('../assets/img/banner_dise.png') no-repeat;
    background-size: 100% 150px;
    .swiper-slide {
      background-position: center;
      background-size: cover;
      overflow: hidden;
      width: 86%;
      height: 150px;
      .swiper-img {
        /*border-radius: 10px;*/
        width: 100%;
        /*height: 150px;*/
      }
      .active{
        display:inline-block;
        /*background-image: url("../assets/img/banner_dise.png");*/
      }
    }
  }
  .swiper_desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1.4em;
    font-size: 16px;
    padding: 20px 50px 12px 13px;
    margin: 0;
    /*background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.7)));*/
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);
    color: #fff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  /*swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next*/
  /*.swiper-container .swiper-wrapper .swiper-slide{ width: 100%; border-radius: 20px;background: palegreen}*/
  /*.swiper-container .swiper-wrapper .swiper-slide img{ border-radius: 20px;}*/
  /*.swiper-container .swiper-wrapper .swiper-slide-prev{ margin-top: 18px; height: 130px!important;}*/
  /*.swiper-container .swiper-wrapper .swiper-slide-prev img{ width: 100%!important;}*/
  /*.swiper-container .swiper-wrapper .swiper-slide-next{ margin-top: 18px; height: 130px!important;}*/
  /*.swiper-container .swiper-wrapper .swiper-slide-next img{ height: 130px!important;}*/
  /*.swiper-container .swiper-wrapper .swiper-slide-active{ width: 100%;margin-right: 10px;margin-left: 10px}*/

</style>
<style lang="scss">
  .swiper-container{
    .swiper-pagination{
      .swiper-pagination-bullet{
        width: 6px;
        height: 6px;
        opacity: 1;
        /*background-color: #fff;*/
        background: #d0cdd1;
      }
      .swiper-pagination-bullet-active {
         background: var(--swiper-pagination-color,var(--swiper-theme-color))
      }
    }
  }
  .swiper-container .swiper-wrapper .swiper-slide{ border-radius: 10px;}
  /*.swiper-container .swiper-wrapper .swiper-slide img{ border-radius: 10px;}*/
  .swiper-container .swiper-wrapper .swiper-slide-prev{ border-radius: 10px;margin: 10px 0; height: 130px!important;}
  .swiper-container .swiper-wrapper .swiper-slide-prev img{ width: 100%!important;}
  .swiper-container .swiper-wrapper .swiper-slide-next{ border-radius: 10px;margin: 10px 0; height: 130px!important;}
  .swiper-container .swiper-wrapper .swiper-slide-next img{ height: 130px!important;}
</style>
