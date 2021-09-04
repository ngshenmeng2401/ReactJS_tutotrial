import styled from 'styled-components';
import banner from '../../../img/banner1.jfif';
import topic1 from '../../../img/topicimg1.jfif';

export const HomeWrapper = styled.div`

    overflow: hidden;
    width: 1100px;
    margin: 0 auto;
    height: 600px;
`;

export const HomeLeft = styled.div`

    padding-top: 30px;
    width: 800px;
    float: left;

    .div-img-right{
        width: 142px;
        height: 284px;
    }
`;

export const Banner = styled.img`

    width: 658px;
    height: 284px;
    background: url(${banner});
    background-repeat: no-repeat;
`;

export const HomeRight = styled.div`

    width: 300px;
    float: right;
`;

export const TopicWrapper = styled.div`

    overflow: hidden;
    padding: 20px 0 10px 0;
`;

export const TopicImg = styled.div`

    background: url(${topic1});
    background-repeat: no-repeat;
    display:block;
    float:left;
    width:40px;
    height:40px;
`;

export const TopicItem = styled.div`

    float:left;
    background: #f7f7f7;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: black;
`;