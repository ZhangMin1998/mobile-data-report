<template>
  <div class="home">
    <div class="echarts-box">
      <vue-echarts :option="option" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data () {
    return {
      option: {}
    }
  },
  mounted () {
    this.option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
  }
}
</script>

<style lang="scss">
.home{
  .text{
    font-size: 32px;
  }
  .echarts-box{
    .echarts {
      width: 100%;
      height: 500px;
    }
  }
}
</style>
