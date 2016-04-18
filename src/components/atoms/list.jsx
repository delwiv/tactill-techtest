import React, { Component, PropTypes } from 'react';
import { List, ListItem, IconButton } from 'material-ui';
import { SelectableContainerEnhance as enhanceList } from 'material-ui/lib/hoc/selectable-enhance';

const SelectableList = enhanceList(List);

export default class Button extends Component {
    static propTypes = {
        items: PropTypes.array,
        handleClick: PropTypes.func.isRequired,
        handleRemove: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
            selectedIndex: 0
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.items
        });
    }
    handleSelect(e, index) {
        // console.log(index);
        // console.log(this.state.items[index]);
        this.setState({
            selectedIndex: index
        });
        this.props.handleClick(this.state.items[index]._id);
    }
    render() {
        return (
            <div className="list">
                <SelectableList
                    valueLink={{
                        value: this.state.selectedIndex,
                        requestChange: this.handleSelect.bind(this)
                    }}>
                    {this.state.items.map((item, index) =>
                        <ListItem
                            primaryText={item.name}
                            rightIconButton={<IconButton onTouchTap={() => { this.props.handleRemove(item.id).bind(this);}} iconClassName="fa fa-trash-o" value={index}/>}
                            secondaryText={item.items.length ? item.items + ' items' : 'no item'}
                            value={item.id} />
                    )}
                </SelectableList>
            </div>
        );
    }
}
