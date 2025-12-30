import React from 'react'

const Test2 = () => {
  const mouseMove = (elem) => {
    console.log(elem.clientX + " " + elem.clientY)
  }
  return (
    <div className='box' onMouseMove={mouseMove}>
      
    </div>
  )
}

export default Test2
