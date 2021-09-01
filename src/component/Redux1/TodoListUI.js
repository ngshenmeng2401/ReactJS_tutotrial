import React from 'react';
import { Input, Button,List,Typography } from 'antd';


const TodoListUI = (props) => {

    return (
        <div style={{marginLeft: '15px', marginTop: '15px', marginRight: '15px'}}>
            <div style={{marginBottom: '15px'}}>
                <Input 
                    value={props.inputValue} 
                    placeholder='Todo Info' 
                    style={{width: '300px', marginRight: '15px'}}
                    onChange={props.handleInputChange}
                >
                </Input>
                <Button type="primary" onClick={props.handleAddItem}>Submit</Button>
            </div>
            <List
                style={{width: '500px'}}
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item onClick={() => {props.handleDeleteItem(index)}}>
                    {/* <Typography.Text mark>[ITEM]</Typography.Text>  */}
                    {item}
                    </List.Item>
                )}
            />
        </div>
    )
} 

export default TodoListUI
