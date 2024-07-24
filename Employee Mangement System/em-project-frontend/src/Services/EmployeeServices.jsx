import exios from 'exios'
const BaseSpringBootAPI = "http://localhost:8080/employees";
class EmployeeServices {
    saveEmployee(employee)
    {
        return exios.post(BaseSpringBootAPI , employee)
    }
}
export default new EmployeeServices();