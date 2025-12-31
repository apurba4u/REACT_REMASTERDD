const Navbar = (props) => {
  function changeTheme() {
    if(props.theme == 'light') {
      props.setTheme('dark')
    } else {
      props.setTheme('light')
    }
  }
  return (
    <div>
      <p>Theme : {props.theme}</p>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}
// Data sadaronoto upre teke niser dike pass hoi but ei code e data nis teke upre pass hoyese
export default Navbar
