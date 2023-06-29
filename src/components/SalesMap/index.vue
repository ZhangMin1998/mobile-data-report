<template>
  <div class="sales-map">
    <div class="sales-map-inner">
      <div id="map_container" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'sales-map',
  mounted () {
    // 一、初始化地图
    const initBMap = () => {
      var map = window.initMap({
        tilt: 0,
        center: [113.487899, 31.249162],
        zoom: 4,
        style: window.purpleStyle // snowStyle  purpleStyle
      })
      return map
    }

    // 二、准备数据源
    const initData = () => {
      var cities = [
        '北京', '天津', '上海', '重庆', '石家庄', '太原', '呼和浩特', '哈尔滨', '长春',
        '沈阳', '济南', '南京', '合肥', '杭州', '南昌', '福州', '郑州', '武汉', '长沙', '广州',
        '南宁', '西安', '银川', '兰州', '西宁', '乌鲁木齐', '成都', '贵阳', '昆明', '拉萨', '海口'
      ]

      var data = []
      const random = 100
      var targetCity = window.mapv.utilCityCenter.getCenterByCityName('北京')
      var curve = new window.mapvgl.BezierCurve()
      for (let i = 0; i < random; i++) {
        var startCity = window.mapv.utilCityCenter.getCenterByCityName(cities[parseInt(cities.length * Math.random())])
        curve.setOptions({
          start: [startCity.lng - 5 + 10 * Math.random(), startCity.lat - 5 + 10 * Math.random()],
          end: [targetCity.lng, targetCity.lat]
        })

        var curveData = curve.getPoints()
        data.push({
          geometry: {
            type: 'LineString',
            coordinates: curveData
          }
        })
      }
      return data
    }

    // 三、绘制数据源
    const setData = (data, map) => {
      // 1.生成 mapval 视图 View
      var view = new window.mapvgl.View({ map })
      // 3.初始化 mapvgl 的 LineLayer 对象
      var lineLayer = new window.mapvgl.LineLayer({
        // style: 'normal', // 'chaos' 'normal'   动画方式
        color: 'rgba(55,20,250,0.3)'
      })
      // 4.将 FlyLine 对象加入 View 中
      view.addLayer(lineLayer)
      // 5.将 data 与 FlyLine 进行绑定
      lineLayer.setData(data)

      // 再添加一个 LinePointLayer 对象
      var linePointLayer = new window.mapvgl.LinePointLayer({
        size: 6,
        speed: 15,
        color: 'rgba(255, 255, 0, 0.6)',
        // animationType: mapvgl.LinePointLayer.ANIMATION_TYPE_UNIFORM_SPEED, // 点的动画类型
        shapeType: window.mapvgl.LinePointLayer.SHAPE_TYPE_CIRCLE, // 点的形状
        blend: 'lighter' // 点交汇的处理方式
      })
      view.addLayer(linePointLayer)
      linePointLayer.setData(data)
    }

    var map = initBMap() // 初始化地图
    var data = initData() // 准备数据源
    setData(data, map) // 绘制数据源
  }
}
</script>

<style lang="scss" scoped>
.sales-map{
  position: absolute;
  top: 1850px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 600px;
  padding: 25px 25px 0;
  box-sizing: border-box;
  .sales-map-inner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .05);
    #map_container {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
