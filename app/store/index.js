import Vue from 'vue';
import Vuex from 'vuex';

import TeamPerformancehModule from './TeamPerformance';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  modules: {
    TeamPerformance: TeamPerformancehModule,
  },
});
