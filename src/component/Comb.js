import Header from './Header'
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Home from './Home'


function Comb(props){
     console.log("combine" , props)
    return<div>
        <Header props = {props }/>

        {props.cardData.show?
        <Home props = {props}/>:null}
    </div>

}

export default Comb;