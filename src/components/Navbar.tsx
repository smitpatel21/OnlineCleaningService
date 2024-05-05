import { Button } from "@mui/material";
import * as React from 'react';
// import Button from '@mui/material/Button';
import WebLanguage from "./WebLanguage";
import {insta} from '../assets/images/index'
import {facebook} from '../assets/images/index'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Hidden from '@mui/material/Hidden'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box'
import {NavLink } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {user_logo} from '../assets/images/index'
import {notification} from '../assets/images/index'
import {downarrow} from '../assets/images/index'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from "@mui/material";
import { Checkbox } from "@mui/material";
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles'
import { useEffect } from "react";
import { LoginContext,CustomerLoginContext,EmailContext,ServiceProviderIdContext,MySettingVarContext,UserProfileContext} from "./LoginContext";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { lock,userLogin } from "../assets/images/index";
import Snackbar from '@mui/material/Snackbar';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
    ) {
    return <Slide direction="down" ref={ref} {...props} />;
});


const Login = styled(Button)({
    
    '&:hover':{
        backgroundColor:"#114954 !important",
    },
    '&.MuiButtonBase-root.MuiButton-root':{
        height:"46px",
        width:"100%",
        backgroundColor:"#1D7A8C !important",
        color:"white !important",
        fontSize:"20px !important",
        borderRadius:"46px !important",
        fontWeight:"bold",
        display:"block !important",
        marginBottom:'20px',
        textTransform:'initial'
    }
})

const CustomDialogContent=styled(DialogContent)({
    '& .MuiDialogTitle-root .MuiDialogContent-root':{
       
        
    },
    '&.MuiDialogContent-root':{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
    }
})
const CustomDialog=styled(Dialog)({
    '& .MuiPaper-root.MuiDialog-paper':{
        width:'320px',
        // minHeight:'370px'
    }
})

{/* ----------- custom styles ----------- */}

const style=makeStyles({
    togglelinks:{
        transition:"0.2s",
        color:"gray",
        textDecoration:"none !important",
        textTransform:"initial",
        fontSize:"16px",
        width:"100%",
        textAlign:"start",
        display:"inline-block",
        padding:"5px",
        borderRadius:"5px",
        '&:hover':{
            backgroundColor:"#d2e4e8",
            color:"#1D7A8C"
        }
    },
    toggle_list_links:{
        width:"100%"   
    },
    appbarcolor:{
        backgroundColor:"transparent !important",
        boxShadow:"none !important",
    },
    togglesocialmedia:{
        display:"flex",
        justifyContent:"space-evenly",
        width:"50%", 
        transition:"0.3s",
        '& a':{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:' 50%',
            height: '35px',
            width: '35px',
            transition:' .3s',
            '&:hover':{
                backgroundColor:'#d2e4e8',
            }
        }
    },
    active:{
        transition:"0.2s",
        color:"#1D7A8C",
        textDecoration:"none !important",
        textTransform:"initial",
        fontSize:"16px",
        width:"100%",
        textAlign:"start",
        display:"inline-block",
        padding:"5px",
        borderRadius:"5px",
        '&:hover':{
            backgroundColor:"#d2e4e8",
            color:"#1D7A8C"
        },
        
    },
    inputField:{
        
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
        alignItems:'center',
        marginBottom:'18px'
    },
    login_links:{
        color:'#1D7A8C',
        textDecoration:'none',
        textAlign:'center'
    },
    login_bottom:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        textAlign:'center'
    },
    error:{
        color:'#fd2e2e',
        backgroundColor:'#fccece',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'10px',
        height:'50px',
        borderRadius:'4px',
        fontSize:'18px',
        fontWeight:'500'
    },
    error_msg:{
        color:'red'
    },
    menuItem:{
        '&>a':{
            color:'black',
            textDecoration:'none',
            padding:'6px 16px'
        },
        '&.MuiButtonBase-root.MuiMenuItem-root':{
            padding:'0'
        }
    },
    loginToast:{
        '& .MuiPaper-root.MuiSnackbarContent-root':{
            backgroundColor:'red',
        }
    }
    
})
const Span=()=>{
    return(
        <>
            <span style={{width:"20px",height:"20px",border:"1px solid #C8C8C8",borderRadius:"3px"}}></span>
        </>
    );
}

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }
const CustomDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{color:'#646464'}} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
type definationofprop={
    otherpage?:boolean,
    logo?:string,
    link1?:string,
    link2?:string,
    link3?:string,
    link4?:string,
    link5?:string,
    link6?:string,
    link7?:string,
    languageoption?:boolean,
}

