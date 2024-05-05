import React from 'react'
import Button from '@mui/material/Button';
import { styled } from "@mui/styles";
import Navbar from '../components/Navbar';
import {logo} from '../assets/images/index'
import { Grid, Typography,TextField, MenuItem, FormControl, Checkbox, } from '@mui/material';
import {makeStyles} from '@mui/styles'
import {diamond} from  '../assets/images/index'
import Footer from '../components/Footer';
import InputAdornment from '@mui/material/InputAdornment';
import Cookie from '../components/Cookie';
import {Helmet,HelmetProvider} from 'react-helmet-async'
import { useState } from 'react';
import {NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { LoginContext,CustomerLoginContext ,UserProfileContext} from '../components/LoginContext';
import { useEffect } from 'react';


const Register = styled(Button)({
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
    },
    
})
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

const Span=()=>{
    return(
        <>
            <span style={{width:"20px",height:"20px",border:"1px solid #C8C8C8",borderRadius:"3px"}}></span>
        </>
    );
}
const styles=makeStyles({
    wrapper:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        minHeight:'100vh'
    },
    sign_up:{
        padding:'100px 0 70px 0',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        '@media(max-width:767px)':{
            width:'90%'
        }
    },
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
        },
        

    },
    select:{
        '&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
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
    checkbox_wrapper:{
        display:'flex',
        padding:'30px 0 8px 17px',
        '& p':{
            paddingTop:'3px',
            color:'#646464'
        },
        '& a':{
            textDecoration:'none',
            color:'#1D7A8C'
        }
    },
    login:{
        textAlign:'center',
        color:'#646464',
        paddingTop:'20px',
        '&>a':{
            color:'#1D7A8C',
            textDecoration :"none"
        }
    },
    warning_text:{
        color:'red',
    },
    notmatching:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:'red',
        backgroundColor:'#fccece',
        borderRadius:"4px",
        marginBottom:'10px',
        height:'40px'
    }

})


