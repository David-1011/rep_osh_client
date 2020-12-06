import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/incidents/';

class UserService {
  getUserBoard() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}
export default new UserService();
