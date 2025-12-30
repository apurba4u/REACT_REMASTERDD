import React from 'react'

const Code1 = () => {

  let a = 20
  function changeA() {
    console.log(a)
    a = a + 10;
    console.log(a)
  }
  // Browser er console e change holeo code e show korse nah
  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={changeA}>Change A</button>
    </div>
  )
}

export default Code1
