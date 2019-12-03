import config from '../config';
const { API_ENDPOINT } = config;
const AuthApiService = {
  postLogin({ user_name, password }) {
    return fetch(`${API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user_name, password })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postSignup({ user_name, password }) {
    console.log(user_name);
    console.log(password);
    return fetch(`${API_ENDPOINT}/signup`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user_name, password })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default AuthApiService;
