import React, { Component } from 'react'
import Title4 from './Title4'
import PropTypes from 'prop-types';

export class Button4 extends Component {

    static contextTypes = {
        themeColor: PropTypes.string,
        handleChangeColor : PropTypes.func,
    }

    render() {
        const {themeColor,handleChangeColor} = this.context
        return (
           <div>
               <button type="button" onClick={() => handleChangeColor('red')} style={{color:themeColor}}>Red</button>
               <button type="button" onClick={() => handleChangeColor('green')} style={{color:themeColor}}>Green</button>
           </div>
        )
    }
}

export default Button4
