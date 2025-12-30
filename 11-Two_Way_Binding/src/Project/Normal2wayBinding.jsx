import { useState } from "react"

const Normal2wayBinding = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const submitHandler = (elem) => {
    elem.preventDefault()
    console.log("Title: " + title)
    console.log("Details: " + details)
    setTitle('')
    setDetails('')
  }
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form 
      onSubmit={(elem) => {
        submitHandler(elem)
      }} 
      className="flex lg:w-1/2 items-start flex-col gap-4 p-10">
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input type="text" placeholder="Enter your name" 
        className="w-full outline-none font-medium px-5 py-2 rounded" 
        value={title}
        onChange={(elem) => {
          setTitle(elem.target.value)
        }}/>
        <textarea placeholder="Write Details" 
        className="w-full outline-none px-5 font-medium h-32 py-2 border-2 rounded" 
        value={details} 
        onChange={(elem) => {
          setDetails(elem.target.value)
        }}></textarea>
        <button className="w-full outline-none bg-white px-5 py-2 text-black rounded">Add Notes</button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold ">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default Normal2wayBinding
