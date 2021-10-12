import React, { useState } from 'react';
import { Container, Button, Form, } from 'react-bootstrap';

import Output from '../Output/Output';
import './ShortenLink.css'

const ShortenLink = () => {
    const [fullLink, setFullLink] = useState('');
    const [shortLink, setShortLink] = useState(null);
    const [isEmpty, setIsEmpty] = useState(false);
    const handleShortLink = (e) =>{
        e.preventDefault();
        if(fullLink !== ''){
            handleShortLinkfetch(`https://api.shrtco.de/v2/shorten?url=${fullLink}`)
            setIsEmpty(false)
        } else{
            setIsEmpty(true);
        }
        setFullLink(''); 
        setShortLink(null);
    }
    
    const handleInputText = (e) =>{
        e.preventDefault();
        setFullLink(e.target.value);
        
    }

    const handleShortLinkfetch = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(data=> setShortLink(data.result));
    }


    return (
        <div className="shortenlink-container py-5">
            <Container>
                {/* Link Input */}
                <Form onSubmit={handleShortLink} className="d-flex flex-column flex-lg-row justify-content-center input-container p-5">
                    <div className="input-div text-start">
                        <input onChange={handleInputText} value={fullLink} type="text" placeholder='Shorten a link here...' className={(isEmpty ? 'border-danger border-3 empty-input' : 'mb-3 mb-lg-0')}/>
                        {isEmpty ? <p className="text-danger"><em>Please add a link</em></p> : ''}
                    </div>
                    <Button type="submit" variant="success">Shorten It!</Button>
                </Form>
                {/* Resutls */}
                {shortLink?.full_short_link && <Output originalLink={shortLink.original_link} fullShortLink={shortLink.full_short_link}/>}
                {shortLink?.full_short_link2 && <Output originalLink={shortLink.original_link} fullShortLink={shortLink.full_short_link2}/>}
                {shortLink?.full_short_link3 && <Output originalLink={shortLink.original_link} fullShortLink={shortLink.full_short_link3}/>}  
            </Container>
        </div>
    );
};

export default ShortenLink;