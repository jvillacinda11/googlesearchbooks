import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Col
} from 'reactstrap';

const Render = ({title, authors, description, image, link}) => {
 const save = () => {

 }
 const view = () => {
   window.location.href = `${link}`
 }

  return(
    <>
      <Col>
        <Card>
          <CardImg top width="100%" src={image} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Authors: {authors.map(author => `${author} `)}</CardSubtitle>
            <CardText>{description}</CardText>
 
            <CardSubtitle>

              <Button color='light' light expand='md' onclick= {view} ></Button>View<Button color='light' light expand='md' onClick= {save}>Save</Button>

            </CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default Render 