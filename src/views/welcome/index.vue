<!--
 * @Author: Chen.Junior
 * @LastEditTime: 2022-06-23 18:45:39
 * @Description: 欢迎页
-->
<template>
  <div>
    <a-layout>
      <a-layout-content>
        <a-card>
          <div id="basic">
            dasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdfdasfasdfasdf
          </div>
          <div id="line-less"> line-less </div>
        </a-card>
      </a-layout-content>
      <a-layout-sider class="layout-sider-anchor">
        <div class="anchor-top">
          <a-button
            class="anchor-button"
            shape="circle"
            @click="anchorActive = !anchorActive"
          >
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
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { IconLeft, IconRight } from '@arco-design/web-vue/es/icon';

  const anchorActive = ref<boolean>(false);
</script>

<style lang="less" scoped>
  .layout-sider-anchor {
    padding: 0 10px 20px 10px;

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
  }
</style>
