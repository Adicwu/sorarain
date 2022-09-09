<template>
  <div class="desc-box">
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
    <slot />
  </div>
</template>

<script lang="ts" setup>
// const emit = defineEmits<{}>()
const props = withDefaults(
  defineProps<{
    title: string
    desc: string
  }>(),
  {}
)
</script>
