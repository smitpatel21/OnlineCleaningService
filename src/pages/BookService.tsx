import React, { useEffect, useState } from 'react';
import {Helmet,HelmetProvider} from 'react-helmet-async'
import Navbar from "../components/Navbar";
import {logo} from '../assets/images/index'
import {diamond} from  '../assets/images/index'
import { Box, MenuItem, Select, Typography,TextField, Button, Grid, InputAdornment } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select'
import EmailForm from '../components/EmailForm';
import Footer from '../components/Footer';
import Cookie from '../components/Cookie';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from "@mui/styles";
import { makeStyles } from '@mui/styles';
import {dark_down_arrow} from '../assets/images/index'
import {first_last_arrow} from '../assets/images/index'
import {Left_dark_arrow} from '../assets/images/index'
import {helperland} from '../assets/images/index'
import {green_window} from '../assets/images/index'
import {green_machine} from '../assets/images/index'
import {green_cupboard} from '../assets/images/index'
import { cabinate } from '../assets/images/index';
import {green_oven} from '../assets/images/index'
import {green_fridge} from '../assets/images/index'
import {house} from '../assets/images/index'
import {house_white} from '../assets/images/index'
import {payment} from '../assets/images/index'
import {payment_white} from '../assets/images/index'
import {schedule} from '../assets/images/index'
import {schedule_white} from '../assets/images/index'
import {setup} from '../assets/images/index'
import {setup_white} from '../assets/images/index'
import {smiley} from '../assets/images/index'
import {green_calendar} from '../assets/images/index'
import Checkbox from '@mui/material/Checkbox';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import {fridge} from '../assets/images/index'
import {oven} from '../assets/images/index'
import {washing_machine} from '../assets/images/index'
import {window} from '../assets/images/index'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Radio from '@mui/material/Radio';
import { narrow_arrow } from '../assets/images/index';
import RadioGroup from '@mui/material/RadioGroup';
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';
import { NavLink } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import DialogContent from '@mui/material/DialogContent';
import {useContext} from 'react'
import { LoginContext,UserProfileContext } from '../components/LoginContext';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
    ) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const CustomDialogContent=styled(DialogContent)({
    '& .MuiDialogTitle-root .MuiDialogContent-root':{
       
        
    },
    '&.MuiDialogContent-root':{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        textAlign:'center',
        fontSize:'18px'
    }
})
const CustomDialog=styled(Dialog)({
    '& .MuiPaper-root.MuiDialog-paper':{
        width:'300px',
    }
})

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
   borderBottom:'1px solid #E1E1E1',
   paddingLeft:'0',
    '&:before': {
      display: 'none',
    },
    '& .MuiButtonBase-root.MuiAccordionSummary-root':{
        padding:'0',
        height:'62px',
    },
    '&.MuiPaper-root.MuiAccordion-root':{
        
    }
  }));
  /* ----------- accordion summary ----------- */
  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<img style={{transform:'rotate(-90deg)'}} src={dark_down_arrow} alt='down arrow'/>}
      {...props}
    />
  ))(() => ({
    
    flexDirection: 'row-reverse',
    justifyContent:'center',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        
    },
    '& .MuiTypography-root':{
        color:'#4F4F4F',
        fontSize:'14px',
        paddingLeft:'12px'
    },
    '&.MuiButtonBase-root.MuiAccordionSummary-root':{
        minHeight:'auto',
        height:'50px'
    }
    
  }));
  /* ----------- custom accordion detail ----------- */
  const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    '& .MuiTypography-root':{
        color:'#4F4F4F',
        fontSize:'14px'
    },
    '&.MuiAccordionDetails-root':{
        paddingLeft:'24px'
    }
  }));
/* ----------- custom tabs ----------- */
const CustomTabs=styled(Tabs)({
    '& .MuiTabs-indicator':{  
       backgroundColor:"transparent",
       display:'block',
       width:'4% !important',
       height:'0',
       borderLeft:'15px solid transparent',
       borderRight:'15px solid transparent',
       borderTop:'17px solid #1D7A8C',
       borderBottom:'none',
    },
    '&.MuiTabs-root':{
        width:'100%',
        minHeight:'auto',
        overflowY:'visible',
        height:'84px'
    },    
    '& .MuiTabs-scroller':{
        overflowY:'visible',
    },
    '@media(max-width:991px)':{
        
    }
})

/* ----------- custom tab starts ----------- */
const CustomTab=styled(Tab)({
    
    '&.Mui-selected':{
    
        '&.MuiButtonBase-root ':{
            backgroundColor:'#1D7A8C', 
            fontWeight:'normal',
            color:"white ",
        },
    }, 
    '&[aria-selected="true"] .white':{
        zIndex:'2'
    },
    '&.MuiButtonBase-root ':{
        display:'flex',
        color:'#646464',
        opacity:'1',
        borderBottom:"1px solid #e5e5e5",
        fontSize:"18px",
        lineHeight:'24px',
        textTransform:"capitalize",
        whiteSpace:'nowrap',
        fontWeight:"normal",                
        minHeight:'68px',
        backgroundColor:'#f3f3f3',
        alignItems:"center",
        '@media(max-width:991px)':{
            width:'28%'
        },
        '@media(max-width:767px)':{
            width:'50%'
        },
        '@media(max-width:575px)':{
            width:'100%'
        },        
    },
    '&.MuiButtonBase-root:nth-child(1)':{
        '& img':{
            paddingRight:'4px',
            marginTop:'-4px'
        },
        paddingTop:'4px',
        paddingBottom:'0'
    },
    '&.MuiButtonBase-root:nth-child(2)':{
        '& img':{
            paddingRight:'4px',
            marginTop:'-4px'
        },
        paddingTop:'4px',
        paddingBottom:'0'        
    },
    '&.MuiButtonBase-root:nth-child(3)':{
        '& img':{
            paddingRight:'4px',
            marginTop:'-5px'
        },
        paddingTop:'5px',
        paddingBottom:'0',
    },
    '&.MuiButtonBase-root:nth-child(4)':{
        '& img':{
            paddingRight:'6px',
            marginTop:'1px',
        },
        paddingTop:'5px',
        paddingBottom:'0'
    }


})
/* ----------- custom tab end ----------- */
/* ----------- accordion data starts----------- */
let Accordion_data=[
    {
        title:'Which Helperland professional will come to my place?',
        panel:'panel1',
        aria_controls:'panel1d-content',
        id:'panel1d-header',
        data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title:'Which Helperland professional will come to my place?',
        panel:'panel2',
        aria_controls:'panel2d-content',
        id:'panel2d-header',
        data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title:'Which Helperland professional will come to my place?',
        panel:'panel3',
        aria_controls:'panel3d-content',
        id:'panel3d-header',
        data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title:'Which Helperland professional will come to my place?',
        panel:'panel4',
        aria_controls:'panel4d-content',
        id:'panel4d-header',
        data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title:'Which Helperland professional will come to my place?',
        panel:'panel5',
        aria_controls:'panel5d-content',
        id:'panel5d-header',
        data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title:'Which Helperland professional will come to my place?',
        panel:'panel6',
        aria_controls:'panel6d-content',
        id:'panel6d-header',
        data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title:'Which Helperland professional will come to my place?',
        panel:'panel7',
        aria_controls:'panel7d-content',
        id:'panel7d-header',
        data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    }
]
/* ----------- accordion data ends----------- */


