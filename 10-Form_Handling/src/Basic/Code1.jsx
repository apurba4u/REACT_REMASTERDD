
const Code1 = () => {
  const submitHandler = () => {
    console.log("Form Submitted")
  }
  // eikhane microsecond er jnno form submit lekha ta ase.form er default behaviour hosse form submit howar sate sate page reload hoye jai. amader ei page reload howa ta atkate hobe.
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter Your Name"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Code1
