import { useState } from "react"
import axios from "axios"
const Project1 = () => {
  const [userData, setUserData] = useState([])
  async function getData() {
    const response = await axios.get("https://picsum.photos/v2/list?page=3&limit=40")
    setUserData(response.data)
  }
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
      <button className="bg-green-600 active:scale-95 mb-3 px-5 py-3 rounded" 
      onClick={getData}>Get Data</button>
      <div className="flex flex-wrap gap-4">{printUserData}</div>
    </div>
  )
}

export default Project1
