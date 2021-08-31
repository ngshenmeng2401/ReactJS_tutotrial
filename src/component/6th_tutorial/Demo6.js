import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './demo6.css';

class Demo6 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             show: true,
             list:[],
        }
        this.handleAddItem = this.handleAddItem.bind(this)
    }
    
    handleToogle = () => {
        this.setState({ 
            show: this.state.show ? false : true,})
    }

    handleAddItem = () => {
        this.setState ((prevState) => {
            return {
                list: [...prevState.list,'item'],
            }
        }) 
    }

    render() {
        return (
            <div>
                {/* 多个的component用的trasition */}
                <TransitionGroup>
                {
                    this.state.list.map((item, index) => {
                        return (
                            // 单个的component用的transition
                            <CSSTransition
                                key={index}
                                in={this.state.show}
                                timeout={1000}
                                classNames="fade"
                                unmountOnExit
                                appear={true}
                                onEnter={(element) => {element.style.color = 'blue'}}
                                // onExited={() => setShowButton(true)}
                            >
                                <div >{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
                {/* <div>hello</div> */}
                <button type="button" onClick={this.handleAddItem}>toogle</button>
            </div>
        )
    }
}

export default Demo6
