import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://osh-restapi.azurewebsites.net/api/test/';
//const API_URL = 'http://localhost:3000/api/auth/';

class UserService {
  getUserBoard() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}
export default new UserService();
