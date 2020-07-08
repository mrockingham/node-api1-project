import React, {useState , useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, } from 'reactstrap';

const User = (props) => {
 



const userDelete = (user) =>{
    
axios.delete(`http://localhost:3999/api/users/${user.id}`)
.then(res => {
    userDelete(user)
    // setUser(props)
//    push('/app')
//     history.go()
    
    
})
.catch(error =>{
    console.log(error)
  })
}


    return (
        <div>

            {props.user.map(users =>{

                return(
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardHeader>{users.name}</CardHeader>
                        <CardTitle>Nickname: {users.nickname}</CardTitle>
                        <CardTitle>Occupation: {users.bio}</CardTitle>
                        <CardTitle>Species: {users.species}</CardTitle>
                        <Button onClick={e => {
                    e.preventDefault();
                    userDelete(users)
                  }
                }
                >delete</Button>
                    </Card>
                )
            })}
            
        </div>
    )
}

export default User
