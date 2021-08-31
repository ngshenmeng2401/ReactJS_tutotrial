import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button,List,Typography } from 'antd';
import store from '../store/store1';
import { getInputChangeAction, getAddAction, getDeleteAction } from '../store/actionsCreater'
import { CHANGE_INPUT_VALUE , ADD_INPUT_VALUE , DELETE_INPUT_VALUE } from '../store/action1'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const number = [
    1,2,3
];

class TodoListRedux extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState();
        console.log(this.state);
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
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
            <div style={{marginLeft: '15px', marginTop: '15px', marginRight: '15px'}}>
                <div style={{marginBottom: '15px'}}>
                    <Input 
                        value={this.state.inputValue} 
                        placeholder='Todo Info' 
                        style={{width: '300px', marginRight: '15px'}}
                        onChange={this.handleInputChange}
                    >
                    </Input>
                    <Button type="primary" onClick={this.handleAddItem}>Submit</Button>
                </div>
                <List
                    style={{width: '500px'}}
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    bordered
                    dataSource={list}
                    renderItem={(item,index) => (
                        <List.Item onClick={this.handleDeleteItem.bind(this, index)}>
                        {/* <Typography.Text mark>[ITEM]</Typography.Text>  */}
                        {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default TodoListRedux