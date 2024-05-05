import TestimonyCard from "../components/TestimonyCard";
import {pic1} from '../assets/images/index'
import {pic2} from '../assets/images/index'
import {pic3} from '../assets/images/index'
import {check} from '../assets/images/index'
import {  Container, Grid, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button'
import Navbar from "../components/Navbar";
import {logo} from '../assets/images/index'
import {step1} from '../assets/images/index'
import {step2} from '../assets/images/index'
import {step3} from '../assets/images/index'
import {step4} from '../assets/images/index'
import {step_arrow_dn} from '../assets/images/index'
import {step_arrow_up} from '../assets/images/index'
import {downscroll} from '../assets/images/index'
import FlowCard from "../components/FlowCard";
import FeatureCardHome from "../components/FeatureCardHome";
import {group21} from '../assets/images/index'
import {group23} from '../assets/images/index'
import {group24} from '../assets/images/index'
import {bgleftimg} from '../assets/images/index'
import {bgrightimg} from '../assets/images/index'
import {group36} from '../assets/images/index'
import {group28} from '../assets/images/index'
import {group29} from '../assets/images/index'
import {group30} from '../assets/images/index'
import BlogCardHome from "../components/BlogCardHome";
import { styled } from '@mui/system';
import Footer from "../components/Footer";
import {uparrow} from '../assets/images/index'
import {messege} from '../assets/images/index'
import EmailForm from "../components/EmailForm";
import Cookie from "../components/Cookie";
import {Helmet,HelmetProvider} from 'react-helmet-async'
import { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Home=()=>{
    
    let navbar=document.getElementsByClassName("navbar-home");
    let logoimg=document.getElementsByClassName("logo-img-home");
    let navbtn=document.getElementsByClassName('nav-btn-link-home');
    let upaero=document.getElementsByClassName("arrow-up");
    let floatingmsg=document.getElementsByClassName("floating-messege");
    
    window.onscroll=()=>{
        if(window.innerWidth>1199){
        if(window.pageYOffset>70){
        navbar[0].classList.add("nav-toggle");
        logoimg[0].classList.add("logo-toggle");
        navbtn[0].classList.add("nav-btn-toggle");
        navbtn[1].classList.add("nav-btn-toggle");
        navbtn[2].classList.add("nav-btn-toggle");
        
        }
        else {
        navbar[0].classList.remove("nav-toggle");        
        logoimg[0].classList.remove("logo-toggle");    
        navbtn[0].classList.remove("nav-btn-toggle");
        navbtn[1].classList.remove("nav-btn-toggle");
        navbtn[2].classList.remove("nav-btn-toggle");    
        
        }
        
        if(window.pageYOffset>500){
            upaero[0].classList.add("uparrow-visible");
            floatingmsg[0].classList.add("floating-messege-toggle");
        }
        else{
            upaero[0].classList.remove("uparrow-visible");
            floatingmsg[0].classList.remove("floating-messege-toggle");
        }
        }

    };
    
    const currentDate=new Date();
    
    useEffect(()=>{
        fetch('http://localhost:2000/Orders')
        .then(res=>res.json())
        .then(result=>result.map((element:any)=>{
            
            
            if((parseInt(element.Date.substr(0,2))<currentDate.getDate())
                &&(parseInt(element.Date.substr(3,5))<=currentDate.getMonth()+1)
                &&(parseInt(element.Date.substr(6,10))<=currentDate.getFullYear())
                &&(element.ServiceProvider==='')
                &&(element.Status==='New')){
                    console.log('upper')
                    let MailCusto={
                        Name:element['Name'],
                        Mailto:element['UniqueUID']+'.com',
                        Messege:`Your Service Request ${element['ServiceId']} has been Expired due to not available providers in scheduled time!`
                    }
                    emailjs.send('Reschedule','RstPwd' ,MailCusto, '9BlD6397XdGSbKNUb')  
                    let UpdateStatus={
                        ...element,Status:'Cancel'
                    }
                    fetch(`http://localhost:2000/Orders/${element.id}`,{
                        method:'PUT',
                        body:JSON.stringify(UpdateStatus),
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
            }
            else if((parseInt(element.Date.substr(0,2))===currentDate.getDate())
                &&(element.EndTime<currentDate.getHours())
                &&(element.ServiceProvider==='')
                &&(element.Status==='New')){
                    console.log('lower')
                    let MailCusto={
                        Name:element['Name'],
                        Mailto:element['UniqueUID']+'.com',
                        Messege:`Your Service Request ${element['ServiceId']} has been Expired due to not available providers in scheduled time!`
                    }
                    emailjs.send('Reschedule','RstPwd' ,MailCusto, '9BlD6397XdGSbKNUb')  
                    let UpdateStatus={
                        ...element,Status:'Cancel'
                    }
                    fetch(`http://localhost:2000/Orders/${element.id}`,{
                        method:'PUT',
                        body:JSON.stringify(UpdateStatus),
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
            }
        }))
    },[])
    return(
        <>
            {/* ------------ maiin-container-starts ------------*/}
            
            <section className="wrapper">
                <HelmetProvider>
                    <Helmet>
                        <title>Helperland</title>
                    </Helmet>
                </HelmetProvider>
                {/* ------------ home-hero-banner-starts ------------*/}
                
                <Navbar otherpage={false} logo={logo} link1="Book a Cleaner" link2="Prices" link3="Our Gurantee" link4="Blog" link5="Contact us" link6="Login" link7="Become a Helper" languageoption={true}/>
                
                <section className="home-hero-banner" id="Landing-page">
                    {/* ------------ black-shade ------------*/}
                    <section className="black"></section>
                
                    {/* ------------ hero-banner-content-starts ------------*/}

                    <section  className="hero-banner-content">
                        
                        <section className="main-details">
                            <h1 className="main-h1-home">Do not feel like housework?</h1>
                            <p className='checklist-home'>Great! Book now for Helperland and enjoy the benefits</p>
                            <p className="checklist-home" ><img className="checkimg-home" src={check} alt="check image" />certified & insured helper</p>                        
                            <p className="checklist-home" ><img className="checkimg-home" src={check} alt="check image" />easy booking procedure</p>                        
                            <p className="checklist-home" ><img className="checkimg-home" src={check} alt="check image" />friendly customer service</p>                        
                            <p className="checklist-home" ><img className="checkimg-home" src={check} alt="check image" />secure online payment method</p>                        
                        </section>

                        <Button disableFocusRipple className="main-button" variant="outlined"  sx={{'&.MuiButtonBase-root':{display:"block",padding:'0'}}} ><NavLink title='Book Cleaner' to="/BookService">Let’s Book a Cleaner</NavLink></Button>

                        {/* ------------ process-flow-starts ------------*/}

                        <section className="process-flow">
                            <FlowCard card_data="Enter your postcode" image={step1}/>
                            <div className="process-card-arrow">
                                <img src={step_arrow_dn} alt="curved arrow down" />
                            </div>
                            <FlowCard card_data="Select your plan" image={step2}/>
                            <div className="process-card-arrow">
                                <img src={step_arrow_up} alt="curved arrow up" />
                            </div>
                            <FlowCard card_data="Pay securely online" image={step3}/>
                            <div className="process-card-arrow">
                                <img src={step_arrow_dn} alt="curved arrow down" />
                            </div>
                            <FlowCard card_data="Enjoy amazing service" image={step4}/>   
                        </section>
                            {/* ------------ process-flow-end ------------*/}
                        
                        <a className="down-btn" href="#Features"><img src={downscroll} alt="down button image" /></a>                        
                        
                        
                    </section>

                    {/* ------------ hero-banner-content-starts ------------*/}

                </section>

                {/* ------------ home-hero-banner-finish ------------*/}

                {/* ------------ main-starts ------------*/}

                <main>

                <a href="#Landing-page" className="arrow-up"><img src={uparrow} alt="up arrow image" /></a>
               <a href="" className="floating-messege"><img  src={messege} alt="messege button image" /></a> 

                    {/* ------------ features-starts ------------*/}

                    <Container sx={{maxWidth:"1162px"}} >
                        <section className="features" id="Features">
                            <Typography variant="h2" className="headings"  sx={{fontSize:"40px",color:"#4F4F4F",textAlign:"center",fontWeight:"bold"}}>Convince yourself!</Typography>
                            <Grid container  sx={{paddingTop:"82px",'@media(max-width:991px)':{paddingTop:'50px'}}} rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid  item lg={4} md={4} sm={4} xs={12} >
                                    <FeatureCardHome  image={group21}  heading="Friendly & Certified Helpers" discription="We want you to be completely satisfied with our service and feel comfortable at home. In order to guarantee this, our helpers go through a test procedure. Only when the cleaners meet our high standards, they may call themselves Helper" />
                                </Grid>
                                <Grid  item lg={4} md={4} sm={4} xs={12} >
                                    <FeatureCardHome  image={group23}  heading="Transparent and secure payment" discription="We have transparent prices, you do not have to scratch money or money on the sideboard Leave it: Pay your helper easily and securely via the online payment method. You will also receive an invoice for each completed cleaning." />
                                </Grid>
                                <Grid  item lg={4} md={4} sm={4} xs={12} >
                                    <FeatureCardHome  image={group24}  heading="We're here for you" discription='You have a question or need assistance with the booking process? Our customer service is happy to help and advise you. How you can reach us you will find out when you look under "Contact". We look forward to hearing from you or reading.' />
                                </Grid>
                            </Grid>
                        </section>
                    </Container>
                    {/* ------------ features-finishes ------------*/}

                    {/* ------------ Story-blog-starts ------------*/}
                    <section className="story-blog-home">
                        <img className="bg-left-img" src={bgleftimg} alt="background image left" />
                        <img className="bg-right-img" src={bgrightimg} alt="background image right" />
                        <Container sx={{maxWidth:"1162px",padding:'0 10px !important','@media(max-width:1199px)':{padding:'0 20px !important'}}} >
                            <div className="story-wrapper">
                                <div className="story-text" >
                                    <Typography className="blog-text-heading" sx={{color:"#565656",fontWeight:"bold",lineHeight:"36px",marginBottom:"10px"}}>We do not know what makes you happy, but ...</Typography>
                                    <Typography variant="body1" sx={{color:"#565656",fontSize:'18px',lineHeight:'24px'}}>
                                    If it's not dusting off, our friendly helpers will free you from this burden - do not worry anymore about
                                    spending valuable time doing housework, but savor life, you're well worth your time with beautiful
                                    experiences. Free yourself and enjoy the gained time: Go celebrate, relax, play with your children, meet
                                    friends or dare to jump on the bungee.Other leisure ideas and exclusive events can be found in our blog
                                    - guaranteed free from dust and cleaning tips!
                                    </Typography>
                                </div>
                                <div className="story-image">
                                    <img  src={group36} alt="illusration image" />
                                </div>
                            </div>
                        {/* ------------ blog-cards-starts ------------*/}
                            <div className="blog-home" >
                                <Typography variant="h2" className="headings"  sx={{fontSize:"40px",color:"#4F4F4F",textAlign:"center",fontWeight:"bold"}}>Our Blog</Typography>
                                <Grid container  sx={{paddingTop:"62px",'@media(max-width:575px)':{paddingTop:'30px'}}}  rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid  item lg={4} md={4} sm={12} xs={12}  >
                                        <BlogCardHome  image={group28}/>
                                    </Grid>
                                    <Grid  item lg={4} md={4} sm={12} xs={12}>
                                        <BlogCardHome  image={group29}/>
                                    </Grid>
                                    <Grid  item lg={4} md={4} sm={12} xs={12}>
                                        <BlogCardHome  image={group30}/>
                                    </Grid>                    
                                </Grid>
                            </div>

                        {/* ------------ blog-cards-finish ------------*/}

                        </Container>
                        
                    </section>
                    
                    {/* ------------ story-blog-finishes ------------###*/}                 

                    {/* ------------ review-starts ------------*/}

                    <section className="testimonials ">
                    <Typography variant="h2" className="headings testimonials-heading" sx={{fontSize:"40px",color:"#4F4F4F",textAlign:"center",fontWeight:"bold"}}>What Our Customers Say</Typography>
                        <Container sx={{maxWidth:"1162px",padding:'0 10px !important','@media(max-width:1199px)':{padding:'0 20px !important'}}}>
                            <Grid className="testimonials-card-container" sx={{paddingTop:"56px",'@media(max-width:575px)':{paddingTop:'30px'}}} container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid  item lg={4} md={4} sm={12} xs={12} >
                                    <TestimonyCard  image={pic1} title="Lary Watson" subheader="Manchester"/>
                                </Grid>
                                <Grid  item lg={4} md={4} sm={12} xs={12}>
                                    <TestimonyCard  image={pic2} title="John Smith" subheader="Manchester" />
                                </Grid>
                                <Grid  item lg={4} md={4} sm={12} xs={12}>
                                    <TestimonyCard  image={pic3} title="Lars Johnson" subheader="Manchester" />
                                </Grid>
                            </Grid>
                            <EmailForm/>                        
                        </Container>
                        
                    </section>

                    {/* ------------ review-finishes ------------*/}
                    
                </main>

                {/* ------------ main-finishes ------------*/}
                
                {/* ------------ footer-starts ------------*/}

                <Footer/>

                {/* ------------ footer-end ------------*/}
                
            </section>
            
             {/* cookie */}
             <Cookie/>
            {/* ------------ home-main-container-end ------------*/}
        </>
    );
}
export default Home;
