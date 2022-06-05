angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.filteredEmployee = [];
  homePageVm.searchString = '';

  homePageVm.handleHighlight = function (employees, str) {
    homePageVm.searchString = str;
    homePageVm.filteredEmployee = employees;
    $location.search('filter', str);
    if (!str) {
      $location.search({});
    }
  };

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        homePageVm.filteredEmployee = homePageVm.employees;
      });
  }
}
