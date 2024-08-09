import React, { useEffect, useState } from "react";
import "./navbar.css";
// import logo from "../../assets/checkmate.png";
// import logo from "../../assets/checkmate2.png";
import logo from "../../assets/checkmate3.png";
import { useLocation, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const list = ["Home", "Client", "Server", "Blockchain", "Portfolio", "About"];
  // const routes = [
  //   "/home",
  //   "/client",
  //   "/server",
  //   "/blockchain",
  //   "/portfolio",
  //   "/about",
  // ];

  const list = React.useMemo(
    () => ["Home", "Client", "Server", "Blockchain", "Portfolio", "About"],
    []
  );
  const routes = React.useMemo(
    () => [
      "/home",
      "/client",
      "/server",
      "/blockchain",
      "/portfolio",
      "/about",
    ],
    []
  );

  const getInitialActiveItem = () => {
    const currentPath = location.pathname;
    const activeIndex = routes.indexOf(currentPath);
    return activeIndex !== -1 ? list[activeIndex] : "Home";
  };

  const [activeItem, setActiveItem] = useState(getInitialActiveItem);

  useEffect(() => {
    // Set the active item based on the current path
    const currentPath = location.pathname;
    console.log("currentPath", currentPath);

    const activeIndex = routes.indexOf(currentPath);
    if (activeIndex !== -1) {
      setActiveItem(list[activeIndex]);
    } else {
      setActiveItem("Home"); // Default to "Home" if no match
    }
  }, [location.pathname, list, routes]); // Re-run when the pathname changes

  // const handleItemClick = (item) => {
  //   setActiveItem(item);
  // };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="navbar-logo" />
      </div>
      <div className="navbar-center">
        {list.map((item, index) => (
          <Link
            to={routes[index]} // Link to the corresponding route
            key={index}
            // onClick={() => handleItemClick(item)}
            className="navbar-center-menu"
            style={{
              backgroundColor: activeItem === item ? "#030637" : "transparent",
              cursor: "pointer",
              textDecoration: "none", // remove underline from links
              color: activeItem === item ? "white" : "inherit", // change text color when active
            }}
          >
            <p className="navbar-center-item-menu">{item}</p>
          </Link>
        ))}
      </div>
      <div className="navbar-right">
        <button
          onClick={() => navigate("/login")}
          className="navbar-right-button"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="navbar-right-button"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
