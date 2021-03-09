import React from 'react'
import { Card, Button } from 'react-bootstrap'
function Header(props) {
    console.log("Header", props)
    return <div>
        <div>
            <h1 style = {{marginTop : "10px"}}>
         
                     <Button style={{width: "60px" , height : "30px" ,  fontSize:"10px" }}onClick= {()=>{props.props.togglebar(props.props.cardData);}}>
                         Toggle
                     </Button>

                
                Home Components
                 { props.props.cardData2.length>0 ?
                 <span style = {{width : "10px" , height :"5px"  , fontSize: "10px" }} className = "Span" > {props.props.cardData2.length}</span>
                 :
                 null}
                <img  style={{ width: "50px", height: "50px", float: 'right' , marginRight:"20px" }} src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png"></img>
            </h1>
        </div>
    </div>
}
export default Header