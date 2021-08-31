import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {

        const items = this.props.item
        const index = this.props.key
        return (
            <div >
                <li key={index} onClick={this.props.handleDeleteItem.bind(this,index)}>{items}</li>
            </div>
        )
    }
}

export default TodoItem
