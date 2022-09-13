<template>
  <AwVirtualWaterfall class="test" :request="req">
    <!-- 使用具名插槽 -->
    <template #item="{ item }">
      <img class="test-item" :src="item.src" />
    </template>
  </AwVirtualWaterfall>
</template>

<script lang="ts" setup>
import {
  AwVirtualWaterfall,
  AwVirtualWaterfallRequest
} from '../packages/sorarain/src'

const req: AwVirtualWaterfallRequest = async (tpage, size) => {
  // 请求，并传入分页参数
  const rep = await fetch(
    `https://www.vilipix.com/api/v1/picture/public?limit=${size}&sort=hot&offset=${
      --tpage * size
    }`
  )
  // 数据处理
  let {
    data: { rows, count }
  } = await rep.json()
  rows = rows.map((item: any) => ({
    id: item.picture_id, // 必须，特征类似于v-for的key
    w: item.width, // 必须，子元素将渲染的宽度
    h: item.height, // 必须，子元素将渲染的高度
    src: item.regular_url + '?x-oss-process=image/resize,w_240/format,jpg'
  }))

  return {
    total: count,
    list: rows
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
<style lang="less" scoped>
.test {
  position: relative;
  width: 100%;
  height: 100vh; // 注意，我们需要为滚动的容器设置 固定的height高 和 可滚动overflow
  overflow-y: scroll;
  &-item {
    padding: 12px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    animation: identifier 0.25s; // 添加动画，使其出现时更加丝滑
  }
  @keyframes identifier {
    from {
      opacity: 0;
      transform: translateY(200px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