const Navbar=(props:definationofprop)=>{
    const classes= style();
    const [data,setData]=useState([]);
    const {customerIn,setCustomerIn}:any=useContext(CustomerLoginContext)
    const {isauth,setAuth}:any =useContext(LoginContext)
    
    const {serviceProviderID,setServiceProviderID}:any=useContext(ServiceProviderIdContext)
    const {mySettingVar,setMySettingVar}:any=useContext(MySettingVarContext)
    const {userProfile,setUserProfile}:any=useContext(UserProfileContext)
    const navigate=useNavigate();
    const [valemail,setValEmail]=useState(false)
    const [valpassword,setValPassword]=useState(false)
    const [valforgot,setValForgot]=useState(false)
    useEffect(()=>{
        fetch('http://localhost:2000/Data')
        .then(res=>res.json())
        .then(result=>setData(result))
    },[])

    /* ----------- to open side bar  ----------- */
    const [open ,setOpen]=useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open_menu = Boolean(anchorEl);
    /* ----------- for language menu  ----------- */
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setAuth(false);
        setCustomerIn(false);
        setMySettingVar(false);
    };
    const handleCloseBySetting=()=>{
        setAnchorEl(null);
        setMySettingVar(true);
    }
    const handleCloseMenu=()=>{
        setAnchorEl(null)
        setMySettingVar(false);
    }
    /* login function */
    const [openLogin, setOpenLogin] = React.useState(false);

    const handleOpenLogin = () => {
        setOpenLogin(true);
        setOpenForgotPwd(false)
    };
    const closeLogin = () => {
        setOpenLogin(false);
    };

    /* forgot password  function */
    const [openForgotPwd,setOpenForgotPwd]=useState(false)
    const OpenForgotPwd=()=>{
        setOpenForgotPwd(true)
        setOpenLogin(false)
    }
    const closeForgotPwd=()=>{
        setOpenForgotPwd(false)
    }
    

    const Validate=(form:HTMLFormElement)=>{
        const errors={};
        const emailRegx=/^(?!\.)[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if(!form.email.value)
            (errors as any).Email='Email is required!'
        else if(!emailRegx.test(form.email.value))
            (errors as any).Invalid='Invalid email!'
        if(!form.password.value)
            (errors as any).Password='Password is required!'
        return errors;
    }
    let Login_errors={}
    const [errorMsg,setErrorMsg]=useState({});
    const [UserError,setUserError]=useState(false)
    const [CrError,setCrError]=useState(false)
    const Authenticate=()=>{
        
        const form= document.getElementById('Login') as HTMLFormElement;
        Login_errors=Validate(form);
        setErrorMsg(Login_errors);
        if(Object.keys(Login_errors).length===0){
            let TempEmailObj=data.filter((e:any)=>{
                return (e.EmailAddress===form.email.value);
            })
            setUserProfile(TempEmailObj);
            if(Object.keys(TempEmailObj).length===0){
                setUserError(true);
            }
            else{
                let TempObj= data.filter((e:any)=>{
                    return ((e.EmailAddress===form.email.value)&&(e.Password===form.password.value))                
                });
                if(Object.keys(TempObj).length===0){
                    setCrError(true);
                }
                else{
                    setOpenLogin(false);
                    
                    if((TempObj[0] as any).UserTypeId===1){
                        setCustomerIn(true)
                        setAuth(true);
                        navigate('/User');
                    }    
                    else if((TempObj[0] as any).UserTypeId===2){
                        setServiceProviderID((TempObj as any)[0]['UniqueId'])
                        if((TempObj as any)[0].UserStatus==='Active'){
                            setAuth(true)
                            navigate('/User');
                        }else{
                            setOpenToaster(true)
                        }
                    }
                    else if((TempObj[0] as any).UserTypeId===3){
                        setAuth(true)
                        navigate('/Admin');
                    }
                        
                }
            }
            
            

        }
        
    }

    const handleLogin =(e:any)=>{
        e.preventDefault();
        Authenticate();        
    }


    const ValidateEmailfield=(form:HTMLFormElement)=>{
        const error={};
        const emailRegx=/^(?!\.)[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if(!form.EmailAddress.value)
            (error as any).Email='Cannot be empty!'
        else if(!emailRegx.test(form.EmailAddress.value))
            (error as any).Invalid='Invalid email'
        return error;
    }
    let {Email,setEmail}: any=useContext(EmailContext);
    const [isExist,setExist]=useState(true);

    let emailObj={},emailError={};
    const [forgotError,setForgotError]=useState({});
    const ForgotPassword=(e:any)=>{
        e.preventDefault();
        let form=document.getElementById("forgotpwd") as HTMLFormElement;
        emailError=ValidateEmailfield(form);
        setForgotError(emailError);
        emailObj=data.filter((e:any)=>{
            return e.EmailAddress===form.EmailAddress.value;
        })
        if((Object.keys(emailObj).length!==0)&&(Object.keys(emailError).length===0)){
            setEmail(form.EmailAddress.value);
            // emailjs.sendForm('gmail', 'RstPwd', e.target, '9BlD6397XdGSbKNUb');        
            navigate('/ResetPassword')
            e.target.reset();
        }
        else{
            if(Object.keys(emailError).length===0){
                if(Object.keys(emailObj).length===0)
                    setExist(false);
            }
            
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
    return(<>
            <Snackbar
                anchorOrigin={{vertical:'top',horizontal:'right'}}
                open={openToaster}
                onClose={closeToaster}
                message="Your account is not activate for now"
                action={action}
                className={classes.loginToast}
            />
        
            <AppBar sx={{background:"transparent",boxShadow:"none"}}>
                <ToolBar disableGutters className={`${props.otherpage?"navbar-other":"navbar-home"}`} >
                    <div className={`${props.otherpage?"logo-other":"logo-home"}`}>
                        <NavLink to='/' title='Helperland'><img className={`${props.otherpage?"logo-img-other":"logo-img-home"}`} src={props.logo} alt="helperland-logo" /></NavLink>                
                    </div>     
                    <CustomDialog
                        onClose={closeLogin}
                        TransitionComponent={Transition}
                        aria-labelledby="customized-dialog-title"
                        open={openLogin}
                    >
                        <CustomDialogTitle id="customized-dialog-title" onClose={closeLogin}>Login</CustomDialogTitle>
                        
                        <CustomDialogContent>
                        {(UserError)&&<p className={classes.error}>User doesnot found!!</p> }
                        {(CrError)&&<p className={classes.error}>Wrong Credentials!!</p> }
                            <form action="" id='Login' onSubmit={handleLogin}>
                                <div style={{marginBottom:"15px"}}>
                                    <TextField
                                    
                                        type='text'
                                        placeholder='Email'
                                        name='email'
                                        InputProps={{
                                            endAdornment:  <InputAdornment position="end"><img src={userLogin} alt='user logo'/> </InputAdornment>
                                        }}
                                        onChange={(e:any)=>setValEmail(e.target.value)}
                                        className={classes.inputField}
                                    />
                                    {!valemail&&<p className={classes.error_msg}>{(errorMsg as any).Email}</p>}
                                    <p className={classes.error_msg}>{(errorMsg as any).Invalid}</p>
                                </div>
                                <div style={{marginBottom:'15px'}}>
                                    <TextField
                                        
                                        type='password'
                                        placeholder='Password'
                                        name='password'
                                        onChange={(e:any)=>{setValPassword(e.target.value)}}
                                        InputProps={{
                                            endAdornment:  <InputAdornment position="end"> <img src={lock} alt="secure password" /> </InputAdornment>
                                        }}
                                        className={classes.inputField}
                                    />
                                    {!valpassword&&<p className={classes.error_msg}>{(errorMsg as any).Password}</p>}
                                </div>
                                <div className={classes.checkbox_wrapper}>
                                    <Checkbox icon={<Span/>} className={classes.checkbox} /> <p>Remember me</p>
                                </div>
                                <Login type='submit' >Login</Login>
                            </form>

                            <div className={classes.login_bottom}>
                                <NavLink to="" className={classes.login_links}  onClick={OpenForgotPwd}>Forgot password?</NavLink>
                                <p>Didn't have an account? <NavLink to="/CustomerSignup" className={classes.login_links}>Create an account</NavLink></p>
                            </div>
                        </CustomDialogContent>
                            
                        </CustomDialog >

                        <CustomDialog 
                            onClose={closeForgotPwd}
                            TransitionComponent={Transition}
                            aria-labelledby="customized-dialog-title"
                            open={openForgotPwd}>
                            <CustomDialogTitle id="customized-dialog-title" onClose={closeForgotPwd}>
                                Forgot password
                            </CustomDialogTitle>
                            <CustomDialogContent>
                                {!isExist&&<h1 className={classes.error}>Email is not Registered</h1>}
                                
                                <form action="" id='forgotpwd' onSubmit={ForgotPassword}>
                                    <div style={{marginBottom:'15px'}}>
                                        <TextField
                                            type='text'
                                            placeholder='Email Address'
                                            name='EmailAddress'
                                            className={classes.inputField}
                                            onChange={(e:any)=>setValForgot(e.target.value)}
                                        />
                                        {!valforgot&&<p className={classes.error_msg}>{(forgotError as any).Email}</p>}
                                        <p className={classes.error_msg}>{(forgotError as any).Invalid}</p>
                                    </div>
                                    <Login type='submit'>Send</Login>
                                </form>
                                <NavLink to="" onClick={handleOpenLogin} className={classes.login_links}>Login now</NavLink>
                            </CustomDialogContent>
                        </CustomDialog>
                    {/* ----------- large device header start  ----------- */}               
                    <Hidden lgDown>
                        <ul className={`${customerIn? 'customer-logged-in' :`${isauth?"loggedin-ul":`${props.otherpage?"nav-ul-other":"nav-ul-home"}`}`}`}>
                        {(!(isauth)||customerIn) && <Button disableFocusRipple  title={props.link1} className={`${props.otherpage?"nav-btn-link-other":"nav-btn-link-home"}`} variant="outlined" > <NavLink to="/BookService">{props.link1}</NavLink> </Button>}
                            <li className="nav-list" ><NavLink title={props.link2} className={(e)=>e.isActive? "active-nav" : "nav-link"} to="/Prices" >{props.link2}</NavLink></li>
                            <li className="nav-list" ><NavLink title={props.link3} className={(e)=>e.isActive? "active-nav" : "nav-link"} to="/Warranty" >{props.link3}</NavLink></li>
                            <li className="nav-list" ><NavLink title={props.link4} className={(e)=>e.isActive? "active-nav" : "nav-link"} to="/Blog" >{props.link4}</NavLink></li>
                            <li className="nav-list" ><NavLink title={props.link5} className={(e)=>e.isActive? "active-nav" : "nav-link"} to="/Contact" >{props.link5}</NavLink></li>
                        {!(isauth) &&  <Button disableFocusRipple sx={{maxWidth:"96px",width:"100%"}} onClick={handleOpenLogin} title={props.link6} className={`${props.otherpage?"nav-btn-link-other":"nav-btn-link-home"}`} variant="outlined">{props.link6}</Button>}
                        {/* -----------login menu  ----------- */}

                        {!(isauth) &&  <Button disableFocusRipple title={props.link7}  className={`${props.otherpage?"nav-btn-link-other":"nav-btn-link-home"}`} variant="outlined"><NavLink to='/BecomeHelper'   title={props.link7}>{props.link7}</NavLink></Button>}

                        {(isauth) && <a href="" className="notification-bell" title='notifications' ><img src={notification} alt="notification" /></a> }
                        {(isauth)&&<Button
                                id="basic-button"
                                aria-controls={open_menu ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open_menu ? 'true' : undefined}
                                onClick={handleClick}
                                disableRipple
                            >
                                <img style={{marginRight:"8px"}} src={user_logo} alt="user logo" />
                                <img src={downarrow} alt="down arrow" />
                            </Button>}
                            {(isauth)&&(
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open_menu}
                                onClose={handleCloseMenu}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                               <p style={{paddingLeft:'15px',fontSize:'14px',lineHeight:'14px'}}> welcome, </p> 
                               {userProfile[0]&&<p style={{paddingLeft:'15px',fontWeight:'500',paddingBottom:'5px',fontSize:'15px'}}> {userProfile[0]['Firstname']} {userProfile[0]['Lastname']}</p>}
                                <Divider/>         
                                <MenuItem className={classes.menuItem} onClick={handleCloseMenu} > <NavLink to='/User'> My Dashboard </NavLink></MenuItem>
                                <MenuItem className={classes.menuItem} onClick={handleCloseBySetting}> <NavLink to='/User'> My Account </NavLink></MenuItem>
                                <MenuItem className={classes.menuItem} onClick={handleClose}><NavLink to='/' style={{textDecoration:'none',color:'black',width:"100%",height:"100%"}}>Logout</NavLink></MenuItem>
                            </Menu>)}
                            {!isauth && (props.languageoption && <WebLanguage/>)}
                        </ul>
                    </Hidden>
                    {/* ----------- large device header ends  ----------- */}

                    {/* ----------- small device header data start ----------- */}
                    <Hidden lgUp>
                        <div className="lang-burger" >
                        {(isauth) && <a href="" title='notifications' className="notification-bell" style={{marginRight:"10px"}} ><img src={notification} alt="notifications" /></a> }
                        {(isauth)&&<Button
                                id="basic-button"
                                aria-controls={open_menu ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open_menu ? 'true' : undefined}
                                onClick={handleClick}
                                disableRipple
                            >
                                <img style={{marginRight:"8px"}} src={user_logo} alt="user logo" />
                                <img src={downarrow} alt="down arrow" />
                            </Button>}
                            
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open_menu}
                                onClose={handleCloseMenu}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <p style={{paddingLeft:'15px',fontSize:'14px',lineHeight:'14px'}}> welcome, </p> 
                                {userProfile[0]&&<p style={{paddingLeft:'15px',fontWeight:'500',paddingBottom:'5px',fontSize:'15px'}}> {userProfile[0]['Firstname']} {userProfile[0]['Lastname']}</p>}
                                <Divider/>         
                                <MenuItem className={classes.menuItem} onClick={handleCloseMenu}> <NavLink to='/User'> My Dashboard </NavLink></MenuItem>
                                <MenuItem className={classes.menuItem} onClick={handleCloseBySetting}><NavLink to='/User'> My Account </NavLink></MenuItem>
                                <MenuItem className={classes.menuItem} onClick={handleClose}><NavLink to='/' style={{textDecoration:"none",color:"black",width:"100%",height:"100%"}}>Logout</NavLink></MenuItem>
                            </Menu>
                            {!isauth&&(props.languageoption && <WebLanguage/>)}
                        <MenuRoundedIcon onClick={()=>{setOpen(true)}}className="hamberger" sx={{fontSize:"45px"}}/>                         
                        
                        </div>
                    </Hidden>                
                    {/* ----------- small devicw header data ends  ----------- */}
                </ToolBar>
               { /* ----------- side bar starts  ----------- */}
                <SwipeableDrawer  anchor="right" open={open} onOpen={()=>setOpen(true)} onClose={()=>setOpen(false)}>
                    
                    <List>
                    <Box sx={{width:"250px",padding:"30px 0"}}>
                        {(!(isauth) || customerIn) && <ListItem>
                            <li className={classes.toggle_list_links}><NavLink to='/BookService' title={props.link1}  className={(e)=>e.isActive? classes.active : classes.togglelinks}>{props.link1}</NavLink></li>
                        </ListItem>}
                        <ListItem>
                            <li className={classes.toggle_list_links} ><NavLink to='/Prices' title={props.link2} className={(e)=>e.isActive? classes.active : classes.togglelinks}>{props.link2}</NavLink></li>
                        </ListItem>
                        <ListItem>
                            <li className={classes.toggle_list_links} ><NavLink to='/Warranty' title={props.link3} className={(e)=>e.isActive? classes.active : classes.togglelinks}>{props.link3}</NavLink></li>
                        </ListItem>
                        <ListItem>
                            <li className={classes.toggle_list_links}><NavLink to='/Blog' title={props.link4} className={(e)=>e.isActive? classes.active : classes.togglelinks}>{props.link4}</NavLink></li>
                        </ListItem>
                        <ListItem>
                            <li className={classes.toggle_list_links} ><NavLink to='/Contact' title={props.link5} className={(e)=>e.isActive? classes.active : classes.togglelinks}>{props.link5}</NavLink></li>
                        </ListItem>
                        {!(isauth) && <ListItem>
                            <li className={classes.toggle_list_links}><NavLink to='' onClick={handleOpenLogin} title={props.link6} className={classes.togglelinks}>{props.link6}</NavLink></li>
                        </ListItem>}
                        {!(isauth) && <ListItem>
                            <li className={classes.toggle_list_links}> <NavLink to='/BecomeHelper' title={props.link7} className={(e)=>e.isActive? classes.active : classes.togglelinks}>{props.link7}</NavLink></li>
                        </ListItem>}
                        </Box>   
                        <Divider/>         
                        <ListItem >
                            <div className={classes.togglesocialmedia}>
                                <a href="" title='facebook'>
                                    <img src={facebook} alt="facebook logo" />
                                </a>
                                <a href="" title='instagram'>
                                    <img src={insta} alt="instagram logo" />
                                </a>
                            </div>
                        </ListItem>
                    </List>
                    
                </SwipeableDrawer>
            
                {/* ----------- side bar ends  ----------- */}
            </AppBar>
        
    
    </>);
}
export default Navbar;