/* ----------- custom classes starts ----------- */
const styles=makeStyles({
    select:{
        '&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'#00000055'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8D",  
        },
        '&.MuiOutlinedInput-root.Mui-focused':{
            '& >div[aria-expanded="true"] ~ img':{
                transform:'rotate(180deg)',
            }
        },

        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #E1E1E1'
        },
        '& .MuiSelect-select':{
            color:"#646464",
            opacity:"1",
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#646464",
        },
        '&.MuiOutlinedInput-root ':{
            width:"100px",
            height:"46px",
            marginRight:'10px',
            paddingRight:'10px'
            
        },
        '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input':{
            paddingRight:'0'
        }
        
    },
    select_time:{
        '&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'#00000055'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8D",  
        },
        '&.MuiOutlinedInput-root.Mui-focused':{
            '& >div[aria-expanded="true"] ~ img':{
                transform:'rotate(180deg)',
            }
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #E1E1E1'
        },
        '& .MuiSelect-select':{
            color:"#646464",
            opacity:"1",
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#646464",
        },
        '&.MuiOutlinedInput-root ':{
            height:"46px",
            minWidth:'108px',
            paddingRight:'10px'
        },
        '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input':{
            paddingRight:'0'
        }
        
    } ,
    rooms_bath:{
        paddingBottom:'15px',
    },
    time_duration:{
        display:'flex',
        alignItems:'flex-start',
        padding:'30px 0',
        '@media(max-width:767px)':{
            flexDirection:'column',
        }
    },
    date_picker:{
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #E1E1E1'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'#00000055'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8D",
        },
        
        '& .MuiInputBase-input.MuiOutlinedInput-input':{
            padding:'0',
            height:"46px",
            color:"#646464",
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root':{
            width:'143px',       
        },
        '&.MuiFormControl-root.MuiTextField-root':{
            marginRight:'10px',
        },
        '& .MuiInputAdornment-root':{
            marginRight:'0'
        }
        
    },
    time_picker:{
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #E1E1E1'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'#00000055'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8D",
        },
        
        '& .MuiInputBase-input.MuiOutlinedInput-input':{
            padding:'0 0 0 10px',
            height:"46px",
            color:"#646464",
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root':{
            width:'108px',       
        },
        '&.MuiButtonBase-root.MuiIconButton-root':{
            margin:'0'
        },
        '&.MuiFormControl-root.MuiTextField-root':{
            marginRight:'10px',
        },
        '& .MuiInputAdornment-root':{
            marginRight:'0px',
            marginLeft:"0"
        },
        
    },
    
    extra_service:{
        padding:'26px 0 14px'
    },
    extra_service_wrapper:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    extra_service_img:{
        width: '108px',
        height: '108px',
        borderRadius: '50%',
        border: '1px solid #C8C8C8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '8px',
        '@media(max-width:767px)':{
            width:'85px',
            height:'85px'
        },
        '@media(max-width:575px)':{
            width:'108px',
            height:'108px'
        }
    },
    extra_service_text:{
        color:'#646464',
        textAlign:'center',
        '@media(max-width:767px)':{
            fontSize:'14px',
        },
        '@media(max-width:575px)':{
            fontSize:'16px'
        }
    },
    extra_service_img_checked:{
        width: '108px',
        height: '108px',
        borderRadius: '50%',
        border: '3px solid #1D7A8C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '8px',
        '@media(max-width:767px)':{
            width:'85px',
            height:'85px'
        },
        '@media(max-width:575px)':{
            width:'108px',
            height:'108px'
        }
    },
    
    custom_checkbox:{
        color:"#C8C8C8 !important",
        '&.MuiCheckbox-root ':{
            padding:"0",
            marginRight:"6px",
            transform:'scale(.9)'
        },
        '& .PrivateSwitchBase-input':{
            
        },
        
        '&.Mui-checked':{
            color:'#1D7A8C !important',
            '& .MuiSvgIcon-root':{
                marginLeft:"-3px"
            },
            '& .MuiSvgIcon-root>path':{
            },
        },
    },
    
    checkbox:{
        '&.MuiButtonBase-root.MuiCheckbox-root':{
            padding:'0',
            minWidth:'108px',
            '@media(max-width:575px)':{
                marginBottom:'30px',
                '&:last-child':{
                    marginBottom:'0'
                }
            }
        }
    },
    privacy_checkbox:{
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
    checkboxes:{
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'space-between',
        paddingTop:'18px',
        '@media(max-width:575px)':{
            flexDirection:'column',
            alignItems:'center'
        }
    },
    comment_checkbox:{
        padding:'18px 0 10px'
    },
    pet_checkbox:{
        display:'flex',
        alignItems:'center',
        justifyContent:"flex-start",
        paddingTop:'16px',
    },
    duration:{
        width:'60%',
        '@media(max-width:991px)':{
            width:'50%'
        },
        '@media(max-width:767px)':{
            width:'100%'
        }
    },
    time_when:{
        width:'45%',
        '@media(max-width:991px)':{
            width:'50%'
        },
        '@media(max-width:767px)':{
            width:'100%',
            marginBottom:'20px'
        },  
    },
    bill_calculation:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    bill_subtext:{
        fontSize:'16px',
        lineHeight:'28px',
        color:'#4F4F4F',
        display:'block' ,
        paddingTop:'2px'
    },
    payment_summary:{
        maxWidth:'360px',
        boxShadow:'0px 0px 7px #00000059',
        marginBottom:"26px",
        '@media(max-width:991px)':{
            minWidth:'360px'
        },
        '@media(max-width:575px)':{
            minWidth:'auto',
            width:'100%'
        }
    },
    faq:{
        maxWidth:'404px',
        '@media(max-width:991px)':{
            paddingLeft:'20px'
        },
        '@media(max-width:767px)':{
            paddingLeft:'0'
        }
    },
    payment_card_data:{
        padding:'28px 20px 20px',
        borderBottom:'1px solid #C8C8C8'
    },
    payment_discount:{
        padding:'12px 20px',
        borderBottom:'1px solid #C8C8C8'
    },
    final_price:{
        padding:'14px 20px'
    },
    sweet_note:{
        backgroundColor:'#F3F3F3',
        minHeight:'46px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:'0 20px'
    },
    more_help:{
        fontWeight:'bold',
        color:'#1D7A8C',
        textDecoration:'none',
        paddingTop:'18px',
        display:'inline-block',
        fontSize:'16px',
        transition:'.3s',
        '&:hover,&:focus':{
            color:'#145562',
            transition:'.3s'
        }
    },
    tabIconWrp:{
        display:"flex",
        alignItems:'center',
        justifyContent:'center'
    },
    inputField:{
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8C",  
        },
        '& .MuiOutlinedInput-root':{
            paddingLeft:"0" ,
            marginBottom:'15px',
            marginRight:'20px',
            '@media(max-width:575px)':{
                marginRight:0
            }
        },
        '& .MuiInputBase-root':{
            height:"46px",
            minWidth:'250px'
        },
        "&.MuiFormControl-root.MuiTextField-root":{
            '@media(max-width:575px)':{
                width:'100%'
            }
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },        
    },
    detailField:{
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8C",  
        },
        '& .MuiOutlinedInput-root':{
            paddingLeft:"0" ,
            // marginBottom:'15px',
            '@media(max-width:575px)':{
                marginRight:0
            }
        },
        '& .MuiInputBase-root':{
            height:"46px",
            minWidth:'250px',
            backgroundColor:'white'
        },
        "&.MuiFormControl-root.MuiTextField-root":{
            width:'100%',
            '@media(max-width:575px)':{
                width:'100%'
            }
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
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
    mobileno:{
        width:"100%",
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8C",  
        },
        '& .MuiOutlinedInput-root':{
            paddingLeft:"0" ,
        },
        '& .MuiInputBase-root':{
            height:"46px",
            backgroundColor:'white'
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        }

    },
    privacy_policy_container:{
        display:'flex',
        alignItems:'center',
        marginTop:'8px',
        '& a':{
            textDecoration:'none',
            color:'#1D7A8C',
            '&:hover':{
                color:'#114954'
            }
        }
    },
    address_form:{
        backgroundColor:'#f3f3f3',
        padding:'15px',
        border:'1px solid #C8C8C8',
        borderRadius:'4px',
        margin:'20px 0'
    },
    error_msg:{
        color:'red'
    },
    radio_btn:{
        '&.MuiButtonBase-root.MuiRadio-root.Mui-checked':{
            color:'#1D7A8C'
        }
    },
    radio_btn_wrp:{
        border:'1px solid #C8C8C8',
        borderRadius:'4px',
        marginBottom:'20px',
        width:'100%',
        padding:'0 15px',
        minHeight:'70px',
        display:'flex',
        alignItems:'center',
    },
    radio_btn_data:{
        display:'flex',
        flexDirection:'column',
        marginLeft:'20px'
    },
    subheaders:{
        color:'#4f4f4f',
        fontWeight:'500',
        fontSize:'18px',
        '&.MuiTypography-root':{
            color:'#4f4f4f',
            fontWeight:'500',
            fontSize:'18px',
        }
    },
    toggle_class:{
        '&.MuiButtonBase-root ':{
            backgroundColor:'#1D7A8C',
            color:'white',
            borderRight:'1px solid white'
        },
        
        '& .white':{
            zIndex:'2'
        },
    },
    loginToast:{
        '& .MuiPaper-root.MuiSnackbarContent-root':{
            backgroundColor:'red',
        }
    },
    SelectCity:{
        '&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'#00000055'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8D",  
        },
        '&.MuiOutlinedInput-root.Mui-focused':{
            '& >div[aria-expanded="true"] ~ img':{
                transform:'rotate(180deg)',
            }
        },

        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #E1E1E1'
        },
        '& .MuiSelect-select':{
            color:"#646464",
            opacity:"1",
            
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#646464",
            backgroundColor:'white'
        },
        '&.MuiOutlinedInput-root ':{
            width:"100%",
            height:"46px",
            marginRight:'10px',
            paddingRight:'10px',
            backgroundColor:'white'
        },
        '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input':{
            paddingRight:'0'
        }
        
    }
    
})
/* ----------- custom classes ends ----------- */


