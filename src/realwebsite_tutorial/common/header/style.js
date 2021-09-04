import styled from 'styled-components';
import logoPicture from '../../../img/logo.png';

export const HeaderWrapper = styled.div`

    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;

`;

export const Logo = styled.a.attrs({
    href: "/"
})`
    position: absolute;
    top: 0%;
    left: 0%;
    display: block;

    width: 100px;
    height: 58px;
    background: url(${logoPicture});
    background-size: contain;
`;

export const Nav = styled.div`

    width: 1100px;
    margin: 0 auto;
    height: 100%;
    padding-right: 50px;
    box-sizing: border-box;

`;

export const NavItem = styled.div`

    line-height: 56px;
    padding: 0 15px;
    font-size: 14px;

    &.left{
        float: left;
    }

    &.right{
        float: right;
        color: #969696;
    }

    &.active{
        color: #ea6f5a;
    }

`;

export const SearchWrapper = styled.div`

    position: relative;
    float: left;
    height: 46px;

    .searchIcon{
        position: absolute;
        top: 26%;
        right: 2%;
        padding: 8px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused{
            background: #777;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: 'Search',

})`

    &.slide-enter{
        transition: all .2s ease-out;
        width: 180px;
    }

    &.slide-enter-active{
        width: 240px;
    }

    &.slide-exit{
        transition: all .2s ease-out;
    }

    &.slide-exit-active{
        width: 180px;
    }

    width: 180px;
    height: 38px;
    padding: 0 40px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 20px;
    background: #eee;
    font-size: 14px;
    color: #777;
    &::placeholder{
        color: #999;
    }

    &.focused{
        width: 240px;

        .searchIcon{

        }
    }
`;

export const SearchInfo = styled.div`

    position: absolute;
    left: 0;
    top: 56px;
    width: 260px;
    padding：0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitle = styled.div`

    margin: 10px 15px;
    line-height: 20px;
    font-size: 14px;
    color: #787878;
    cursor: pointer;

    .refreshIcon{
        position: absolute;
        top: 7%;
        right: 22%;
        float: right;
    }

    .mouseIn{
        color: lightblue;
    }
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;

    &.mouseIn{
        color: lightblue;
    }
`;

export const SearchItemlist = styled.div`

    overflow: hidden;
`;

export const SearchInfoItem = styled.a`

    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #969696;
    border-radius: 3px;
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 5px;
`;

export const Addition = styled.div`

    position: absolute;
    right: 0;
    top: 0;
    height: 56px;

`;

export const Button = styled.div`

    &.reg{
        color: #ec6149;
    }

    &.article{
        color: #fff;
        background: #ec6149;
    }

    float: right;
    margin-top: 12px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 30px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 12px;
`;