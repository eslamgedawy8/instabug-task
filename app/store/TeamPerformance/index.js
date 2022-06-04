import {
  teamPerformance,
} from '../../core/TeamPerformance/team.services';

export default {
  namespaced: true,
  state: () => ({
    performanceChartData: [],
  }),
  mutations: {
    UPDATE_PERFORMANCE_CHART_DATA: (state, chartData) => {
      state.performanceChartData = chartData;
    },
  },
  actions: {
    GET_PERFORMANCE_CHART: ({ commit }) => teamPerformance().then(response => {
      commit('UPDATE_PERFORMANCE_CHART_DATA', response);
    }),
  },
  getters: {
    getPerformanceChartData: ({ performanceChartData }) => performanceChartData,
  },
};
