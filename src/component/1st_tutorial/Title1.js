import React, { Component } from 'react'

class Title1 extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        const themeColor = this.props.themeColor
        return (
            <div>
                <h2 style={{color: themeColor}}>Title</h2>
            </div>
        )
    }
}

export default Title1