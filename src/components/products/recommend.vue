<template>
<!-- 右侧推荐产品列表 -->
  <div class="recommend-box-wrapper">
    <div class="recommend-box">
      <span>猜你喜欢</span>
      <ul class="recommend">
        <li v-for="item in list" :key="item.itemId">
          <!-- 产品图片 -->
          <div class="image">
            <img
              :src="item.imgUrl"
              alt="图片"
            />
          </div>
          <!-- 产品信息 -->
          <div class="information">
            <p class="name">{{ item.title }}</p>
            <p class="score">
              <el-rate
                disabled-void-color='#ccc'
                v-model="item.score"
                disabled
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
              <span>{{item.commentNum}}个评价</span>
            </p>
            <p class="address">{{item.areaName}}</p>
            <p class="pirce">
              ￥
              <span>{{item.lowPrice}}</span>起
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style>
</style>