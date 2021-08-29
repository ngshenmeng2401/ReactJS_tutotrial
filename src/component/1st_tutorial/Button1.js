import React, { Component } from 'react'

class Button1 extends Component {

    constructor(props) {
        super(props)
    }
  
    render() {
        var themeColor = this.props.themeColor
        return (
            <div >
                <button style={{color:themeColor}} onClick={() => this.props.handleClick('red')}>Red</button>
                <button style={{color:themeColor}} onClick={() => this.props.handleClick('green')}>Green</button>
            </div>
        )
    }
  }

export default Button1
