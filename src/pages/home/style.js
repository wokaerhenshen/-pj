import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow : hidden;
    width:960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left : 15px;
    padding-top : 30px;
    width : 625px;
    .banner-img {
        width : 625px;
        height : 270px;
    }
`;
export const HomeRight = styled.div`
    width : 240px;
    float : right;
`;

export const TopicWrapper = styled.div`
    padding : 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom : 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float : left;
    background : #f7f7f7;
    height : 32px;
    line-height : 32px;
    padding-right : 10px;
    margin-left : 18px;
    margin-bottom : 18px;
    font-size : 14px;
    border: 1px solid #dcdcdc;
    color : black;
    border-radius : 4px;
    .topic-pic {
        display : block;
        float : left;
        width : 32px;
        height : 32px;
        margin-right : 10px;
    }
`;

export const ListItem = styled.div`
    overflow : hidden;
    padding : 20px 0;
    border-bottom : 1px solid #dcdcdc;
    .pic {
        width : 125px;
        height : 100px;
        display : block;
        float : right;
    }
`;

export const ListInfo = styled.div`
    width : 500px;
    float : left;
    .title {
        line-height : 27px;
        font-size : 18px;
        font-weight : bold;
        color : #333;
    }
    .desc {
        font-size : 13px;
        line-height : 24px;
        color : #999;
    }
`;