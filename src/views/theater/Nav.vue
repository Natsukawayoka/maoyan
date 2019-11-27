<template>
  <div>
    <section class="topbar" style>
      <div class="gray-bg topbar-bg">
        <router-link class="city" tag="div" to="/city">
          <div class="city-entry">
            <span class="city-name">{{$store.state.city.name||$store.state.city}}</span>
            <i class="city-entry-arrow"></i>
          </div>
        </router-link>
        <div class="search-entry search-input" data-type="cinema" @click="$router.push('/search')">
          <img src="../../assets/images/fangdajing.png" />
          <span>搜影院</span>
        </div>
      </div>
    </section>


  </div>
</template>

<style lang="scss" scoped>
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
  min-width: 30px;
  max-width: 60px;
}

.search-input {
  display: -webkit-box;
  display: flex;
  background-color: #fff;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 28px;
  font-size: 13px;
  color: #b2b2b2;
  margin-left: 18px;
  border: 0.5px solid #e6e6e6;
  border-radius: 5px;
  margin-right: 15px;
}

.search-input img {
  width: 14px;
  height: 14px;
  margin-left: 3px;
  margin-right: 4px;
}

.topbar {
  border-bottom: 1px solid #e6e6e6;
  height: 44px;
}

.topbar .search-input {
  -webkit-box-flex: 1;
  flex-grow: 1;
}

.topbar-bg {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 44px;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.topbar-bg.noCityBar .city-entry {
  display: none;
}

.white-bg {
  background-color: #fff;
}

.white-bg.noCityBar:before {
  content: "";
  display: block;
  width: 45px;
}

.gray-bg {
  background: #f5f5f5;
}
</style>