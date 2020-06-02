import React, {createContext, useState, useEffect, useReducer} from 'react'
import axios from 'axios'
import React from 'react'

export const GlobalContext = createContext()

const initalState ={
    loading: true,
    error:'',
    smurf: [{}]
}

const GlobalState = () => {
    return (
        <div>
            
        </div>
    )
}

export default GlobalState
