import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
    return (
       <h1>Name:{id}</h1>
    )
}

export default User
