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
    ],
    articleList : [
        {
            id : 1,
            title : '关于肌肉的冷知识，99%的人都不知道',
            desc : '关于肌肉的冷知识，99%的人都不知道 如果没有肌肉，人体就会像断了线的的木偶，单凭骨骼和关节，无法完成任何动作，包括呼吸，吞咽和运动，肌肉如此重...',
            imgUrl : '//upload-images.jianshu.io/upload_images/5718163-edfc1c687563219a.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id : 2,
            title : '关于肌肉的冷知识，99%的人都不知道',
            desc : '关于肌肉的冷知识，99%的人都不知道 如果没有肌肉，人体就会像断了线的的木偶，单凭骨骼和关节，无法完成任何动作，包括呼吸，吞咽和运动，肌肉如此重...',
            imgUrl : '//upload-images.jianshu.io/upload_images/5718163-edfc1c687563219a.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id : 3,
            title : '关于肌肉的冷知识，99%的人都不知道',
            desc : '关于肌肉的冷知识，99%的人都不知道 如果没有肌肉，人体就会像断了线的的木偶，单凭骨骼和关节，无法完成任何动作，包括呼吸，吞咽和运动，肌肉如此重...',
            imgUrl : '//upload-images.jianshu.io/upload_images/5718163-edfc1c687563219a.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id : 4,
            title : '关于肌肉的冷知识，99%的人都不知道',
            desc : '关于肌肉的冷知识，99%的人都不知道 如果没有肌肉，人体就会像断了线的的木偶，单凭骨骼和关节，无法完成任何动作，包括呼吸，吞咽和运动，肌肉如此重...',
            imgUrl : '//upload-images.jianshu.io/upload_images/5718163-edfc1c687563219a.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },

    ]
});

export default (state = defaultState , action) => {

    switch(action.type){

        default:
            return state;   
    }
}