import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button,List,Typography } from 'antd';
import {connect} from 'react-redux';
import { getInputChangeAction, getAddAction, getDeleteAction, initListActions} from '../store/actionsCreater'


class TodoListRedux2 extends Component {

    render() {

        const {inputValue, changeInputValue, handleAddItem, handleDeleteItem, list} = this.props;

        return (
            <div style={{marginLeft: '15px', marginTop: '15px', marginRight: '15px'}}>
                <div style={{marginBottom: '15px'}}>
                    <Input
                        style={{width: '300px', marginRight: '15px'}}
                        value={inputValue}
                        onChange={changeInputValue}
                    ></Input>
                    <Button type="primary" onClick={handleAddItem}>Submit</Button>
                </div>
                <List
                    style={{width: '500px'}}
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    bordered
                    dataSource={list}
                    renderItem={(item,index) => (
                        <List.Item key={index} onClick={() => {handleDeleteItem(index)}}>
                        {/* <Typography.Text mark>[ITEM]</Typography.Text>  */}
                        {item}
                    </List.Item>
                )}
            />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        inputValue:state.inputValue,
        list: state.list,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        changeInputValue(e){
            const actions = getInputChangeAction(e.target.value);
            dispatch(actions);
        },
        handleAddItem(){
            const actions = getAddAction();
            dispatch(actions);
        },
        handleDeleteItem(index){
            const actions = getDeleteAction(index);
            dispatch(actions);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoListRedux2);