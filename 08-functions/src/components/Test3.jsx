import React from 'react'

const Test3 = () => {
  const pageScrolling = (elem) => {
    // console.log("Page Scrolling")
    // var x = Math.max(elem.deltaY)
    // var y = Math.min(elem.deltaY)
    // console.log("Max: ",x," Min: ",y)
    var x;
    if (elem.deltaY < 0) x = "Ulta Scrolling"
    else x = "Suja scrolling"
    console.log(x)
  }
  return (
    <div onWheel={pageScrolling}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default Test3
