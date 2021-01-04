import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'https://osh-restapi.azurewebsites.net/api';
const API_URL = 'http://localhost:3000/api';

class AdminService {
  patchPerson(person) {
    return axios.patch(
      `${API_URL}/event/person`,
      {
        id: person.id,
        firstName: person.firstName,
        lastName: person.lastName,
      },
      {
        headers: authHeader(),
      }
    );
  }
  getIncident(id) {
    return axios.get(`${API_URL}/event/incident?id=${id}`, {
      headers: authHeader(),
    });
  }
}
export default new AdminService();
