import React from 'react';
import { Container } from 'react-bootstrap';
import AdvanceCard from '../AdvanceCard/AdvanceCard';
import brandRecognition from '../../images/icon-brand-recognition.svg'
import detailRecord from '../../images/icon-detailed-records.svg'
import fullyCustomiz from '../../images/icon-fully-customizable.svg'
import './Advance.css'

const Advance = () => {
    return (
        <div className="advance-container py-5"> 
            <Container>
                <h2 style={{fontWeight: '700'}}>Advance Statistics</h2>
                <p className="body-text">Track how your links are performing across the web with <br className="d-none d-md-block" /> our advanced statistics dashboard.</p>
                {/* Advance Cards */}
                <div className="advance-card-container">
                    <div className="row g-4 py-5 advance-card">
                        <AdvanceCard icon={brandRecognition} title={'Brand Recognition'} content={'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'}/>
                        <AdvanceCard margin={'detailRecord-card'} icon={detailRecord} title={'Detailed Records'} content={'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'}/>                   
                        <AdvanceCard margin={'fullyCustomiz-card'} icon={fullyCustomiz} title={'Fully Customizable'} content={'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'}/>  
                    </div>
                    <div className="horizontal-line d-lg-block"></div>
                    <div className="vertical-line d-lg-none"></div>
                </div>
            </Container>
        </div>
    );
};

export default Advance;