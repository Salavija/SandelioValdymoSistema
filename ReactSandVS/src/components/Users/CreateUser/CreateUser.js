import React from "react";
import { Form, FormGroup, Input, FormText, Container } from "reactstrap";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

class CreateUser extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      client: "",
      clients: [],
      name: "",
      surname: "",
      birthdayDate: "",
      phoneNumber: "",
      clientType:"",
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  addNewUser = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      surname: this.state.surname,
      birthdayDate: this.state.birthdayDate,
      phoneNumber: this.state.phoneNumber,
      clientType: this.state.clientType,
    };
    axios
      .post("http://localhost:8081/api/clients/create", newUser)
      .then(response => {
        this.props.history.push("/clients");
      })
      .catch(error => {
        console.log(error);
      });
  };

  onInputNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  onInputSurnameChange = event => {
    this.setState({
      surname: event.target.value
    });
  };

  onInputBirthdayDateChange = event => {
    this.setState({
      birthdayDate: event.target.value
    });
  };

  onInputPhonumberChange = event => {
    this.setState({
      phonenumber: event.target.value
    });
  };

  render() {
    return (
      <div>
        <br />
        <Paper>
          <Container>
            <br />
            <h3>Kliento kūrimo forma</h3>
            <p className="lead">
              <i>Užpildykite visus laukus</i>
            </p>
            <Form onSubmit={this.addNewUser}>
              <FormGroup>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Vardas"
                  required
                  onChange={this.onInputNameChange}
                />
                <FormText>Nurodykite kliento vardą</FormText>
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="Pavardė"
                  required
                  onChange={this.onInputSurnameChange}
                />
                <FormText>Nurodykite kliento pavardę</FormText>
              </FormGroup>
            <FormGroup>
              <Input
                  type="date"
                  name="birthdayDate"
                  id="birthdayDate"
                  placeholder="Gimimo data"
                  required
                  onChange={this.onInputBirthdayDateChange}
              />
              <FormText>Nurodykite kliento gimimo datą</FormText>
            </FormGroup>
            <FormGroup>
              <Input
                  type="number"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Telefono numeris"
                  required
                  onChange={this.onInputPhonenumberChange}
              />
              <FormText>Nurodykite kliento telefono numerį</FormText>
            </FormGroup>
              <FormGroup>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  Pasirinkite kliento tipą
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Įprastinis klientas</DropdownItem>
                  <DropdownItem>Lojalus Klientas</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </FormGroup>
              <br />
              <Button variant="contained" color="primary" type="submit">
                Pridėti
              </Button>{" "}
              <Link to={"/users"}>
                <Button variant="contained" color="default">
                  Grįžti
                </Button>{" "}
              </Link>
            </Form>
            <br />
          </Container>
        </Paper>
      </div>
    );
  }
}

export default withRouter(CreateUser);
