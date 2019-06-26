import React from 'react';
import { Button, Form } from 'reactstrap';
import img from "../images/img.jpg";

const headingP = <h3>Sandėlių valdymo sistema</h3>;
const actionsP = <h5>Sėmingai tvarkome sandėlius nuo 2008</h5>;
const style = { margin: '20px', textAlign: 'center' };



export default class UserHome extends React.Component {

    render() {
        return (
            <Form>
                <div style={style}>
                    {headingP}
                    {actionsP}
                    <br/>
                    <br/>
                    <p>Sandėlio valdymo sistema (SVS) – pilnas „nuo durų iki durų“ sprendimas gamintojams, didmeniniams paskirstymo centrams, viešiesiems logistikos centrams, sandėliavimo logistikos paslaugų tiekėjams.

                        Sandėlio valdymo programos pažangi sistemos architektūra leidžia pateikti sprendimą, kaip atskirą produktą arba kaip aukšto lygio pritaikytą sistemą pagal specifinius kliento poreikius. Sandėlio valdymas tampa efektyvus, greitas, funkcionalus ir šiuolaikiškas.

                    </p>


                    <p>Sandėlio valdymo sistema sprendžia tokias problemas kaip:

                        Neteisingai atkrautos prekės
                        Vietos trūkumas
                        Nepakankamas sandėlio greitis: ilgai renkamos prekės
                        Darbuotojų kaita ir trūkumas
                        Inventorizacijos supaprastinimas
                    </p>

                    <img src={img}></img>
                </div>


                {/*<FormGroup>*/}
                {/*<Label for="exampleEmail">Email</Label>*/}
                {/*<Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />*/}
                {/*</FormGroup>*/}
                {/*<FormGroup>*/}
                {/*<Label for="examplePassword">Password</Label>*/}
                {/*<Input type="password" name="password" id="examplePassword" placeholder="Enter your password" />*/}
                {/*</FormGroup>*/}
                {/*<FormGroup>*/}
                {/*<Label for="exampleSelect">Select</Label>*/}
                {/*<Input type="select" name="select" id="exampleSelect">*/}
                {/*<option>1</option>*/}
                {/*<option>2</option>*/}
                {/*<option>3</option>*/}
                {/*<option>4</option>*/}
                {/*<option>5</option>*/}
                {/*</Input>*/}
                {/*</FormGroup>*/}
                {/*<FormGroup>*/}
                {/*<Label for="exampleSelectMulti">Select Multiple</Label>*/}
                {/*<Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>*/}
                {/*<option>1</option>*/}
                {/*<option>2</option>*/}
                {/*<option>3</option>*/}
                {/*<option>4</option>*/}
                {/*<option>5</option>*/}
                {/*</Input>*/}
                {/*</FormGroup>*/}
                {/*<FormGroup>*/}
                {/*<Label for="exampleText">Text Area</Label>*/}
                {/*<Input type="textarea" name="text" id="exampleText" />*/}
                {/*</FormGroup>*/}
                {/*<FormGroup>*/}
                {/*<Label for="exampleFile">File</Label>*/}
                {/*<Input type="file" name="file" id="exampleFile" />*/}
                {/*<FormText color="muted">*/}
                {/*This is some placeholder block-level help text for the above input.*/}
                {/*It's a bit lighter and easily wraps to a new line.*/}
                {/*</FormText>*/}
                {/*</FormGroup>*/}
                {/*<FormGroup tag="fieldset">*/}
                {/*<legend>Radio Buttons</legend>*/}
                {/*<FormGroup check>*/}
                {/*<Label check>*/}
                {/*<Input type="radio" name="radio1" />{' '}*/}
                {/*Option one is this and that—be sure to include why it's great*/}
                {/*</Label>*/}
                {/*</FormGroup>*/}
                {/*<FormGroup check>*/}
                {/*<Label check>*/}
                {/*<Input type="radio" name="radio1" />{' '}*/}
                {/*Option two can be something else and selecting it will deselect option one*/}
                {/*</Label>*/}
                {/*</FormGroup>*/}
                {/*<FormGroup check disabled>*/}
                {/*<Label check>*/}
                {/*<Input type="radio" name="radio1" disabled />{' '}*/}
                {/*Option three is disabled*/}
                {/*</Label>*/}
                {/*</FormGroup>*/}
                {/*</FormGroup>*/}
                {/*<FormGroup check>*/}
                {/*<Label check>*/}
                {/*<Input type="checkbox" />{' '}*/}
                {/*Check me out*/}
                {/*</Label>*/}
                {/*</FormGroup>*/}
                {/*<Button>Submit</Button>*/}
            </Form>
        );
    }
}