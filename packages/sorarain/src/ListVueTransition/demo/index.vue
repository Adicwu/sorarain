<template>
  <AwListVueTransition class="box">
    <div v-for="item in list" :key="item" class="box-item">{{ item }}</div>
  </AwListVueTransition>
  <button @click="list.push((Math.random() * 100) | 0)">add</button>
  <button @click="list.shift()">shift</button>
  <button @click="list.pop()">pop</button>
</template>

<script lang="ts" setup>
import AwListVueTransition from '../'
import { ref } from 'vue'
const list = ref([0, 1, 2, 3])
</script>
<style lang="less" scoped>
.box {
  display: flex;
  gap: 20px;
  width: 600px;
  flex-wrap: wrap;
  &-item {
    width: 200px;
    font-size: 22px;
    background: crimson;
  }
}
</style>
