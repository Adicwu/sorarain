<template>
  <AwListVueTransition class="content">
    <AwDrag
      v-for="item in list"
      :key="item.id"
      draggable
      :self-key="item.id"
      :group-key="123"
      class="content-item"
      @exChange="onExChange"
    >
      <img :src="item.pic" alt="" />
    </AwDrag>
  </AwListVueTransition>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { AwDrag, AwListVueTransition, AwDragExchangeParam } from 'sorarain'
import { arrChildSwap } from '@sorarain/utils';

const list = ref([
  {
    id: 0,
    pic: 'https://tvax3.sinaimg.cn/large/008kBpBlgy1h37057ew9lj307409wq3m.jpg'
  },
  {
    id: 1,
    pic: 'https://tvax3.sinaimg.cn/large/008kBpBlgy1h2sjo97niaj307409w74t.jpg'
  },
  {
    id: 2,
    pic: 'https://tvax3.sinaimg.cn/large/008kBpBlgy1gxh7fsvomqj307409waat.jpg'
  }
])
const onExChange = (e: AwDragExchangeParam) => {
  const fromI = list.value.findIndex((item) => item.id === e.from)
  const toI = list.value.findIndex((item) => item.id === e.to)
  arrChildSwap (list.value, fromI, toI)
}
</script>
<style lang="less" scoped>
.content {
  display: flex;
  gap: 20px;
}
.content-item {
  position: relative;
  display: flex;
  img {
    width: 150px;
    height: 250px;
    object-fit: cover;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
