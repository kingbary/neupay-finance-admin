import { useEffect, useState } from "react";
import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../../data/data";
import "./Sidebar.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
// import neupaylogo from "../assets/images/neupay_logo.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  // const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  const location = useLocation();

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <img src={personsImgs.neupayLogo} alt="neupay-logo" />
      </div>

      <nav className="navigation-bar">
        <ul className="navigation-links">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.route}
                className={
                  location.pathname === link.route
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <img
                  src={link.image}
                  alt={link.title}
                  className="nav-link-icon"
                />
                <span className="nav-link-text">{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
