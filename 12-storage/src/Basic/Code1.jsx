import React from 'react'

const Code1 = () => {

  localStorage.clear()
  sessionStorage.clear()

  localStorage.setItem('Name', 'Apurba')
  localStorage.setItem('Age', '22')
  localStorage.setItem('University', 'LU')

  sessionStorage.setItem('Name', 'Opu')
  sessionStorage.setItem('Age', '23')
  sessionStorage.setItem('University', 'LU')

  console.log(localStorage.getItem('Name'))
  console.log(localStorage.getItem('Age'))
  console.log(localStorage.getItem('University'))

  console.log(sessionStorage.getItem('Name'))
  console.log(sessionStorage.getItem('Age'))
  console.log(sessionStorage.getItem('University'))

  // storage array, object ke save korar jonno,json.stringify use koira save korte hobe nahole save hobe nah.

  const user = {
    Name: "Piyash",
    Age: 24,
    City: "Habiganj"
  }

  localStorage.setItem("User", JSON.stringify(user))
  console.log(JSON.parse(localStorage.getItem("User")))
  // ei code ta use koira string teikka object/array er asol rupe firiye enece.

  return (
    <div>
      
    </div>
  )
}

export default Code1
