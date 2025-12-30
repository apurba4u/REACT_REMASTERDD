import axios from 'axios'

const Code4 = () => {
  async function getData() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data)
  }
  return (
    <div>
      <button onClick={getData}>Click</button>
    </div>
  )
}

export default Code4
