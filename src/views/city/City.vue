<template>
    <section id="city-list" class="city-list-container" style="display: block;">
    <div>
    <section>
      <div id="locate" class="city-title">
        定位城市
      </div>
      <div class="city-list city-list-inline clearfix">
        <div class="location-city">定位失败，请点击重试</div>
      </div>
    </section>

    <section class="history-city-list">
      <div id="history" class="city-title" >
        最近访问城市
      </div>
      <div class="city-list city-list-inline clearfix">

        <div class="city-item"  v-for="(h,index) in historySearch()" :key="index"  @click="pickCity(h)">
          {{h}}
        </div>

      </div>
    </section>

    <section>
      <div id="hot" class="city-title">
        热门城市
      </div>
      <div class="city-list city-list-inline clearfix">

        <div v-for="c in hotCities" :key="c.id" class="city-item" :data-nm="c.name" :data-id="c.id"  @click="pickCity(c)">
          {{c.name}}
        </div>

      </div>
    </section>

    <section v-for="(value,name) in cities" :key="name">

      <div :id="name" class="city-title city-title-letter">
        {{name}}
      </div>
      <div v-for="item in value" :key="item.id" class="city-list city-list-block clearfix">

        <div  class="city-item" :data-nm="item.name" :data-id="item.id" @click="pickCity(item)">
          {{item.name}}
        </div>

      </div>

    </section>
    </div>


    <section class="nav">
      <div class="  nav-item" data-id="locate" @click="setPosition('locate')">
        定位
      </div>

      <div class="  nav-item" data-id="history" @click="setPosition('history')">
        最近
      </div>

      <div class="  nav-item" data-id="hot" @click="setPosition('hot')">
        热门
      </div>

      <div v-for="l in getLetters" :key="l" class="nav-letter  nav-item" :data-id="l"  @click="setPosition(l)" :ref="l" @touchmove="handleTouch">
        {{l}}
      </div>

    </section>
  </section>
</template>

<script>
import { getCities } from "../../api/movie";
import BScroll from '@better-scroll/core';

export default {
    data () {
        return {
            cities:{},
            hotCities:[]
        }
    },
    computed: {
      //获取城市key，首字母
      getLetters(){
          return Object.keys(this.cities)
      }  
    },
    async created () {
        //拿到城市数据
        let rs = await getCities()
        this.cities = rs.data.cities
        this.hotCities = rs.data.hotCities
        this.$nextTick(()=>{
            this.scroll = new BScroll("#city-list",{
                scrollY:true,
                click:true
            })
            //A距离顶部的高度
            this.startY = this.$refs["A"][0].getBoundingClientRect().y
            //基础高度
            this.baseHeight = this.$refs["A"][0].offsetHeight
        })
        
    },
    methods: {
        //点击城市名称，跳转到上一个页面，城市名称更改
        pickCity(item){
            this.$store.commit("UPDATE_CITIES",item)
            if(typeof(item)=="string"){
                this.$cache.addCity(item)
            }else{
                this.$cache.addCity(item.name)
            }
            
            this.$router.go(-1);
            console.log(typeof(item));
            
        },
        
        setPosition(letter){
            this.scroll.scrollToElement(`#${letter}`)
        },
        //历史搜索
        historySearch(){
            return JSON.parse(localStorage.getItem("city")||"[]")
        },
        //滑动切换效果
        handleTouch(e){
            let y = e.touches[0].clientY
            let index = Math.floor((y - this.startY) / this.baseHeight)
            let letter = this.getLetters[index]
            this.setPosition(letter)
        }
    }
}
</script>

<style lang="scss" scoped>
.city-entry-arrow {
  width: 0;
  height: 0;
  border: 4px solid #b0b0b0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  display: inline-block;
  margin-left: 4px;
  margin-right: 5px;
  margin-top: 5px;
}

.city-list-container {
  display: none;
  background-color: #ebebeb;
  font-size: 14px;
  color: #333;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1000;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.clearfix:after {
  content: " ";
  display: table;
  clear: both;
}

.city-title {
  padding-left: 15px;
  line-height: 30px;
}

.city-title-letter {
  padding-left: 25px;
}

.city-list {
  padding-right: 30px;
}

.city-list-inline {
  background-color: #f5f5f5;
  padding-bottom: 8px;
}

.city-list-inline .city-item,
.city-list-inline .location-city {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 4%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.city-list-inline .location-city {
  width: auto;
  min-width: 30%;
  padding: 0 20px;
}

.city-list-block {
  background-color: #f5f5f5;
}

.city-list-block .city-item {
  height: 44px;
  line-height: 44px;
  margin-left: 15px;
  border-bottom: 1px solid #c8c7cc;
}

.city-list-block .city-item:last-child {
  border-bottom: none;
}

.nav {
  position: fixed;
  top: 75px;
  top: 11vh;
  right: 0;
  width: 35px;
  z-index: 10;
  text-align: center;
  font-size: 12px;
}

.nav .nav-item {
  height: 16px;
  height: 2.8vh;
}

.nav .nav-letter {
  width: 15px;
  margin-left: 15px;
}

.city-entry {
  padding-left: 15px;
  font-size: 15px;
  color: #666;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.city-entry-arrow {
  width: 0;
  height: 0;
  border: 4px solid #b0b0b0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  display: inline-block;
  margin-left: 4px;
  margin-top: 5px;
}

.city-entry .city-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70px;
  max-width: 19.2vw;
}
</style>