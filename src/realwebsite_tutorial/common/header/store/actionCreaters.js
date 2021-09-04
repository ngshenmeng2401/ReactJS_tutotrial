import {
    Search_Focused, 
    Search_Blur, 
    Change_List, 
    Mouse_Enter, 
    Mouse_Leave, 
    Switch_Page} from './actions';
import axios from 'axios';
import {category} from './category';

export const searchFocus = () =>({
    type: Search_Focused,
});

export const mouseEnter = () =>({
    type: Mouse_Enter,
})

export const mouseLeave = () =>({
    type: Mouse_Leave,
})

export const searchBlur = () =>({
    type: Search_Blur,
});

export const switchPage = (page) =>({
    type: Switch_Page,
    page,
});

const changeList = (category) =>({
    type: Change_List,
    data: category,
    totalPages: Math.ceil(category.length / 10),
});

export const getList = () =>{
    return (dispatch) => {
        // axios.get('https://javathree99.com/s271059/reactJS_tutorial/headerList.json').then((response) =>{

        //     console.log(response.data);
        //     dispatch(changeList(response.data));
        // }).catch((error) =>{
        //     console.log(error);
        // })

        axios({
            method: 'GET',
            url: 'https://javathree99.com/s271059/reactJS_tutorial/headerList.json',

        }).then((response) =>{
            // console.log(category);
            dispatch(changeList(category));

        }).catch((error) =>{

            console.log(error);
        })
    }
};