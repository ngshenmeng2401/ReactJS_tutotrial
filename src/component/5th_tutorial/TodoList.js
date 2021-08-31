import React, { Component,Fragment } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class TodoList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            inputValue: '',
            list: [],
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddBtn = this.handleAddBtn.bind(this)
    }

    static propTypes = {
        inputValue: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
        index: PropTypes.number,
        handleAddBtn : PropTypes.func,
        list : PropTypes.array
    }

    static defaultProps = {
        inputValue: '123',
        index: 0,
    }

    handleInputChange = (e) => {
        console.log(e.target.value)

        this.setState (() => {
            return {inputValue: this.input.value,};
        })
    }

    handleAddBtn = () => {

        this.setState ((prevState) => ({
            list: [...prevState.list,prevState.inputValue],
            inputValue: "",
        }), () => {
            console.log(this.ul.querySelectorAll('div').length)
        });
    }

    clearText = () => {

        this.setState (() => {
            return {inputValue: "",};
        })

        // this.setState({
        //     inputValue: "",
        // })
    }

    handleDeleteItem = (index) => {

        // const list = [...this.state.list];
        // list.splice(index, 1);
        // console.log(index);

        this.setState((prevState) => {

            const list = [...prevState.list];
            list.splice(index, 1);

            return {list}
        })

        // this.setState({
        //     list: list
        // })
    }
    

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputText">Label</label>
                    <input id="inputText" type="text" value={this.state.inputValue} onChange={this.handleInputChange} ref={(input) => this.input = input}/>
                    <button type="button" onClick={() => this.handleAddBtn()}>Submit</button>
                    <button type="button" onClick={() => this.clearText()}>Clear</button>
                </div>
                <ul ref={(ul) => this.ul = ul}>
                    {this.state.list.map((item, index) =>{
                        return <div key={item}>
                            <TodoItem handleDeleteItem={this.handleDeleteItem} item={item} index={index}/>
                            {/* <li key={index} onClick={() => this.handleDeleteItem(index)}>{item}</li> */}
                        </div>
                        
                    })}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList
