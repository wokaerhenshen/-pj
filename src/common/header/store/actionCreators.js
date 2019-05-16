import * as actionTypes from './constants';
import {fromJS} from 'immutable';
import Axios from 'axios';
import { from } from 'rxjs';

const changeList = (data) => ({
    type : actionTypes.CHANGE_LIST,
    data : fromJS(data),
    totalPage : Math.ceil(data.length / 4)  
})

export const searchFocus = () => ({
    type  : actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type  : actionTypes.SEARCH_BLUR
});

export const onMouseEnter = () => ({
    type : actionTypes.MOUSE_ENTER
});

export const onMouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
})

export const getList = () => {
    return (dispatch) => {
        Axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}