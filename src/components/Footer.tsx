import {logo} from '../assets/images/index'
import {instagram} from '../assets/images/index'
import {face_book} from '../assets/images/index'
import {NavLink } from 'react-router-dom'
const Footer = ()=>{
    return (
        <>
        <footer>
            <section className="footer-top">
                <div className="footer-logo">
                    <NavLink to="/" title='helperland'><img src={logo} alt="logo" /></NavLink>                    
                </div>
                <ul className="footer-nav">
                    <li><NavLink to="/" className="footer-links" title='home'>HOME</NavLink></li>
                    <li><NavLink to="/About" className="footer-links" title='about'>ABOUT</NavLink></li>
                    <li><NavLink to="Testimonials" className="footer-links" title='testimonials'>TESTIMONIALS</NavLink></li>
                    <li><NavLink to="/Faq" className="footer-links" title='faqs'>FAQS</NavLink></li>
                    <li><NavLink to="/Insurence" className="footer-links" title='insurence policy'>INSURENCE POLICY</NavLink></li>
                    <li><NavLink to="/Impressum" className="footer-links" title='impressum'>IMPRESSUM</NavLink></li>
                </ul>
                <div className="footer-social-media">
                    <a href="" title='Facebook' ><img src={face_book} alt="facebook" /></a>                    
                    <a href="" title='Instagram'><img src={instagram} alt="instagram" /></a>                    
                </div>
            </section>
            <section className="footer-bottom">
                <p>©2018 Helperland. All rights reserved. &nbsp; &nbsp;<a href="" title='terms and conditions'>Terms and Conditions</a> &nbsp;| &nbsp; <a href="" title='privacy policy'>Privacy Policy</a> </p>
            </section>
        </footer>
        </>
    );
}
export default Footer;