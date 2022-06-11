
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
  app.get('/users/:id',(req,res) => {
    console.log(req)
      const foundItem = users.find((item, index, arr) => item._id == Number(req.params.id) )

    // console.log(foundItem)
    res.json(foundItem)
 })

//post add a user
app.post('/users', (req,res) => {
  const newPerson = {
    _id: length + 1,
    ... req.body
  }
  
  users.push(newPerson)

  res.json(users)
})

// PUT make chenges to a key value
app.put('/users/:id', (req,res) => {
  // console.log(job)

   const parm = Number(req.params.id)
   let orginaljob = users.occupation
  
  for (let i = 0; i < users.length; i++) {
      const element = users[i];
     
      /// long way - will only change the key values if they exist within the body
      if (parm === element._id){
        if (req.body.occupation) {
          element.occupation = req.body.occupation  
        }
        if (req.body.name) {
          element.name = req.body.name  
        }
        if (req.body.avatar) {
          element.avatar = req.body.avatar
        }   
        } 
          
    }
  
  // let newJob = {
  //   "occupation": "Full Stack"
  // }
  // users.push(newJob)
 
  res.json(users)
})

//DELETE remove a user
app.delete('/users/:id', (req,res) => {
  // console.log(req,params)
  const removeUser = users.find((item, index, arr) => item._id === Number(req.params.id) )

  res.send(removeUser)
})


/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))