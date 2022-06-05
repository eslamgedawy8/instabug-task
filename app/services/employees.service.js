angular.module('appModule').service('Employees', EmployeesService);

function EmployeesService($http) {
  const getEmployees = () => {
    const employeesUrl = 'https://fe-task.getsandbox.com/employees';

    return $http.get(employeesUrl);
  };

  const loadMoreEmployees = (page) => {
    return $http.get(`https://fe-task.getsandbox.com/employees?page=${page}`);
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}
