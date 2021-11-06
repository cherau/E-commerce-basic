import React from "react";
import { MobileList } from "../helpers/MobileList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Mobiles() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Mobiles</h1>
      <div className="menuList">
        {MobileList.map((menuItem, key) => {
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

export default Mobiles;
