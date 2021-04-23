import { useState, useEffect} from 'react'
import Render from '../../components/Render'
import axios from 'axios'
import { Container, Row } from "reactstrap"


// google books api key AIzaSyCjqmP_CsJ3FG_NpGK89nfrDbiFmJi1Ifc
export default function Search() {
  const [booksState, setBooksState] = useState({
    title: '',
    books: []
  })
  
    const handleInputChange = ({ target }) => {
      setBooksState({ ...booksState, [target.name]: target.value })
    }
  
    const handleSearchBooks = event => {
      event.preventDefault()
      //change this to the books api
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${booksState.title}&key=AIzaSyCjqmP_CsJ3FG_NpGK89nfrDbiFmJi1Ifc`)
        .then(({ data: { items: books } }) => {
          console.log(books)
          setBooksState({ ...booksState, books, title: '' })

        })
        .catch(err => console.error(err))
    }
  const view = () => {
    alert('hi')
  }

  return(
    <>
    <h1>Search for books here</h1>
      <form>
        <p>
          <label htmlFor='title'>title</label>
          <input
            type='text'
            name='title'
            value={booksState.title}
            onChange={handleInputChange}
          />
        </p>
        <button onClick={handleSearchBooks}>Search Books</button>
      </form>

   <Container>
     <Row>
         {
     booksState.books.length
          ? booksState.books.map((book, i) => <Render key={i} title={book.volumeInfo.title} authors={book.volumeInfo.authors} description={book.volumeInfo.description} image={book.volumeInfo.imageLinks.thumbnail} link={book.volumeInfo.infoLink}/>)
     :null
   } 
     </Row>
     </Container>
    </>
  )
}