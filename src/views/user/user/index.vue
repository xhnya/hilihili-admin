<template>
  <div>
    <!--    用户管理-->
    <a-card style="margin-left: 10px">
      <a-input v-model:value="search" placeholder="Basic usage" />
      <a-button type="primary" > 新增菜单 </a-button>
    </a-card>
  </div>
</template>
<script setup>
  import { ref } from 'vue';

  let search = ref('');
</script>
<style scoped lang="less"></style>
