<template>
  <div class="search_wrapper">
    <Header>
      <i class="back" @click="$router.go(-1)"></i>
    </Header>

    <div id="scroll_wrapper" v-show="isall">
      <div class="scroll_con">
        <SearchMovie v-for="item in movielist.answer" :key="item.id" :item="item"></SearchMovie>
      </div>
    </div>

    <div v-show="!isall">
      <div class="searchBox">
        <div class="input_box">
          <img src="http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt />
          <input class="text" type="text" v-model="keywords" placeholder="搜电影、搜影院" />
        </div>

        <div class="cancel" @click="handleCancel">取消</div>
      </div>

      <div class="result" v-show="keywords">
        <h3>电影/电视剧/综艺</h3>

        <SearchList v-for="i in dataview.jshow" :key="i.id" :item="i"></SearchList>
        <!-- @click="$router.push('/movies')" -->
        <!-- <div style="height:20px;width:20px;background:#000;" @click="$router.push('/movies')"></div> -->
        <div @click="SearchMore "  class="more-result" data-target="movies" :data-total="dataview.total" >查看全部{{dataview.total}}部影视剧</div>
      </div>

         <!-- 影院 -->
      <div class="result" v-show="isshow">
      <h3>影院</h3>
    
      <Theater v-for="i in cinema.answer" :key="i.id" :item="i"></Theater>
      </div>
      

      <div class="search_hietory">
        <div class="item" v-show="!keywords" v-for="(key,index) in historylist" :key="index">
          <span @click="putkeywords(key)">{{key}}</span>
          
          <button @click="handleDel(key)">del</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import SearchList from "./searchlist";
import SearchMovie from "./searchmovie";
import Theater from "./Theater";
import { getSearchList, getSearchMovieList } from "../../api/movie.js";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Toast, Indicator } from "mint-ui";

BScroll.use(Pullup);

export default {
  data() {
    return {
      isshow:false,
      isall: false,
      keywords: "",
      historylist: this.$cache.get(),
      kw: "",
      cityId: 226,
      stype: -1,
      dataview: {
        answer: [],
        total: "",
        jshow: []
      },
      movielist: {
        answer: [],
        total: "",
        offset: 20
      },
      cinema:{
        answer:[],
        total: "",
      }
    };
  },
  watch: {
    //存入历史搜索记录
    keywords(newval, oldval) {
      let str = localStorage.getItem('search')
      let arr = JSON.parse(str);
      //如果已经存入的数据里没有这一条才存入
      if(arr.indexOf(newval)<0){
        this.$cache.add("search", newval);
      }
      //如果输入框有值就进行搜索
      if (this.keywords) {
        this.SearchAnswer();
      } else {
        this.handleDel(newval);
        this.isshow = false
      }
    }
  },
  components: {
    Header,
    SearchList,
    SearchMovie,
    Theater
  },
  methods: {
    //取消
    handleCancel() {
      //清空输入框内容
      this.keywords = "";
      //渲染历史纪录
      this.historylist = this.$cache.get();
    },
    //删除历史纪录
    handleDel(key) {
      this.$cache.del(key);
      this.historylist = this.$cache.get();
    },
    //放置搜索结果
    putkeywords(key){
       this.keywords = key;
    },

    async SearchAnswer() {
      var params = {
        kw: this.keywords,
        cityId: this.cityId,
        stype: this.stype
      };
      let rs = await getSearchList(params);
      //let reg = new RegExp()
      
    
      if(rs.data.cinemas){
        this.isshow = true;
        this.cinema.answer = rs.data.cinemas.list.slice(0,2);
        this.cinema.total = rs.data.cinemas.total;
      }
      this.dataview.answer = rs.data.movies.list;
      this.dataview.total = rs.data.movies.total;
      this.dataview.jshow = this.dataview.answer.slice(0,3);
    },

    async SearchMore() {
      //console.log(this.movielist.total,this.movielist.answer.length);

      if (this.movielist.total === this.movielist.answer.length) {
        Toast({
          message: "已经加载完了",
          position: "bottom",
          duration: 2000
        });
        //关闭pullup事件
        this.scroll.finishPullUp();
        return;
      }

      var params = {
        keyword: this.keywords,
        ci: this.cityId,
        offset: this.movielist.offset,
        limit: 20
      };
      Indicator.open();
      let rs = await getSearchMovieList(params);

      this.movielist.answer.push(...rs.data.movies);
      this.movielist.total = rs.data.total;
      this.$nextTick(() => {
        this.scroll.finishPullUp();
        this.scroll.refresh();
      });
      Indicator.close();
      this.movielist.offset += 20;
      this.isall = true;
      console.log(this.movielist.total);
    }
  },

  async mounted() {
    Indicator.open();
    this.$nextTick(() => {
      this.scroll = new BScroll("#scroll_wrapper", {
        scrollY: true,
        pullUpLoad: true
      });
      this.scroll.on("pullingUp", () => {
        this.SearchMore();
      });
      Indicator.close();
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/common.scss";
.search_wrapper {
  background-color: #f5f5f5;
  height: 100%;
  .search_hietory {
    background-color: #fff;
    .item {
      margin-left: 15px;
      display: -webkit-box;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e5e5e5;
      line-height: 44px;
      align-items: center;

      button {
        float: right;
        margin-right: 10px;
      }
    }
  }
}

.back {
  content: "";
  display: block;
  position: absolute;
  top: 16px;
  left: 20px;
  width: 16px;
  height: 16px;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.searchBox {
  font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif;
  display: flex;
  align-items: center;
  padding: 8px;
  .input_box {
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #fff;
    flex-grow: 1;
    height: 30px;
    img {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      float: left;
      position: relative;
      top: 6px;
    }
    input {
      flex: 1;
      outline: none;
      font-size: 14px;
      border: 0;
      line-height: 30px;
    }
  }
  .cancel {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 16px;
    color: #f03d37;
  }
}
.result {
  margin-bottom: 10px;
  background-color: #fff;
  font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif;
  h3 {
    font-size: 15px;
    color: #999;
    padding: 9px 15px;
    font-weight: 400;
    @include border-1px(#e6e6e6);
  }
}
.more-result {
  font-size: 15px;
  color: #ef4238;
  line-height: 44px;
  height: 44px;
  text-align: center;
}
#scroll_wrapper {
  height: 100%;
  overflow: hidden;
  .scroll_con {
    padding: 12px 16px;
    background: #fff;
    margin-bottom: 3px;
  }
}
.result {
    margin-bottom: 10px;
    background-color: #fff
}

.result .everyone-search {
    color: #999;
    font-size: 13px;
    padding: 6px 15px;
    background-color: #f5f5f5
}

.result .everyone-search+.list {
    border-top: none
}

.result .no-related-result {
    font-size: 15px;
    color: #999;
    height: 44px;
    line-height: 44px;
    text-align: center
}

.result h3 {
    font-size: 15px;
    color: #999;
    padding: 9px 15px
}

</style>