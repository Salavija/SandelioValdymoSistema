import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Error from "./components/Error";
import inventoryItems from "./components/Inventory/InventoryList/InventoryItemsPage";
import NewInventoryItem from "./components/Inventory/NewInventory/NewInventoryItem";
import Paperbase from "./components/Header/Paperbase";
import { Container } from "reactstrap";
import UserPage from "./components/Users/Users.js/UserPage";
import CreateUserPage from "./components/Users/CreateUser/CreateUserPage";
import User from "./components/UserHome";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import InventoryItemEdit from "./components/Inventory/InventoryEdit/InventoryItemEdit";


class App extends Component {

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/login" component={Home} />
        <Route render = {()=>(
          <div>
          <div >
              <Header onDrawerToggle={this.handleDrawerToggle} />
            <div style={{display: "flex"}}>
              <Paperbase />
              <Container>
                  <Switch>
                    <Route path="/" component={User} exact />
                    <Route path="/home-admin" component={User} exact />
                    <Route path="/users" component={UserPage} />
                    <Route path="/create-user" component={CreateUserPage} />
                    <Route path="/inventory-items" component={inventoryItems} />
                    <Route path="/inventoryItem-edit" component={InventoryItemEdit} />
                    <Route path="/create-new-inventory" component={NewInventoryItem} />
                    <Route component={Error} />

                  </Switch>
              </Container>
              </div>
            </div>
              <Footer />
            </div>
        )}/>
        </Switch>
      </BrowserRouter>
    );

  }
}

export default App;
