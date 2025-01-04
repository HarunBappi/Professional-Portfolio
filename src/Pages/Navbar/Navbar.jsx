// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../../assets/logo2.png";
export default function Navbar() {
  const navItems = (
    <>
      {/* <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About Me </a>
      </li> */}
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
      <Link to="#about" smooth={true} duration={500}>About me</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#001F3F] fixed z-10 w-10/12 text-white h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-20" src={logo} alt="" />
          <h2 className="text-2xl">
            Harunur{" "}
            <span className="text-orange-600" title={"Rosid"}>
              R.
            </span>
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https://docs.google.com/document/d/1oKGq_ftqcD5FNKTg6hus0Nx7KpLs-QXO/edit"
          target="_blank"
        >
          <button className="btn text-white border-none bg-teal-600 hover:bg-orange-600">
            Download Resume
          </button>
        </Link>
      </div>
    </div>
  );
}
