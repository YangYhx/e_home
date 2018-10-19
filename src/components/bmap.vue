<template>
  <div class="map-wrap">
    <div id="bd"></div>
  </div>
</template>

<script>
  export default {
    name: "bdmap",
    data() {
      return {
        map: null
      }
    },
    methods: {
      initMap() {
        let mp = new BMap.Map('bd');
        mp.centerAndZoom(new BMap.Point(114.02,32.98), 10);

        let top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM, offset: new BMap.Size(20, 60)});

        let marker = new BMap.Marker(new BMap.Point(114.02,32.98));
        mp.addOverlay(marker); //声明一个标记点
        let label = new BMap.Label("黄淮学院",{offset:new BMap.Size(20,10)});//声明一个文字标注
        marker.setLabel(label);


        let geolocationControl = new BMap.GeolocationControl();
        mp.addControl(geolocationControl);
        mp.addControl(top_right_navigation);
      }
    },
    created() {
      this.$nextTick(() => {
        this.initMap();
      })
    }
  }
</script>

<style scoped>

  .map-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
  #bd {
    height: 100%;
    width: 100%;
  }
</style>
