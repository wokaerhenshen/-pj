import React,{Component} from 'react';
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

class Header extends Component{

    getListArea(){
        const {focused, list ,page,totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handlePageChange} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i = (page-1) * 4 ; i < page * 4 ; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }


        if(focused || mouseIn){
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>
                    Hot Search
                    <SearchInfoSwitch onClick={() => handlePageChange(page,totalPage)}>
                        <span className="iconfont spin">&#xe606;</span>Change
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }

    render(){
        const {focused, handleInputFocus,handleInputBlur } = this.props;
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
                    in={focused}
                    timeout={200}
                    classNames='slide'
                    >
                    <NavSearch className = {focused ? 'focused' : ''}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}>
                    </NavSearch>
                    </CSSTransition>
                <span className = {focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe633;</span>
                {this.getListArea()}
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
}



const mapStateToProps = (state) => {
    return {
        //focused : state.get('header').get('focused')
        focused : state.getIn(['header','focused']),
        list : state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPage : state.getIn(['header','totalPage']),
        mouseIn: state.getIn(['header','mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.onMouseEnter());
        },
        
        handleMouseLeave(){
            dispatch(actionCreators.onMouseLeave());
        },
        handlePageChange(page,totalPage){
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header) ;