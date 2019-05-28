import React,{Component} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommendations from './components/Recommendations';
import Writer from './components/Writer';

class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt='bannerImg' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommendations />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;