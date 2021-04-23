import axios from 'axios'
// import { delete } from '../../../../routes/booksRoutes'

const Post ={
  getAll: () => axios.get('/api/books'),

  save: () => axios.post('/api/books')

}
export default Post