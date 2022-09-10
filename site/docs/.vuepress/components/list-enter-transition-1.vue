<template>
  <div class="test">
    <AwListEnterTransition>
      <div v-for="item in count" :key="item" class="test-item">{{ item }}</div>
    </AwListEnterTransition>
  </div>
</template>

<script lang="ts" setup>
import { AwListEnterTransition } from 'sorarain'
import { onMounted, ref } from 'vue'
const count = ref(0)
onMounted(() => {
  count.value = 5
})
</script>
<style lang="less" scoped>
.test {
  width: 100%;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
  &-item {
    margin: 10px 0;
    padding: 10px 0;
    background: #333;
    border-radius: 8px;
    text-align: center;
    color: #fff;
  }
}
</style>
