import React from 'react'

export default function Link(props) {
    return (
        <li onClick={(e) => props.handelClick(e,props.index)} className={props.active==props.index?"active":null}>{props.title}</li>
    )
}
