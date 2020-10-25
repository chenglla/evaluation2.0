<template>
  <div class="learnAbility_info">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">职业详情
        <i @click="clickAgree(careerId)">
          <i v-if="!istrue" class="iconfont iconfavorite" style="float: right;margin-right: 20px"></i>
          <i v-else class="iconfont iconshoucang11" style="color:#ff9c00;float: right;margin-right: 20px"></i>
        </i>
      </div>
    </div>
    <div class="resultInfo" ref="resultInfo">
      <div style="padding-bottom: 15px">
        <div class="one-item" v-for="(item, index) in major_content" :key="index" v-if="item.subClassTitleAndContent.length > 0">
          <h3 class="one-item-title">{{item.classTitle}}</h3>
          <div class="one-item__content" v-for="(project, index) in item.subClassTitleAndContent" :key="index">
            <div v-for="(value,key,index) in project" :key="index">
              <div v-if="key === ''" v-html="value[0].info" class="one-item-subcontent"></div>
              <div v-else>
                <h4 class="one-item-subtitle">{{key}}</h4>
                <div class="one-item-subcontent" v-html="value[0].info" v-if="value[0].info"></div>
                <div class="one-item-subcontent" v-html="value[0].specName" v-else></div>
              </div>
              <div class="one-item-img" v-if="value[0].imgId !== ''"><img :src="'https://xz.chsi.com.cn/occupation/showlabelimgori.action?labelimgid='+value[0].imgId" alt="这是图片"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getListByzhiyId,saveGreat,whetherGreat} from '@/api/index'
import BScroll from 'better-scroll'
import {mapState} from "vuex";
export default {
  data () {
    return {
      major_content: [],
      resultScroll: null,
      istrue:false,
      careerid:'',
    }
  },
  computed: {
    careerId () {
      return this.$route.query.id
    },
    ...mapState({
      openid: state => state.user.openid
    }),
  },
  mounted () {
    this.getMBTIMajorInfo()
    this.init()
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    init () {
      this.$nextTick(() => {
        // console.log()
        this.resultScroll = new BScroll(this.$refs.resultInfo, {
          click: true,
          bounce: false
        })
        console.log(this.resultScroll)
      })
    },
    getMBTIMajorInfo () {
      getListByzhiyId({
        zhiyId: this.$route.query.id
      }).then(res => {
        console.log('结果：', res.data)
        this.major_content = res.data
      })
      whetherGreat({
        uid:this.openid,
        aid:this.careerId
      }).then( res => {
        this.istrue = res.data
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
<style scoped lang="scss">
  .learnAbility_info {
    height: 100%;
    /*width: 100%;*/
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  .score_header {
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
  .iconfanhui {
    font-size: 18px;
  }
  .title {
    text-align: center;
    font-weight: bold;
  }
  .resultInfo {
    /*margin-top: 15px;*/
    height: calc(100% - 50px);
    overflow: hidden;
    /*position: absolute;*/
    /*top: 45px;*/
    /*left: 0;*/
  }
  .one-item{
    background: rgba(255,255,204, 0.1);
    padding: 14px;
    margin: 20px 20px 16px;
    box-shadow: 0 6px 6px rgba(75, 92, 178, 0.1);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }
  .one-item-img {
    /*width: 100px;*/
    text-align: center;
    height: 170px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .one-item-img img {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }
  .one-item-title {
    margin: 5px 3px;
    /*font-weight: normal;*/
  }
  .one-item-subtitle {
    margin: 7px;
  }
  .iconfont {
    font-size: 28px;
    color: #fff;
    line-height: 50px;
    text-align: center;
  }
  .one-item-subcontent {
    /*text-indent: 2em;*/
    line-height: 23px;
    font-size: 14px;
    color: #3c3c3c;
    margin: 5px 1px 3px 10px;
  }
</style>
