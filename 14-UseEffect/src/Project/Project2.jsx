import { useState, useEffect } from "react"
import axios from "axios"

const Project2 = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  async function getData() {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=40`)
    setUserData(response.data)
  }
  useEffect(() => {
    getData()
  }, [index])
  
  let printUserData = <h3 className="text-gray-400 text-xs text-center">Loading...</h3>
  
  if(userData.length > 0) {
    printUserData = userData.map(function(elem, idx) {
      return(
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 bg-white rounded-xl overflow-hidden">
              <img src={elem.download_url} 
              className="h-full w-full object-cover"/>
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      )
    })
  }
  return (
    <div className="bg-black h-screen text-white p-4 overflow-auto">
      <div className="flex flex-wrap gap-4 p-2">{printUserData}</div>
      <div className="flex justify-center gap-6 items-center p-4">
        <button className="bg-amber-400 text-xs cursor-pointer px-4 py-2 font-semibold active:scale-95 rounded" 
        onClick={() => {
          if(index > 1) {
            setIndex(index - 1)
            setUserData([])
          }
        }}>Prev</button>
        <button className="bg-amber-400 text-xs cursor-pointer px-4 py-2 font-semibold active:scale-95 rounded" 
        onClick={() => {
          setIndex(index + 1)
          setUserData([])
        }}>Next</button>
      </div>
    </div>
  )
}

export default Project2