const HrLine=()=>{
    return(
        <>
            <span style={{display:'inline-block',height:'1px',width:'100%',backgroundColor:'#DCDCDC'}}></span>
        </>
    );
}

/* ----------- continue btn ----------- */
const Submit = styled(Button)({
    '&.MuiButton-root':{
        minHeight:"46px",
        backgroundColor:"#1D7A8C ",
        color:"white ",
        fontSize:"20px ",
        borderRadius:"46px ",
        display:"block ",
        minWidth:'140px',
        textTransform:'initial',
        marginLeft:'auto',
        marginTop:'16px',
        padding:'0 15px'
    },
    
    '&:hover,&:focus':{
        backgroundColor:"#114954 !important",
    },
    
})
const ChkAvail = styled(Button)({
    '&.MuiButton-root':{
        height:"46px",
        backgroundColor:"#1D7A8C ",
        color:"white ",
        fontSize:"20px ",
        borderRadius:"46px ",
        display:"block ",
        padding:'0 20px',
        textTransform:'initial',
    },
    
    '&:hover,&:focus':{
        backgroundColor:"#114954 !important",
    },
    
})

const Cancel = styled(Button)({
    '&.MuiButton-root':{
        height:"46px",
        backgroundColor:"#f3f3f3",
        color:"#4f4f4f ",
        fontSize:"20px ",
        borderRadius:"46px ",
        display:"block ",
        padding:'0 20px',
        textTransform:'initial',
        border:'1px solid #4f4f4f',
        marginLeft:'20px'
    },
    
    '&:hover,&:focus':{
        backgroundColor:"#1D7A8C  !important",
        color:'white'
    },
    
})

const Addaddress = styled(Button)({
    '&.MuiButton-root':{
        height:"46px",
        backgroundColor:"transparent ",
        color:"#1D7A8C  ",
        fontSize:"16px ",
        borderRadius:"46px ",
        display:"block ",
        padding:'0 20px',
        textTransform:'initial',
        border:'1px solid #1D7A8C ',
    },
    
    '&:hover,&:focus':{
        backgroundColor:"#1D7A8C !important",
        color:'white'
    },
    
})
/* ----------- uncheked and checked icon starts ----------- */
const CabinateUnchecked=()=>{
    const classes= styles();
    return(
        <>
            <div className={classes.extra_service_wrapper}>
                <div className={classes.extra_service_img}>
                    <img src={cabinate} alt="cabinate" />
                </div>
                <p className={classes.extra_service_text}>Inside cabinets</p>
            </div>
        </>
    )

}
const CabinateChecked=()=>{
    const classes= styles();
    return(
        <>
            <div className={classes.extra_service_wrapper}>
                <div className={classes.extra_service_img_checked}>
                    <img src={green_cupboard} alt="cabinate" />
                </div>
                <p className={classes.extra_service_text}>Inside cabinets</p>
            </div>
        </>
    )

}
const FridgeUnchecked=()=>{
    const classes= styles();
    return(
        <>
            <div className={classes.extra_service_wrapper}>
                <div className={classes.extra_service_img}>
                    <img src={fridge} alt="fridge" />
                </div>
                <p className={classes.extra_service_text}>Inside fridge</p>
            </div>
        </>
    )

}
const FridgeChecked=()=>{
    const classes= styles();
    return(
        <>
            <div className={classes.extra_service_wrapper}>
                <div className={classes.extra_service_img_checked}>
                    <img src={green_fridge} alt="fridge" />
                </div>
                <p className={classes.extra_service_text}>Inside fridge</p>
            </div>
        </>
    )

}
const OvenUnchecked=()=>{
    const classes= styles();
    return(
        <>
            <div className={classes.extra_service_wrapper}>
                <div className={classes.extra_service_img}>
                    <img src={oven} alt="fridge" />
                </div>
                <p className={classes.extra_service_text}>Inside oven</p>
            </div>
        </>
    )

}
const OvenChecked=()=>{
    const classes= styles();
    return(
        <>
            <div className={classes.extra_service_wrapper}>
                <div className={classes.extra_service_img_checked}>
                    <img src={green_oven} alt="greenoven" />
                </div>
                <p className={classes.extra_service_text}>Inside oven</p>
            </div>
        </>
    )

}
const WashUnchecked=()=>{
    const classes= styles();
    return(
        <>
            <div className={classes.extra_service_wrapper}>
                <div className={classes.extra_service_img}>
                    <img src={washing_machine} alt="fridge" />
                </div>
                <p className={classes.extra_service_text}>Laundry <br /> wash & dry</p>
            </div>
        </>
    )

}
const WashChecked=()=>{
    const classes= styles();
    return(
        <>
            <div className={classes.extra_service_wrapper}>
                <div className={classes.extra_service_img_checked}>
                    <img src={green_machine} alt="greenoven" />
                </div>
                <p className={classes.extra_service_text}>Laundry <br /> wash & dry</p>
            </div>
        </>
    )

}
const WindowUnchecked=()=>{
    const classes= styles();
    return(
        <>
            <div className={classes.extra_service_wrapper}>
                <div className={classes.extra_service_img}>
                    <img src={window} alt="fridge" />
                </div>
                <p className={classes.extra_service_text}>Interior <br /> windows</p>
            </div>
        </>
    )

}
const WindowChecked=()=>{
    const classes= styles();
    return(
        <>
            <div className={classes.extra_service_wrapper}>
                <div className={classes.extra_service_img_checked}>
                    <img src={green_window} alt="greenoven" />
                </div>
                <p className={classes.extra_service_text}>Interior <br /> windows</p>
            </div>
        </>
    )

}
/* ----------- uncheked and checked icon ends ----------- */

/* ----------- text area custom ----------- */
const Textarea=styled(TextField)({
    '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
        borderColor:'#00000055'
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
        border:"1px solid #1D7A8D",
    },
    '&.MuiFormControl-root.MuiTextField-root':{
        width:'98.6%',
        '@media(max-width:991px)':{
            width:'100%'
        },
        
    },
    '& .MuiOutlinedInput-notchedOutline':{
        border:'1px solid #C8C8C8'
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root':{
        minHeight:'70px',
        padding:'0px 5px'
    }
    
    
})
/* ----------- text area ends ----------- */

/* ----------- check box span ----------- */
const Span=()=>{
    return(
        <>
            <span style={{width:"20px",height:"20px",border:"1px solid #C8C8C8",borderRadius:"3px"}}></span>
        </>
    );
}
const RadioIcon=()=>{
    return(
        <>
            <span style={{width:"20px",height:"20px",border:"1px solid #C8C8C8",borderRadius:"50%"}}></span>
        </>
    );
}
/* ----------- date picker ----------- */
const OpenDatePicker=()=>{
    return(
        <>
            <img src={green_calendar} alt="calendar" />
        </>
    );
}

/* ----------- tab inbuilt functionality ----------- */
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ paddingTop:'16px' }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  /* ----------- tab inbulit functionlity ends ----------- */

