<template>
  <div class="home">
    <div class="data-wrapper"></div>
    <top-header />
    <sales-bar />
    <sales-line />
    <sales-pie />
    <sales-map />
    <sales-sun />
    <sales-radar />
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import SalesBar from '@/components/SalesBar'
import SalesLine from '@/components/SalesLine'
import SalesPie from '@/components/SalesPie'
import SalesMap from '@/components/SalesMap'
import SalesSun from '@/components/SalesSun'
import SalesRadar from '@/components/SalesRadar'

export default {
  name: 'HomeView',
  components: {
    TopHeader,
    SalesBar,
    SalesLine,
    SalesPie,
    SalesMap,
    SalesSun,
    SalesRadar
  },
  data () {
    return {
      option: {}
    }
  },
  mounted () {

  }
}
</script>

<style lang="less">
.home{
  position: relative;
  height: 100%;
  .data-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // height: 1336px;
    z-index: 1;
    background-image: url("//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/44b2ad11c37339db11f8ca5d59c5b31c.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
