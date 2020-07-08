const express = require('express')
const colors = require('colors')
const cors = require('cors')
const server = express()

server.use(express.json())
server.use(cors())

let users = [
    {
        id: Math.floor(Math.random() * 10000),
        name: 'Dean Winchester',
        nickname:'Squirrel',
        bio: 'Hunter',
        species:'Human'

    },
    {
        id: Math.floor(Math.random() * 10000),
        name: 'Castiel',
        nickname:'Asstiel',
        bio: 'Fallen Angel',
        species:'Seraph/Angel'

    },
    {
        id: Math.floor(Math.random() * 10000),
        name: 'Crowley',
        nickname:'King of the dirt bags',
        bio: 'King of Hell',
        species:'Crossroad Demon'

    }

]
// GET
server.get('/api/users', (req, res) =>{
    if(!users){
        res.status(500).json({errorMessage: "The users information could not be retrieved."})
    }else{
        res.status(200).json(users)
    }
})

server.get('/api/users/:id', (req, res) =>{
    const user = users.find( u => u.id == req.params.id)

    if(user){
        res.status(200).json(user)
    }else{
        res.status(404).send({message: "The user with the specified ID does not exist." })
    }
})

//DELETE
server.delete('/api/users/:id', (req, res) =>{
    const id = req.params.id
    const user = users.find(user => user.id === req.params.id)

    if(users){
        users = users.filter(u => u.id !== Number(id))
        res.status(200).json(users)
    }else{
        res.status(404).json({message: "The user with the specified ID does not exist."})
    }
})

//POST
server.post('/api/users', (req, res) =>{
    const newUser = req.body
    newUser.id = Math.floor(Math.random() * 10000)


    if(!newUser.name ||  !newUser.nickname ||  !newUser.bio ||  !newUser.species){
        res.status(400).send({errorMessage: "Please provide name and bio for the user."})
    }else{
        users.push(newUser)
        res.status(201).json(users)
    }
})

//PUT

server.put('/api/users/:id', (req,res) =>{
    const id =req.params.id
    const user = users.find( user => user.id == id)
    if(!req.body.name || !req.body.nickname || !req.body.bio || !req.body.species){
        res.status(400).json({ errorMessage: "Please provide name and bio for the user."})
    } else if(!user){
        res.status(404).json({ message: "The user with the specified ID does not exist."})
    } else{
        user.name =req.body.name
        user.nickname = req.body.nickname
        user.bio = req.body.bio
        user.species = req.body.species
        res.status(200).json(users)
    }
})

const port = 3999
server.listen(port, () => console.log(`\n ==API Running on port ${port} == \n`.blue))