import React from "react";
import { CategoryList } from "../helpers/CategoryList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Categories</h1>
      <div className="menuList">
        {CategoryList.map((menuItem, key) => {
          return (
            <div>
              <Link
                to={menuItem.name}
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
