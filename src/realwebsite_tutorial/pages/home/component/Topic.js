import React, { Component } from 'react'
import {
    TopicWrapper,
    TopicImg,
    TopicItem} from '../style'

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <TopicImg/>
                    社会热点
                </TopicItem>
            </TopicWrapper>
        )
    }
}

export default Topic
