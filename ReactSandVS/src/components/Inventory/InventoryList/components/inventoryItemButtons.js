import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class InventoryItemButtons extends React.Component {
  render() {
    return (
      <div>
        <br />
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create-new-inventory"
        >
          Kurti naują
        </Button>{" "}
        <br />
        <br />
        <Button
          variant="contained"
          color="default"
          component={Link}
          to="/inventoryItems"
        >
          Sukurti inventoriaus įrašai
        </Button>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
      </div>
    );
  }
}

export default InventoryItemButtons;
