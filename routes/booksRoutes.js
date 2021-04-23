const router = require('express').Router()
const {Books} = require('../models')

router.post('/books', (req, res) => {
  Books.create({
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  })
  .then(books => res.json(books))
  .catch(err => console.log(err))
})

router.get('/books', (req, res ) =>{
  Books.find({})
  .then(books => res.json(books))
  .catch(err => console.log(err))
})

router.delete('/books/:id', (req, res) => {
  Books.findByIdAndDelete({_id : req.params.id})
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})



module.exports = router