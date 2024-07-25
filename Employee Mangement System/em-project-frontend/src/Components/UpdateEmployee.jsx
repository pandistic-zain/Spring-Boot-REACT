import {React,useState,useEffect} from "react";
import "../ComponentsStyle/Edit-AddEmployee.css";
import { Link, useNavigate, useParams } from "react-router-dom";
const UpdateEmployee = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [employee, setEmployees] = useState({
    id: id,
    name: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeServices.getEmployeeById(employee.id);
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    addEmployee({ ...employee, [e.target.name]: value });
  };
  function handleBackClick(){
    navigate('/')

  }
  const handleUpdateEmployee = (e) => {
    e.preventDefault();
    EmployeeServices.UpdateEmployee(id,employee)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="button-name">
          <button onClick={handleBackClick}>
            <span className="arrow-back"></span>
          </button>
          <h1>Update Employee</h1>
        </div>
        <form>
          <div className="user-box">
            <input type="number" name="" required="" 
             value={employee.id} disabled/>
            <label style={{ transform: "translateX(90%) translateY(-50%)" }}>
              ID
            </label>
          </div>
          <div className="user-box">
            <input type="text" name="" required=""  value={employee.name} onChange={(e) => handleChange(e)}/>
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              value={employee.email}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
              value={employee.phone}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <center>
            <Link onClick={handleUpdateEmployee}>
              UPDATE
              <span></span>
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;
