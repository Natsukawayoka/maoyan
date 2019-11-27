<template>
<div class="list">
      <div class="movie cell" :data-id="item.id">
        <img
          class="poster"
          :src="item.img|replaceurl"
          alt
        />
        <div class="info">
          <div class="name-score">
            <p class="name">
              <span class="one-line" style="width: 187.875px;">{{item.nm}}</span>
              <span :class="item.version"></span>
            </p>

            <span class="score">
              <span v-show="item.sc>0" class="num">{{item.sc}}分</span>
              <span v-show="item.sc==0" class="num">暂无评分</span>
            </span>
          </div>
          <div class="detail-section">
            <div class="detail-items">
              <p class="ename one-line">{{item.enm}}</p>
              <p class="catogary">{{item.cat}}</p>
              <p class="release">{{item.rt}}</p>
            </div>
          </div>
          <div class="btn" :data-wishst="item.wishst" >
            <button class=" toggle-wish-btn" v-show="!item.globalReleased&&item.showst==1">想看</button>
             
          </div>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
    props: ["item"]
}
</script>

<style lang="scss" scoped>
@import "../../assets/common.scss";

 
  .list {
    padding-left: 15px;
    @include border-1px(#e6e6e6);
  }
  .movie {
    padding: 12px 0;
    min-height: 90px;
    .poster {
      background-color: #eee;
      width: 64px;
      height: 90px;
      float: left;
      margin-right: 10px;
    }
    .info {
      margin-right: 15px;
      margin-top: 1px;
    }
    .name-score {
      font-size: 16px;
      color: #222;
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      margin-bottom: 2px;

      .name {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        flex-grow: 1;
        max-height: 24px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        .one-line {
          display: inline-block;
          font-weight: 700;
          font-size: 17px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 187.875px;
        }
        
      }
      .score {
          color: #fa0;
          font-size: 10px;
          flex-shrink: 0;
          padding-left: 5px;
        }
        .num {
          font-size: 16px;
        }
    }
    .detail-section {
      position: relative;
      line-height: 20px;
      .detail-items {
        -webkit-box-flex: 1;
        flex-grow: 1;
        overflow: hidden;
        padding-right: 10px;
        margin-right: 48px;
        min-height: 27px;
      }
      .ename {
        font-size: 13px;
        color: #666;
        margin-top: 2px;
      }
      .catogary {
        font-size: 13px;
        color: #666;
        margin-top: 2px;
      }
      .release {
        font-size: 13px;
        color: #666;
        margin-top: 2px;
      }
    }
  }
  .v3d.imax {
    width: 43px;
    background: url("../../assets/images/imax.png") no-repeat;
  }
  .v2d.imax {
    width: 43px;
    background: url("../../assets/images/2d.png") no-repeat;
  }
  .cell {
    @include border-1px(#e6e6e6);
  }
 

.one-line {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.toggle-wish-btn {
    background-color: #faaf00;
    border: none;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    margin-bottom: 7px;
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
    margin: auto;
}
</style>