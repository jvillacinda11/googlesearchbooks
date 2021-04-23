import {useState, useEffect } from 'react'
import { Container, Row } from "reactstrap"
import RenderSaved from '../../components/RenderSaved.js/index.js'
import Post from '../../utils/Posts'

export default function Saved() {

  const [postState, setPostState] = useState({
    posts: []
  })
  useEffect(() => {
    Post.getAll({})
    .then(({ data: posts }) => {
      setPostState({...postState, posts })
    })
    .catch(err => console.log(err))
  }, [])

  const view = () => {
    console.log('pong')
  }
  const remove = () =>{
    console.log('pong')
  }
  return(
    <>
    <h1>View your saved books here</h1>
      <Container>
        <Row>
          {
            postState.posts.length
              ? postState.posts.map((book, i) => <RenderSaved key={i} title={book.title} authors={book.authors} description={book.description} image={book.image} link= {book.link} id = {book._id} />)
              : null
          }
        </Row>
      </Container>
    </>
  )
}
