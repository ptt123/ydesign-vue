<template>
  <div @click="onClick" class="test">这是一个测试组件</div>
</template>

<script>
export default {
  name: 'Test',
  props: {},
  data() {
    return {
      str: '这是一个测试字符串',
    }
  },
}
</script>

<style lang="less" scoped></style>
