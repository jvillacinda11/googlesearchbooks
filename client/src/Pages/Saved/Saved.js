import {useState, useEffect } from 'react'
import { Container, Row } from "reactstrap"
import Render from '../../components/Render'
import Post from '../../utils/Posts'

function Saved() {

  const[postState, setPostState] = useState({
    posts: []
  })
  useEffect(() => {
    Post.getAll({})
    .then(({ data: posts }) => {
      setPostState({...postState, posts: posts})
      console.log(postState.posts)
    })
    .catch(err => console.log(err))
  })
  return(
    <>
    <h1>View your saved books here</h1>
      <Container>
        <Row>
          {
            postState.posts
              ? postState.posts.map((books, i) => <Render key={i} title={books} authors={books} description={books} image={books} />)
              : null
          }
        </Row>
      </Container>
    </>
  )
}
export default Saved