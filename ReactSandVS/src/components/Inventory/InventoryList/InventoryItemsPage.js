import React from "react";
import InventoryItems from "./InventoryItemsComponent";
import axios from "axios";
import InventoryItemButtons from "./components/inventoryItemButtons";

class InventoryItemsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InventoryItems: [],
      page: 0,
      rowsPerPage: 5
    };
  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };
  componentDidMount = () => {
    axios
      .get("http://localhost:8081/api/inventoryItems")
      .then(answer => {
        this.setState({ InventoryItems: answer.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onInventoryItemDeleted = inventoryItem => {
    this.setState(previousState => {
      return {
          inventoryItems: previousState.inventoryItems.filter(d => d.id !== inventoryItem.id)
      };
    });
  };

  onInventoryItemSubmitted = inventoryItem => {
    this.setState(previousState => {
      return {
          inventoryItems: previousState.inventoryItems.filter(d => d.id !== inventoryItem.id)
      };
    });
  };

  render() {
    return (
      <div>
        <InventoryItemButtons />
        <inventoryItems
          handleChangePage={this.handleChangePage}
          handleChangeRowsPerPage={this.handleChangeRowsPerPage}
          page={this.state.page}
          rowsPerPage={this.state.rowsPerPage}
          inventoryItems={this.state.inventoryItems}
          onInventoryItemDeleted={this.onInventoryItemDeleted}
          onInventoryItemSubmitted={this.onInventoryItemSubmitted}
          downloadFile={this.downloadFile}
        />
      </div>
    );
  }
}

export default InventoryItemsPage;
