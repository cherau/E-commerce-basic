import React from "react";
import { FashionList } from "../helpers/FashionList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Fashion() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Fashion</h1>
      <div className="menuList">
        {FashionList.map((menuItem, key) => {
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

export default Fashion;
