import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import {HeaderWrapper,
        Logo,
        Nav,
        SearchWrapper,
        NavItem,
        NavSearch,
        Addition,
        Button} from './style.js';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            focused : false
        };
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    handleInputFocus(){
        this.setState({
            focused : true
        })
    }

    handleInputBlur(){
        this.setState({
            focused : false
        })
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
                        in={this.state.focused}
                        timeout={200}
                        classNames='slide'
                        >
                        <NavSearch className = {this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}></NavSearch>
                        </CSSTransition>
                    <span className = {this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe633;</span>
                    
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

export default Header;