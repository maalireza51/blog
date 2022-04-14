import React from 'react'
import Comment from './Comment'

export default function Comments(props) {
    const comment = props.data.map(comment => {
        return <Comment comment={comment.body}/> 
    })
    return (
        <div className="comments">
            <p>Comments:</p>
            {comment}
        </div>
    )
}
