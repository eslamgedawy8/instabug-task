import serverHttp from '../httpClient';
export const teamPerformance = () => serverHttp.get('/performance')
  .then((response) => response.data);
