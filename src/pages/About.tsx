import Navbar from "../components/Navbar";
import {logo} from '../assets/images/index'
import { Typography } from "@mui/material";
import {diamond} from  '../assets/images/index'
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer";
import Cookie from '../components/Cookie';
import {Helmet,HelmetProvider} from 'react-helmet-async'

{/* ------------------- ok button of cookie ------------------- */}

const About=()=>{

    
    return(
    <>
    

        {/* ------------------- main wrapper starts ------------------- */}

        <section className="wrapper">
            <HelmetProvider>
                <Helmet>
                    <title>About us | Helperland</title>
                </Helmet>
            </HelmetProvider>
            {/* ------------------- navbar ------------------- */}

            <Navbar  otherpage={true} logo={logo} link1="Book now" link2="Prices & service" link3="Warranty" link4="Blog" link5="Contact" link6="Login" link7="Become a Helper" languageoption={false} />

            {/* ------------------- other page hero banner ------------------- */}

                <section className="other-page-hero-banner">
                    <section style={{position:'relative', top:"-2px"}}  className="landing-image-about common-landing-image"></section>
                </section>

                {/* ------------------- main section starts ------------------- */}

                <main >

                    {/* ------------------- main content wrapper starts ------------------- */}

                    <section className="main-content-wrapper about-us-wrapper">

                        <Typography variant="h2" className='headings'  sx={{fontSize:"36px",color:"#4F4F4F",textAlign:"center",fontWeight:"500",marginBottom:"10px"}}>A Few words about us</Typography>

                        <div className="seperator" style={{marginBottom:"36px"}} >
                            <div className="hr-line"></div>
                            <img src={diamond} alt="" />
                            <div className="hr-line"></div>
                        </div>
                        
                        {/* ------------------- words about us ------------------- */}

                        <div className="words-about-us">
                            <p>We are providers of professional home cleaning services, offering hourly based house cleaning options,
                                which mean that you don’t have to fret about getting your house cleaned anymore. We will handle
                                everything for you, so that you can focus on spending your precious time with your family members.</p>
                            <br />
                            <p> We have a number of experienced cleaners to help you make cleaning out or shifting your home an easy affair.</p>
                        </div>

                        <Typography variant="h2" className='headings'  sx={{fontSize:"36px",color:"#4F4F4F",textAlign:"center",fontWeight:"500",marginBottom:"10px"}}>Our Story</Typography>

                        <div className="seperator" style={{marginBottom:"38px"}} >
                            <div className="hr-line"></div>
                            <img src={diamond} alt="" />
                            <div className="hr-line"></div>
                        </div>

                        {/* ------------------- our story ------------------- */}

                        <div className="our-story-about-us">
                            <p>A cleaner is a type of industrial or domestic worker who cleans homes or commercial premises for
                            payment. Cleaners may specialise in cleaning particular things or places, such as window cleaners.
                            Cleaners often work when the people who otherwise occupy the space are not around. They may clean
                            offices at night or houses during the workday.
                            </p>
                        </div>

                        <EmailForm/>
                        
                    </section>

                    {/* ------------------- main content wrapper ends ------------------- */}

                </main>

                {/* ------------------- main section ends ------------------- */}

                <Footer/>
                
        </section>

        {/* ------------------- main wrapper ends ------------------- */}

        {/* ------------------- cookie ------------------- */}

        <Cookie/>
    </>
    );
}
export default About;