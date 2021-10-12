import React from 'react';
import {Button} from 'react-bootstrap';
import './Boost.css'

const Boost = () => {
    return (
        <div className="boost-container py-5">
            <h1 className="boost-title pb-3">Boost your links today</h1>
            <Button variant="success" >Get Started</Button>
        </div>
    );
};

export default Boost;