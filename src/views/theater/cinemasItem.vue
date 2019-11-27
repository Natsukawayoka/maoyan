<template>
  <!-- 搜索结果 -->
  <section data-page=".cinema" class="cinema singleton page active" style="height: 571.833px;">
    <div class="page-wrap fix-nav">
      <div class="swiper-header cinema-ad"></div>

      <div class="nav-wrap filter-nav-wrap" style="top: 95px;">
        <div class="tab mb-line-b">
          <div class="item" data-tab=".region">
            全城
            <span class="drop"></span>
          </div>
          <div class="item" data-tab=".brand">
            品牌
            <span class="drop"></span>
          </div>
          <div class="item" data-tab=".special">
            特色
            <span class="drop"></span>
          </div>
        </div>
      </div>
      <div class="blacker"></div>

      <div class="cinema-list" data-cid="c_5ovvtlp2" style="margin-bottom: 55px; margin-top: 40px;">
        <div class="list-wrap" style="margin-top: 0px; min-height: 627.333px;">
          

          <div class="item mb-line-b" data-id="16669" data-bid="dp_wx_home_cinema_list">
            <div class="title-block box-flex middle">
              <div class="title line-ellipsis">
                <span>星轶IMAX影城（安庆吾悦广场旗舰店）</span>

                <span class="price-block">
                  <span class="price">27</span>
                  <span class="q">元起</span>
                </span>
              </div>
              <div class="location-block box-flex">
                <div class="flex line-ellipsis">迎江区人民路4号新城吾悦广场4楼4009号</div>

                <div class="distance">868.5km</div>
              </div>
              <div class="flex"></div>

              <div class="label-block">
                <div class="endorse">改签</div>

                <div class="snack">小吃</div>

                <div class="vipTag">折扣卡</div>

                <div class="hallType">IMAX厅</div>

                <div class="hallType">杜比全景声厅</div>
              </div>
            </div>
          </div>

          
         

        </div>
        <div class="more"></div>
      </div>
    </div>
    <div class="more"></div>

    <div class="locatebanner" style>
      <img class="locatebanner-arrow" src="../../assets/images/daohang.png" alt />
      <span class="locatebanner-content">定位失败，请稍后重试</span>
      <div class="locatebanner-refresh-wrap">
        <img class="locatebanner-refresh" src="../../assets/images/jiazai.png" data-bid />
      </div>
    </div>
  </section>
</template>

<script>
import { getCinemasList } from "../../api/movie";
export default {
    data () {
        return {
            dataviews:{
                cinemas:[]
            }
        }
    },
    methods: {
       

}
}
</script>


<style lang="scss" scoped>
.nav-wrap.filter-nav-wrap .tab {
  display: -webkit-box;
  display: flex;
}
.mb-line-b {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==)
    0 bottom repeat-x;
}
.nav-wrap.filter-nav-wrap .tab .item {
  -webkit-box-flex: 1;
  flex: 1;
  text-align: center;
  line-height: 40px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  font-size: 13px;
  text-overflow: ellipsis;
}

.nav-wrap.filter-nav-wrap .tab .item .drop {
  display: inline-block;
  position: absolute;
  top: 18px;
  width: 0;
  height: 0;
  margin-left: 4px;
  border: 4px solid transparent;
  border-top-color: #b0b0b0;
}
.cinema-list .list-wrap .item {
  padding: 13px 15px 13px 0;
  margin-left: 15px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}
.cinema-list .list-wrap .title-block {
  display: block;
}
.box-flex:not(.column).middle,
.inline-flex:not(.column).middle {
  -webkit-box-align: center;
  align-items: center;
}
.cinema-list .list-wrap .title-block .title {
  height: 23px;
  line-height: 23px;
  font-size: 16px;
  color: #000;
}

.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.cinema-list .list-wrap .price-block {
  padding-top: 9px;
  padding-left: 3px;
}
.cinema-list .list-wrap .price-block .d,
.cinema-list .list-wrap .price-block .price,
.cinema-list .list-wrap .price-block .q {
  font-size: 11px;
  color: #f03d37;
}
.price {
  font-size: 18px;
}
.price-block .q {
  margin-left: 3px;
}
.cinema-list .list-wrap .price-block .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema-list .list-wrap .location-block {
  margin-top: 6px;
  font-size: 13px;
  color: #666;
}
.cinema-list .list-wrap .location-block .distance {
  margin-left: 5px;
}
.cinema-list .list-wrap .title-block .label-block {
  height: 17px;
  line-height: 17px;
  margin-top: 4px;
  margin-bottom: 4px;
  overflow: hidden;
  font-size: 0;
  flex-shrink: 0;
}
.cinema-list .list-wrap .title-block .label-block div.snack,
.cinema-list .list-wrap .title-block .label-block div.vipTag {
  color: #f90;
  border: 1px solid #f90;
}
.cinema-list .discount-block {
  color: #999;
  margin-bottom: 4px;
}
.cinema-list .discount-block .discount-label {
  width: 15px;
  height: 14px;
  position: relative;
  top: 3px;
}
.cinema-list .discount-block .discount-label-text {
  margin-left: 0;
  font-size: 11px;
}
.cinema-list .list-wrap .title-block .label-block div.endorse,
.cinema-list .list-wrap .title-block .label-block div.hallType,
.cinema-list .list-wrap .title-block .label-block div.sell {
  color: #589daf;
  border: 1px solid #589daf;
}
.locatebanner {
  position: fixed;
  z-index: 1;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 12px 11px;
  padding: 8px;
  border-radius: 5px;
  background: hsla(0, 0%, 94%, 0.9);
  color: #666;
  font-size: 13px;
  display: -webkit-box;
  display: flex;
  align-content: center;
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
}
.locatebanner img {
  width: 14px;
  height: 14px;
  margin-top: 2px;
}
.locatebanner-refresh-wrap {
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-align: right;
}
</style>