import React, { Component, PropTypes } from 'react';
import ReactQuill from 'react-quill';

export default class TextEditor extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        readOnly: PropTypes.bool,
        value: PropTypes.string
    }

    mixins = [ReactQuill.Mixin];

    state = {
        theme: 'snow',
        value: this.props.value
    }

    onEditorChange(value) {
        this.setState({ value });
        this.props.onChange(value);
    }

    getValue() {
        return this.state.value;
    }

    render() {
        const styles = require('./text-editor.scss');
        require('quill/dist/quill.snow.css');

        return (
            <div className={styles.textEditor}>
                <ReactQuill
                    {...this.props}
                    ref="quill"
                    className={styles.quill}
                    onChange={this.onEditorChange.bind(this)}
                    theme={this.state.theme}
                    value={this.state.value}>
                    <ReactQuill.Toolbar
                        className={styles.toolbar}
                        key="toolbar"
                        ref="toolbar"
                        items={ReactQuill.Toolbar.defaultItems} />
                    <div key="editor"
                        ref="editor"
                        className="quill-contents"
                        dangerouslySetInnerHTML={{__html: this.getValue()}} />
                </ReactQuill>
            </div>
        );
    }
}
