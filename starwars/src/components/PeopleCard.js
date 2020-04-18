import React from 'react';
 import { Card, CardHeader, CardFooter, CardBody,
  CardText, Col, Row } from 'reactstrap';

const PeopleCard = ({person}) => {
 return (  
   <div className="container"> 
     <Row xs="3">    
        <Col xs="8" md="4">
          <Card>
              <CardHeader tag="h3">Name: {person.name}</CardHeader>
              <CardBody>
                <CardText>Height: {person.height}</CardText>
                <CardText>Mass: {person.mass}</CardText>
                <CardText>Birth Year: {person.birth_year}
                  </CardText>
              </CardBody>
              <CardFooter className="text-muted">Gender: {person.gender}</CardFooter>
            </Card>
        </Col>
      </Row>
    </div>
 )};




export default PeopleCard;