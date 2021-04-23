import axios from 'axios'

const Post ={
  getAll: () => axios.get('/api/books')
}
export default Post