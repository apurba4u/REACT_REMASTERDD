import { useState } from "react"
import { X } from "lucide-react";

const NoteApp = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (elem) => {
    elem.preventDefault()

    console.log("Title: " + title)
    console.log("Details: " + details)

    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)
    console.log(task)

    setTitle('')
    setDetails('')
  }

  const deleteTask = (idx) => {
    // console.log("Note deleted Successfully")
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
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
      <h1 className="text-3xl font-bold text-center">Recent Notes</h1>
      <div className="flex flex-wrap items-start justify-start h-[90%] gap-5 mt-5 overflow-auto">  
        {task.map((elem, idx) => {
          return (<div className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl  text-black bg-cover pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]" 
          key={idx}>
            <div>
              <h2 className="absolute top-5 right-5 bg-red-400 rounded full text-xs">
                <X size={16} strokeWidth={2.7} />
              </h2>
              <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
              <p className="mt-4 leading-tight font-medium text-gray-500">{elem.details}</p>
            </div>
            <button onClick={() => {
              deleteTask(idx)
            }}  
            className="w-full bg-red-600 text-xs text-white rounded font-bold cursor-pointer active:scale-95 active:bg-red-500"
            > Delete</button>
          </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default NoteApp
