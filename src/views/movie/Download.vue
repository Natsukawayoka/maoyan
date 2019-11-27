<template>
  <div class="dw-wrapper">
      <div class="logo-img"></div>
      <div class="info-wrapper">
          <div class="title">猫眼</div>
          <div class="content">0元看电影，天天领现金</div>
      </div>
      <div class="link-btn">立即领取</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/common.scss";
.dw-wrapper {
    display: flex;
  height: 55px;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  @include border-1px(#e8e8e8);

    .logo-img{
        margin-left: 11px;
        margin-right: 6px;
        width: 42px;
        height: 42px;
        background: url("../../assets/images/maoyan.png") no-repeat;
        background-size: contain;
    }

    .info-wrapper{
        flex: 1;
        .title{
            font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
            font-size: 15px;
            color: #333;
            line-height: 23px;
            margin-bottom: 1px;
            font-weight: 600;
        }
        .content{
            font-size: 11px;
            color: #666;
            letter-spacing: 0;
        }
    }

    .link-btn{
        font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 96px;
        height: 38px;
        margin-right: 6px;
        border-radius: 22px;
        background: #f03d37;
        color: #fff;
        font-size: 13px;
    }

    .link-btn:after{
        content: "";
        width: 19px;
        height: 19px;
        margin-left: 5px;
        background: url("../../assets/images/maobi.png") no-repeat ;
        background-size: contain;
    }

}
</style>