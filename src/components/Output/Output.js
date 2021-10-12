import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import './Output.css'

const Output = ({originalLink, fullShortLink}) => {
    const [isCopy, setIsCopy] = useState(false);
    const handleCopyLink = () =>{
        navigator.clipboard.writeText(`${fullShortLink}`);
        setIsCopy(true); 
    }
    return (
        
        <div className="d-flex flex-column flex-lg-row align-items-center  rounded-3 mt-3 bg-white">
            <div className="w-100 text-start p-3 original-link">{originalLink}</div>
            <div className="d-lg-none divider"></div>
            <div className="w-100 p-3 d-flex flex-column flex-md-row align-items-center justify-content-between short-link">
                <div>{fullShortLink}</div>
                <Button onClick={handleCopyLink} variant="success" className={'copy-btn '+(isCopy ? 'btn-copy' : '')}>{isCopy ? 'Copied!' : 'Copy'}</Button>
            </div>
        </div>
    );
};

export default Output;