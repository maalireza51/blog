import React from 'react'
import Link from './Link'

export default function Sidebar(props) {

    const links = props.posts ? props.posts.map((post, index) =>
        <Link
            key={post.id}
            title={post.title}
            index={index}
            handelClick={props.handelChangeCurrentPost} />) : null;
    return (
        <aside>
            <ul>
                {links}
            </ul>

        </aside>
    )
}
