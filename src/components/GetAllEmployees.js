import React ,{useEffect,useState} from 'react'
import axios from 'axios'
function GetAllEmployees() {

    let [employees,setEmployees]=useState([])


    useEffect(()=>
    {
        axios.get('http://localhost:9000/ems/employee/getAllEmployees/')
             .then((res)=>
             {console.log(res.data)
             setEmployees(res.data)
             })
             .catch((error)=>console.log(error))
    },[])





    return (
        <div>
            <h4>Details of All Employees</h4>
            <hr/>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First name</th>
                        <th>Employee Last name</th>
                        <th>Employee D.O.B</th>
                        <th>Employee Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee=>
                        <tr key={employee.userId}>
                            <td >{employee.userId}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.dob}</td>
                            <td>{employee.email}</td>
                            
                        
                        
                        
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GetAllEmployees