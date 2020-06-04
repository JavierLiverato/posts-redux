import React from "react";
import './card_body.css'
import Card from 'react-bootstrap/Card'

/**
 * CardBody Component ( component usable as container, accept div tree as children, and set card appearance )
 * 
 * @export constant
 * @param {*} { ...props }
 * @returns React Bootstrap Card
 */
const CardBody = ({ ...props }) => {
    const { children, ...rest } = props;

    return (
        <Card className="cardbody">
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    );
};


export default CardBody;
