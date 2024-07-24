import axios from 'axios';
const BaseSpringBootAPI = "http://localhost:8080/employees";
class EmployeeServices {
    saveEmployee(employee)
    {
        return axios.post(BaseSpringBootAPI , employee)
    }
    getEmployees()
    {
        return axios.get(BaseSpringBootAPI);
    }
    getEmployeeById(id)
    {
        return axios.get(BaseSpringBootAPI +"/"+id )
    }
    // getEmployeeByName(name)
    // {
    //     return axios.post(BaseSpringBootAPI +"/"+id )
    // }
    deleteEmployee(id)
    {
        return axios.delete(BaseSpringBootAPI +"/"+id )
    }
    updateEmployee(id,employee)
    {
        return axios.put(BaseSpringBootAPI+"/"+id , employee)
    }

}
export default new EmployeeServices();