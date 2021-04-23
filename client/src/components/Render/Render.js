import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Col
} from 'reactstrap';
import Post from '../../utils/Posts'

const Render = ({title, authors, description, image, link}) => {
 const save = () => {
  Post.save({
    title: title,
    authors: authors,
    description: description,
    image: image,
    link: link,
  })
  .then(book => console.log(book))
  .catch(err => console.log(err))
 }
 const view = () => {
   window.open(`${link}`, "_blank")

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

              <Button color='light' light expand='md' onClick= {view} >View</Button><Button color='light' light expand='md' onClick= {save}>Save</Button>

            </CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default Render 