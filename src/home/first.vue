<template>
  <div>
    <swiper class="spaceBetween" :list="img_list" auto style="width:80%;margin:0 auto;" height="150px" dots-class="custom-bottom" dots-position="center"></swiper>
  </div>
</template>
<script>
// import Swiper from 'swiper'
// import 'swiper/css/swiper.min.css'
const imgList = [require('../assets/img/sy_banner.png'), require('../assets/img/sy_banner.png'), require('../assets/img/sy_banner.png'), require('../assets/img/sy_banner.png')]
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
export default {
  data () {
    return {
      img_list: demoList,
      // pictures: [require('../assets/img/sy_banner.png'), require('../assets/img/sy_banner.png'), require('../assets/img/sy_banner.png'), require('../assets/img/sy_banner.png')],
      // currentIndex: -1
    }
  },
  methods: {
    itemClick (i) {
      this.currentIndex = i
      console.log(this.currentIndex)
    }
  },
  mounted () {
    let spaceBet = document.querySelector('.spaceBetween')
    spaceBet.setAttribute('spaceBetween ', '20')
    spaceBet.setAttribute('slidesPerView', 'auto')
    spaceBet.setAttribute('centeredSlides ', true)
    // var mySwiper = new Swiper('.swiper-container', {
    //   direction: 'horizontal',
    //   loop: true,
    //   slidesPerView: 'auto',
    //   centeredSlides: true,
    //   spaceBetween: 20,
    //   observer: true,
    //   observeParents: true
    // })
  }
}
</script>
<style lang="scss" scoped>
  .swiper-container {
    /*background-color: rgb(58, 138, 251);*/
    background-image: url("../assets/img/banner_dise.png");
    z-index: 0;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 15px;
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 70%;
      .swiper-img {
        border-radius: 10px;
        width: 100%;
      }
      .active{
        display:inline-block;
        background-image: url("../assets/img/banner_dise.png");
      }
    }
  }
</style>
