import React, { Component, PropTypes as T } from 'react';
import { Post } from 'components';
import { Card, CardHeader, CardActions, FloatingActionButton, TextField } from 'material-ui';
import List from 'components/atoms/list';

export default class Posts extends Component {
    static propTypes = {
        readonly: T.bool,
        categories: T.object
    };

    constructor(props) {
        super(props);

        this.selectCategory = this.selectcategory.bind(this);
    }

    selectCategory(id) {
        this.setState({
            selectedCategory: id
        });
    }
  render() {
    // const styles = require('./Posts.scss');
    // require the logo image both from client and server
    const { authors, categories, posts } = this.props;
    return (
        <div className="container">
            <Card className="col-md-4">
                <CardHeader
                    title="Categories"
                />
                {!this.props.readonly && <CardActions>
                    <FloatingActionButton primary label="+" />
                </CardActions>}
                { categories.length && <List items={categories.map(c => ({
                    name: c.title,
                    _id: c._id
                }))}
                handleClick={this.selectCategory}
                 />}
            </Card>
            <Card className="col-md-8">
                {!this.state.selectedCategory && <CardText}
            </Card>
      </div>
    );
  }
}
