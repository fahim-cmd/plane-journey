import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tickets = (props) => {
    const {title, price, description, id} = props.ticket;

    return (
        <div> 
            <Card style={{ width: '13rem', height: '16rem', marginLeft: '15px', marginTop: '110px', color: 'white', backgroundImage: ' linear-gradient(#41729F, #5885AF, #274472)'}}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <button class="btn btn-outline-light "><Link to={`/ticketDetails/${id}`}>Buy Now</Link> </button>
                    <p>Price: ${price}</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Tickets;