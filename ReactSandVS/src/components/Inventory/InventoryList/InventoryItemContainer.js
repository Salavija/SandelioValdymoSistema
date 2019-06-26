import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withRouter, Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Icon from "@material-ui/core/Icon";
import { IconButton } from "@material-ui/core";

class InventoryItemContainer extends React.Component {
  handleRemoveAlert = () => {
    confirmAlert({
      title: "Patvirtinkite trynimą",
      message: "Ar tikrai norite ištrinti inventorių?",
      buttons: [
        {
          label: "Taip",
          onClick: () => this.handleRemove()
        },
        {
          label: "Ne"
        }
      ]
    });
  };

  handleRemove = () => {
    this.props.onInventoryItemDeleted(this.props.InventoryItem);
    const url = "http://localhost:8081/api/inventoryItems/" + this.props.inventoryItem.id;
    axios.delete(url).catch(err => {
      console.log(err);
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onInventoryItemSubmitted(this.props.InventoryItem);
    const url =
      "http://localhost:8081/api/inventoryItems/" +
      this.props.InventoryItem.id;
    axios
      .then(response => {
        console.log(response);
        this.props.history.push("/InventoryItems");
      })
      .catch(err => {
        console.log(err);
      });
  };

  checkState = () => {
    if (this.props.status === "SUKURTAS") {
    }
  };

  render() {
    return (
      <TableRow hover key={this.props.id}>
        <TableCell>{this.props.InventoryItem.id}</TableCell>
        <TableCell>{this.props.InventoryItem.title}</TableCell>
        <TableCell>{this.props.InventoryItem.weight}</TableCell>
        <TableCell>{this.props.InventoryItem.sector}</TableCell>
        <TableCell>{this.props.InventoryItem.date}</TableCell>
        <TableCell>
          {this.props.InventoryItem.attachment}
          <IconButton>
            <Icon onClick={() => this.props.downloadFile()}>
              move_to_inbox
            </Icon>
          </IconButton>
        </TableCell>
        <TableCell>
          <div style={{ display: "flex" }}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              onClick={this.handleSubmit}
            >
              Pateikti
            </Button>
            &nbsp;
            <Button
              type="submit"
              variant="outlined"
              color="default"
              component={Link}
              to="/inventoryItem-edit"
            >
              Redaguoti
            </Button>
            <Button
              type="submit"
              color="secondary"
              variant="outlined"
              onClick={this.handleRemoveAlert}
            >
              Ištrinti
            </Button>
          </div>
        </TableCell>
      </TableRow>
    );
  }
}

export default withRouter(InventoryItemContainer);
