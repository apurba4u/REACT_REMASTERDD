import React from 'react'

const Code2 = () => {
  function submitHandler (elem) {
    elem.preventDefault();
    console.log("Form Submitted")
  }
  return (
    <div>
      <form onSubmit={(elem) => {
        submitHandler(elem)
      }}>
        <input type="text" 
        placeholder='Enter Your Name' 
        value={"Apurba"}
        />
        {/* Eikhane value Apurba fixed hoiya roise kunu kisu sorani o jaitese nah, update o kora jaitese nah */}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Code2
