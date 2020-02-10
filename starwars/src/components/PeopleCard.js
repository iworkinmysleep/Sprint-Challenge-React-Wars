import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const PeopleCard = ({person}) => {

return <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Card body body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className= "text-center">
              <CardTitle>Name: {person.name}</CardTitle>
                <CardText>Height: {person.height}</CardText>
                <CardText>Mass: {person.mass}</CardText>
                <CardText>Hair Color: {person.hair_color}</CardText>
                <CardText>Skin Color: {person.skin_color}</CardText>
                <CardText>Eye Color: {person.eye_color}</CardText>
                <CardText>Birth Year: {person.birth_year}</CardText>
                <CardText>Gender: {person.gender}</CardText>
            </Card>
          </Col>
        </Row>  


}




export default PeopleCard;