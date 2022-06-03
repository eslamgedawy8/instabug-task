angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.filteredEmployee = [];
  homePageVm.searchString = '';

  homePageVm.handleHighlight = function (employees, str) {
    homePageVm.searchString = str;
    homePageVm.filteredEmployee = employees;
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
