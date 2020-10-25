<template>
  <div class="encyList">
    <div class="ency_header">
      <div class="return__icon" @click="gotoPage">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">职业案例</div>
    </div>
    <div class="search">
      <input v-model="key" type="text" @change="getCase(key)" placeholder='搜索关键词'>
      <i class="iconfont iconsousuo"></i>
    </div>
    <div class="ency_split"></div>
    <div class="ency-middle">
      <div style="padding:20px 0 5px 0;width: 100%">
        <div class="img" v-if="caseList.length == 0">
          <el-image :src="require('@/assets/zanwu.png')"/>
          <div>
            <span style="font-size: 15px;font-weight: bold;color: #999999">暂无结果</span>
          </div>
        </div>
        <div v-else>
          <div class="major-list" v-for="(sub,index) in caseList" :key="index">
            <el-button type="text" @click.stop="toCaseDetail(sub.caseName,sub.caseId)">
              {{ sub.caseName }}
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getCaseLike} from '@/api/index'

export default {
  name: 'caseSearch',
  data() {
    return {
      key: '',
      caseList: []
    }
  },
  mounted() {
  },
  methods: {
    gotoPage() {
      this.$router.back()
    },
    getCase(key) {
      console.log(key)
      getCaseLike({
        caseName: key
      }).then(res => {
        console.log(res.data)
        this.caseList = res.data
        console.log('majorlist', this.caseList)
      })
    },
    toCaseDetail(name,id) {
      console.log('id:', id)
      console.log('name:', name)
      this.$router.push({
        path: '/caseDetail',
        query: {
          name:name,
          id: id
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.encyList {
  height: 100vh;
  /*width: 100%;*/
  display: flex;
  flex-direction: column;
  background: #EDEDED;
}

// 标题部分
.ency_header {
  position: relative;
  font-size: 20px;
  width: 100%;
  background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);
  /*background-color: #19bdff;*/
  color: #fff;
  height: 45px;
  line-height: 45px;
  flex: none;
  z-index: 1;
}

.return__icon {
  position: absolute;
  margin-left: 15px;
}

.title {
  text-align: center;
  font-weight: bold;
}

// 搜索框
.search {
  border: solid 1px white;
  z-index: 1;
  margin: 10px 18px;
  border-radius: 4px;
  position: relative;
  padding: 6px 0;

  input {
    color: white;
    width: 70vw;
    border: 0;
    padding-left: 15px;
    font-size: 14px;
    // 背景透明度
    background-color: rgba(0, 0, 0, 0);
  }

  input[type=text]:focus {
    outline: none;
  }

  //修改placeholder的样式
  input::-webkit-input-placeholder {
    color: white;
    font-size: 14px;
  }

  .iconsousuo {
    color: white;
    position: absolute;
    right: 15px;
  }
}

// 蓝色部分背景
.ency_split {
  position: absolute;
  /*background-color: #19bdff;*/
  background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);
  height: calc(30% - 45px);
  margin-top: 45px;
  width: 100%;
}

// 中间的百科列表

.ency-middle {
  /*overflow-y: scroll;*/
  position: absolute;
  width: calc(100% - 30px);
  top: 7.25rem;
  padding: 0 16px 0 16px;
  z-index: 1;
  border-radius: 4px;
  display: flex;

  background-color: white;
  margin: 0 15px;
  height: calc(100% - 70px);

}

.ency-content {
  flex: 1;
  //height: auto;
  padding: 0 15px;
}

// 具体列表
.ency-list {
  width: 84vw;
  //width: calc(100vw - 15px);
  border-bottom: solid 1px #F7F7F7;
  //background-color: green;
  font-size: 14px;
  letter-spacing: 1px;
  color: #525252;
  margin-bottom: 8px;
  padding-bottom: 2px;
}

.ency-middle {
  /*overflow-y: scroll;*/
  position: absolute;
  width: calc(100% - 62px);
  top: 7.25rem;
  padding: 0 16px 0 16px;
  z-index: 1;
  border-radius: 4px;
  display: flex;

  background-color: white;
  margin: 0 15px;
  height: calc(100% - 70px);

}

.major-list {
  position: relative;
  border-bottom: solid 1px #F7F7F7;
  //background-color: green;
  font-size: 16px;
  letter-spacing: 1px;
  color: #525252;
  margin-bottom: 8px;
  padding-bottom: 2px;

  img {
    width: 14px;
  }
}

.iconxiajiantou {
  position: absolute;
  right: 30px;
  color: #BDC2CE;
}

/deep/ .el-tree-node__content {
  height: 50px;
}

.majorstyle {
  margin-left: 7vw;
  margin-bottom: 0.5vh;
}

.return__icon {
  position: absolute;
  margin-left: 15px;
}

.img {
  text-align: center;

}
</style>
