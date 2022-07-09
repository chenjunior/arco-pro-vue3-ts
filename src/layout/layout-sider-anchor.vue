<!--
 * @Author: Chen.Junior
 * @LastEditTime: 2022-07-08 14:19:33
 * @Description: 右边侧边栏
-->

<template>
  <div>
    <div class="anchor-top">
      <a-button
        class="anchor-button"
        :class="anchorActive ? 'anchor-button-left' : ''"
        shape="circle"
        size="large"
        @click="anchorClick"
      >
        <icon-left v-if="anchorActive" />
        <icon-right v-else />
      </a-button>
    </div>
    <a-anchor line-less :offset-top="80" :change-hash="false">
      <a-anchor-link
        v-for="(item, index) in anchorList"
        :key="index"
        :href="item.herf"
        :title="index + 1 + '，' + item.name"
      ></a-anchor-link>
    </a-anchor>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import emitter from '@/utils/eventBus';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const anchorList: any = ref([]);

  onMounted(() => {
    anchorList.value = route.meta.anchorList ? route.meta.anchorList : [];
  });

  const anchorActive = ref(false);
  const anchorClick = () => {
    anchorActive.value = !anchorActive.value;
    emitter.emit('anchor', anchorActive.value);
  };

  emitter.once('rounterAnchor', (meta: any) => {
    anchorList.value = meta.anchorList ? meta.anchorList : [];
  });
</script>

<style lang="less" scoped>
  .anchor-top {
    position: relative;
    z-index: 999;
    padding: 40px 0;
    overflow: none;

    .anchor-button {
      position: fixed;
      top: 88px;
      right: 155px;
      z-index: 99;
    }

    .anchor-button-left {
      right: -10px;
    }
  }
</style>
