import React from 'react';

export default class PostList extends React.Component{
    render(){
        return (
            <section>
                <div>
                    <button type={'button'} onClick={this.props.fetch_show(1)}>一個だけ取得する</button>
                    <div><img src={this.props.current_post.image_url} /></div>
                    <div>
                        {this.props.current_post.title}
                        {this.props.current_post.description}
                    </div>
                </div>
                <div>
                    <button type={'button'} onClick={this.props.fetch_index}>一覧を取得する</button>
                    <ul>
                        {this.props.posts.map((post, i) =>
                            <li key={i}>
                                <div><img src={post.image_url} /></div>
                                <div>
                                    {post.title}
                                    {post.description}
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        );
    }
}