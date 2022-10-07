<template>
  <div class=""></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useChildren } from '@sorarain/use'

const RELATION_KEY = Symbol('my-relation')

const { linkChildren } = useChildren(RELATION_KEY)

const count = ref(0)
const add = () => {
  count.value++
}

// 向子组件提供数据和方法
linkChildren({ add, count })
</script>
