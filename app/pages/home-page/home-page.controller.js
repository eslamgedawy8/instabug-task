angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.filteredEmployee = [];
  homePageVm.searchString = '';
  homePageVm.currentPage = null;
  homePageVm.lastPage = null;
  homePageVm.isLoading = false;
  homePageVm.isLastPage = false;

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

  homePageVm.handleLoadMoreEmployees = function () {
    homePageVm.isLoading = true;
    loadMoreEmployees(homePageVm.currentPage + 1);
  };

  function loadMoreEmployees(page) {
    Employees.loadMoreEmployees(page).then(({ data }) => {
      homePageVm.lastPage = data.pages;
      homePageVm.currentPage = data.current_page;
      homePageVm.employees = homePageVm.employees.concat(data.employees);
      homePageVm.filteredEmployee = homePageVm.employees;
      homePageVm.isLoading = false;
      homePageVm.isLastPage = homePageVm.lastPage === homePageVm.currentPage;
    });
  }
}
