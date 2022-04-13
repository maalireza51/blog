import React from 'react'

export default function Post(props) {
    return (
        <div className="post">
            <img src={`/assets/${props.data.image}`} alt={props.data.title} />
            <h1>{props.data.title}</h1>
            <div>{props.data.body}</div>
        </div>
    )
}