const Signup=()=>{
    const classes = styles()
    const [disable,setDisable]=useState(true)
    const {isauth,setAuth}:any =useContext(LoginContext)
    const {customerIn,setCustomerIn}:any=useContext(CustomerLoginContext)
    
    const {userProfile,setUserProfile}:any=useContext(UserProfileContext)
    const [dateOfReg,setDateOfReg]=useState(new Date());
    const policy=(e:any)=>{
        if(e.target.checked)
            setDisable(false);
        else
            setDisable(true);
    }
    const [Data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:2000/Data')
        .then(res=>res.json())
        .then(result=>setData(result));
    },[])
    const [Errors,setError]=useState({});
    let obj={};
    const [valfirst,setValFirst]=useState('');
    const [vallast,setValLast]=useState('');
    const [valemail,setValEmail]=useState('');
    const [valmobile,setValMobile]=useState('');
    const [valpassword,setValPassword]=useState('');
    const [valconfirm,setValConfirm]=useState('');
    
    const Validate=(form:HTMLFormElement)=>{
        const errors={};
        const regx=/^\d{10}$/;
        const regxForText=/^[A-Za-z]+$/
        const emailRegx=/^(?!\.)[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let P1=form.password.value,P2=form.confirm_password.value;
        let matched=Data.filter((e:any)=>{
            return (e.EmailAddress===form.email.value)&&(e.UserTypeId===1);
        })
        if(Object.keys(matched).length!==0){
            (errors as any).AlreadyExist='UserId Already Exist!'
        }
        else{
            if(!form.first_name.value)
                (errors as any).firstname='First name required!'
            else if (!regxForText.test(form.first_name.value))
                (errors as any).firstnotvalid='First name is not valid!'
            if(!form.last_name.value)
                (errors as any).lastname='Last name is required!'
            else if(!regxForText.test(form.last_name.value))
                (errors as any).lastnotvalid='Last name is not valid!'
            if(!form.email.value)
                (errors as any).email='Email is required!'
            else if(!emailRegx.test(form.email.value)){
                (errors as any).validemail='Email is not valid'
            }
            if(!form.contact_number.value)            
                (errors as any).contactno='Contact number is required!'
            else if(!regx.test(form.contact_number.value))
                (errors as any).notallow='Invalid!'
            if(!form.password.value){
                (errors as any).password='Password is required!'   
            }
            if(!form.confirm_password.value)
                (errors as any).confirmPwd='Confirm password is required!'
            else if(form.password.value.length<6){
                (errors as any).Length='Atleast 6 letters required!'
            }
            if(P1!==P2)
                (errors as any).notmatching='Passwords are not matching!'
        }
        return errors;
    }
    const [showmsg,setShowmsg]=useState(false);
    const navigate= useNavigate();
    const register= async (e:any)=>{
        e.preventDefault(); 
        const form= document.getElementById('Register') as HTMLFormElement;
        obj=Validate(form)
        setError(obj)
        setShowmsg(Object.keys(obj).length!==0);
        
        if(Object.keys(obj).length===0){
            setAuth(true);
            setCustomerIn(true);
        const data={
            Firstname: form.first_name.value,
            Lastname: form.last_name.value,       
            EmailAddress: form.email.value,       
            MobileNumber: form.contact_number.value,       
            Password: form.password.value,
            RegisterDate:dateOfReg.getDate()+'/'+(dateOfReg.getMonth()+1)+'/'+dateOfReg.getFullYear(),
            UserTypeId:1,
            UserStatus:'Active',
            UniqueId:(form.email.value).slice(0,-4)
        }
        
        setUserProfile([data])
        await fetch('http://localhost:2000/Data',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        })
                
        navigate('/User')
        e.target.reset();
        }
    }
    return(
        <>
            <section className={classes.wrapper}>
                <HelmetProvider>
                    <Helmet>
                        <title>Sign up | Helperland</title>
                    </Helmet>
                </HelmetProvider>
                <Navbar   otherpage={true} logo={logo} link1="Book now" link2="Prices & service" link3="Warranty" link4="Blog" link5="Contact" link6="Login" link7="Become a Helper" languageoption={false} />
                <main className={classes.sign_up}>
                <Typography variant="h2"  className='headings' sx={{fontSize:"36px",color:"#4F4F4F",textAlign:"center",fontWeight:"500",marginBottom:"10px"}}>Create an account</Typography>

                <div className="seperator" style={{marginBottom:"42px"}}>
                    <div className="hr-line"></div>
                    <img src={diamond} alt="" />
                    <div className="hr-line"></div>
                </div>
                <form action="" onSubmit={register} id='Register'>

                    {(Errors as any).AlreadyExist&&<h1 className={classes.notmatching}>{(Errors as any).AlreadyExist}</h1>}
                    
                    <Grid container maxWidth="700px"  rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                        <Grid  item lg={6} md={6} sm={6} xs={12}>
                            <Input className={classes.text}   placeholder='First name' name='first_name'onChange={(e:any)=>setValFirst(e.target.value)}/>
                            {!valfirst&&<p className={classes.warning_text}>{(Errors as any).firstname}</p>}
                            <p className={classes.warning_text}>{(Errors as any).firstnotvalid}</p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Input className={classes.text} placeholder='Last name'  name='last_name' onChange={(e:any)=>setValLast(e.target.value)}/>
                            {!vallast&&<p className={classes.warning_text}>{(Errors as any).lastname}</p>}
                            <p className={classes.warning_text}>{(Errors as any).lastnotvalid}</p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Input className={classes.text} type='text' placeholder='Email address' name='email' onChange={(e:any)=>setValEmail(e.target.value)}/>
                            {!valemail&&<p className={classes.warning_text}>{(Errors as any).email}</p>}
                            <p className={classes.warning_text}>{(Errors as any).validemail}</p>
                        </Grid>
                        <Grid  item lg={6} md={6} sm={6} xs={12}>
                            <TextField
                            type='tel'
                            className={classes.mobileno}
                            placeholder='Mobile number'
                            name='contact_number'
                            onChange={(e:any)=>setValMobile(e.target.value)}
                            InputProps={{
                                startAdornment:  <InputAdornment position="start"><span className={classes.span} >+49</span> </InputAdornment>
                            }}
                            />
                            {!valmobile&&<p className={classes.warning_text}>{(Errors as any).contactno}</p>}
                            <p className={classes.warning_text}>{(Errors as any).notallow}</p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Input className={classes.text} type='password' placeholder='Password' name='password'onChange={(e:any)=>setValPassword(e.target.value)} />
                            {!valpassword&&<p className={classes.warning_text}>{(Errors as any).password}</p>}
                            
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Input className={classes.text}  type='password' placeholder='Confirm Password' name='confirm_password' onChange={(e:any)=>setValConfirm(e.target.value)}/>
                            {!valconfirm&&<p className={classes.warning_text}>{(Errors as any).confirmPwd}</p>}
                            
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12}>
                            {(Errors as any).Length&&<p className={classes.notmatching}>{(Errors as any).Length}</p>}
                            {(showmsg&&(Errors as any).notmatching)&&<h1 className={classes.notmatching}>{(Errors as any).notmatching}</h1>}
                        </Grid>
                        
                        <div className={classes.checkbox_wrapper}>
                            <Checkbox icon={<Span/>}  onChange={(e:any)=>policy(e)} className={classes.checkbox} name='policy' /> <p>I have read the <a href=""  title='privacy policy'>privacy policy</a> </p>
                        </div>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Register type='submit' disabled={disable} disableFocusRipple sx={{textTransform:"initial"}}>Register</Register>
                        </Grid>
                        

                    </Grid>
                    <p className={classes.login}>Already Registered? <NavLink to="" >Login Now</NavLink> </p>
                </form>
                </main>
                <Footer/>
            </section>
            
        </>
    );
}
export default Signup;