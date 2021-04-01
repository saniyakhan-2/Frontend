import React from 'react'
import GetAllEmployees from './components/GetAllEmployees'



function App(props) {
  return (
    <div className = "container">
      <h2> Welcome to Employee Management System </h2>
      <hr/>
   
    <GetAllEmployees/>
    
    </div>
  );
}
export default App
