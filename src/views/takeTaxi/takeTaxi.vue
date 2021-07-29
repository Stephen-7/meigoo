<template>
  <div class="view">
    <div id='allmap'></div>
    <div class="mapView">
      <p>从当前位置到终点站需要{{time}}</p>
      <p>总路程为{{add}}</p>
      <p>一口价{{price}}元</p>
      <div class="mapView-type">
        <p>取消</p>
        <p>呼叫</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "takeTaxi",
    data() {
      return {
        add: "",
        time: "",
        price: "",
      }
    },
    methods: {

    },
    mounted() {
      var _this = this;
      var price = 2;
      var map = new BMapGL.Map("allmap");
      var point = new BMapGL.Point(113.328274, 23.102452);
      map.centerAndZoom(point, 14);
      map.enableScrollWheelZoom(true);
      var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
      map.addControl(scaleCtrl);
      var zoomCtrl = new BMapGL.ZoomControl();  // 添加比例尺控件
      map.addControl(zoomCtrl);
      var marker = new BMapGL.Marker(point);
      // var myIcon = new BMapGL.Icon("https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/3792/5112637127~300x300.image", new BMapGL.Size(25, 25));
      // var marker = new BMapGL.Marker(point, {
      //   icon: myIcon
      // });
      map.addOverlay(marker);
      var searchComplete = function (results) {
        if (transit.getStatus() != BMAP_STATUS_SUCCESS) {
          return;
        }
        var plan = results.getPlan(0);
        _this.add = plan.getDistance(true);
        _this.time = plan.getDuration(true);
        _this.price = (plan.getDistance(true).split("公里")[0] * price).toFixed(2);
      };
      var transit = new BMapGL.DrivingRoute(map, {
        renderOptions: {map: map},
        onSearchComplete: searchComplete,
      });
      var start = new BMapGL.Point(113.327115, 23.102132);
      var end = new BMapGL.Point(113.327717, 23.125254);
      transit.search(start, end);
    }
  }
</script>

<style scoped>
  #allmap {
    width: 100%;
    height: 80vh;
  }

  .bm-view {
    width: 100%;
    height: 100vh;
  }

  .mapWin {
    width: 1200px;
    height: 500px;
    margin: 7% auto 0;
  }

  .bmView {
    width: 100%;
    height: 100vh;
  }

  .window {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  .windowTitle {
    width: 100%;
    font-size: 18px;
    color: #4079e2;
    text-align: left;
  }

  .windowAddress,
  .windowPhone {
    width: 100%;
    font-size: 14px;
    color: #666666;
    text-align: left;
    margin-top: 4px;
  }

  .BMap_cpyCtrl {
    display: none;
  }

  .anchorBL {
    display: none;
  }

  /deep/ .anchorBL {
    display: none !important;
  }

  .mapView {
    flex: 1;
    height: 20vw;
    padding: 5vw;
    background-color: white;
    z-index: 999;
  }

  .mapView>p{
    width: 100%;
    text-align: left;
    color: #333333;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .mapView-type{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .mapView-type>p{
    flex: 1;
    height: 35px;
    font-size: 12px;
    color: #333333;
    text-align: center;
    line-height: 35px;
    border:1px solid #eeeeee;
  }

  .mapView-type>p:nth-child(1){
    margin: 5px 10px 5px 0;
  }

  .mapView-type>p:nth-child(2){
    color: white;
    margin: 5px 0 5px 10px;
    background-color: #4077FF;
  }
</style>
