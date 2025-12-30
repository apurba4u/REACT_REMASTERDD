import axios from "axios"
import { useState } from "react"

const Code5 = () => {
  const [data, setData] = useState([])
  async function getData() {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
    setData(response.data)
  }
  return (
    <div>
        <button onClick={getData}>Get Data</button>
        <div>
          {data.map((elem,idx) => {
            return <h3>Name : {elem.author} id: {idx + 1}</h3>
          })}
        </div>
    </div>
  )
}

export default Code5
