import React from 'react'
import Navbar from "../components/Navbar";
import {logo} from '../assets/images/index'
import Footer from "../components/Footer";
import {bgleftimg} from '../assets/images/index'
import {bgrightimg} from '../assets/images/index'
import {  Typography } from "@mui/material";
import {makeStyles} from '@mui/styles'
import {img1} from '../assets/images/index';
import {img2} from '../assets/images/index';
import {img3} from '../assets/images/index';
import {arrow} from '../assets/images/index';
import EmailForm from "../components/EmailForm";
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import captcha from '../assets/images/layer-20.png'
import {submit_arrow} from '../assets/images/index'
import {downscroll} from '../assets/images/index'

import {brush} from '../assets/images/index'
import {broom} from '../assets/images/index'
import {mop} from '../assets/images/index'
import {vaccum} from '../assets/images/index'
import {nosel} from '../assets/images/index'
import {spray} from '../assets/images/index'
import Cookie from "../components/Cookie";
import {Helmet,HelmetProvider} from 'react-helmet-async'
import { LoginContext,MySettingVarContext,UserProfileContext } from "../components/LoginContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
/* -------------- input --------------- */

const Input = styled(TextField)({
    '& .MuiInputBase-root':{
        height:"46px",
        padding:"0 !important" ,
        // maxWidth:"360px",
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
        border:"1px solid #1D7A8C",  
    },
})


/* -------------- submit button --------------- */

const Submit = styled(Button)({
    '&.MuiButton-root':{
        minHeight:"46px",
        minWidth:"166px",
        backgroundColor:"#1D7A8C ",
        color:"white ",
        fontSize:"16px ",
        borderRadius:"46px ",
        display:"block ",
        margin:"0 auto ",
        
    },
    
    '&:hover,&:focus':{
        backgroundColor:"#114954 !important",
    },
    '&:hover .arrow,&:focus .arrow':{
        transform:"translate(10px)",
        transition:".2s"
    },
    '.arrow':{
        transition:'.2s'
    }
    
})



/*------------------ cookie ok button ----------------*/


/* --------------- custom classes -------------- */

const styles=makeStyles({
    
    
    input:{
        width:"100%",
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
            fontSize:"16px"
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        }
    },
    mobileno:{
        width:"100%",
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
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
            fontSize:"16px"
        },
        

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
    checkbox:{
        color:"#C8C8C8 !important",
        '&.MuiCheckbox-root ':{
            padding:"0",
            marginRight:"8px",
        },
        '& .PrivateSwitchBase-input':{
            
        },
        
        '&.Mui-checked':{
            color:'#1D7A8C !important',
            '& .MuiSvgIcon-root':{
                marginLeft:"-3px"
            },
            '& .MuiSvgIcon-root>path':{
                transform:"scale(1.1)",
            },
        },
        
        
    },
    captcha:{
        alignSelf:"flex-start",
        marginBottom:"20px",
        height:'100%',
        width:'83%'
    },
    error_msg:{
        alignSelf:'flex-start',
        color:"red"
    },
    not_matching:{
        height:'40px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'4px',
        backgroundColor:'#fccece',
        color:'red',
        width:'100%',
        marginBottom:'10px'
    },
    input_wrp:{
        marginBottom:'15px',
        width:'100%'
    },
    loginToast:{
        '& .MuiPaper-root.MuiSnackbarContent-root':{
            backgroundColor:'green',
        }
    }
})

/* --------------custom classes ends ----------- */

/* ---------------span for mobile number */

const Span=()=>{
    return(
        <>
            <span style={{width:"20px",height:"20px",border:"1px solid #C8C8C8",borderRadius:"3px"}}></span>
        </>
    );
}


/* ---------------main function -----------------*/

