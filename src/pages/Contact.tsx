import React from 'react'
import Button from '@mui/material/Button';
import { styled } from "@mui/styles";
import Navbar from '../components/Navbar';
import {logo} from '../assets/images/index'
import { Grid, Typography,TextField, MenuItem, FormControl, } from '@mui/material';
import {makeStyles} from '@mui/styles'
import {diamond} from  '../assets/images/index'
import {location} from '../assets/images/index'
import {phone} from '../assets/images/index'
import {envelope} from '../assets/images/index'
import Footer from '../components/Footer';
import EmailForm from '../components/EmailForm';
import {down_arrow} from '../assets/images/index'
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Cookie from '../components/Cookie';
import {Helmet,HelmetProvider} from 'react-helmet-async'
import emailjs from '@emailjs/browser';

{/* ------------------- custom inputfield ------------------- */}

const Input = styled(TextField)({
    
    '& .MuiInputBase-root':{
        height:"46px",
        padding:"0 !important" 
    },
    '& .Mui-focused':{
        border:"1px solid #1D7A8C",
        '& .MuiOutlinedInput-notchedOutline':{
            border:"none"
        }
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
        borderColor:'gray'
    }
})


{/* ------------------- custom textarea ------------------- */}

const Textarea=styled(TextField)({
    '& .Mui-focused':{
        border:"1px solid #1D7A8C",
        '& .MuiOutlinedInput-notchedOutline':{
            border:"none"
        }
    },
    '& .MuiOutlinedInput-root':{

    },
    '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
        borderColor:'gray'
    }
    
})

{/* ------------------- custom submit button ------------------- */}

const Submit = styled(Button)({
    height:"46px",
    width:"164px",
    backgroundColor:"#1D7A8C !important",
    color:"white !important",
    fontSize:"20px !important",
    borderRadius:"46px !important",
    fontWeight:"bold",
    display:"block !important",
    margin:"0 auto !important",
    '&:hover':{
        backgroundColor:"#114954 !important",
    }
})

{/* ------------------- custom classes starts ------------------- */}

const styles=makeStyles({
    
    text:{
        width:"100% !important",
        
        '& .MuiInputBase-root':{
            height:"46px",
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
            fontSize:"16px"
        }
    },
    textarea:{
        width:"100%",
        '& textarea::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        }
    },
    span:{
        display:"inline-flex",
        alignItems:"center",
        justifyContent:"center",
        height:"44px",
        minWidth:"58px",
        backgroundColor:"#F1F1F1",
        borderRight:"1px solid #C8C8C8",
        color:"#4F4F4F",
        borderTopLeftRadius:"4px",
        borderBottomLeftRadius:"4px"
    },
    mobileno:{
        width:"100%",
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8C",  
        },
        '& .MuiOutlinedInput-root':{
            paddingLeft:"0" 
        },
        '& .MuiInputBase-root':{
            height:"46px",
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        }

    },
    select:{
        '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8D",  
        },
        '&.MuiOutlinedInput-root.Mui-focused':{
            '& >div[aria-expanded="true"] ~ img':{
                transform:'rotate(180deg)',
                transition:".3s"
            },
        },
        '&.MuiOutlinedInput-root>img':{
            transition:".3s"
        },
        
        '& .MuiSelect-select':{
            width:"88%",
            color:"#A0A0A0",
            opacity:"1",
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },
        '&.MuiOutlinedInput-root ':{
            width:"100%",
            height:"46px",
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        }
        
        
        
    },
    errormsg:{
        color:'red'
    }

})

{/* ------------------- custom classes ends ------------------- */}




{/* ------------------- custom icon for dropdown ------------------- */}

const Icon=()=>{
    return (
    <>
        <img src={down_arrow} alt="dropdown arrow" />
    </>
    );

}

{/* ------------------- main function starts ------------------- */}

