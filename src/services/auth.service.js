import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(res.data.accessToken));
        }
        return res.data;
      })
      .catch((err) => console.log(err));
  }
  logout() {
    localStorage.removeItem('user');
    // send Logout request to Server
  }
  register(user) {
    return axios.post(API_URL + 'signup', {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
    });
  }
}

export default new AuthService();
