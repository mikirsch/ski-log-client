import TokenService from './token-service';
import config from '../config';
const { API_ENDPOINT } = config;

const DataApiService = {
  getLogs(queryString = '') {
    return fetch(`${API_ENDPOINT}/logs${queryString}`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postLog(log) {
    return fetch(`${API_ENDPOINT}/logs`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(log)
    });
  }
};

export default DataApiService;
