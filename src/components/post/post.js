import React, { Component, PropTypes as T } from 'react';
import { Card, CardHeader, CardActions, RaisedButton, TextField } from 'material-ui';
// import Comment from '../comment';
import moment from 'moment';
import { TextEditor } from 'components';

export default class Post extends Component {
    static propTypes = {
        post: T.object,
        readonly: T.bool,
        save: T.func,
        delete: T.func
    };

    constructor(props) {
        super(props);

        this.state = { post: props.post };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onSave() {
        this.props.save(this.state.post);
    }

    onDelete() {
        this.props.delete(this.state.post);
    }

    onTitleChange(title) {
        this.setState({
            post: { ...this.state.post, title }
        });
    }

    onBodyChange(body) {
        this.setState({
            post: { ...this.state.post, body }
        });
    }

    render() {
        const { post } = this.props;
        return (
            <Card>
                <CardHeader
                    title={post.title}
                    subtitle={post.author.name}
                />
                {!this.props.readonly && <TextField
                    floatingLabelText="Title"
                    onChange={this.onChangeTitle} />
                }
                <TextEditor value={post.body} readOnly={this.props.readonly} onChange={this.onBodyChange} />
                <div className="row">
                    {post.createdAt && <div className="pull-right">{moment(post.createdAt).format('DD/MM/YYYY - HH:mm')}</div>}
                    {post.updatedAt && <div className="pull-right">{moment(post.updatedAt).format('DD/MM/YYYY - HH:mm')}</div>}
                </div>
                {!this.props.readonly && <CardActions className="pull-right">
                    <RaisedButton primary label="Save" />
                    <RaisedButton secondary label="Delete" />
                </CardActions>}
            </Card>
        );
    }
}
