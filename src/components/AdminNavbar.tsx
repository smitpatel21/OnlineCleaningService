
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import {user_logo} from '../assets/images/index'
import {logout} from '../assets/images/index'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useState } from "react";
import { helperland } from "../assets/images/index";
import {useContext} from 'react'
import { LoginContext } from '../components/LoginContext';
const styles=makeStyles({
    header:{
        position:'fixed',
        backgroundColor:'#1FB6FF',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        minHeight:'60px',
        padding:'0 15px',
        width:'100%',
        zIndex:'1000',
        '@media(max-width:575px)':{

        }
    },
    logo_menubtn:{
        display:'flex',
        alignItems:'center',
    },
    nav:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        minWidth:'180px',
        '@media(max-width:991px)':{
            // minWidth:'250px',
        },
        '@media(max-width:575px)':{
            justifyContent:'space-evenly',
            minWidth:'100px'
            
        }
    },
    user:{
        display:'flex',
        alignItems:'center',
        textDecoration:'none',
        color:'white',
        fontSize:'16px',
        '@media(max-width:575px)':{
            '&>p':{
                display:'none'
            }
        }
    },
    toggle_button:{
        fontSize:'45px !important',
        color:'white',
        // marginLeft:'10px',
        '@media(min-width:991px)':{
            '&.MuiSvgIcon-root':{
                display:'none',
            }
        },
    },
    logout:{
        display:'inline-flex',
        alignItems:'center',
        height:'100%',
        '&>img':{
        alignSelf:'center'
        }
    },
    logo:{
        '@media(max-width:991px)':{
            marginLeft:'15px',
        },
        '@media(max-width:575px)':{
            width:'80%'
        }
    }
})

const AdminNavbar=()=>{
    const classes=styles();
    const {isauth,setAuth}:any =useContext(LoginContext)
    const [toggled,setToggle]=useState(false);
    const toggleSidebar=()=>{
        let sidebar=document.getElementsByClassName('side-menu-admin');
        let overlay=document.getElementsByClassName('overlay');
        sidebar[0].classList.toggle('toggle-sidebar');
        overlay[0].classList.toggle('overlay-toggle');
        setToggle(!toggled);
    }
    return(
        <>
            <header className={classes.header} > 
                <div className={classes.logo_menubtn}>
                    {!toggled && <MenuRoundedIcon className={classes.toggle_button} onClick={()=>toggleSidebar()}  />}
                    {toggled && <CloseRoundedIcon className={classes.toggle_button} onClick={()=>toggleSidebar()}  />}             
                    
                    <img className={classes.logo} src={helperland} alt='helperland'/>
                    
                </div>  
                <nav className={classes.nav}>
                   <a href="" className={classes.user} title='user' ><img style={{marginRight:'8px'}} src={user_logo} alt="user logo" /><p>Smit Patel</p>   </a> 
                   <NavLink to='/' title='logout' className={classes.logout} onClick={()=>setAuth(false)} ><img src={logout} alt="logout" /></NavLink> 
                </nav>
                
            </header>
        </>
    );
}
export default AdminNavbar;