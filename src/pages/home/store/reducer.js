import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList : [
        {
        id : 1,
        title : 'big karl',
        imgUrl : 'https://mmbiz.qpic.cn/mmbiz_jpg/BOWGbWQfWUMv1p357yjGwoNdj7vJPvy9dGTtarRJsFmr82KPPo9cQTs2Dp9OIiacrZuFSQJnn0ErtalV4WiboXEw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
        },
        {
            id : 2,
            title : 'small ka',
            imgUrl : 'https://mmbiz.qpic.cn/mmbiz_png/BOWGbWQfWUMv1p357yjGwoNdj7vJPvy9GdKYaChWK89fazx67z4mExtpH6oVseIsWl2QGZRNpzH7rRS2apWJTQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
        }
    ]
});

export default (state = defaultState , action) => {

    switch(action.type){

        default:
            return state;   
    }
}