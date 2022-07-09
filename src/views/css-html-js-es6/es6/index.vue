<!--
 * @Author: Chen.Junior
 * @LastEditTime: 2022-07-09 14:30:44
 * @Description: css-html-js-es6
-->
<template>
  <div>
    <div id="variable">
      <variableVue></variableVue>
    </div>
    <div id="value-and-reference">
      <valueAndReferenceVue></valueAndReferenceVue>
    </div>
    <div id="prototype">
      <prototypeVue></prototypeVue>
    </div>
    <div id="scope-and-closures">
      <scopeAndClosuresVue></scopeAndClosuresVue>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import variableVue from './components/variable.vue';
  import valueAndReferenceVue from './components/valueAndReference.vue';
  import prototypeVue from './components/prototype.vue';
  import scopeAndClosuresVue from './components/scopeAndClosures.vue';
</script>

<style lang="less" scoped></style>
