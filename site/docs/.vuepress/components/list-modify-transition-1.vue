<template>
  <div class="test">
    <button @click="list.push((Math.random() * 100) | 0)">add</button>
    <button @click="list.shift()">shift</button>
    <button @click="list.pop()">pop</button>

    <AwListModifyTransition class="box">
      <div v-for="item in list" :key="item" class="box-item">{{ item }}</div>
    </AwListModifyTransition>
  </div>
</template>

<script lang="ts" setup>
import { AwListModifyTransition } from 'sorarain'
import { ref } from 'vue'
const list = ref([0, 1, 2, 3])
</script>
<style lang="less" scoped>
.test {
  .box {
    display: flex;
    gap: 20px;
    width: 600px;
    flex-wrap: wrap;
    margin-top: 20px;
    &-item {
      width: 100px;
      font-size: 22px;
      background: crimson;
    }
  }

  button {
    margin: 0 8px;
  }
}
</style>
