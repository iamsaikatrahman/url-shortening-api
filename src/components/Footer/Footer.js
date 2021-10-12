import React from 'react';
import { Container, NavLink } from 'react-bootstrap';
import './Footer.css'
import logo from '../../images/logo.svg'
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'
import instagram from '../../images/icon-instagram.svg'

const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <div className="row g-4 py-5">
                    <div className="col-12 col-lg-4 text-lg-start">
                        <img src={logo} className="footer-logo" alt="" />
                    </div>
                    <div className="col-12 col-lg-4 text-lg-start footer-link">
                        <div className="row g-4">
                            <div className="col-12 col-lg-4">
                                <h5>Features</h5>
                                <p>Link Shortening</p>
                                <p>Branded Links</p>
                                <p>Analytics</p>
                            </div>
                            <div className="col-12 col-lg-4">
                                <h5>Resources</h5>
                                <p>Blog</p>
                                <p>Developers</p>
                                <p>Support</p>
                            </div>
                            <div className="col-12 col-lg-4">
                                <h5>Company</h5>
                                <p>About</p>
                                <p>Our Team</p>
                                <p>Careers</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 text-lg-end footer-social-icon">
                        <img src={facebook} className="me-3" alt="" />
                        <img src={twitter} className="me-3" alt="" />
                        <img src={pinterest} className="me-3" alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
            </Container>
            <div className="attribution">
                Challenge by <NavLink href="https://www.frontendmentor.io?ref=challenge" target={'_blank'}>Frontend Mentor</NavLink>. 
                Coded by <NavLink href="https://github.com/iamsaikatrahman" target={'_blank'}>Saikat Rahman</NavLink>.
            </div>
        </div>
    );
};

export default Footer;