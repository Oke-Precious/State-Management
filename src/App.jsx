import React, { useState } from 'react';
import MenuCard from './MenuCard';

function App() {
  //   const name = 'Precious';
  const age = '120 years Old';
  const email = 'okepreciousab@gmail.com';
  const bestFood = 'Garri'
  const [name, setName] = useState('Precious')
  const design = {
    fontSize: '30px',
    padding: '20px',
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

  const changeAttendance = () => {
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
      <button onClick={() => setName(name == 'Precious' ? 'Fatai' : 'Precious')}>Change name</button>

      <div className="d-flex gap-3 p-3">
        <MenuCard
        img = "spaghetti-bolognese.webp"
        menu="Pasta"
        description="Delicious pasta with marinara sauce"
        price="$12.99"
      />
      <MenuCard
        img = "https://imgs.search.brave.com/TIotOz7aP3KLrjay7IhKuz5mPSEpLVkK4ZcTOAhmLGg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oZWxs/b3Rhc3R5LmFwcC9j/ZG4vc2hvcC9maWxl/cy9BbWFsYS1hbmQt/RWd1c2ktU291cC5q/cGc_dj0xNzI1OTg1/NDQxJndpZHRoPTEy/MDA"
        menu="Amala and Egusi"
        description="Delicious amala with egusi soup"
        price="$10.99"
      />
      </div>
    </>
  )

}

export default App