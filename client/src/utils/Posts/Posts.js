import axios from 'axios'
// import { delete } from '../../../../routes/booksRoutes'

const Post ={
  getAll: () => axios.get('/api/books'),

  save: book => axios.post('/api/books', book)

}
export default Post