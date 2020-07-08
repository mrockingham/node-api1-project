import React, {useState, useEffect} from 'react'
import axios from 'axios'
import User from './User'

const UserList = props => {
    const [user, setUser] =useState([])


    useEffect(()=>{
        axios.get('http://localhost:3999/api/users')
        .then(res =>{
            
            setUser(res.data)
        })
    },[user])


    return (
        <div>
            
            <User key ={user.id} user={user} />
        </div>
    )
}

export default UserList
