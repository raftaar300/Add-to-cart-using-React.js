import React from 'react'
import { Card, Button } from 'react-bootstrap'
function Home(props) {
    console.log("Home" , props)
    return <div>
        <div className="cart-wrapper">
            <Card style={{ width: '300px' }}>
                <Card.Img variant="top" style={{ height: "300px" }} src="https://images-na.ssl-images-amazon.com/images/I/71bp9IpcK-L._SX522_.jpg" />
                <Card.Body>
                    <Card.Title>Vivo F11</Card.Title>
                    <Card.Text>
                        Price : 10000 Rs
                   </Card.Text>
                    <Button variant="primary" onClick={() => { props.props.carthandler({ price: 10000, name: "Vivo" }) }}>Add to Cart</Button>
                </Card.Body>
            </Card>

        </div>
    </div>
}
export default Home