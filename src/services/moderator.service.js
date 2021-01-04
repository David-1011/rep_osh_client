import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'https://osh-restapi.azurewebsites.net/api';
const API_URL = 'http://localhost:3000/api';

class ModeratorService {
  getIncidents() {
    return axios.get(`${API_URL}/event/incidents`, { headers: authHeader() });
  }
}
export default new ModeratorService();
