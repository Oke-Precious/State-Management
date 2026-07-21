import React from 'react'

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

//   console.log(name);
  return (
    <>
        <div style={design}>Name : {name}</div>
        <div style={design}>Age : {age}</div>
        <div style={design}>Email : {email}</div>
        <div style={design}>Best Food : {bestFood}</div>
    </>
  )
  
}

export default App