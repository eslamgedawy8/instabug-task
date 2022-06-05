import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import salesFilterComponent from './components/vue-components/sales-filter.vue';
import store from './store';
import vNotFoundComponent from './components/vue-components/not-found.vue';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]);

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vSalesFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('salesFilterComponent', salesFilterComponent));
});

angular.module('appModule').filter('trust', ['$sce', function ($sce) {
  return function (htmlCode) {
    return $sce.trustAsHtml(htmlCode);
  };
}]);
angular.module('appModule')
  .config(($ngVueProvider) => {
    $ngVueProvider.setRootVueInstanceProps({
      store: store,
    });
  });

angular.module('appModule').directive('vNotFound', (createVueComponent) => {
  return createVueComponent(Vue.component('vNotFoundComponent', vNotFoundComponent));
});
