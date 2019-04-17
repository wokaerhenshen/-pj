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
        if(this.props.focused){
            return (
                <SearchInfo>
                <SearchInfoTitle>
                    Hot Search
                    <SearchInfoSwitch>
                        Change
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                {
                    this.props.list.map((item) => {
                        return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                    })
                }
                </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }

    render(){
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
                    in={this.props.focused}
                    timeout={200}
                    classNames='slide'
                    >
                    <NavSearch className = {this.props.focused ? 'focused' : ''}
                            onFocus={this.props.handleInputFocus}
                            onBlur={this.props.handleInputBlur}>
                    </NavSearch>
                    </CSSTransition>
                <span className = {this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe633;</span>
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
        list : state.getIn(['header','list'])
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header) ;