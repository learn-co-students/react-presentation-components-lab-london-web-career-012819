// Code SimplerComponent Here

import React from 'react'

const handleClick = (event) => {
    console.log("Sup ladies?")
    return true
}

const SimplerComponent = (props) => {
    return <div onClick={props.handleClick}>I am just happy</div>
}

export default SimplerComponent

