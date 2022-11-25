<!--
 * @Author: Chen.Junior
 * @LastEditTime: 2022-11-24 18:19:47
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

    <div id="async-and-thread">
      <asyncAndThreadVue></asyncAndThreadVue>
    </div>
    <div id="set-and-map">
      <setAndMapVue></setAndMapVue>
    </div>
    <div id="promise">
      <promiseVue></promiseVue>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import variableVue from './components/variable.vue';
  import valueAndReferenceVue from './components/valueAndReference.vue';
  import prototypeVue from './components/prototype.vue';
  import scopeAndClosuresVue from './components/scopeAndClosures.vue';
  import asyncAndThreadVue from './components/asyncAndThread.vue';
  import setAndMapVue from './components/setAndMap.vue';
  import promiseVue from './components/promise.vue';
</script>

<style lang="less" scoped></style>
