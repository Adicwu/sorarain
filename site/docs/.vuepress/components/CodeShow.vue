<template>
  <div class="code-show">
    <div class="source">
      <slot name="source" />
    </div>
    <div
      class="meta"
      :style="{
        height: !expand ? 0 : `${metaInnerHeight}px`
      }"
    >
      <div ref="metaInnerEl">
        <slot name="meta" />
      </div>
    </div>
    <div class="toggle" @click="expand = !expand">
      <i
        class="iconfont"
        :class="expand ? 'icon-arrow-up' : 'icon-arrow-down'"
      ></i>
      <span>{{ !expand ? '显示' : '隐藏' }}代码</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import '../assets/icon/iconfont.css'

const props = withDefaults(
  defineProps<{
    initExpand?: boolean
  }>(),
  {
    initExpand: false
  }
)

const expand = ref(props.initExpand)
const metaInnerHeight = ref(0)
const metaInnerEl = ref<HTMLElement>()

onMounted(() => {
  metaInnerHeight.value = metaInnerEl.value?.clientHeight || 0
})
</script>
<style lang="less" scoped>
.code-show {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  margin: 24px 0;
  &:hover {
    box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%),
      0 2px 4px 0 rgb(232 237 250 / 50%);
  }
  .source {
    padding: 24px;
  }
  .meta {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    transition: height 0.2s;
    & > div {
      overflow: hidden;
    }
  }
  .toggle {
    border-top: 1px solid #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: var(--c-brand);
      background-color: #f9fafc;
      .iconfont {
        transform: translate(-44px, -2px);
      }
      span {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .iconfont {
      display: block;
      transition: all 0.25s;
    }
    span {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      display: inline-block;
      width: max-content;
      transform: translateX(30px);
      font-size: 14px;
      transition: 0.3s;
      line-height: 40px;
      opacity: 0;
    }
  }
}
</style>
