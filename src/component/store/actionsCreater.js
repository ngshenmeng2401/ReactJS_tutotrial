import {CHANGE_INPUT_VALUE , ADD_INPUT_VALUE , DELETE_INPUT_VALUE} from './action1'

export const getInputChangeAction = (value) =>({
    type: CHANGE_INPUT_VALUE,
    value,
})

export const getAddAction = () =>({
    type: ADD_INPUT_VALUE,
})

export const getDeleteAction = (index) =>({
    type: DELETE_INPUT_VALUE,
    index
})