/* ----------- select icon ----------- */
  const narrowIcon=()=>{
      return(
          <>
            <img src={narrow_arrow } alt='arrow'/>
          </>
      );
  }

  /* ----------- tab icon starts ----------- */
  const SetupService=()=>{
    const classes=styles();
    return(
        <>
          <div className={classes.tabIconWrp}  >
                <img style={{position:"absolute"}} src={setup } alt='setup service pic'/>
                <img className="white" src={setup_white} alt="set up service white" />
          </div>
        </>
    );
  }
  const Schedule=()=>{
    const classes=styles();
    return(
        <>
        <div className={classes.tabIconWrp}  >
          <img style={{position:'absolute'}} src={schedule } alt='schedule pic'/>
          <img className='white' src={schedule_white } alt='schedule pic white'/>
          </div>
        </>
    );
  }
  const House=()=>{
      const classes=styles();
    return(
        <>
        <div className={classes.tabIconWrp} >
          <img style={{position:'absolute'}} src={house } alt='House pic'/>
          <img className='white' src={house_white } alt='House pic white'/>
          </div>
        </>
    );
  }
  const CreditCard=()=>{
    const classes=styles();
    return(
        <>
        <div className={classes.tabIconWrp} >
          <img style={{position:'absolute'}}src={payment } alt='credit card pic'/>
          <img className='white' src={payment_white } alt='credit card pic white'/>
        </div>
        </>
    );
  }

  /* ----------- tab icon ends ----------- */
  
