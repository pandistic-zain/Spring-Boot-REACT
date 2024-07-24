import axios from 'axios';
const BaseSpringBootAPI = "http://localhost:8080/employees";
class EmployeeServices {
    saveEmployee(employee)
    {
        return axios.post(BaseSpringBootAPI , employee)
    }
}
export default new EmployeeServices();