import React, { Component } from 'react';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    Banner
} from './style';

export class HomePage extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Banner/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default HomePage
