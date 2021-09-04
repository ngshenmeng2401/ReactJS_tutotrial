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
    BsArrowRepeat,
    BsSearch,} from "react-icons/bs";
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {searchFocus, searchBlur, getList, mouseEnter, mouseLeave, switchPage} from '../header/store/actionCreaters';

class Header extends Component {

    constructor(props) {
        super(props)
    }

    getListArea = () => {
        const {focused, list, mouseIn, page, totalPages, handleMouseEnter, handleMouseLeave, handleSwitchPage} = this.props;
        const pageList = [];
        
        if(list.length){
            for(let i = (page-1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>,
                );
            }
        }

        if(focused || mouseIn){
            return(
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        Popular Search
                        <SearchInfoSwitch 
                            onClick={() => handleSwitchPage(page, totalPages)}
                            className={mouseIn ? 'mouseIn' : ''}
                        >Switch
                        <BsArrowRepeat className={mouseIn ? 'refreshIcon mouseIn' : 'refreshIcon'}></BsArrowRepeat>
                        </SearchInfoSwitch>
                        <SearchItemlist>{
                            // list.map((item) =>{
                            //     return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            // })
                            pageList
                        }</SearchItemlist>
                    </SearchInfoTitle>
                </SearchInfo>
            )

        }else{
            return null;
        }
    }

    render() {

        const {focused, handleInputFocused, handleInputBlur} = this.props

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
                            in={focused}
                            timeout={1000}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocused}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <BsSearch className={focused ? 'focused searchIcon' : 'searchIcon'}></BsSearch>
                        {this.getListArea()}
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

        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPages: state.getIn(['header','totalPages']),
        mouseIn: state.getIn(['header','mouseIn']),
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        handleInputFocused (){
            dispatch(getList());
            dispatch(searchFocus());
        },

        handleInputBlur (){
            dispatch(searchBlur());
        },
        handleMouseEnter(){
            dispatch(mouseEnter());
        },
        handleMouseLeave(){
            dispatch(mouseLeave());
        },
        handleSwitchPage(page, totalPages){

            if(page < totalPages){
                dispatch(switchPage(page + 1));
            }else{
                dispatch(switchPage(1));
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)