import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between py-4 px-8 bg-cyan-900">
      <h2 className="text-xl font-bold">Apurba</h2>
      <div className="flex gap-10">
        <Link className="text-lg font-medium" to="/">
          Home
        </Link>
        <Link className="text-lg font-medium" to="/about">
          About
        </Link>
        <Link className="text-lg font-medium" to="/product">
          Product
        </Link>
        <Link className="text-lg font-medium" to="/courses">
          Courses
        </Link>
      </div>
    </div>
  );
};

export default Header;
