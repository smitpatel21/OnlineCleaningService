import Button from '@mui/material/Button';
import { styled } from "@mui/styles";
import Navbar from '../components/Navbar';
import {logo} from '../assets/images/index'
import { Grid, Typography } from '@mui/material';
import {diamond} from  '../assets/images/index'
import {checkmark} from '../assets/images/index'
import {cabinate} from '../assets/images/index'
import {fridge} from '../assets/images/index'
import {oven} from '../assets/images/index'
import {washing_machine} from '../assets/images/index'
import {window} from '../assets/images/index'
import ServicesCards from '../components/ServicesCards';
import {Int_pic1} from '../assets/images/index'
import {Int_pic2} from '../assets/images/index'
import {Int_pic3} from '../assets/images/index'
import {right_grey_arrow} from '../assets/images/index'
import Footer from '../components/Footer';
import EmailForm from '../components/EmailForm';
import {bestimg} from '../assets/images/index'
import Cookie from '../components/Cookie';
import {Helmet,HelmetProvider} from 'react-helmet-async'
import { ThemeProvider, createTheme } from '@mui/material/styles';
{/* ------------------- ok button of cookie ------------------- */}






const Prices=()=>{
    const theme = createTheme({
        breakpoints: {
            values: {
              xs: 0,
              sm: 575,
              md: 768,
              lg: 1199,
              xl: 1440
            }
          },
    })
    return (
        <>

        {/* ------------------- main wrapper starts ------------------- */}

        <section className="wrapper">
            <HelmetProvider>
                <Helmet>
                    <title>Prices | Helperland</title>
                </Helmet>
            </HelmetProvider>
            {/* ------------------- navbar ------------------- */}

            <Navbar   otherpage={true} logo={logo} link1="Book now" link2="Prices & service" link3="Warranty" link4="Blog" link5="Contact" link6="Login" link7="Become a Helper" languageoption={false} />
             
             {/* ------------------- other page herobanner ------------------- */}
              <section className="other-page-hero-banner">
                  <section className="landing-image-prices common-landing-image"></section>
              </section>

              {/* ------------------- main section starts ------------------- */}

              <main >

                  {/* ------------------- main content wrapper starts ------------------- */}

                  <section className="main-content-wrapper">

                        <Typography variant="h2" className='headings' sx={{fontSize:"36px",color:"#4F4F4F",textAlign:"center",fontWeight:"500",marginBottom:"10px"}}>Prices</Typography>

                        <div className="seperator" style={{marginBottom:"42px"}}>
                            <div className="hr-line"></div>
                            <img src={diamond} alt="" />
                            <div className="hr-line"></div>
                        </div>
                        {/* ------------------- rate of work starts ------------------- */}

                        <section className="rate-of-work-prices">
                            <div className="onetime-topbar-prices">
                                <strong style={{fontSize:"28px",fontFamily:"Roboto",fontWeight:"bold"}}>One Time</strong>
                            </div>
                            
                            {/* ------------------- detail facility  ------------------- */}

                            <div className="detail-facilities-prices">

                                <Typography  sx={{color:"#646464",fontWeight:"bold",fontSize:"48px",lineHeight:"58px",'@media(max-width:575px)':{fontSize:'35px','& span:nth-child(2)':{fontSize:'20px !important'}}}}>20<span style={{fontWeight:"500",fontFamily:"monospace"}}>€</span><span style={{fontSize:"30px",fontWeight:"400"}}>/hr</span> </Typography>

                                <div className="facilities-prices">
                                    <div className="facility-prices">
                                        <img src={checkmark} alt="" />
                                        <p>CheckmarkLower prices</p>
                                    </div>
                                    <div className="facility-prices">
                                        <img src={checkmark} alt="" />
                                        <p>CheckmarkEasy online & secure payment</p>
                                    </div>                                    
                                    <div className="facility-prices">
                                        <img src={checkmark} alt="" />
                                        <p>CheckmarkEasy amendment</p>
                                    </div>                                                                        
                                </div>

                            </div>
                        </section>

                        {/* ------------------- rate of work ends ------------------- */}

                        {/* ------------------- extra services starts ------------------- */}

                        <section className="extra-services-prices">

                            <Typography variant="h2" className='headings'  sx={{fontSize:"36px",color:"#4F4F4F",textAlign:"center",fontWeight:"500",marginBottom:"10px"}}>Extra services</Typography>

                            <div className="seperator" style={{marginBottom:"40px"}}>
                                <div className="hr-line"></div>
                                <img src={diamond} alt="" />
                                <div className="hr-line"></div>
                            </div>

                            
                            <ThemeProvider theme={theme} >
                                <Grid container rowSpacing={{sm:5,xs:5}}>
                                    <Grid item lg md sm={4} xs={6}>
                                        <ServicesCards image={cabinate} data="Inside cabinets" />
                                    </Grid>
                                    <Grid item lg md sm={4} xs={6}>
                                        <ServicesCards image={fridge} data="Inside fridge" />
                                    </Grid>
                                    <Grid item lg md sm={4} xs={6}>
                                        <ServicesCards image={oven} data="Inside oven" />
                                    </Grid>
                                    <Grid item lg md sm={4} xs={6}>
                                        <ServicesCards image={washing_machine} data="Laundry wash & dry" />
                                    </Grid>
                                    <Grid item lg md sm={4} xs={12}>
                                        <ServicesCards image={window} data="Interior windows" />
                                    </Grid>
                                </Grid>
                                </ThemeProvider>
                            

                        </section>

                        {/* ------------------- extra services ends ------------------- */}

                        {/* ------------------- detail information cards starts ------------------- */}

                        <section className="detailed-info-container-prices">

                            <Typography variant="h2"  className='headings' sx={{fontSize:"36px",color:"#4F4F4F",textAlign:"center",fontWeight:"500",marginBottom:"10px",'@media(max-width:575px)':{maxWidth:'60%'}}}>What we include in cleaning</Typography>

                            <div className="seperator" style={{marginBottom:"40px"}}>
                                <div className="hr-line"></div>
                                <img src={diamond} alt="diamond" />
                                <div className="hr-line"></div>
                            </div>

                            {/* ------------------- card wrapper starts ------------------- */}

                            <Grid container sx={{maxWidth:"1160px",width:"100%",'@media(max-width:1199px)':{width:"90%"},'@media(max-width:500px)':{width:"100%"}}} rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 ,lg:'30px'}}>
                                              
                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <div className="detail-card">
                                    <div className="detail-card-img-container">
                                        <img src={Int_pic2} alt="Bedroom and Living Room" />
                                    </div>
                                    <p >Bedroom and Living Room</p>
                                    <div className="list-of-work-prices">
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p>Dust all accessible surfaces </p>
                                        </div>
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p> Wipe down all mirrors and glass fixtures </p>
                                        </div>
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p> Take out garbage and recycling</p>
                                        </div>
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p>To clean up </p>
                                        </div>
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p>Make beds</p>
                                        </div>
                                    </div>
                                </div>
                                </Grid>

                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <div className="detail-card">
                                    <div className="detail-card-img-container">
                                        <img src={Int_pic3} alt="Bathrooms" />
                                    </div>
                                    <p >Bathrooms</p>
                                    <div className="list-of-work-prices">
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p>Wash and sanitize the toilet, shower, tub, sink</p>
                                        </div>
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p> Dust all accessible surfaces </p>
                                        </div>
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p>Wipe down all mirrors and glass fixtures</p>
                                        </div>
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p>Take out garbage and recycling</p>
                                        </div>
                                    </div>
                                </div>    
                                </Grid>

                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <div className="detail-card">
                                    <div className="detail-card-img-container">
                                        <img src={Int_pic1} alt="Kitchen" />
                                    </div>
                                    <p >Kitchen</p>
                                    <div className="list-of-work-prices">
                        
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p>Cleaning the sink</p>
                                        </div>
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p>Cleaning the work surfaces</p>
                                        </div>
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p> Cleaning the oven (outside)</p>
                                        </div>
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p>Dust all accessible surfaces </p>
                                        </div>
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p> Clean all floor surfaces </p>
                                        </div>
                                        <div className="indi-work-prices">
                                            <img src={right_grey_arrow} alt="right_grey_arrow" />
                                            <p>Take out garbage and recycling</p>
                                        </div>
                                    </div>
                                </div>    
                                </Grid>    
                            
                            
                            </Grid>

                            {/* -------------------card wrapper ends ------------------- */}

                        </section>
                        
                        {/* ------------------- detail information cards ends ------------------- */}
                        
                        {/* ------------------- why to use section starts ------------------- */}

                        <section className="why-to-use-prices">

                            <Typography variant="h2" className='headings'  sx={{fontSize:"36px",color:"#4F4F4F",textAlign:"center",fontWeight:"500",marginBottom:"10px"}}>Why Helperland</Typography>

                            <div className="seperator" style={{marginBottom:"40px"}}>
                                <div className="hr-line"></div>
                                <img src={diamond} alt="" />
                                <div className="hr-line"></div>
                            </div>
                            <ThemeProvider theme={theme}>
                            <Grid container maxWidth="lg" rowSpacing={0} columnSpacing={{ xs: 1, sm: 3, md: 3 }} sx={{'@media(max-width:1199px)':{width:"95%"},'@media(max-width:575px)':{width:"100%"}}}>

                                {/* -------------------  left data ------------------- */}

                                <Grid item lg={4} md={4} sm={6} xs={12} order={{lg:1,md:1,sm:2,xs:2}} >
                                    <div className="left-data-card-prices">
                                        <p className="data-card-heading-prices">Experienced and vetted professionals</p>
                                        <p className="data-card-discription-prices ">dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results.</p>
                                    </div>
                                    <div className="left-data-card-prices">
                                        <p className="data-card-heading-prices">Dedicated customer service</p>
                                        <p className="data-card-discription-prices ">to our customers and are guided in all we do by their needs. The team is always happy to support you and offer all the information. you need.</p>
                                    </div>
                                </Grid>

                                {/* ------------------- center image ------------------- */}

                                <Grid item lg={4} md={4} sm={12} xs={12} order={{lg:2,md:2,sm:1,xs:1}} >
                                    <div className="bestimg-prices">
                                        <img src={bestimg} alt="best image" />
                                    </div>
                                </Grid>

                                {/* ------------------- right data ------------------- */}

                                <Grid item lg={4} md={4} sm={6} xs={12} order={{lg:3,md:3,sm:2,xs:2}} >
                                <div className="right-data-card-prices">
                                        <p className="data-card-heading-prices">Every cleaning is insured</p>
                                        <p className="data-card-discription-prices ">and seek to provide exceptional service and engage in proactive behavior. We‘d be happy to clean your homes.</p>
                                    </div>
                                    <div className="right-data-card-prices">
                                        <p className="data-card-heading-prices">Secure online payment</p>
                                        <p className="data-card-discription-prices ">Payment is processed securely online. Customers pay safely online and manage the booking.</p>
                                    </div>
                                </Grid>
                            </Grid>
                            </ThemeProvider>

                        </section>

                        {/* ------------------- why to use section ends ------------------- */}

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
export default Prices;