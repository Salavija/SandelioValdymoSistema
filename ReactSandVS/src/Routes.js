import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Error from "./components/Error";
import InventoryItemsPage from "./components/Inventory/InventoryList/InventoryItemsPage";
import InventoryItem from "./components/Inventory/InventoryList/NewInventoryItem/NewInventoryItem";
import Paperbase from "./components/Header/Paperbase";
import { Container } from "reactstrap";
import UserPage from "./components/Users/Users.js/UserPage";
import CreateUserPage from "./components/Users/CreateUser/CreateUserPage";
import User from "./components/UserHome";



class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Paperbase />
                    <Container>
                        <Switch>
                            <Route path="/" component={User} />
                            <Route path="/home-admin" component={User} />
                            <Route path="/users" component={UserPage} />
                            <Route path="/create-user" component={CreateUserPage} />
                            <Route path="/inventoryItems" component={InventoryItemsPage} />
                            <Route path="/create-new-inventoryItem" component={InventoryItem} />
                            <Route component={Error} />
                        </Switch>
                    </Container>
                </div>
            </BrowserRouter> )
            





            // <BrowserRouter>
            //     <Switch>
            //         <Route path="/login" component={Home} />
            //         <Route render={() => (
            //             <div >
            //                 <Header onDrawerToggle={this.handleDrawerToggle} />
            //                 <div style={{ display: "flex" }}>
            //                     <Paperbase />
            //                     <Container>
            //                         {/* <Navigation /> */}
            //                         {/* <NavBarSide /> */}
            //                         {/* <Navi /> */}
            //                         <Route render={props => (
            //                             localStorage.getItem('user')
            //                                 ? (<Switch>
            //                                     <Route path="/" component={User} exact />
            //                                     {/* <Route component={EnsureLoggedInContainer}> */}
            //                                     <Route path="/home-admin" component={Admin} />
            //                                     <Route path="/home-user" component={User} />
            //                                     <Route path="/users" component={UserPage} />
            //                                     <Route path="/create-user" component={CreateUserPage} />
            //                                     <Route path="/documents" component={Docs} />
            //                                     <Route path="/create-new-document" component={NewDocument} />
            //                                     <Route path="/types" component={Types} />
            //                                     <Route path="/groups" component={GroupPage} />
            //                                     <Route component={Error} />
            //                                     {/* </Route> */}
            //                                     {/* </Route> */}
            //                                 </Switch>)
            //                                 : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            //                         )} />
            //                     </Container>
            //                 </div>
            //             </div>
            //         )} />
            //     </Switch>
            // </BrowserRouter>
    }
}

export default Routes;

