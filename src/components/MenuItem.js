import React from "react";
import Button from "@material-ui/core/Button";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      {price != undefined ? <p> ${price} </p> : ""}
      {price != undefined ? (
        <Button color="primary" variant="contained">
          Add Item
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}

export default MenuItem;
