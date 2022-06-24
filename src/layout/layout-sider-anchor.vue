<!--
 * @Author: Chen.Junior
 * @LastEditTime: 2022-06-24 17:48:39
 * @Description: 右边侧边栏
-->

<template>
  <div>
    <div class="anchor-top">
      <a-button class="anchor-button" shape="circle">
        <icon-right />
      </a-button>
    </div>
    <a-anchor line-less :offset-top="80">
      <a-anchor-link href="#basic">Basic</a-anchor-link>
      <a-anchor-link href="#line-less">LineLess Mode</a-anchor-link>
      <a-anchor-link href="#affix">
        Affix
        <template #sublist>
          <a-anchor-link href="#boundary">Scroll Boundary</a-anchor-link>
          <a-anchor-link href="#hash">Hash mode</a-anchor-link>
        </template>
      </a-anchor-link>
    </a-anchor>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
  .anchor-top {
    position: relative;
    padding: 40px 0;
    overflow: none;

    .anchor-button {
      position: absolute;
      top: 28px;
      left: 0;
      z-index: 99;
    }
  }
</style>
