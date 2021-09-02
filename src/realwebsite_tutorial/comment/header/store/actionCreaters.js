import {Search_Focused, Search_Blur} from './actions';

export const searchFocus = () =>({
    type: Search_Focused,
})

export const searchBlur = () =>({
    type: Search_Blur,
})