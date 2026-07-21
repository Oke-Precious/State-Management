import React, { useState } from 'react'

function App() {
  const name = 'Precious';
  const age = '120 years Old';
  const email = 'okepreciousab@gmail.com';
  const bestFood ='Garri'

  const design = {
    fontSize: '30px',
    padding : '20px',
    fontWeight: '600'
  }

  const handleClick = () => {
    console.log('why are you clicking me???');
    
  }
  const [attendance, setAttendance] = useState(0);
//   let attendance = 0;
//   const handleAttendance = () =>{
//     attendance = attendance + 1;
//     console.log(attendance);
    
//   }

    const changeAttendance = () =>{
        let newAttendance = attendance + 1;
        setAttendance(newAttendance)
    } 
//   console.log(name);
  return (
    <>
        <div style={design}>Name : {name}</div>
        <div style={design}>Age : {age}</div>
        <div style={design}>Email : {email}</div>
        <div style={design}>Best Food : {bestFood}</div>
        <div style={design}>Attendance : {attendance}</div>
        <button onClick={handleClick}>Do not Click Me</button>
        <button onClick={changeAttendance}>Mark Attendance</button>
    </>
  )
  
}

export default App