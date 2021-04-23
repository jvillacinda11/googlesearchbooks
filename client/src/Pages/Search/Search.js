import { useState, useEffect} from 'react'
import Render from '../../components/Render'
import axios from 'axios'

// google books api key AIzaSyCjqmP_CsJ3FG_NpGK89nfrDbiFmJi1Ifc
function Search() {
  const [booksState, setBooksState] = useState({
    title: '',
    booklist: []
  })
  
    const handleInputChange = ({ target }) => {
      setBooksState({ ...booksState, [target.name]: target.value })
    }
  
    const handleSearchBooks = event => {
      event.preventDefault()
      //change this to the books api
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${booksState.title}&key=AIzaSyCjqmP_CsJ3FG_NpGK89nfrDbiFmJi1Ifc`)
        .then(({ data: books }) => {
          console.log(books)
          setBooksState({ ...booksState, booklist: books, title: '' })
          console.log(booksState.booklist)
          console.log(booksState.booklist.items.volumeInfo.title)

        })
        .catch(err => console.error(err))
    }
  // Might not use this useEffect
    // useEffect(() => {
    //   axios.get('http://www.omdbapi.com/?apikey=trilogy&t=Goodfellas')
    //     .then(({ data: movie }) => {
    //       setMovieState({ ...movieState, movie, title: '' })
    //     })
    //     .catch(err => console.error(err))
    // }, [])
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
   {
     booksState.booklist
     ? booksState.booklist.map((books, i) => <Render key={i} title= {books.item.volumeInfo.title} authors= {books.item.volumeInfo.authors} description = {books.item.volumeInfo.description} image= {books.item.volumeInfo.imageLinks.thumbnail}/>)
     :null
   }
    </>
  )
}
export default Search