
const Code1 = () => {
  function submithandler (elem) {
    elem.preventDefault()
    console.log("Form Submitted")
  }
  return (
    <div>
      <form onSubmit={submithandler}>
        <input type="text" 
        placeholder="Enter Your Name"
        onChange={(elem) => {
          console.log(elem.target.value + " is Typing")
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Code1
