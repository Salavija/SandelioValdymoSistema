import React from "react";
import { Form, FormGroup, Input, FormText, Container, Col, Row } from "reactstrap";
import axios from "axios";
import FileUpl from "./FileUpl";
import fetchTypes from "../../../helpers/fetchTypes";
import { withRouter, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

class CreateNew extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      type: "",
      types: [],
      title: "",
      description: "",
      author: "",
      status: "SUKURTAS",
      approvingDate: null,
      dropdownOpen: false,
      rejectionDate: null,
      rejectionReason: "Labai reikejo",
      submissionDate: null,
      attachments: 1,
      userName: "Belekas"
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentDidMount = () => {
    fetchTypes().then(answer => {
      this.setState({ types: answer });
    });
  };

  addNewInventoryItem = e => {
    e.preventDefault();
    const newInventoryItem = {
      title: this.state.title,
      weight: this.state.weight,
      sector: this.state.sector,
      date: this.state.date,
    };

    axios
      .post("http://localhost:8081/api/inventoryItems", newDocument)
      .then(response => {
        console.log(response);
        this.props.history.push("/inventoryItems");
      })
      .catch(error => {
        console.log(error);
      });
  };

  onInputTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  onInputWeightChange = event => {
    this.setState({
      weight: event.target.value
    });
  };

  onInputSectorChange = event => {
    this.setState({
      sector: event.target.value
    });
  };

  onInputDateChange = event => {
    this.setState({
      date: event.target.value
    });
  };

  render() {
    return (
      <div>
        <br />
        <Paper>
          <Container>
            <br />
            <h3>Inventoriaus įrašo kūrimo forma</h3>
            <p className="lead">
              <i>Užpildykite visus laukus</i>
            </p>
            <Form onSubmit={this.addNewInventoryItem}>
              <FormGroup>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Inventoriaus pavadinimas"
                  onChange={this.onInputTitleChange}
                />
                <FormText>Nurodykite tikslų inventoriaus pavadinimą</FormText>
              </FormGroup>
              <FormGroup>
                <Input
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="svoris"
                  onChange={this.onInputWeightChange}
                />
                <FormText>Inventoriaus svoris</FormText>
              </FormGroup>
              <FormGroup>
                <Input
                  type="number"
                  name="sector"
                  id="sector"
                  placeholder="Sectorius"
                  onChange={this.onInputSectorChange}
                />
                <FormText>Nurodykite Sektorių (1-40)</FormText>
              </FormGroup>
              <br />
              <FileUpl />
              <Button variant="contained" type="submit" color="primary">
                Pridėti
              </Button>{" "}
              <Button
                variant="contained"
                type="submit"
                color="default"
                component={Link}
                to="/inventoryItems"
              >
                Grįžti
              </Button>{" "}
            </Form>
          </Container>
          <br />
        </Paper>
      </div>
    );
  }
}

export default withRouter(CreateNew);