const BookService =()=>{
    const classes=styles();
    const [toggleSP,setToggleSP]=useState(false);
    const [toggleYD,setToggleYD]=useState(false);
    const [toggleMP,setToggleMP]=useState(false);
    const [value, setValue] = React.useState(0);
    const {isauth,setAuth}:any =useContext(LoginContext)
    
    const {userProfile,setUserProfile}:any=useContext(UserProfileContext)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    /* ----------- for select ----------- */
    const [noOfbed,setNoOfBed]=useState('0');
    const [noOfbath,setNoOfBath]=useState('0');
    const [noOfhrs,setNoOfHrs]=useState('3');
    /*----------- set no of beds -----------*/ 
    const handleChangeBed=(event: SelectChangeEvent)=>{
        setNoOfBed(event.target.value as string);
    }
    /*----------- set no of bath -----------*/ 
    const handleChangeBath=(event: SelectChangeEvent)=>{
        setNoOfBath(event.target.value as string);
    }
    /*----------- set no of Hours -----------*/ 
    const handleChangeHrs=(event: SelectChangeEvent)=>{
        setNoOfHrs(event.target.value as string);
        setDuration(parseFloat(event.target.value as string))
    }

    const [date,setDateValue]=useState<Date>(new Date());
    const [time,setTimeValue]=useState<Date>(new Date());

    /* ----------- for accordion ----------- */
    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChangeAccordion =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };
    /*----------- post code for availibilty -----------*/ 
    const [postCode,setPostCode]=useState([]);
    const [providers,setProviders]=useState([]) as any;
    useEffect(()=>{
        fetch('http://localhost:2000/PostalCode')
        .then(res=>res.json())
        .then(result=>setPostCode(result));

        fetch('http://localhost:2000/Data')
        .then(res=>res.json())
        .then(result=>setProviders(result.filter((e:any)=>{
            return e.UserTypeId===2;
        })))
    },[])
    
    const Isvalid=(e:any,form:HTMLFormElement)=>{
        const errors={}
        let regxForPost=/^\d{6}$/;
        if(!form.postal_code.value){
            (errors as any).Error='Required!'
        }
        else if(!regxForPost.test(form.postal_code.value))
            (errors as any).invalid='Entered value is invalid!'
        else if(Object.keys(e).length===0)
            (errors as any).Error='Service is not available!'
        return errors;
    }
    const [availError,setAvailError]=useState({})
    const [SchedulePlan,setSchedulePlan]=useState(true);
    const [AddressPostalCode,setAddressPostalCode]=useState()
    let PostcodeErrorObj={}
    const CheckAvailibility=(e:any)=>{
        e.preventDefault();
        
        let form = document.getElementById('Postcode') as HTMLFormElement;
        let tempObj=postCode.filter((e:any)=>{
            return e.code===form.postal_code.value;
        })

        PostcodeErrorObj=Isvalid(tempObj,form);
        setAvailError(PostcodeErrorObj);
        if(Object.keys(PostcodeErrorObj).length===0){
            handleChange(e,1);
            setSchedulePlan(false);
            setToggleSP(true);
            setAddressPostalCode(form.postal_code.value);
        }


    }
    /*----------Reset data in form ------------ */
    const Reset=()=>{
        let form = document.getElementById('address-form') as HTMLFormElement;
        form.reset();
    }
    const [TIME,setTIME]=useState('');
    useEffect(()=>{
        let Hours=time.getHours();
        let Minutes=time.getMinutes();
        let AmPm=Hours>=12?'PM':'AM';
        Hours=Hours%12;
        Hours=Hours?Hours:12;
        let minutes=''        
        minutes=Minutes<10?'0'+String(Minutes):String(Minutes);
        let Time=Hours+':'+minutes+' '+AmPm;
        setTIME(Time);
    },[time])
    /* ------------ setting address ------------ */
    const [addressTrigger,setAddressesTrigger]=useState(false);
    const PhoneNumber=(element:any)=>{
        if(element.target.value)
        setAddressesTrigger(!addressTrigger)
        setMobile(element.target.value)
    }
    const [addAddress,setAddaddress]=useState(false);

    const AddAddress=()=>{
        setAddaddress(true);
    }
   const [street,setStreet]=useState('')
   const [houseNo,setHouseno]=useState('')
   const [city,setCity]=useState('')
   const [mobile,setMobile]=useState('')

    const ValidateData=(form:HTMLFormElement)=>{
        const errors={}
        let regxForPost=/^\d{6}$/;
        let regxForMob=/^\d{10}$/;
        let regxForHouse=/[0-9]|[0-9][0-9]|[0-9][0-9][0-9]$/
        const regxForText=/^[A-Za-z, ]+$/
        if(!form.street_name.value)
            (errors as any).streetname='Street name is required!'
        else if(!regxForText.test(form.street_name.value))
            (errors as any).streetInvalid='Street name is invalid'
        if(!form.house_number.value)
            (errors as any).houseno='House number is required!'
        else if(!regxForHouse.test(form.house_number.value))
            (errors as any).houseInvalid='House number is invalid!'
        if(!form.city.value)
            (errors as any).city='City is required!'
        else if(!regxForText.test(form.city.value))
            (errors as any).cityInvalid='City name is invalid!'
        if(!form.contact_number.value)
            (errors as any).contactno='Phone number is required!'
        else if(!regxForMob.test(form.contact_number.value))
            (errors as any).NumberInvalid='Contact number is invalid!'
        return errors;
    }

    let dataObj={};
    const [Addresses,setAddresses]=useState([]);
    const [tempAddress,setTempAddress]=useState([]);
    const [MakePayment,setMakePayment]=useState(true)
    const [dataErrors,setDataErrors]=useState({});
    useEffect(()=>{
        fetch('http://localhost:2000/UserAddress')
        .then(res=>res.json())
        .then(result=>setTempAddress(result));
    },[dataErrors,addressTrigger])
    useEffect(()=>{
        setAddresses(tempAddress.filter((e:any)=>{
            return (e.UniqueUID===userProfile[0]?.UniqueId)
        }))
    },[tempAddress])

    const handleCity=(e:any)=>{
        setCity(e.target.value);
    }
    const AddNewAddress= async(e:any)=>{
        e.preventDefault();
        
        let form = document.getElementById('address-form') as HTMLFormElement;
        dataObj=ValidateData(form);
        setMakePayment(false);            
        setDataErrors(dataObj);
        if(Object.keys(dataObj).length===0){
            setAddaddress(false);    
            
            const addressData={
                StreetName:form.street_name.value,
                HouseNo:form.house_number.value,
                PostalCode:form.postal_code.value,
                City:form.city.value,
                Phonenumber: form.contact_number.value,
                UniqueUID:userProfile[0]?.UniqueId
            }
            await fetch('http://localhost:2000/UserAddress',{
                method:'POST',
                body:JSON.stringify(addressData),
                headers:{
                    'Content-Type':'application/json'
                }
            })
        }
    }

    const ValidateAddr=(form:HTMLFormElement)=>{
        const errors={}
        let regxForMob=/^\d{10}$/;
        let regxForHouse=/[0-9]|[0-9][0-9]|[0-9][0-9][0-9]$/
        const regxForText=/^[A-Za-z ]+$/
        if(!form.street_name.value)
            (errors as any).streetname='Street name is required!'
        else if(!regxForText.test(form.street_name.value))
            (errors as any).streetInvalid='Street name is invalid'
        if(!form.house_number.value)
            (errors as any).houseno='House number is required!'
        else if(!regxForHouse.test(form.house_number.value))
            (errors as any).houseInvalid='House number is invalid!'
        if(!form.city.value)
            (errors as any).city='City is required!'
        else if(!regxForText.test(form.city.value))
            (errors as any).cityInvalid='City name is invalid!'
        return errors;
    }
    const [showBillAddr,setShowBillAddr]=useState(false)
    const differentAddress = (e:any) =>{    
        if(e.target.checked)
            setShowBillAddr(true);
        else
            setShowBillAddr(false);
    }
    let billObj={}
    const BillingAddress=(e:any)=>{
        e.preventDefault();
        let form = document.getElementById('billAddress-form') as HTMLFormElement
        billObj=ValidateAddr(form);
        setDataErrors(billObj);
        if(Object.keys(billObj).length===0){
            let BillAdrObj={
                StreetName:form.street_name.value,
                HouseNo:form.house_number.value,
                PostalCode:form.postal_code.value,
                City:form.city.value,
            }
            let billAddress={
                ...tempAddressObj,
                BillingAddress:{...BillAdrObj}
            }
            setTempAddressObj(billAddress)
            setShowBillAddr(false)
        }
    }
    /*----------- Extra service handling ----------- */
    const [extraService,setExtraService]=useState({})
    const ExtraService=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.checked){
            setExtraService({...extraService,[e.target.name]:e.target.checked})
        }
        else{
            Object.keys(extraService).map((el:any)=>{
                if(el===e.target.name){
                   delete (extraService as any)[el];
                }
            })
            setExtraService({...extraService})
            
        }
        
    }


    let length= (Object.keys(extraService).length)*30;
    const [extraDuration,setExtraDuration]=useState(length);
    useEffect(()=>{
        length= (Object.keys(extraService).length)*30;
        if(length%60==0){
            setExtraDuration(length/60);
        }
        else{
            setExtraDuration(((length+30)/60)-0.5);
        }
    },[extraService])



    /*----------- bill calculation----------- */
    
    const [duration,setDuration]=useState(3);
    const [totalHrs,setTotalHrs]=useState(3);
    const [data,setData]=useState({});
    
    useEffect(()=>{
        setTotalHrs(extraDuration+duration);        
    },[duration,extraDuration])   

    const ValidateBill=(form:any)=>{
        let errors={}
        if(!parseInt(form.bed.value))
            (errors as any).bed='Required!'
        if(!parseInt(form.bed.value))
            (errors as any).bath='Required!'
        if(!parseInt(form.duration.value))
            (errors as any).duration='Duration is required!'
        return errors;
    }   
    const [billError,setBillError]=useState({});
    let billErrorObj={}
    const [YourDetail,setYourDetail]=useState(true)
    const [serviceId,setServiceId]=useState(``)
    useEffect(()=>{
        setServiceId(`${`${((Math.random()*new Date().getSeconds())*10000).toFixed()==='0'}`?`${((Math.random()*new Date().getSeconds())*10000).toFixed()}`:`${((new Date().getSeconds())*10000).toFixed()}`}`);
    },[])
    const Calculate= async(e:any)=>{
        e.preventDefault();
        let form = document.getElementById('schedule') as HTMLFormElement;
        
        billErrorObj=ValidateBill(form);
        setBillError(billErrorObj);

        if(!isauth){
            setOpenToaster(true)
        }
        else if(Object.keys(billErrorObj).length===0){
            setYourDetail(false);        
            handleChange(e,2);
            setToggleYD(true);
            let Hours=parseInt(form.time.value.substr(0,2))
            let Minutes=parseInt(form.time.value.substr(3,2))
            let duration=totalHrs;
            let totalMin=duration*60+Minutes;
            let FinalHours=(Math.floor(totalMin/60))+Hours;
            
            let FinalMin=totalMin%60;
            
            if(FinalHours>12){
                FinalHours=FinalHours-12;   
            }
            let End,Start;
            if(form.time.value.substr(6,7)!=='am'&&(time.getHours()>12)){
                End=(Math.floor(totalMin/60))+Hours+12;
                Start=Hours+parseFloat((Minutes/60).toFixed(1))+12;
            }
            else{
                End=(Math.floor(totalMin/60))+Hours;
                Start=Hours+parseFloat((Minutes/60).toFixed(1));
            }

            let finalTime=`${FinalHours<10? `0${FinalHours}`:FinalHours}:${FinalMin<10? `0${FinalMin}`:FinalMin}`

            console.log(Hours,Minutes,FinalHours,FinalMin,End,Start,time.getHours())
            
            
            
        let OrderObj={
            Name:userProfile[0]['Firstname'] +' '+ userProfile[0]['Lastname'],
            ServiceId:parseInt(serviceId),
            Bed:form.bed.value,
            Bath:form.bath.value,
            Time:form.time.value.substr(0,5)+' - '+finalTime,
            TimeStamp:time.getTime(),
            StartTime:Start,
            EndTime:(FinalMin===0)?End+parseFloat((FinalMin/60).toFixed(1)):(End-1)+parseFloat((FinalMin/60).toFixed(1)),
            Date:form.date.value,
            Comment: form.comment.value,
            Duration:totalHrs,
            Pet:form.pet.checked,
            Status:'New',
            Extra:{...extraService},
            TotalPayment:parseFloat(`${(totalHrs*20)-((totalHrs*20)*0.2)}`),
            ServiceProviderId:'',
            ServiceProvider:'',
            Rating:'',
            BillingAddress:'Same as cleaning address',
            
            UniqueUID:userProfile[0]?.UniqueId
        }
        setData(OrderObj);
        
            
        }
    }

    
    
    
    const [tempAddressObj,setTempAddressObj]=useState({}) as any;    
    
         
    const [selectAddress,setSelectAddress]=useState('');
    
   
    const SelectAddress=(event:React.ChangeEvent<HTMLInputElement>)=>{
    
        setSelectAddress(event.target.value)
        setSelectAdDisable(false);        
        setTempAddressObj({
            ...data,
            Address:JSON.parse((event.target as HTMLInputElement).value)
        })
        
        
    }
    const [pet,setPet]=useState('')
    const HavePet=(e:any)=>{
        if(e.target.checked)
        setPet('I have a pet !!');
        else
        setPet('');
    }
    const [Comment,setComment]=useState('')
    const Note=(e:any)=>{
        setComment(e.target.value);
    }
    const [selectadDisable,setSelectAdDisable]=useState(true);
    const YourDetails=async(e:any)=>{

        // providers
        
        for(let i=0;i<providers.length;i++){
            
        let tempPara={
            Name: providers[i].Firstname,
            Mailto:providers[i].EmailAddress,
            Messege:`the order ${serviceId} request has been issued by ${userProfile[0].Firstname}`
        }
        emailjs.send('Reschedule','RstPwd' ,tempPara, '9BlD6397XdGSbKNUb')
        }
        await fetch(`http://localhost:2000/Orders/`,{
            method:'POST',
            body:JSON.stringify(tempAddressObj),
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(selectAddress!==''){
            handleChange(e,3);
            setToggleMP(true);
            setMakePayment(false);  
            setSelectAdDisable(false);
        }else{
            setSelectAdDisable(true);
        }
        
    }
    const [openDialog,setOpenDialog]=useState(false)
    const closeDialog=()=>{
        setOpenDialog(false)
    }
    const handleDialog=()=>{
        setOpenDialog(true);
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
    const [disableCompleteBooking,setDisableCompleteBooking]=useState(true);
    const PaymentPrivacy=(e:any)=>{
        if(e.target.checked)
        setDisableCompleteBooking(false)
        else
        setDisableCompleteBooking(true)
    }
    
    return(
        <>
            {/* ----------- main wrapper starts ----------- */}
            <Snackbar
                anchorOrigin={{vertical:'top',horizontal:'right'}}
                open={openToaster}
                onClose={closeToaster}
                message="Please Login First!"
                action={action}
                className={classes.loginToast}
            />
            <CustomDialog
                onClose={closeDialog}
                TransitionComponent={Transition}
                aria-labelledby="customized-dialog-title"
                open={openDialog}
            >  
                <CustomDialogContent>
                    Your Booking has been successfully submited
                    <Submit sx={{margin:'0 auto',minWidth:'100px !important'}} onClick={closeDialog}>Ok</Submit>
                </CustomDialogContent>   
            </CustomDialog >

            <section className='wrapper'>
                <HelmetProvider>
                    <Helmet>
                        <title> Book Service | Helperland</title>
                    </Helmet>
                </HelmetProvider>

                <Navbar  otherpage={true} logo={logo} link1="Book now" link2="Prices & service" link3="Warranty" link4="Blog" link5="Contact" link6="Login" link7="Become a Helper" languageoption={false} />
                
                {/* ----------- other page bannner ----------- */}
                <section className="other-page-hero-banner">
                    <section  className="landing-image-bookservice common-landing-image"></section>
                </section>

                <main>
                {/* ----------- main starts ----------- */}
                    <section className="main-content-wrapper">
                    {/* -----------main content wrapper starts ----------- */}

                        <Typography variant="h2" className='headings' sx={{fontSize:"36px",color:"#4F4F4F",textAlign:"center",fontWeight:"500",marginBottom:"10px",'@media(max-width:575px)':{maxWidth:'250px'}}}>Set up your cleaning service</Typography>

                        <div className="seperator" style={{marginBottom:"50px"}}>
                            <div className="hr-line"></div>
                            <img src={diamond} alt="diamond-pic" />
                            <div className="hr-line"></div>
                        </div>
                        {/* -----------book service content wrapper  starts ----------- */}
                        <section className="bookservice-content-wrapper">
                            {/* -----------main content bookservice starts ----------- */}
                            <div className="main-content-bookservice">
                                {/* -----------tabs starts ----------- */}
                            <CustomTabs
                                value={value}
                                onChange={handleChange}
                                textColor="inherit"
                                scrollButtons={false}
                                variant='scrollable'
                            >
                                <CustomTab disableRipple className={classes.toggle_class} icon={<SetupService/>} iconPosition={"start"} label='Setup Service' {...a11yProps(0)} />
                                <CustomTab disableRipple disabled={SchedulePlan}  className={`${toggleSP&&classes.toggle_class}`} icon={<Schedule/>} iconPosition={"start"} label="Schedule & Plan" {...a11yProps(1)} />
                                <CustomTab disableRipple disabled={YourDetail}  className={`${toggleYD&&classes.toggle_class}`} icon={<House/>} iconPosition={"start"} label="Your Details" {...a11yProps(2)} />
                                <CustomTab disableRipple disabled={MakePayment}  className={`${toggleMP&&classes.toggle_class}`} icon={<CreditCard/>} iconPosition={"start"} label="Make Payment" {...a11yProps(3)} />
                            </CustomTabs>
                            {/* -----------tabs ends ----------- */}
                            <TabPanel value={value} index={0} >
                                <Typography sx={{color:"#646464",fontWeight:'500'}}>Enter your portal code here</Typography>
                                <form action="" id='Postcode' onSubmit={CheckAvailibility} style={{display:'flex',flexWrap:'wrap'}}>
                                    <TextField
                                        type='text'
                                        placeholder='Postal code'
                                        name='postal_code'
                                        className={classes.inputField}
                                    />
                                    <ChkAvail type='submit'  >Check avalibility</ChkAvail>
                                </form>
                                <p className={classes.error_msg}>{(availError as any).Error}</p>
                                <p className={classes.error_msg}>{(availError as any).invalid}</p>
                                
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                {/* ----------- how many room bath starts ----------- */}
                                <form action="" id='schedule'  onSubmit={Calculate}>
                                <div className={classes.rooms_bath}>
                                <Typography component='p'  sx={{color:"#4F4F4F",fontWeight:'500',fontSize:'18px',marginBottom:'5px'}}>Select number of rooms and bath</Typography>
                                    <div style={{display:'flex'}}>
                                    <div style={{display:'inline'}}>
                                        <Select
                                            type='select'
                                            value={noOfbed}
                                            onChange={handleChangeBed}
                                            displayEmpty
                                            className={classes.select}
                                            IconComponent={narrowIcon}
                                            name='bed'
                                            >
                                                <MenuItem value={"0"}>0 &nbsp; bed</MenuItem>
                                                <MenuItem value={"1"}>1 &nbsp; bed</MenuItem>
                                                <MenuItem value={"2"}>2 &nbsp; bed</MenuItem>
                                                <MenuItem value={"3"}>3 &nbsp; bed</MenuItem>
                                                <MenuItem value={"4"}>4 &nbsp; bed</MenuItem>
                                        </Select>
                                        <p  className={classes.error_msg}>{(billError as any).bed}</p>
                                    </div>
                                    <div style={{display:'inline'}}>
                                        <Select
                                            type='select'
                                            value={noOfbath}
                                            onChange={handleChangeBath}
                                            displayEmpty
                                            IconComponent={narrowIcon}
                                            className={classes.select}
                                            name='bath'
                                            >
                                                <MenuItem value={"0"}>0 &nbsp; bath</MenuItem>
                                                <MenuItem value={"1"}>1 &nbsp; bath</MenuItem>
                                                <MenuItem value={"2"}>2 &nbsp; bath</MenuItem>
                                                <MenuItem value={"3"}>3 &nbsp; bath</MenuItem>
                                        </Select>
                                        <p className={classes.error_msg}>{(billError as any).bath}</p>
                                    </div>
                                    </div>
                                </div>
                                {/* -----------how many room bath ends ----------- */}
                                <HrLine/>
                                {/* -----------duration of cleaning starts ----------- */}
                                <div className={classes.time_duration}>
                                    <div className={classes.time_when}>
                                        <Typography component='p'  sx={{color:"#4F4F4F",fontWeight:'500',fontSize:'18px',marginBottom:'6px'}}>When do you need the cleaner?</Typography>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DesktopDatePicker
                                                
                                                InputAdornmentProps={{
                                                    position:'start',
                                                }}
                                                components={{
                                                    OpenPickerIcon:OpenDatePicker
                                                }}
                                                mask='__/__/____'
                                                inputFormat='dd/MM/yyyy'
                                                minDate={new Date()}
                                                value={date}
                                                onChange={(newValue:any) => {
                                                    setDateValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField name='date' className={classes.date_picker}  {...params} />}
                                            />
                                        </LocalizationProvider>
                                        
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DesktopTimePicker
                                            value={time}
                                            components={{
                                                OpenPickerIcon:narrowIcon
                                            }}
                                            onChange={(newValue:any) => {
                                                setTimeValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField name='time' className={classes.time_picker} {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                    <div className={classes.duration}>
                                    <Typography component='p'  sx={{color:"#4F4F4F",fontWeight:'500',fontSize:'18px',marginBottom:'5px'}}>How long do you need your cleaner to stay?</Typography>
                                        <Select
                                            type='select'
                                            value={noOfhrs}
                                            onChange={handleChangeHrs}
                                            displayEmpty
                                            sx={{minWidth:'156px'}}
                                            className={classes.select}
                                            IconComponent={narrowIcon}
                                            name='duration'
                                            >
                                                <MenuItem value={"3"}>3.0 Hrs</MenuItem>
                                                <MenuItem value={"4"}>4.0 Hrs</MenuItem>
                                                <MenuItem value={"5"}>5.0 Hrs</MenuItem>
                                                <MenuItem value={"6"}>6.0 Hrs</MenuItem>
                                        </Select>
                                        <p className={classes.error_msg}>{(billError as any).duration}</p>
                                    </div>
                                </div>
                                {/* -----------duration of cleaning ends ----------- */}
                                <HrLine/>
                                {/* -----------extra serivices starts ----------- */}                                                
                                <div className={classes.extra_service}>
                                    <Typography component='p'  sx={{color:"#4F4F4F",fontWeight:'500',fontSize:'18px'}}>Extra Services</Typography>
                                    
                                        <div className={classes.checkboxes}>
                                                <Checkbox
                                                    disableRipple
                                                    icon={<CabinateUnchecked/>}
                                                    checkedIcon={<CabinateChecked />}
                                                    className={classes.checkbox}
                                                    onChange={ExtraService}
                                                    name='Inside cabinates'
                                                />
                                                <Checkbox
                                                    disableRipple
                                                    icon={<FridgeUnchecked/>}
                                                    checkedIcon={<FridgeChecked />}
                                                    className={classes.checkbox}
                                                    onChange={ExtraService}
                                                    name='Inside fridge'
                                                />
                                                <Checkbox
                                                    disableRipple
                                                    icon={<OvenUnchecked/>}
                                                    checkedIcon={<OvenChecked />}   
                                                    className={classes.checkbox}
                                                    onChange={ExtraService}
                                                    name='Inside oven'
                                                />
                                                <Checkbox
                                                    disableRipple
                                                    icon={<WashUnchecked/>}
                                                    checkedIcon={<WashChecked />}  
                                                    className={classes.checkbox} 
                                                    onChange={ExtraService}
                                                    name='Laundry wash & dry'                                            
                                                />
                                                <Checkbox
                                                    disableRipple
                                                    icon={<WindowUnchecked/>}
                                                    checkedIcon={<WindowChecked/>}
                                                    className={classes.checkbox}
                                                    onChange={ExtraService}
                                                    name='Interior windows'
                                                />

                                        </div>
                                </div>
                                {/* -----------extra services ends ----------- */}
                                <HrLine/>
                                {/* -----------comments starts ----------- */}
                                <div className={classes.comment_checkbox}>
                                <Typography component='p'  sx={{color:"#4F4F4F",fontWeight:'500',fontSize:'16px',marginBottom:'6px'}}>Comments</Typography>
                                    
                                    <Textarea multiline minRows={3} onChange={Note} name='comment' sx={{minHeight:'70px'}}/>
                                    
                                    <div className={classes.pet_checkbox}><Checkbox name='pet' value='pet' onChange={HavePet} icon={<Span/>} className={classes.custom_checkbox} /> <p style={{color:'#646464',paddingTop:'2px'}}>I have pets at home</p></div>

                                </div>
                                {/* -----------comments ends ----------- */}
                                <HrLine/>

                                <Submit disableFocusRipple type='submit'  >Continue</Submit>
                                </form>
                            </TabPanel>
                           
                            <TabPanel value={value} index={2}>
                            <Typography className={classes.subheaders} sx={{marginBottom:'15px'}}>Enter your contact details, so we can serve you in better way!</Typography>
                            <form action="" id='radio-btns-grp'>
                            <RadioGroup value={selectAddress} onChange={SelectAddress}>
                                {
                                    Addresses.map((e:any)=>{
                                        
                                        return(
                                            <>
                                                <div className={classes.radio_btn_wrp}>
                                                    <Radio className={classes.radio_btn} name='address'  icon={<RadioIcon/>} value={ JSON.stringify(e)} /> 
                                                    <div className={classes.radio_btn_data}>
                                                        <div> <strong className={classes.subheaders}>Address:</strong> <p style={{display:'inline',color:'#4f4f4f'}}>{e.StreetName+', '+e.HouseNo+', '+e.PostalCode+', '+e.City}</p> </div>
                                                        <div> <strong className={classes.subheaders}>Phone number:</strong> <p style={{display:'inline',color:'#4f4f4f'}}>{e.Phonenumber} </p> </div>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </>
                                        )
                                    })
                                }
                                
                                </RadioGroup>
                                
                                 </form>
                                {!addAddress&&<Addaddress onClick={AddAddress}>+ Add New Address</Addaddress>}

                                {addAddress&&<form action="" className={classes.address_form} id='address-form' onSubmit={AddNewAddress} >
                                    <Grid container columnSpacing={{lg:2,md:2,sm:2}} rowSpacing={{lg:1,md:1,sm:1,xs:2}}>
                                        <Grid item lg={6} md={6} sm={6} xs={12}>
                                            <Typography className={classes.subheaders}>Street name</Typography>
                                                <TextField
                                                    type='text'
                                                    placeholder='Street name'
                                                    name='street_name'
                                                    className={classes.detailField}
                                                    onChange={(e:any)=>setStreet(e.target.value)}
                                                />
                                            {!street&&<p className={classes.error_msg}>{(dataErrors as any).streetname}</p>}
                                            <p className={classes.error_msg}>{(dataErrors as any).streetInvalid}</p>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={12}>
                                            <Typography className={classes.subheaders}>House number</Typography>
                                                <TextField
                                                    type='text'
                                                    placeholder='House number'
                                                    name='house_number'
                                                    className={classes.detailField}
                                                    onChange={(e:any)=>setHouseno(e.target.value)}
                                                />
                                            {!houseNo&&<p className={classes.error_msg}>{(dataErrors as any).houseno}</p>}
                                            <p className={classes.error_msg}>{(dataErrors as any).houseInvalid}</p>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={12}>
                                            <Typography className={classes.subheaders}>Postal code</Typography>
                                                <TextField
                                                    type='text'
                                                    placeholder='Postal code'
                                                    name='postal_code'
                                                    className={classes.detailField}
                                                    disabled
                                                    value={AddressPostalCode}
                                                />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={12}>
                                            <Typography className={classes.subheaders}>City</Typography>
                                                {/* <TextField
                                                    type='text'
                                                    placeholder='City'
                                                    name='city'
                                                    className={classes.detailField}
                                                    onChange={(e:any)=>setCity(e.target.value)}
                                                /> */}
                                                <Select
                                                    type='select'
                                                    value={city}
                                                    onChange={handleCity}
                                                    displayEmpty
                                                    
                                                    className={classes.SelectCity}
                                                    IconComponent={narrowIcon}
                                                    name='city'
                                                    >
                                                        
                                                        {
                                                            postCode.map((e:any)=>{
                                                                if(e.code===AddressPostalCode)
                                                                return <MenuItem value={e.city}>{e.city}</MenuItem>
                                                            })
                                                        }
                                                    
                                                
                                                 </Select>
                                            {!city&&<p className={classes.error_msg}>{(dataErrors as any).city}</p>}
                                            <p className={classes.error_msg}>{(dataErrors as any).cityInvalid}</p>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={12}>
                                            <Typography className={classes.subheaders}>Phone number</Typography>
                                                <TextField
                                                    type='tel'
                                                    className={classes.mobileno}
                                                    placeholder='Mobile number'
                                                    name='contact_number'
                                                    onChange={PhoneNumber}
                                                    InputProps={{
                                                        startAdornment:  <InputAdornment position="start"><span className={classes.span} >+49</span> </InputAdornment>
                                                    }}
                                                />
                                                {!mobile&&<p className={classes.error_msg}>{(dataErrors as any).contactno}</p>}
                                                <p className={classes.error_msg}>{(dataErrors as any).NumberInvalid}</p>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={0}>
                                            {null}
                                        </Grid>
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <div style={{display:'flex',paddingTop:'10px'}}>
                                                <ChkAvail type='submit'>Save</ChkAvail>
                                                <Cancel onClick={Reset}>Cancel</Cancel>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </form>}
                                
                                <div className={classes.pet_checkbox}><Checkbox name='pet' value='pet' onChange={differentAddress} icon={<Span/>} className={classes.custom_checkbox} /> <p style={{color:'#646464',paddingTop:'2px'}}>My billing address differs from the given address.</p></div>

                                {showBillAddr&&<form action="" className={classes.address_form} id='billAddress-form' onSubmit={BillingAddress} >
                                <Grid container columnSpacing={{lg:2,md:2,sm:2}} rowSpacing={{lg:1,md:1,sm:1,xs:2}}>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Typography className={classes.subheaders}>Street name</Typography>
                                            <TextField
                                                type='text'
                                                placeholder='Street name'
                                                name='street_name'
                                                className={classes.detailField}
                                                onChange={(e:any)=>setStreet(e.target.value)}
                                            />
                                        {!street&&<p className={classes.error_msg}>{(dataErrors as any).streetname}</p>}
                                        <p className={classes.error_msg}>{(dataErrors as any).streetInvalid}</p>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Typography className={classes.subheaders}>House number</Typography>
                                            <TextField
                                                type='text'
                                                placeholder='House number'
                                                name='house_number'
                                                className={classes.detailField}
                                                onChange={(e:any)=>setHouseno(e.target.value)}
                                            />
                                        {!houseNo&&<p className={classes.error_msg}>{(dataErrors as any).houseno}</p>}
                                        <p className={classes.error_msg}>{(dataErrors as any).houseInvalid}</p>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Typography className={classes.subheaders}>Postal code</Typography>
                                            <TextField
                                                type='text'
                                                placeholder='Postal code'
                                                name='postal_code'
                                                className={classes.detailField}
                                                disabled
                                                value={AddressPostalCode}
                                            />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Typography className={classes.subheaders}>City</Typography>
                                                <Select
                                                    type='select'
                                                    value={city}
                                                    onChange={handleCity}
                                                    displayEmpty
                                                    
                                                    className={classes.SelectCity}
                                                    IconComponent={narrowIcon}
                                                    name='city'
                                                    >
                                                        
                                                        {
                                                            postCode.map((e:any)=>{
                                                                if(e.code===AddressPostalCode)
                                                                return <MenuItem value={e.city}>{e.city}</MenuItem>
                                                            })
                                                        }
                                                    
                                                
                                                 </Select>
                                        {!city&&<p className={classes.error_msg}>{(dataErrors as any).city}</p>}
                                        <p className={classes.error_msg}>{(dataErrors as any).cityInvalid}</p>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <div style={{display:'flex',paddingTop:'10px'}}>
                                            <ChkAvail type='submit'>Save</ChkAvail>
                                        </div>
                                    </Grid>
                                </Grid>
                                </form>
                                }
                                <Typography className={classes.subheaders} sx={{marginTop:'15px'}}>Your favourite service providers</Typography>
                                <HrLine/>
                                <Submit disabled={selectadDisable} onClick={YourDetails} >Countinue</Submit>
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                            <Typography sx={{marginBottom:'10px'}} className={classes.subheaders}>Pay securely with helperland payment gateaway</Typography>
                            <Typography sx={{color:"#4f4f4f",fontSize:'16px',marginBottom:'5px'}}>Promo code (optional)</Typography>
                                <form action="" id='Promocode' style={{display:'flex',flexWrap:'wrap'}}>
                                
                                    <TextField
                                        type='text'
                                        placeholder='Promo code (optional)'
                                        name='promocode'
                                        className={classes.inputField}
                                    />
                                    <Addaddress type='submit'>Apply</Addaddress>
                                </form>
                                <HrLine/>
                                    <TextField
                                        type='text'
                                        placeholder='Card number'
                                        name='card_number'
                                        className={classes.detailField}
                                        sx={{margin:'20px 0'}}
                                        InputProps={{
                                            endAdornment :<InputAdornment position="end"> MM/YY  CVC </InputAdornment>
                                        }}
                                    />
                                <div className={classes.privacy_policy_container}>
                                    <Checkbox icon={<Span/>} onChange={PaymentPrivacy} className={classes.privacy_checkbox} /> <p style={{color:'#646464'}}>I accept <a href=""  title='terms and conditions'>terms and conditions</a> & <a  href="" title='privacy policy'>privacy policy</a> </p>
                                </div>
                                <HrLine/>
                                <Submit onClick={handleDialog} disabled={disableCompleteBooking} >Complete Booking</Submit>
                            </TabPanel>
                            </div>
                            {/* -----------main content bookservice ends ----------- */}

                            {/* -----------sub content bookservice starts ----------- */}
                            <div className="sub-content-bookservice">
                                {/* -----------payment summary starts ----------- */}
                                <div className={classes.payment_summary}>
                                    <span style={{backgroundColor:'#1D7A8C',color:'white',height:'67px',minWidth:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start',paddingLeft:'22px',fontSize:'18px',fontWeight:'400'}}>Payment Summary</span>
                                   {/* -----------total expenditure starts ----------- */}
                                   
                                    <div className={classes.payment_card_data} >
                                        <p style={{lineHeight:'26px',fontSize:'16px',color:'#646464',paddingBottom:'18px'}}> {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`} {` @ ${TIME} `} 
                                        
                                        <br /> {noOfbed?noOfbed:'0'} bed, {noOfbath?noOfbath:'0'} bath. <br />  {pet} {Comment?`Note : ${Comment}`:''}  </p>

                                        <p style={{color:'#646464',fontWeight:'500',lineHeight:'22px',marginBottom:'4px',fontSize:'18px'}}>Duration</p>
                                        <div className={classes.bill_calculation}  >
                                            <p className={classes.bill_subtext}>Basic</p> <p style={{color:'#646464',fontSize:'16px',lineHeight:'28px'}}>{noOfhrs?noOfhrs:'0'} Hrs</p>
                                        </div>
                                        <p style={{fontWeight:"500",color:"#4F4F4F",lineHeight:'28px'}}>Extras</p>
                                        <div className={classes.bill_calculation} style={{borderBottom:'1px solid #E1E1E1',paddingBottom:'6px',marginBottom:'6px'}} >
                                        
                                            <p className={classes.bill_subtext}>  
                                                {extraService&&Object.keys(extraService).map((e:any)=>{return <p>{e}</p> })} 
                                            </p> 
                                            <p style={{color:'#646464',fontSize:'16px',lineHeight:'28px'}}>
                                                {extraService&&Object.keys(extraService).map(()=>{return <p>30 mins</p>})}
                                            </p>
                                            
                                        </div>
                                        <div className={classes.bill_calculation}  >
                                            <p style={{fontWeight:"500",color:"#4F4F4F",lineHeight:'28px'}}>Total Service Time</p> <p style={{fontWeight:'600',color:'#646464',fontSize:'16px',lineHeight:'28px'}}>{totalHrs} Hrs</p>
                                        </div>
                                    </div> 
                                   {/* -----------total expenditure ends ----------- */}

                                   {/* -----------discount starts ----------- */}
                                    <div className={classes.payment_discount}>
                                        <div className={classes.bill_calculation}  >
                                            <p className={classes.bill_subtext}>Per cleaning</p> <p style={{fontWeight:'600',color:'#646464',fontSize:'16px',lineHeight:'28px'}}>${totalHrs*20} </p>
                                        </div>
                                        <div className={classes.bill_calculation}  >
                                            <p className={classes.bill_subtext}>Discount (20%)</p> <p style={{fontWeight:'600',color:'#646464',fontSize:'16px',lineHeight:'28px'}}>- ${(totalHrs*20)*0.2}</p>
                                        </div>
                                    </div>
                                   {/* -----------discount ends ----------- */}

                                   {/* -----------final calculation starts ----------- */}
                                    <div className={classes.final_price}>
                                         <div className={classes.bill_calculation} style={{minHeight:'0px',paddingBottom:'8px'}} >
                                            <p style={{color:'#1D7A8C',lineHeight:'28px',fontSize:'20px'}}>Total Payment</p> <p style={{color:"#1D7A8C",fontSize:'42px',fontWeight:'600',display:'inline-block',lineHeight:'42px'}}>${(totalHrs*20)-((totalHrs*20)*0.2)}</p>
                                        </div>
                                        {/* <div className={classes.bill_calculation} style={{paddingBottom:'8px'}} >
                                            <p className={classes.bill_subtext}>Effective Price</p> <p style={{fontSize:'20px',lineHeight:'28px',fontWeight:'600',color:'#646464'}}>$50.4</p>
                                        </div> */}
                                        <p style={{color:'#646464',lineHeight:'22px',fontSize:'14px'}}> <span style={{color:'red'}}>*</span>You will save 20% according to §35a EStG.</p>
                                    </div>
                                    {/* -----------final calculation ends ----------- */}
                                    <div className={classes.sweet_note}>
                                        <img src={smiley} alt="smiley" />
                                        <p style={{lineHeight:'28px',marginLeft:'8px',paddingTop:'2px',color:'#8D8D8D',fontSize:'14px'}}>See what is always included</p>
                                    </div>
                                </div>
                                {/* -----------payment summary ends ----------- */}

                                {/* -----------faq starts ----------- */}
                                <div className={classes.faq}>
                                    <Typography component='p'  sx={{color:"#4F4F4F",fontWeight:'600',fontSize:'20px',textAlign:'center',paddingRight:"28px"}}>Questions?</Typography>
                                    
                                    {
                                        Accordion_data.map((el:any)=>{
                                            return(
                                                <>
                                                    <Accordion expanded={expanded === `${el.panel}`} onChange={handleChangeAccordion(`${el.panel}`)}>
                                                        <AccordionSummary aria-controls={el.aria_control} id={el.id}>
                                                            <Typography>{el.title}</Typography>
                                                        </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography>
                                                                    {el.data}
                                                                </Typography>
                                                            </AccordionDetails>
                                                    </Accordion>
                                                </>
                                            );
                                        })
                                    }
                                    <NavLink to='/Faq' className={classes.more_help} title='help'>For more help</NavLink>
                                </div>
                                {/* -----------faq ends ----------- */}
                            </div>

                            {/* -----------sub content bookservice ends ----------- */}
  
                        </section>
                        {/* -----------book service content wrapper ends ----------- */}
                        <EmailForm/>
                    </section>
                    {/* -----------main content wrapper ends ----------- */}
                </main>
                <Footer/>
            </section>
            {/* -----------main  wrapper ends ----------- */}
            <Cookie/>
        </>
    );
}
export default BookService;