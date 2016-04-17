import React, { Component, PropTypes as T } from 'react';
import { Card, CardHeader } from 'material-ui';
// import Comment from '../comment';
import { TextEditor } from 'components';

export default class Post extends Component {
    static propTypes = {
        post: T.object
    };
    render() {
        const { post } = this.props;
        return (
            <Card>
                <CardHeader
                    title={post.title}
                    subtitle={post.author.name}
                />
                <TextEditor value={post.body} />
            </Card>
        );
    }
}
