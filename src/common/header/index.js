import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators}  from './store';
import {HeaderWrapper,
        Logo,
        Nav,
        SearchWrapper,
        NavItem,
        NavSearch,
        SearchInfo,
        Addition,
        Button,
        SearchInfoTitle,
        SearchInfoSwitch,
        SearchInfoItem,
        SearchInfoList} from './style.js';


const getListArea = (show) => {
    if(show){
        return (
            <SearchInfo>
            <SearchInfoTitle>
                Hot Search
                <SearchInfoSwitch>
                    Change
                </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                <SearchInfoItem>karl</SearchInfoItem>
                <SearchInfoItem>karl</SearchInfoItem>
                <SearchInfoItem>karl</SearchInfoItem>
                <SearchInfoItem>karl</SearchInfoItem>
                <SearchInfoItem>karl</SearchInfoItem>
                <SearchInfoItem>karl</SearchInfoItem>
            </SearchInfoList>
            </SearchInfo>
        )
    }else {
        return null;
    }
}


const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>Main Page</NavItem>
                <NavItem className='left'>Download App</NavItem>
                <NavItem className='right'>Login</NavItem>
                <NavItem className='right'>
                <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                    in={props.focused}
                    timeout={200}
                    classNames='slide'
                    >
                    <NavSearch className = {props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}>
                    </NavSearch>
                    </CSSTransition>
                <span className = {props.focused ? 'focused iconfont' : 'iconfont'}>&#xe633;</span>
                {getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                
                <Button className='post'>
                <span className="iconfont">&#xe6b3;</span>
                Post</Button>
                <Button className='reg'>Register</Button> 
            </Addition>    
        </HeaderWrapper>
    )
}


const mapStateToProps = (state) => {
    return {
        //focused : state.get('header').get('focused')
        focused : state.getIn(['header','focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header) ;