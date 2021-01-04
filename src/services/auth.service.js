import axios from 'axios';
import decode from 'jwt-decode';

const AUTH_TOKEN_KEY = 'authToken';
const API_URL = 'https://osh-restapi.azurewebsites.net/api/auth/';
//const API_URL = 'http://localhost:3000/api/auth/';

const setAuthToken = (token) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

const getAuthToken = () => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

const clearAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

const getTokenExpirationDate = (encodedToken) => {
  let token = decode(encodedToken);
  if (!token.exp) {
    return null;
  }

  let date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
};

const isTokenExpired = (token) => {
  let expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
};

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        if (res.data.accessToken) {
          setAuthToken(res.data.accessToken);

          // TODO Überarbeiten
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
      });
  }

  // TODO send Logout request to Server
  logout() {
    clearAuthToken();
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
    });
  }

  isLoggedIn() {
    let authToken = getAuthToken();
    return !!authToken && !isTokenExpired(authToken);
  }
}

export default new AuthService();
