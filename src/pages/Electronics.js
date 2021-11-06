import React from "react";
import { ElectronicsList } from "../helpers/ElectronicsList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Electronics() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Electronics</h1>
      <div className="menuList">
        {ElectronicsList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Electronics;
