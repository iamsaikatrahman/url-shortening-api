import React from 'react';
import { Container, Button } from 'react-bootstrap';
import workingBG from '../../images/illustration-working.svg'
import Advance from '../Advance/Advance';
import Boost from '../Boost/Boost';
import ShortenLink from '../ShortenLink/ShortenLink';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Container style={{paddingBottom: '50px'}}>
                <div className="d-flex flex-column flex-column-reverse flex-md-row align-items-center py-5">
                    {/* Text Content */}
                    <div className="w-100 pt-3 pt-md-0 text-md-start">
                        <h1 className="title">More than just <br className="d-none d-md-block" /> shorter links</h1>
                        <p className="body-text">Build your brand’s recognition and get detailed <br className="d-none d-md-block" /> insights on how your links are performing.</p>
                        <Button variant="success">Get Started</Button>
                    </div>
                    {/* Image Content */}
                    <div className="w-100">
                        <img src={workingBG} className='w-100' alt="" />
                    </div>
                </div>
            </Container>
            {/* Shorten Link Container */}
            <ShortenLink />
            {/* Advance Container */}
            <Advance />
            {/* Boost Container */}
            <Boost />
        </div>
    );
};

export default Home;