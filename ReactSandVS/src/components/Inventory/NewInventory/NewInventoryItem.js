import React from "react";
import {
  Form,
  FormGroup,
  Input,
  FormText,
  Container,
  Col,
  Row
} from "reactstrap";
import axios from "axios";
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
      userName: "Belekas",
      selectedType: null
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  addNewDocument = e => {
    e.preventDefault();
    const newDocument = {
      title: this.state.title,
      type: this.state.type,
      description: this.state.description,
      author: this.state.author,
      user_name: this.state.userName,
      state: this.state.status,
      approvingDate: this.state.approvingDate,
      dropdownOpen: this.state.dropdownOpen,
      rejection_date: this.state.rejectionDate,
      rejection_reason: this.state.rejectionReason,
      submission_date: this.state.submissionDate,
      attachments: this.state.attachments
    };

    axios
      .post("http://localhost:8081/api/inventorItems", newDocument)
      .then(response => {
        console.log(response);
        this.props.history.push("/documents");
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

  onInputTypeChange = event => {
    this.setState({
      type: event.target.value
    });
  };

  onInputDescriptionChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  onInputAuthorChange = event => {
    this.setState({
      author: event.target.value
    });
  };

  changeType = e => {
    let value = e.target.value;
    this.setState({ type: value });
  };

  render() {
    return (
      <div>
        <br />
        <Paper>
          <Container>
            <br />
            <h3>Inventoriaus kūrimo forma</h3>
            <p className="lead">
              <i>Užpildykite visus laukus</i>
            </p>
            <Form onSubmit={this.addNewInventoryItem}>
              <Row form>
                <Col md={4}>
                </Col>
              </Row>
              <FormGroup>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Pavadinimas"
                  onChange={this.onInputTitleChange}
                  required
                  helpMessage="Pick one!"
                />
                <FormText>Nurodykite inventoriaus pavadinimą</FormText>
              </FormGroup>
              <FormGroup>
                <Input
                    type="number"
                    name="title"
                    id="title"
                    placeholder="Svoris"
                    onChange={this.onInputTitleChange}
                    required
                    helpMessage="Pick one!"
                />
                <FormText>Nurodykite inventoriaus svorį</FormText>
              </FormGroup>
              <FormGroup>
                <Input
                    type="number"
                    name="title"
                    id="title"
                    placeholder="Sektorius"
                    onChange={this.onInputTitleChange}
                    required
                    helpMessage="Pick one!"
                />
                <FormText>Nurodykite inventoriaus talpinimo sektorių (nuo 1 iki 40)</FormText>
              </FormGroup>
              <br />
              <br />
              <Button variant="contained" type="submit" color="primary">
                Pridėti
              </Button>{" "}
              <Button
                variant="contained"
                type="submit"
                color="default"
                component={Link}
                to="/inventory-items"
              >
                Grįžti
              </Button>{" "}
            </Form>
          </Container>
          <br />
        </Paper>
        <br />
      </div>
    );
  }
}

export default withRouter(CreateNew);
