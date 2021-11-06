import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [itemCount, setItemCount] = React.useState(0);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src="https://www.graphicsprings.com/filestorage/stencils/1cf0e62090ebd950855b702c81587979.png?width=500&height=500" />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/categories"> Categories </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <ShoppingCartIcon color="primary" />{" "}
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/categories"> Categories </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Badge
          color="secondary"
          badgeContent={itemCount}
          onClick={() => {
            alert("Cart Coming Soon!");
          }}
        >
          <ShoppingCartIcon color="secondary" />{" "}
        </Badge>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
