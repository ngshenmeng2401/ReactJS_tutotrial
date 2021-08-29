import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Title4 extends Component {

    static contextTypes = {
        themeColor: PropTypes.string,
    }

    render() {
        console.log(this.props)
        console.log(this.context)
        const {themeColor} = this.context
        return (
                <h1 style={{color:themeColor}}>Big Title</h1>
        )
    }
}

export default Title4
