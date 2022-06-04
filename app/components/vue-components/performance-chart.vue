<template>
  <div class="c-chart__container">
    <label for="startDate">Start Date:</label>
    <input type="date" v-model="startDate" id="startDate" />
    <label for="endDate">End Date:</label>
    <input type="date" v-model="endDate" id="endDate"/>
    <v-chart ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",

  components: {
    VChart,
  },
  watch: {
    endDate: {
      handler() {
        const res = this.getDataBetweenDates()
        this.getChartData = res;
      },
      deep: true,
    },
  },
  created() {
    this.$store.dispatch("TeamPerformance/GET_PERFORMANCE_CHART");
  },

  data() {
    return {
      startDate: '2022-01-01',
      endDate: '2022-01-12'
    };
  },

  computed: {
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },

    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0,
          confine: false,
          hideDelay: 0,
          padding: 0,
          formatter: function (params) {
            let res = "";
            params.forEach(function (item) {
              res += `<div style="padding: 10px; 
              background-color: #16253F; color: #fff";>`;
              res += `<div style="display: flex;
              justify-content: center;">${item.axisValueLabel}</div>`;
              res += `<div style="display: flex">`
                res += `<div>${item.marker}</div>`;
                res += `<div>Team Performance Index: ${item.data}%</div>`;
              res += `<div>`
              res += `</div>`;
            });
            return res;
          },
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        series: [
          {
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
          },
        ],
        visualMap: {
          top: 70,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: "#F4674C",
            },
            {
              gt: 50,
              lte: 80,
              color: '#FBDB10'
            },
            {
              gt: 80,
              lte: 100,
              color: '#01984F'
            }
          ]
        },
      };
    },

    xAxisData() {
      return this.getChartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.getChartData.map((item) => +item.performance * 100);
    },
    getChartData: {
      get() {
        return this.$store.getters["TeamPerformance/getPerformanceChartData"];
      },
      set(val) {
        this.$store.commit("TeamPerformance/UPDATE_PERFORMANCE_CHART_DATA", val);
      },
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
    getDataBetweenDates() {
      const startDate = moment(this.startDate).format("YYYY-MM-DD");
      const endDate = moment(this.endDate).format("YYYY-MM-DD");
      return this.getChartData.filter(
        (item) =>
          moment(item.date_ms).format("YYYY-MM-DD") >= startDate &&
          moment(item.date_ms).format("YYYY-MM-DD") <= endDate
      );
    },
  },
};
</script>
