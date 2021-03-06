import React from 'react';
import { EnvelopeFill, Facebook, GeoFill, Linkedin, PhoneFill, Twitter, Youtube } from 'react-bootstrap-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg mt-5 py-2'>
            <section className='row row-cols-1 row-cols-md-3 g-3 container mx-auto'>
                <div className='col p-0'>
                    <h1 className='text-uppercase text-white'>Travego</h1>
                    <p>Hi, I am a Travel Guide. I am here to help you to make your tour or travel easier. Feel free to knock me for a guide in Bangladesh</p>
                </div>
                <div className='col p-0'>
                    <h4 className='text-uppercase text-white'>Contact With Me</h4>
                    <ul className="list-group tg-footer-list list-group-flush">
                        <li className="list-group-item"><GeoFill className='tg-footer-icon'></GeoFill> Address: #House 414, #Rd 8, Mirpur, Dhaka, Bangladesh</li>
                        <li className="list-group-item"><PhoneFill className='tg-footer-icon'></PhoneFill> Phone: +8801961584280</li>
                        <li className="list-group-item"><EnvelopeFill className='tg-footer-icon'></EnvelopeFill> Email: habib97.cs@gmail.com</li>
                    </ul>
                </div>
                <div className='col p-0'>
                    <h4 className='text-uppercase text-white mb-3'>Follow Me</h4>
                    <div>
                        <a href="#"><Facebook className='tg-footer-icon'></Facebook></a>
                        <a href="#"><Twitter className='tg-footer-icon'></Twitter></a>
                        <a href="#"><Linkedin className='tg-footer-icon'></Linkedin></a>
                        <a href="#"><Youtube className='tg-footer-icon'></Youtube></a>
                    </div>
                </div>
            </section>
            <hr className='container mb-0'/>
            <div className='text-center py-2 text-white'>
                <small>&copy; All Right Reserved By TRAVEGO</small>
            </div>
        </div>
    );
};

export default Footer;