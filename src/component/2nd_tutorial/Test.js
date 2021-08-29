import React, { Component } from 'react'

class Test extends Component {

    constructor(props) {
        super(props)
        console.log('constructor')
        this.state = {
             time: new Date(),
        }
    }

    tick() {
        this.setState({
            time: new Date()})
    }

    //加载
    componentWillMount() {
        console.log('主件将要加载 componentWillMount')
        this.timeId = setInterval(() => this.tick(),1000)
    }

    componentDidMount(){
        console.log('主件已经加载 componentDidMount')
    }
    
    //更新生命周期
    componentWillReceiveProps(){
        console.log('主件将要接收参数 componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('主件是否应该更新 shouldComponentUpdate')
        console.log(nextState)

        if(nextState.time.getSeconds() %2 == 0){
            return true
        }
        return false
    }

    componentWillUpdate(){
        console.log('主件将要更新 componentWillUpdate')
    }

    // getSnapshotBeforeUpdate(){
    //     console.log('在更新前获取截图 getSnapshotBeforeUpdate')
    // }

    componentDidUpdate(){
        console.log('主件已经更新完毕 componentDidUpdate')
    }

    //卸载
    componentWillUnmount(){
        console.log('主件将要卸载 componentWillUnmount')
        clearInterval(this.timeId)
    }

    render() {
        console.log('render')
        return (
            <div style={{border: '1px solid black'}}>
                <p>Test</p>
                <p>{this.state.time.getSeconds()}</p>
                <button type="button" onClick={() => this.setState({})}>setSate 更新</button>
                <button type="button" onClick={() => this.forceUpdate()}>forceUpdate 强制更新</button>
            </div>
        )
    }
}

export default Test
