import {Search_Focused, Search_Blur} from './actions';
import { Map } from 'immutable';

const defaultState = Map({
    focused: false,
});

export default (state = defaultState,actions) =>{

    if(actions.type === Search_Focused){
        return state.set('focused',true);

    }else if(actions.type === Search_Blur){
        return state.set('focused',false);
    }

    return state;
}