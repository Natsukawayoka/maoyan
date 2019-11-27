<template>
  

  <div class="list">
      
  
    <div class="cinema cell" :data-id="item.id">
        <div class="info">
          <p class="name-price">
            <span class="name one-line">{{item.nm}}</span>
            <span class="sell-price">             
              <span class="price">{{item.sellPrice}}</span>
              元起
            </span>
          </p>
          <p class="address one-line">{{item.addr}}</p>
          <p class="feature-tags">          
              <span>座</span>          
              <span class="featrue" v-show="item.snack">小吃</span>      
          </p>
        </div>
        <div class="distance">{{item.distance}}</div>
      </div>
  
 

    </div>
</template>
<script>
export default {
    props: ["item"]
}
</script>
<style lang="scss" scoped>


.result .list {
    padding-left: 15px;
    border-top: 1px solid #e6e6e6
}

.result .cell,.result .list {
    border-bottom: 1px solid #e6e6e6
}

.result .cell:last-child {
    border-bottom: none
}

.result .more-result {
    font-size: 15px;
    color: #ef4238;
    line-height: 44px;
    height: 44px;
    text-align: center
}

.result .movie {
    padding: 12px 0;
    min-height: 90px
}

.result .movie .name-score {
    font-size: 16px;
    color: #222;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 2px
}

.result .movie .name-score .name {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
    max-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.result .movie .name-score .name .one-line {
    display: inline-block;
    font-weight: 700;
    font-size: 17px
}

.result .movie .name-score .score,.result .movie .name-score .wish {
    color: #fa0;
    font-size: 10px;
    flex-shrink: 0;
    padding-left: 5px
}

.result .movie .name-score .num {
    font-size: 16px
}

.result .movie .name-score .no-score {
    font-size: 14px;
    color: #666;
    flex-shrink: 0
}

.result .movie .detail-section {
    position: relative
}

.result .movie .detail-section .detail-items {
    -webkit-box-flex: 1;
    flex-grow: 1;
    overflow: hidden;
    padding-right: 10px;
    margin-right: 48px;
    min-height: 27px
}

.result .movie .detail-section .catogary,.result .movie .detail-section .ename,.result .movie .detail-section .release {
    font-size: 13px;
    color: #666;
    margin-top: 2px
}

.result .movie .detail-section .btn,.result .movie .detail-section .buy-btn {
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    line-height: 13px;
    margin-bottom: 7px;
    -webkit-align-self: flex-end;
    align-self: flex-end;
    flex-shrink: 0;
    width: 48px;
    text-align: center;
    height: 27px;
    line-height: 27px;
    right: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto
}

.result .movie .detail-section .sale {
    background-color: #ef4238
}

.result .movie .detail-section .presale {
    background-color: #3c9fe6
}

.result .movie .detail-section .toggle-wish-btn[data-wishst="0"] {
    background-color: #faaf00;
    border: none;
    color: #fff
}

.result .movie .detail-section .toggle-wish-btn[data-wishst="1"] {
    background-color: #fff;
    border: 1px solid #eaeaea;
    color: #666
}

.result .movie .poster {
    background-color: #eee;
    width: 64px;
    height: 90px;
    float: left;
    margin-right: 10px
}

.result .movie .info {
    margin-right: 15px;
    margin-top: 1px
}

.result .cinema {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 15px 15px 15px 0
}

.result .cinema .info {
    -webkit-box-flex: 1;
    flex: 1;
    overflow: hidden
}

.result .cinema .name-price {
    font-size: 16px;
    color: #000;
    margin-bottom: 6px;
    display: -webkit-box;
    display: flex
}

.result .cinema .sell-price {
    font-size: 11px;
    color: #999;
    white-space: nowrap;
    margin-left: 10px
}

.result .cinema .price {
    font-size: 17px;
    color: #ef4238
}

.result .cinema .address {
    font-size: 13px;
    color: #999
}

.result .cinema .feature-tags {
    margin-top: 7px
}

.result .cinema .feature-tags span {
    border: 1px solid #589daf;
    color: #589daf;
    position: relative;
    display: inline-block;
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    font-size: .6rem
}

.result .cinema .feature-tags span.featrue {
    color: #f90;
    border-color: #f90
}

.result .cinema .distance {
    font-size: 13px;
    color: #999
}
</style>