const BecomeHelper = () =>{

    const classes = styles();

    let navbar=document.getElementsByClassName("navbar-home");
    let logoimg=document.getElementsByClassName("logo-img-home");
    let navbtn=document.getElementsByClassName('nav-btn-link-home');
    
    
    const {mySettingVar,setMySettingVar}:any=useContext(MySettingVarContext)
    const {userProfile,setUserProfile}:any=useContext(UserProfileContext)
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
        
        }}
        
    };
    const [valfirst,setValFirst]=useState('');
    const [vallast,setValLast]=useState('');
    const [valemail,setValEmail]=useState('');
    const [valmobile,setValMobile]=useState('');
    const [valpassword,setValPassword]=useState('');
    const [valconfirm,setValConfirm]=useState('');
    const [dateOfReg,setDateOfReg]=useState(new Date());

    const [Data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:2000/Data')
        .then(res=>res.json())
        .then(result=>setData(result));
    },[])
    const [disable,setDisable]=useState(true)
    const Policy=(e:any)=>{
        if(e.target.checked)
        setDisable(false);
        else
        setDisable(true);
    }
    const Validate=(form:HTMLFormElement)=>{
        const errors={}
        const regx=/^\d{10}$/;
        const regxForText=/^[A-Za-z]+$/
        const emailRegx=/^(?!\.)[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let P1=form.password.value,P2=form.confirm_password.value;
        let matched=Data.filter((e:any)=>{
            return (e.EmailAddress===form.email.value)&&(e.UserTypeId===2);
        })
        if(Object.keys(matched).length!==0){
            (errors as any).AlreadyExist='UserId Already Exist!'
        }
        else{
            
            if(!form.first_name.value)
                (errors as any).firstname='Firstname is required!'
            else if(!regxForText.test(form.first_name.value))
                (errors as any).firstnotvalid='First name is not valid!'
            if(!form.last_name.value)
                (errors as any).lastname='Lastname is required!'
            else if(!regxForText.test(form.last_name.value))
                (errors as any).lastnotvalid='Last name is not valid!'
            if(!form.email.value)
                (errors as any).email='Email is required!'
            else if(!(form.email.value).match(emailRegx))
                (errors as any).validemail='Email is not valid!'
            if(!form.contact_number.value)
                (errors as any).contactno='Mobile number is required!'
            else if(!regx.test(form.contact_number.value))
                (errors as any).notallow='Invalid!'
            if(!form.password.value)
                (errors as any).password='Password is required!'
            if(!form.confirm_password.value)
                (errors as any).confirmPwd='Confirm password is required!'
            else if(form.password.value.length<6)
                (errors as any).length='Atleast 6 letters required!'
            if(P1!==P2)
                (errors as any).notmatching='Passwords are not matching!'
        }
        return errors;
    }
    const {isauth,setAuth}:any =useContext(LoginContext)
    const [showmsg,setShowMsg]=useState(false);
    const navigate=useNavigate();
    let errorObj={};
    const [Errors,setErrors]=useState({});
    const register= async (e:any)=>{
        e.preventDefault();
        const form= document.getElementById('provider-form') as HTMLFormElement;
        errorObj=Validate(form);
        setErrors(errorObj);
        setShowMsg(Object.keys(errorObj).length!==0)
        if(Object.keys(errorObj).length===0){
            const data={
                Firstname: form.first_name.value,
                Lastname: form.last_name.value,       
                EmailAddress: form.email.value,       
                MobileNumber: form.contact_number.value,       
                Password: form.password.value,
                UniqueId:(form.email.value).slice(0,-4),
                ServiceProviderId:(form.email.value).slice(0,-4),
                UserStatus:'deactivate',
                RegisterDate:dateOfReg.getDate()+'/'+(dateOfReg.getMonth()+1)+'/'+dateOfReg.getFullYear(),
                Avatar:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAAEH5aXCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTA4RDhDMTMyQ0UzMTFFOEJDODBCOUQ4NkVERDIzNTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTA4RDhDMTQyQ0UzMTFFOEJDODBCOUQ4NkVERDIzNTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDhEOEMxMTJDRTMxMUU4QkM4MEI5RDg2RUREMjM1MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MDhEOEMxMjJDRTMxMUU4QkM4MEI5RDg2RUREMjM1MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqZxzXsAAA1ISURBVHjaYvz8+TMD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',
                Gender:'',
                Nationality:'',
                DOB:'',
                Rating:0,
                Address:{},
                BlockList:[],
                UserTypeId:2
            }
            setUserProfile([data]);
            await fetch('http://localhost:2000/Data',{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            await fetch('http://localhost:2000/ServiceProvider',{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            setAuth(true);
            setOpenToaster(true)
            setMySettingVar(true);
            navigate('/User');
            e.target.reset();
        }
    }
    const [openToaster,setOpenToaster]=useState(false)
    
    const closeToaster=()=>{
        setOpenToaster(false)
    }
    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeToaster}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
    return(
        <>
        <Snackbar
            anchorOrigin={{vertical:'top',horizontal:'right'}}
            open={openToaster}
            onClose={closeToaster}
            message='Your account is created !!! , Once Admin activate your account you will be able to access your account'
            // autoHideDuration={3000}
            action={action}
            className={classes.loginToast}
        />
            {/* ------------------- main wrapper starts ------------------- */}

            <section className="wrapper">
                <HelmetProvider>
                    <Helmet>
                        <title>Become a helper | Helperland</title>
                    </Helmet>
                </HelmetProvider>
            {/* ------------------- navbar ------------------- */}

                <Navbar  otherpage={false} logo={logo} link1="Book a Cleaner" link2="Prices" link3="Our Gurantee" link4="Blog" link5="Contact us" link6="Login" link7="Become a Helper" languageoption={true}/>

                {/* ------------------- helper hero banner starts ------------------- */}

                <section className="helper-hero-banner" id="Landing-page">

                    {/* ------------------- helper form starts ------------------- */}

                    <form className='helper-form' action="" id='provider-form' onSubmit={register}>

                        <Typography sx={{fontSize:"24px",fontWeight:"bold",marginBottom:"24px",color:"#4f4f4f",lineHeight:"28px"}}>Register Now!</Typography>
                        {(Errors as any).AlreadyExist&&<p className={classes.not_matching}>{(Errors as any).AlreadyExist}</p>}
                        <div className={classes.input_wrp}>
                            <Input className={classes.input} type='text' placeholder='First name' name='first_name' onChange={(e:any)=>setValFirst(e.target.value)} />
                            {!valfirst&&<p className={classes.error_msg}>{(Errors as any).firstname}</p>}
                            <p className={classes.error_msg}>{(Errors as any).firstnotvalid}</p>
                            
                        </div>
                        <div className={classes.input_wrp}>
                            <Input className={classes.input} type='text' placeholder='Last name' name='last_name' onChange={(e:any)=>setValLast(e.target.value)}/>
                            {!vallast&&<p className={classes.error_msg}>{(Errors as any).lastname}</p>}
                            <p className={classes.error_msg}>{(Errors as any).lastnotvalid}</p>
                        </div>
                        <div className={classes.input_wrp}>
                            <Input className={classes.input} type='text' placeholder='Email Address' name='email' onChange={(e:any)=>setValEmail(e.target.value)}/>
                            {!valemail&&<p className={classes.error_msg}>{(Errors as any).email}</p>}
                            <p className={classes.error_msg}>{(Errors as any).validemail}</p>
                        </div>
                        <div className={classes.input_wrp}>
                            <TextField
                                type='tel'
                                className={classes.mobileno}
                                placeholder='Phone number'
                                name='contact_number'
                                InputProps={{
                                    startAdornment:  <InputAdornment position="start"><span className={classes.span} >+49</span> </InputAdornment>
                                }}
                                onChange={(e:any)=>setValMobile(e.target.value)}
                            />
                            {!valmobile&&<p className={classes.error_msg}>{(Errors as any).contactno}</p>}
                            <p className={classes.error_msg}>{(Errors as any).notallow}</p>
                        </div>
                        <div className={classes.input_wrp}>
                            <Input className={classes.input} type='password' placeholder='Password' name='password' onChange={(e:any)=>setValPassword(e.target.value)}/>
                            {!valpassword&&<p className={classes.error_msg}>{(Errors as any).password}</p>}
                        </div>
                        <div className={classes.input_wrp}>
                            <Input className={classes.input} type='password' placeholder='Confirm Password' name='confirm_password' onChange={(e:any)=>setValConfirm(e.target.value)}/>
                            {!valconfirm&&<p className={classes.error_msg}>{(Errors as any).confirmPwd}</p>}
                            
                        </div>
                        <div style={{width:'100%'}}>
                            {(showmsg&&(Errors as any).notmatching)&&<h1 className={classes.not_matching}>{(Errors as any).notmatching}</h1>}
                            {(Errors as any).length&&<p className={classes.not_matching}>{(Errors as any).length}</p>}
                        </div>
                        <div className="checkbox-label-container " style={{marginBottom:"8px"}}>
                            <Checkbox icon={<Span/>} className={classes.checkbox}/> <p>Send me newsletters from Helperland </p>
                        </div>

                        <div className="checkbox-label-container" style={{marginBottom:'15px'}}>
                            <Checkbox icon={<Span/>} onChange={Policy} className={classes.checkbox} /> <p>I accept <a href=""  title='terms and conditions'>terms and conditions</a> & <a  href="" title='privacy policy'>privacy policy</a> </p>
                        </div>

                        <img className={classes.captcha} src={captcha} alt="captcha" />

                        <Submit disabled={disable} disableFocusRipple type='submit' sx={{textTransform:"initial"}}>Get Started <img className='arrow' style={{marginLeft:"2px"}} src={submit_arrow} alt="right arrow" /></Submit>

                    </form>

                    {/* ------------------- helper from ends ------------------- */}

                    <a className="down-btn" href="#Main"><img src={downscroll} alt="down button image" /></a>                        

                </section>

                {/* ------------------- main section starts ------------------- */}

                <main style={{position:'relative'}} id='Main'>
                    {/* <img className="bg-left-img" src={bgleftimg} alt="background left image" />
                    <img className="bg-right-img" src={bgrightimg} alt="background right image" /> */}
                    
                    {/* ------------------- background left images ------------------- */}
                    
                    <img className="bg-left bg-left-first" src={spray} alt="background right image" />
                    <img className="bg-left bg-left-second" src={nosel} alt="background right image" />
                    <img className="bg-left bg-left-third" src={mop} alt="background right image" />
                    
                    {/* ------------------- background right images ------------------- */}

                    <img className="bg-right bg-right-first" src={vaccum} alt="background right image" />
                    <img className="bg-right bg-right-second" src={brush} alt="background right image" />
                    <img className="bg-right bg-right-third" src={broom} alt="background right image" />
                    
                    {/* ------------------- main content wrapper starts ------------------- */}

                    <section className="main-content-wrapper-helper">

                        <Typography variant="h2" className="headings"  sx={{fontSize:"40px",color:"#4F4F4F",textAlign:"center",fontWeight:"bold"}}>How it works</Typography>

                        {/* ------------------- step card wrapper starts ------------------- */}

                        <section className="step-cards">

                            <div className="step-card step-card-common">
                                <div className="step-card-data">
                                    <Typography className="step-card-heading" variant='h3' >Register yourself</Typography>
                                    <Typography className="step-card-description" component='p' >Provide your basic information to register yourself as a service provider.</Typography>
                                    <a href="" className='step-card-readmore' title='read more'>Read more <img src={arrow} alt="Right-arrow" /> </a>
                                </div>
                                <div className="step-card-image">
                                    <img src={img1} alt="illustration image" />
                                </div>
                            </div>

                            <div className="step-card step-card-common">
                                <div className="step-card-data">
                                    <Typography className="step-card-heading" variant='h3' >Get service requests</Typography>
                                    <Typography className="step-card-description" component='p' >You will get service requests from customes depend on service area and profile.</Typography>
                                    <a href="" className='step-card-readmore' title='read more'>Read more <img src={arrow} alt="Right-arrow" /> </a>
                                </div>
                                <div className="step-card-image">
                                    <img src={img2} alt="illustration image" />
                                </div>
                            </div>

                            <div className="step-card step-card-common">
                                <div className="step-card-data">
                                    <Typography className="step-card-heading" variant='h3' >Complete service</Typography>
                                    <Typography className="step-card-description" component='p' >Accept service requests from your customers and complete your work.</Typography>
                                    <a href="" className='step-card-readmore' title='read more' >Read more <img src={arrow} alt="Right-arrow" /> </a>
                                </div>
                                <div className="step-card-image">
                                    <img src={img3} alt="illustration image" />
                                </div>
                            </div>

                        </section>

                        {/* ------------------- step card wrapper ends ------------------- */}
                        
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

export default BecomeHelper;