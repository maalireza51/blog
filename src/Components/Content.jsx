import React, { Component } from 'react'
import Post from './Post'
import Comments from './Comments'

export default class Content extends Component {
    render() {
        return (
            <div className="container">
                <Post data={this.props.post} />
                <Comments />
            </div>
        )
    }
}
