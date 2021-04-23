import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Col
} from 'reactstrap';

const RenderSaved = ({title, authors, description, image, link}) => {
const view =()=> {
  window.open(`${link}`, "_blank")
}

const remove = ()=> {
console.log('ping')
}

  return(
    <>
      <Col>
        <Card>
          <CardImg top width="100%" src={image} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Authors: {authors ? authors.map(author => `${author}, `) : 'Unknown'}</CardSubtitle>
            <CardText>{description}</CardText>

            <CardSubtitle>

              <Button color='light' light expand='md' onClick={view} >
                View
              </Button>
              <Button color='light' light expand='md' onClick={remove}>
                Remove
              </Button>

            </CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default RenderSaved