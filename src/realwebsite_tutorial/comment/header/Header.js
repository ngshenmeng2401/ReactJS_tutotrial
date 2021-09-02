import React, { Component } from 'react';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchItemlist,
    SearchInfoItem,
    } from './style';
import { 
    BsDownload,
    BsSearch,} from "react-icons/bs";
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {searchFocus, searchBlur} from '../header/store/actionCreaters';

class Header extends Component {

    constructor(props) {
        super(props)
    }

    getListArea = (show) => {
        if(show){
            return(
                <SearchInfo>
                    <SearchInfoTitle>
                        Popular Search
                        <SearchInfoSwitch>Switch</SearchInfoSwitch>
                        <SearchItemlist>
                            <SearchInfoItem>Education</SearchInfoItem>
                            <SearchInfoItem>Financial</SearchInfoItem>
                            <SearchInfoItem>Health</SearchInfoItem>
                            <SearchInfoItem>Philosophy</SearchInfoItem>
                        </SearchItemlist>
                    </SearchInfoTitle>
                </SearchInfo>
            )

        }else{
            return null;
        }
    }

    render() {

        const focused = this.props

        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">Home</NavItem>
                    <NavItem className="left">

                        Download App</NavItem>
                    <NavItem className="right">Login</NavItem>
                    <NavItem className="right">
                       Aa 
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={1000}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocused}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <BsSearch className={this.props.focused ? 'focused searchIcon' : 'searchIcon'}></BsSearch>
                        {this.getListArea(this.props.focused)}
                    </SearchWrapper>
                    
                </Nav>
                <Addition>
                    <Button className="article">Article</Button>
                    <Button className="reg">SignUp</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        focused: state.getIn(['header','focused']),

        //Long term
        // state.get('header').get('focused'),
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        handleInputFocused (){
            dispatch(searchFocus());
        },

        handleInputBlur (){
            dispatch(searchBlur());
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)