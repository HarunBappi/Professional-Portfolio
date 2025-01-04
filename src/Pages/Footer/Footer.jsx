import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
export default function Footer() {
  return (
    <div>
      <footer className="footer bg-neutral text-neutral-content p-4 items-center">
        <aside className="flex items-center">
          <img className="w-20" src={logo} alt="" />
          <h2 className="text-2xl">
            Harunur{" "}
            <span className="text-orange-600" title={"Rosid"}>
              R.
            </span>
          </h2>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          {/* Social Icon */}
          <div className="flex items-center gap-3">
            <Link
              to="https://github.com/HarunBappi"
              target="_blank"
              className="border-2 border-orange-400 rounded-full"
            >
              <FaGithub className="text-white text-3xl p-1"></FaGithub>
            </Link>
            <Link
              to="https://www.linkedin.com/in/md-harunur-rashid-bappi-99230412a/"
              target="_blank"
              className="border-2 border-orange-400 rounded-full"
            >
              <FaLinkedinIn className="text-white text-3xl p-1"></FaLinkedinIn>
            </Link>
            <Link
              to="https://www.facebook.com/harunbappi0110/"
              target="_blank"
              className="border-2 border-orange-400 rounded-full"
            >
              <FaFacebook className="text-white text-3xl p-1"></FaFacebook>
            </Link>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center bg-base-300 text-base-content p-2">
        <aside>
          <p className="flex items-center gap-2">
            Copyright © {new Date().getFullYear()} - All right reserved by <h2 className="text-sm">
            Harunur{" "}
            <span className="text-orange-600" title={"Rosid"}>
              R.
            </span>
          </h2>
          </p>
        </aside>
      </footer>
    </div>
  );
}
