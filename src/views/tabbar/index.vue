<template>
  <div class="nav">
    <mt-tabbar>
      <mt-tab-item id="首页">
        <img slot="icon" src="../../../static/images/党_grey.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="通知早知道">
        <img slot="icon" src="../../../static/images/消息_grey.png">
        通知早知道
      </mt-tab-item>
      <mt-tab-item id="我的党建">
        <img slot="icon" src="../../../static/images/会员_grey.png">
        我的党建
      </mt-tab-item>
    </mt-tabbar>
    <!---->
    <mt-tab-container>
      <mt-tab-container-item id="首页">
        <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="通知早知道">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的党建">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
  import Vue from 'vue'
  import { TabContainer, TabContainerItem,Tabbar, TabItem } from 'mint-ui';
  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
