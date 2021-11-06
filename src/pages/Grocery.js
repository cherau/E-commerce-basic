import React from "react";
import { GroceryList } from "../helpers/GroceryList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Grocery() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Groceries</h1>
      <div className="menuList">
        {GroceryList.map((menuItem, key) => {
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

export default Grocery;
