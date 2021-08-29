import React, { Component } from 'react'

export class Test2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            time: new Date(),
        }
        this.timeId = setInterval(() => this.tick(),1000)
    }
    
    tick() {
        this.setState({
            time: new Date()})
    }

    static getDerivedStateFromProps(nextProps,prevState) {

        //function 返回的结果会被添加到state的内容
        console.log('静态生命周期function')
        return null
    }

    getSnapshotBeforeUpdate(){
        console.log('在更新前获取截图 getSnapshotBeforeUpdate')
        return "From update"
    }

    componentDidMount(){
        console.log('主件已经加载 componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('主件是否应该更新 shouldComponentUpdate')
        console.log(nextState)

        if(nextState.time.getSeconds() %2 == 0){
            return true
        }
        return false
    }

    componentDidUpdate(prevProps, prevState, info) {
        console.log('主件已经更新完毕 componentDidUpdate')
        console.log(info)
    }

    componentWillUnmount(){
        console.log('主件将要卸载 componentWillUnmount')
        clearInterval(this.timeId)
    }

    render() {
        console.log('render',this.state)
        return (
            <div>
               <p>Test</p> 
               {/* <button type="button" onClick={() => this.setState({})}>setState</button> */}
               {this.state.time.getSeconds()}
            </div>
        )
    }
}

export default Test2
