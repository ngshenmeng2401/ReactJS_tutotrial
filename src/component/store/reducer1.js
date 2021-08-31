import {CHANGE_INPUT_VALUE , ADD_INPUT_VALUE , DELETE_INPUT_VALUE} from './action1'

const defaultState = {
    inputValue : '',
    list : [],
}

export default (state = defaultState,actions) =>{

    if(actions.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = actions.value;
        return newState;

    }else if(actions.type === ADD_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log(newState)
        return newState;

    }else if(actions.type === DELETE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(actions.index,1);
        console.log(newState);
        return newState;
    }

    // console.log(state,actions);
    return state;
}