import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from '../store/store1';
import { getInputChangeAction, getAddAction, getDeleteAction, initListActions} from '../store/actionsCreater'
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoListRedux extends Component {

    constructor(props) {
        super(props)
        // this.state = store.getState();
        console.log(this.state);
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    componentDidMount(){
        // axios.get('/list.json').then((response) => {
        //     const data = response.data;
        //     const actions = initListActions(data);
        //     store.dispatch(actions);
        //     console.log(data);

        // }).catch(error => {
        //     console.log(error);
        // })
    }

    handleInputChange = (e) => {

        const actions = getInputChangeAction(e.target.value);
        store.dispatch(actions);
        console.log(e.target.value); 
    }

    handleStoreChange = () => {
        // console.log("store change");
        this.setState(store.getState());
    }

    handleAddItem = (e) => {
        const actions = getAddAction();
        store.dispatch(actions);
    }

    handleDeleteItem = (index) => {

        const actions = getDeleteAction(index);
        store.dispatch(actions);
        // alert(index);
    }
    
    render() {
        const list = this.state.list;
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleAddItem={this.handleAddItem}
                handleDeleteItem={this.handleDeleteItem}
                list={this.state.list}
            />
        )
    }
}

export default TodoListRedux