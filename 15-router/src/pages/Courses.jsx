import { Link, Outlet } from "react-router-dom"

const Courses = () => {
  return (
    <div>
      <h1>Courses Page</h1>
      <div className="flex flex-col items-center py-4">
        <Link className="text-xl font-semibold" to="/courses/:id">Course Details</Link>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Courses