const Contact =()=>{
    const classes= styles();
    const [value,setValue]=useState('');
    const handleChange=(event: SelectChangeEvent)=>{
        setValue(event.target.value as string);
    }
    const Validate=(form:HTMLFormElement)=>{
        const errors={}
        if(!form.firstname.value)
            (errors as any).firstname='First name is required!'
        if(!form.lastname.value)
            (errors as any).lastname='Last name is required!'
        if(!form.email.value)
            (errors as any).email='Email is required!'
        if(!form.contactnumber.value)
            (errors as any).contactno='Contact number is required!'
        if(!form.description.value)
            (errors as any).description='Detail is required!'
        if(!form.subject.value)
            (errors as any).subject='Subject is required!'
        return errors;
    }
    let errorObj={}
    const [Errors,setErrors]=useState({});
    const submit=(e:any)=>{
        e.preventDefault();
        let form =document.getElementById('contact-form') as HTMLFormElement;
        errorObj=Validate(form);
        setErrors(errorObj);
        if(Object.keys(errorObj).length===0){
            // emailjs.sendForm('gmail', 'template_ID_123', e.target, '9BlD6397XdGSbKNUb')
            e.target.reset();
        }
        
    }
    return(
        <>

            {/* ------------------- main wrapper starts ------------------- */}

            <section className="wrapper">
            <HelmetProvider>
                <Helmet>
                    <title>Contact | Helperland</title>
                </Helmet>
            </HelmetProvider>
                    {/* ------------------- navbar ------------------- */}        

                    <Navbar   otherpage={true} logo={logo} link1="Book now" link2="Prices & service" link3="Warranty" link4="Blog" link5="Contact" link6="Login" link7="Become a Helper" languageoption={false} />

                    {/* ------------------- other page hero banner ------------------- */}

                    <section className="other-page-hero-banner">
                        <section className="landing-image-contact common-landing-image"></section>
                    </section>

                    {/* ------------------- main section starts ------------------- */}

                    <main >

                        {/* ------------------- main content wrapper starts ------------------- */}

                        <section className="main-content-wrapper">

                        <Typography variant="h2"  className='headings' sx={{fontSize:"36px",color:"#4F4F4F",textAlign:"center",fontWeight:"500",marginBottom:"10px"}}>Contact us</Typography>

                            <div className="seperator" style={{marginBottom:"42px"}}>
                                <div className="hr-line"></div>
                                <img src={diamond} alt="" />
                                <div className="hr-line"></div>
                            </div>

                            {/* ------------------- contact info card starts ------------------- */}

                            <section className="information-data-cards-contact">

                                <Grid container sx={{maxWidth:"1140px",width:"100%"}} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3,lg:15 }} >

                                    <Grid item lg={4} md={4} sm={4} xs={12}>
                                        <div className="contact-info-card">
                                            <div className="info-img-container-contact">
                                                <img src={location} alt="location" />
                                            </div>
                                            <div className="card-data-contact">
                                                <p>1111 Lorem ipsum text 100, <br /> Lorem ipsum AB</p>
                                            </div>
                                        </div>
                                    </Grid>

                                    <Grid item lg={4} md={4} sm={4} xs={12}>
                                        <div className="contact-info-card">
                                            <div className="info-img-container-contact">
                                                <img src={phone} alt="phone" />
                                            </div>
                                            <div className="card-data-contact">
                                                <a href="tel:+49401234567890" title='call now'>+49 (40) 123 56 7890</a>
                                                <a href="tel:+4940987560000" title='call now'>+49 (40) 987 56 0000</a>
                                            </div>
                                        </div>
                                    </Grid>

                                    <Grid item lg={4} md={4} sm={4} xs={12}>
                                        <div className="contact-info-card">
                                            <div className="info-img-container-contact">
                                                <img src={envelope} alt="envelope" />
                                            </div>
                                            <div className="card-data-contact">                                                
                                                <a href="mailto:info@helperland.com" title='mail now'>info@helperland.com</a>
                                            </div>
                                        </div>
                                    </Grid> 

                                </Grid>
                            </section>

                            {/* ------------------- contact info card ends ------------------- */}

                            {/* ------------------- contact form starts ------------------- */}

                            <section className="contact-form">

                                <Typography variant="h2" className='headings'  sx={{fontSize:"28px",color:"#4F4F4F",textAlign:"center",fontWeight:"600",marginBottom:"24px"}}>Get in touch with us</Typography>

                                <form action="" id='contact-form' onSubmit={submit}>
                                    <Grid container maxWidth="614px"  rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                                        <Grid  item lg={6} md={6} sm={12} xs={12}>
                                            <Input className={classes.text}  placeholder='First name' name='firstname'/>
                                            <p className={classes.errormsg}>{(Errors as any).firstname}</p>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <Input className={classes.text} placeholder='Last name'  name='lastname'/>
                                            <p className={classes.errormsg}>{(Errors as any).lastname}</p>
                                        </Grid>
                                        <Grid  item lg={6} md={6} sm={12} xs={12}>
                                            <TextField
                                            type='tel'
                                            className={classes.mobileno}
                                            placeholder='Mobile number'
                                            name='contactnumber'
                                            
                                            InputProps={{
                                                startAdornment:  <InputAdornment position="start"><span className={classes.span} >+49</span> </InputAdornment>
                                            }}
                                            />
                                            <p className={classes.errormsg}>{(Errors as any).contactno}</p>
                                            
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <Input className={classes.text}  type='email' placeholder='Email address' name='email' />
                                            <p className={classes.errormsg}>{(Errors as any).email}</p>
                                        </Grid>
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <Select
                                            type='select'
                                            value={value}
                                            onChange={handleChange}
                                            displayEmpty
                                            IconComponent={Icon}
                                            className={classes.select}
                                            name='subject'
                                            
                                            >
                                                <MenuItem value={""}>Subject</MenuItem>
                                                <MenuItem value={"subject one"}>Subject1</MenuItem>
                                                <MenuItem value={"subject two"}>Subject2</MenuItem>
                                            </Select>
                                            <p className={classes.errormsg}>{(Errors as any).subject}</p>
                                            
                                        </Grid>
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <Textarea className={classes.textarea}  placeholder='Message' name='description' multiline minRows={5} />
                                            <p className={classes.errormsg}>{(Errors as any).description}</p>
                                        </Grid>
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <Submit type='submit' disableFocusRipple sx={{textTransform:"initial"}}>Submit</Submit>
                                        </Grid>
                                    </Grid>
                                    
                                </form>
                            </section>
                            
                            {/* ------------------- contac form ends ------------------- */}

                            {/* ------------------- map ------------------- */}
                            
                            <iframe className="map-container-contact " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6979157244027!2d72.49824711428266!3d23.034861321650528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8352e403437b%3A0xdc9d4dae36889fb9!2sTatvaSoft!5e0!3m2!1sen!2sin!4v1645011193662!5m2!1sen!2sin"  loading="lazy"></iframe>
            
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

export default Contact;