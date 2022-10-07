<template>
  <div class="code-example">
    <slot />
  </div>
</template>

<script lang="ts" setup>
// const emit = defineEmits<{}>()
// const props = withDefaults(defineProps<{}>(), {})
</script>
<style lang="less" scoped>
.code-example {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  margin: 24px 0;
  padding: 24px;
  overflow: hidden;
  ::v-slotted(h3) {
    padding: 0;
    margin: 0;
  }
  ::v-slotted(table) {
    display: table;
    width: 100%;
    margin-top: 12px;
    color: #34495e;
    font-size: 14px;
    line-height: 1.5;
    border-collapse: collapse;
    border-style: none;
    th,
    td {
      border-style: none;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
    tr {
      border: unset;
      &:nth-child(2n) {
        background-color: unset;
      }
    }
    th {
      padding: 8px 10px;
      font-weight: 600;
      text-align: left;
    }
    td {
      padding: 8px;
      border-top: 1px solid #f1f4f8;
    }
  }
}
</style>
