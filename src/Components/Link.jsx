import React from 'react'

export default function Link(props) {
    return (
        <li onClick={(e) => props.handelClick(props.index)}>{props.title}</li>
    )
}
