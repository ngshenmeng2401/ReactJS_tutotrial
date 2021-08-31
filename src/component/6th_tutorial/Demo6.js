import React, { Component } from 'react'

class Demo6 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             show: true,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    

    render() {
        return (
            <div>
                <div className={this.state.show ? 'show' : 'hide'}>hello</div>
                <button type="button" onClick={() => this.handleClick}>toogle</button>
            </div>
        )
    }
}

export default Demo6
