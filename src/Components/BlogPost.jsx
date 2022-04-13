import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

export default class BlogPost extends Component {


    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            currentPost: null
        }

        this.handelChangeCurrentPost = this.handelChangeCurrentPost.bind(this);
    }

    async getPosts() {
        const posts = await fetch('http://localhost:3001/posts');

        return await posts.json();
    }

    componentDidMount() {
        this.getPosts().then(posts => this.setState({ posts, currentPost: 0 }))
    }

    handelChangeCurrentPost(index) {
        console.log(index);
        this.setState({ currentPost: index });
    }

    render() {
        return (
            <>
                <Sidebar posts={this.state.posts} handelChangeCurrentPost={this.handelChangeCurrentPost} />
                {null != this.state.currentPost && <Content post={this.state.posts[this.state.currentPost]} />}
            </>
        )
    }
}
