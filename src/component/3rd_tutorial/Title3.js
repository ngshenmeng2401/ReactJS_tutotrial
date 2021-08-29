import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Title3 extends Component {

    static propTypes = {
        title: PropTypes.string,
    }

    static defaultProps = {
        title: 'Default Title'
    }

    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

export default Title3
