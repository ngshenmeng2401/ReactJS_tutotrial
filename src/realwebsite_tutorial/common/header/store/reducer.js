import {
    Search_Focused, 
    Search_Blur, 
    Change_List, 
    Mouse_Enter, 
    Mouse_Leave, 
    Switch_Page} from './actions';
import { Map } from 'immutable';

const defaultState = Map({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPages: 1,
});

export default (state = defaultState,actions) =>{

    switch(actions.type){

        case Search_Focused:
            return state.set('focused',true);
        case Search_Blur: 
            return state.set('focused',false);
        case Change_List:
            return state.merge({
                list: actions.data,
                totalPages: actions.totalPages,
            });
        case Mouse_Enter:
            return state.set('mouseIn',true);
        case Mouse_Leave:
            return state.set('mouseIn',false);
        case Switch_Page:
            return state.set('page', actions.page);
        default:
            return state;
    }

    // if(actions.type === Search_Focused){
    //     return state.set('focused',true);

    // }else if(actions.type === Search_Blur){
    //     return state.set('focused',false);

    // }else if(actions.type === Change_List){
    //     return state.set('list',actions.data);
    // }

    // return state;
}