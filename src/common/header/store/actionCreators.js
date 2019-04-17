import * as actionTypes from './constants';
import {fromJS} from 'immutable';
import Axios from 'axios';
import { from } from 'rxjs';

export const searchFocus = () => ({
    type  : actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type  : actionTypes.SEARCH_BLUR
});

const changeList = (data) => ({
    type : actionTypes.CHANGE_LIST,
    data : fromJS(data)
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