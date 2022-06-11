
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

app.use(express.json());

/* BEGIN - create routes here */
let newUser = { "_id": 6,
"name": "Erick Hernandez",
"occupation": "Tech",
"avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/techerick.jpg"}


const length = users.length

//get all users
  app.get('/users',(req,res) => {
     res.send(users)
  })

  //get 1 user
  app.get('/users/:slug',(req,res) => {
    // console.log(req,params)
      const foundItem = users.find((item, index, arr) => item.id === Number(req.params.id) )

    console.log(foundItem)
    res.json(foundItem)
 })

//post add a user
app.post('/user', (req,res) => {
  const newPerson = {
    id: length + 1,
    ... req.body
  }
  
  users.push(req.body)

  res.json(users)
})

// PUT make chenges to a key value
app.put('/user', (req,res) => {
  let newJob = {
    "occupation": "Full Stack"
  }
  users.push(newJob)

  res.json(users)
})

//DELETE remove a user
app.delete('/user/:slug', (req,res) => {
  console.log(req,params)
  const removeUser = users.find((item, index, arr) => item.id === Number(req.params.id) )

  res.send(removeUser)
})


/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))