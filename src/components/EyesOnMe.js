// Code EyesOnMe Component Here
import React from 'react';


export default class EyesOnMe extends React.Component{

    handlerFocus=()=>{
        console.log('Good!')
    }

    handlerBlur=()=>{
        console.log('Hey! Eyes on me!')
    }
    render(){
        return (
            <button 
            onFocus={this.handlerFocus}
            onBlur={this.handlerBlur}
            type="button"></button>
        )
    }
}


