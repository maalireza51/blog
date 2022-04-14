import React, { Component } from 'react'
import Post from './Post'
import Comments from './Comments'

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: null
        }
    }

    async getComments(){
        const comments = await fetch(`http://localhost:3001/comments?post-id=${this.props.post.id}`);
        return await comments.json();
    }

    setComment(){
        return this.getComments().then(comments=>this.setState({ comments }));
    }

    componentDidMount(){
        if(this.props.post){
            this.setComment();
        }
    }

    componentDidUpdate(prevprops){
        if(prevprops.post.id !== this.props.post.id){
            this.setComment();
        }
    }

    render() {
        return (
            <div className="container">
                <Post data={this.props.post} />
                {null != this.state.comments && <Comments data={this.state.comments} /> }
            </div>
        )
    }
}
