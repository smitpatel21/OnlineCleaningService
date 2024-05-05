import AdminNavbar from "../components/AdminNavbar";
import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { styled } from "@mui/styles";
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid, IconButton, InputAdornment, MenuItem, PaginationItem, Slide, TableSortLabel, TextField } from '@mui/material';
import {down_arrow} from '../assets/images/index'
import {sort_button} from '../assets/images/index'
import Menu from '@mui/material/Menu';
import Pagination from '@mui/material/Pagination';
import {add} from '../assets/images/index'
import {blue_calendar} from '../assets/images/index'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useEffect } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import {cap} from '../assets/images/index'
import {watch} from '../assets/images/index'
import {calender_user} from '../assets/images/index'
import {House} from '../assets/images/index'
import { admin_arrow ,dark_down_arrow} from "../assets/images/index"
import {Helmet,HelmetProvider} from 'react-helmet-async'
import { useContext } from "react";
import { LoginContext } from "../components/LoginContext";

import Rating from '@mui/material/Rating';
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { TransitionProps } from '@mui/material/transitions';
import DialogContent from '@mui/material/DialogContent';

import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
var XLSX= require('xlsx')


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
        
    }
})
const CustomDialog=styled(Dialog)({
    '& .MuiPaper-root.MuiDialog-paper':{
        width:'40vw',
        maxWidth:'none',
        '@media(max-width:575px)':{
            width:'100vw'
        }
    }
})

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }
const CustomDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{color:'#646464',paddingBottom:'0',fontSize:'18px'}} {...other}>
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

/* ------------- search button ------------- */
const Search = styled(Button)({
    '&.MuiButton-root':{
        width:"84px",
        height:"45px",
        borderRadius:"4px",
        marginRight:'10px'
    },
    '&.MuiButtonBase-root':{
        color:"white !important",
        backgroundColor:"#1FB6FF",
        textTransform:'capitalize',
        fontWeight:'normal',
        lineHeight:"7px",
        display:'flex',
        alignItems:'center',
        fontSize:"16px",
        '&:hover':{
            backgroundColor:"#79d3ff"
        },
    }
})
/* ------------- clear button ------------- */
const Clear = styled(Button)({
    '&.MuiButton-root':{
        width:"84px",
        height:"45px",
        borderRadius:"4px",
        border:'1px solid #DEDDDD',
    },
    '&.MuiButtonBase-root':{
        color:"#646464 !important",
        backgroundColor:"white",
        textTransform:'capitalize',
        fontWeight:'normal',
        lineHeight:"7px",
        display:'flex',
        alignItems:'center',
        fontSize:"16px",
        '&:hover':{
            border:'1px solid #1FB6FF',
            color:'#1FB6FF !important',
            backgroundColor:"white"
        },
    }
})
/* ------------- Add user button ------------- */
const AddUser=styled(Button)({
    
    '&.MuiButton-root':{
        minWidth:"132px",
        height:"36px",
        borderRadius:"4px",
        
    },
    '&.MuiButtonBase-root':{
        color:"white !important",
        backgroundColor:"#1FB6FF",
        textTransform:'capitalize',
        fontWeight:'normal',
        lineHeight:"7px",
        display:'flex',
        alignItems:'center',
        fontSize:"14px",
        '&:hover':{
            backgroundColor:"#79d3ff"
        },
        '&>img':{
            display:'block',
            marginRight:'6px'
        }

    },
    
})
/* ------------- custom tabs ------------- */
const CustomTabs=styled(Tabs)({
    '& .MuiTabs-indicator':{
        display:"none"
    },
    
    '&.MuiTabs-root':{
        border:"none",
    },    
})
/* ------------- custom tab button ------------- */
const CustomTab=styled(Tab)({
    '&.Mui-selected':{
        color:"#1FB6FF !important",
    }, 
    
    '&.MuiButtonBase-root ':{
        color:'#646464',
        borderBottom:"1px solid #e5e5e5",
        fontSize:"16px",
        textTransform:"capitalize",
        fontWeight:"normal",
        height:'50px',
        width:"100%",
        alignItems:"flex-start",
    },
    '@media(max-width:991px)':{

        
        '&.MuiButtonBase-root.MuiTab-root':{
            maxWidth:"100%"
        },
        
    },
    '&:hover':{
        color:"#1FB6FF",
    }
})
/* ------------- custom tab button ends ------------- */

/* ------------- custom tab panel ------------- */
const CustomTabPanel=styled(TabPanel)({
    '& .MuiBox-root':{
        padding:"0px !important",
    }
})
/* ------------- custom accordion starts------------- */
const CustomAccordion=styled(Accordion)({
    '& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded':{
        minHeight:'auto',
        height:'50px',
        marginBottom:'-10px'
    },
    '&.Mui-expanded':{
        backgroundColor:'#F9F9F9',
        
    }, 
    '& .MuiAccordionDetails-root':{
        paddingBottom:'6px',
    },
    '&.MuiPaper-root.MuiAccordion-root:last-of-type':{
        borderRadius:'0',
    },
    '&.MuiPaper-root.MuiAccordion-root:first-of-type':{
        borderRadius:'0',
    },
    '&.MuiPaper-root.MuiAccordion-root':{
        boxShadow:'none',
        borderBottom:"1px solid #e5e5e5",
        color:'#646464',
        margin:'0'
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '&.MuiPaper-root.MuiAccordion-root:before': {
        display:"none"
    },
    
        
})
/* ------------- custom accordion ends ------------- */

/* ------------- custom accordion tab starts ------------- */
const AccordionTab=styled(Tab)({
    '&.Mui-selected':{
        color:"#1FB6FF !important",
    }, 
    '&.MuiButtonBase-root ':{
        color:'#646464',
        fontSize:"15px",
        textTransform:"capitalize",
        fontWeight:"normal",
        width:"100%",
        alignItems:"flex-start",
        minHeight:'auto',
        height:'36px'
    },
    
    '@media(max-width:991px)':{
        '&.MuiButtonBase-root ':{
            fontSize:"16px"
        }
    },
    '&:hover':{
        color:"#1FB6FF",
    }
})
/* ------------- custom accordion tab ends ------------- */

/* ------------- custom styled classes starts------------- */
const styles=makeStyles({
    tabpanel_header:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:'14px',
        '& h3':{
            color:"#646464",
            fontSize:"22px",
            fontWeight:'bold'
        },
        '@media(max-width:575px)':{
            '& h3':{
                fontSize:"17px",                
            },
        }
        
    },
    selectuser:{
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1FB6FF",  
        },
        '&.MuiOutlinedInput-root.Mui-focused':{
            
            '& >div[aria-expanded="true"] ~ img':{
                transform:'rotate(180deg)',
                transition:".3s"
            }    
        },
        '&.MuiOutlinedInput-root>img':{
            transition:".3s"
        },
        '& .MuiSelect-select':{
            color:"#A0A0A0",
            opacity:"1",
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },
        '&.MuiOutlinedInput-root ':{
            display:"inline-flex",
            minWidth:"205px",
            paddingRight:'10px',
            height:"46px",
            marginRight:'15px',
            '@media(max-width:575px)':{
                minWidth:'100%'
            }
        },
        '& .MuiInputBase-input':{
            paddingRight:'0 !important',
        },
        

    },
    selectrole:{
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1FB6FF",  
        },
        
        '&.MuiOutlinedInput-root.Mui-focused':{
            
            '& >div[aria-expanded="true"] ~ img':{
                transform:'rotate(180deg)',
                transition:".3s"
            }    
        },
        '&.MuiOutlinedInput-root>img':{
            transition:".3s"
        },
        '& .MuiSelect-select':{
            color:"#A0A0A0",
            opacity:"1",
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },
        '&.MuiOutlinedInput-root ':{
            display:"inline-flex",
            minWidth:"205px",
            height:"46px",
            paddingRight:'10px',
            marginRight:'15px',
            '@media(max-width:575px)':{
                minWidth:'100%'
            }            

        },
        '& .MuiInputBase-input':{
            paddingRight:'0 !important',
        },
        
    },
    mobileno:{
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1FB6FF",  
        },
        
        '& .MuiOutlinedInput-root':{
            paddingLeft:"0" ,
        },
        '&.MuiFormControl-root.MuiTextField-root':{
            marginRight:'15px',
            '@media(max-width:575px)':{
                width:'100%',
                margin:'0'
            }

        },
        '& .MuiInputBase-root':{
            height:"46px",
            maxWidth:'210px',
            display:"inline-flex",     
            
            '@media(max-width:575px)':{
                width:'100%',
                maxWidth:'none'
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
        borderBottomLeftRadius:"4px",
        
    },
    zipcode:{
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1FB6FF",  
        },
        '&.MuiFormControl-root.MuiTextField-root':{
            marginRight:'15px',
            '@media(max-width:575px)':{
                width:'100%',
                margin:'0'
            }
        },
        '& .MuiInputBase-root':{
            height:"46px",
            maxWidth:'140px',
            display:"inline-flex",
            '@media(max-width:575px)':{
                minWidth:'100%',
                maxWidth:'none'
            }  
        },
        
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },
        
    },
    status:{
        display:'inline-flex',
        alignItems:'center',
        justifyContent:'center',
        height:'24px',
        width:'62px !important',
        textAlign:'center',
        lineHeight:'0',
        fontSize:'13px',
        color:'white',
    },
    service_status:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'24px',
        padding:'0 9px',
        width:'fit-content',
        textAlign:'center',
        lineHeight:'0',
        fontSize:'13px',
        color:'white',
    },
    pagination_section:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        height:'70px',
        backgroundColor:'white',
        padding:'0 15px',
        border:'1px solid #e0e0e0',
        borderTop:'none',
        '@media (max-width:767px)':{
            flexDirection:'column',
            height:'100%',
            borderTop:"1px solid #e0e0e0",
            padding:'10px 0'
        }
        
    },
    row_per_page:{
        maxWidth:'200px',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        '& p':{
            fontSize:'14px',
            color:'#646464',
        },
        '@media (max-width:767px)':{
            marginBottom:'20px'
        }
    },
    pagination:{
        
        '& .MuiPaginationItem-root.Mui-selected':{
            backgroundColor:'#565656',
            color:'white',
            border:'none',
            '&:hover':{
                backgroundColor:'#9a9a9a',
                color:'white',
                border:'none'
            }
        },
        
        '& .MuiPaginationItem-root':{
            color:'#646464',
            '&:hover':{
                backgroundColor:'#9a9a9a',
                color:'white',
                border:'none'
            },
            '@media(max-width:767px)':{
                marginBottom:'5px',
            },
            
        },
        '& .MuiButtonBase-root ':{
            '@media(max-width:575px)':{
                height:'30px',
                minWidth:'30px',
                
            },
            
            
        },
        '& .MuiButtonBase-root.MuiPaginationItem-root':{
            margin:'0',
            border:'1px solid #D6D6D6',
            borderRadius:'0px',
            borderLeft:'none'
            
        },
        '& .MuiPagination-ul':{
            '& li:first-child button':{
                borderTopLeftRadius:"4px",
                borderBottomLeftRadius:"4px",
                borderLeft:'1px solid #D6D6D6'
            },
            '& li:last-child button':{
                borderTopRightRadius:"4px",
                borderBottomRightRadius:"4px",
                // borderLeft:'1px solid #D6D6D6'
            },
            
        }

    },
    no_of_rows:{
        '&.Mui-focused':{
            border:"1px solid #1FB6FF",
            '& .MuiOutlinedInput-notchedOutline':{
                border:"none"
            },
            '&.MuiOutlinedInput-root>img':{
                transform:"rotate(180deg)",
                transition:".3s"
            },
        },
        '&.MuiOutlinedInput-root>img':{
            transition:".3s"
        },
        '& .MuiOutlinedInput-input':{
            paddingRight:'25px !important',
        },
        '& .MuiSelect-select':{
            width:"0px",
            color:"#646464",
            opacity:"1",
            fontSize:"14px",
            paddingRight:"0"
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#646464",
        },
        '&.MuiOutlinedInput-root ':{
            width:"58px",
            height:"40px",
        },        
    },
    service_date_wrapper:{
        display:'flex',
        flexDirection:"column",
    },
    date:{
        display:"flex",
        alignItems:'center',
        // marginBottom:'4px',
        '& >img':{
            marginRight:"6px"
        },
        '&>p':{
            paddingTop:"4px",
            fontWeight:"bold",
            lineHeight:'22px !important',
        }
    },
    time:{
        display:"flex",
        alignItems:"center",
        '&>img':{
            marginRight:"6px",
        },
        '&>p':{
            paddingTop:"4px",
            lineHeight:'20px'
        }
    },
    customer_details_wrapper:{
        display:'flex',
        flexDirection:"column",
        alignItems:"flex-start",

    },
    customer_review_wrapper:{
        display:'flex',
        alignItems:"center",
    },
    address:{
        display:"flex",
        alignItems:"flex-start",
        '& img':{
            marginRight:"6px",
            marginBottom:"5px"
        },
        '& p':{
            paddingTop:'4px'
        }
        
    },
    
    name_stars:{
        display:"flex",
        flexDirection:"column",
    },
    stars:{
        display:"flex",
        alignItems:"center"
    },
    star:{
        marginRight:'1px'
    },
    image_wrapper:{
        height:"44px",
        width:'44px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'50%',
        border:'1px solid #aaaaaa',
        marginRight:'12px'
    },
    service_req_table_row:{
        '& .MuiTableCell-root':{
            lineHeight:"22px !important",
        },
        '&>td:nth-child(5)>span':{
            margin:"0 auto",
            '@media(max-width:767px)':{
                margin:'0',
            }
        },
        '&>td:nth-child(1),&>td:nth-child(3),&>td:nth-child(6)':{
            paddingTop:'10px'
        },
        
    },
    serviceId_Input:{
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1FB6FF",  
        },
        '& .MuiInputBase-root':{
            height:'46px',
            width:'110px',
            '@media(max-width:575px)':{
                minWidth:'100%',
                maxWidth:'none'
            }  
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },
        '&.MuiFormControl-root.MuiTextField-root':{
            marginRight:'10px',
            '@media(max-width:575px)':{
                width:'100%',
                margin:'0'
            }
        },
    },
    customer:{
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1FB6FF",  
        },
        '&.MuiOutlinedInput-root.Mui-focused':{

            '& >div[aria-expanded="true"] ~ img':{
                transform:'rotate(180deg)',
                transition:".3s"
            }    
        },
        '&.MuiOutlinedInput-root>img':{
            transition:".3s"
        },
        '& .MuiSelect-select':{
            color:"#A0A0A0",
            opacity:"1",
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },
        '&.MuiOutlinedInput-root ':{
            display:"inline-flex",
            minWidth:"126px",
            height:"46px",
            paddingRight:'10px',
            marginRight:'10px' ,
            '@media(max-width:575px)':{
                minWidth:'100%'
            }            
        },
        '& .MuiInputBase-input':{
            paddingRight:'0 !important',
        },
        
    },
    service_provider:{
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1FB6FF",  
        },
        '&.MuiOutlinedInput-root.Mui-focused':{
            
            '& >div[aria-expanded="true"] ~ img':{
                transform:'rotate(180deg)',
                transition:".3s"
            }    
        },
        '&.MuiOutlinedInput-root>img':{
            transition:".3s"
        },
        '& .MuiSelect-select':{
            color:"#A0A0A0",
            opacity:"1",
            paddingLeft:'10px',
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },
        '&.MuiOutlinedInput-root ':{
            display:"inline-flex",
            minWidth:"152px",
            height:"46px",
            paddingRight:'7px',
            marginRight:'10px'  ,
            '@media(max-width:575px)':{
                minWidth:'100%'
            }            
        },
        '& .MuiInputBase-input':{
            paddingRight:'0 !important',
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        }
    },
    input_status:{
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1FB6FF",  
        },
        '&.MuiOutlinedInput-root.Mui-focused':{      
            '& >div[aria-expanded="true"] ~ img':{
                transform:'rotate(180deg)',
                transition:".3s"
            }    
        },
        '&.MuiOutlinedInput-root>img':{
            transition:".3s"
        },
        
        '& .MuiSelect-select':{
            color:"#A0A0A0",
            opacity:"1",
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },
        '&.MuiOutlinedInput-root ':{
            display:"inline-flex",
            minWidth:"120px",
            height:"46px",
            paddingRight:'10px',
            marginRight:'10px'  ,
            '@media(max-width:575px)':{
                minWidth:'100%'
            }            
        },
        '& .MuiInputBase-input':{
            paddingRight:'0 !important',
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        }
    },
    date_picker:{
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD',
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD',
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1FB6FF",
        },
        
        '& .MuiSelect-select':{
            // color:"#A0A0A0",
            // opacity:"1",
        },
        '& input::placeholder':{
            // opacity:"1",
            // color:"#A0A0A0",
        },  
        '& .MuiInputBase-input.MuiOutlinedInput-input':{
            padding:'0',
            height:"46px",
            
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root':{
            color:'#A0A0A0',
            width:'128px',    
            '@media(max-width:575px)':{
                width:'100%'
            }
        },
        '&.MuiFormControl-root.MuiTextField-root':{
            marginRight:'10px',
            '@media(max-width:575px)':{
                width:'100%',
                margin:'0'
            }
        },
        '& .MuiInputAdornment-root':{
            marginRight:'0'
        }
        
    },
    dialog_datePicker:{
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD',
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD',
            borderRadius:'0',
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1FB6FF",
        },
        '& .MuiSelect-select':{
            color:"#A0A0A0",
            opacity:"1",
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },  
        '& .MuiInputBase-input.MuiOutlinedInput-input':{
            padding:'0',
            height:"46px",
           
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root':{
            
        },
        '&.MuiFormControl-root.MuiTextField-root':{
            minWidth:'100%',
        },
        '& .MuiInputAdornment-root':{
            marginRight:'0'
        }
        
    },
    menuItem:{
        color:'#646464'
    },
    time_picker:{
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD',
        },
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #E1E1E1',
            borderRadius:'0',
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'#00000055'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1FB6FF",
        },
        
        '& .MuiInputBase-input.MuiOutlinedInput-input':{
            padding:'0 0 0 10px',
            height:"46px",
            color:"#646464",
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root':{
            
        },
        '&.MuiButtonBase-root.MuiIconButton-root':{
            margin:'0'
        },
        '&.MuiFormControl-root.MuiTextField-root':{
            minWidth:'100%',
        },
        '& .MuiInputAdornment-root':{
            marginRight:'0px',
            marginLeft:"0"
        },
        
    },
    dialogInputs:{
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD',
            borderRadius:'0',
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1FB6FF",  

        },
        '& .MuiInputBase-root':{
            height:'46px',
            
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },
        '&.MuiFormControl-root.MuiTextField-root':{
            maxWidth:'auto',
            minWidth:'100%',
        },
    },
    floatingMenu:{
        '& .MuiPaper-root.MuiMenu-paper.MuiPaper-root.MuiPopover-paper':{
            boxShadow: '0px 0px 6px #00000011'
        }
    },
    error_msg:{
        color:"red"
    },
    Toast:{
        '& .MuiPaper-root.MuiSnackbarContent-root':{
            backgroundColor:'red',
        }
    },
})
/* ------------- custom styled classes ends ------------- */
const Textarea=styled(TextField)({
    '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
        borderColor:'#00000055',
        
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
        border:"1px solid #1FB6FF",
    },
    '&.MuiFormControl-root.MuiTextField-root':{
        width:'100%',
        '@media(max-width:991px)':{
            width:'100%'
        },
        
    },
    '& .MuiOutlinedInput-notchedOutline':{
        border:'1px solid #C8C8C8',
        borderRadius:'0'
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root':{
        minHeight:'70px',
        padding:'10px'
    },
    '& input::placeholder':{
        opacity:"1",
        color:"#A0A0A0",
    },
    
    
})
/* ------------- custom table row starts ------------- */

const CustomTableRow=styled(TableRow)({

    '& .MuiTableCell-root':{
        fontSize:"16px !important",
        lineHeight:"16px ",
        color:"#646464 !important", 
        height:'64px',
        backgroundColor:"white",
    },
    '@media(max-width:991px)':{
        '& .MuiTableCell-root':{
            fontSize:'14px !important',
        }
    },
    '&:last-child td, &:last-child th': {
        border: 0 
    },
    
    '&>td:nth-child(2)':{
        minWidth:"100px",
        '@media(max-width:1199px)':{
            minWidth:'fit-content'
        }
    },
    
    
    '@media(max-width:767px)':{
        '&.MuiTableRow-root':{
            display:"flex",
            flexDirection:"column",
            maxWidth:"737px",
            width:'100%',
            marginBottom:"50px",
            border:'1px solid #e0e0e0',
            borderRadius:"4px",
            padding:"0",
            '&>td:last-child ':{
                borderBottom:"none"
            },
            '& .MuiTableCell-root':{
                padding:"15px 20px",
                height:'100%',  
            },
            '& td:last-child':{
                padding:'5px 20px',
            }
        },
        '&:last-child td, &:last-child th': { borderBottom: "1px solid #e0e0e0"},
    }
})
/* ------------- custom table row ends ------------- */

/* ------------- header data cell starts ------------- */

const HeaderDataCell=styled(TableCell)({
    fontSize:"16px !important",
    fontWeight:"bold",
    color:'#646464 !important',
    lineHeight:'18px !important',
    whiteSpace:'nowrap',
    '&.MuiTableCell-root ':{
        height:"56px",
        padding:"0 16px",
    },
    '@media(max-width:991px)':{
        fontSize:'14px !important',
        lineHeight:"16px !important",
        whiteSpace:"nowrap"
    }
})
/* ------------- header data cell ends ------------- */

/* ------------- custom table cell starts ------------- */

const CustomTableCell=styled(TableCell)({
    '&.MuiTableCell-root':{
        padding:"6px 15px",
    },
    '& .MuiTableCell-body':{
    }, 
})

/* ------------- custom table cell ends ------------- */

/* ------------- tab functionality ------------- */

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
          <Box sx={{ p: 3 }}>
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
/* ------------- tab functionality ends ------------- */

/* ------------- small Icons starts ------------- */

  const Icon=()=>{
    return (
    <>
        <img src={down_arrow} alt="dropdown arrow" />
    </>
    );
  }
  const ExpandIcon=()=>{
    return (
    <>
        <img style={{transform:'rotate(-90deg)'}} src={admin_arrow} alt="Accordion arrow" />
    </>
    );
  }
  const sortIcon=()=>{
    return(
        <>
        <img style={{marginLeft:"10px"}} src={sort_button} alt="" />
        </>
    );
  }
  const OpenDatePicker=()=>{
      return(
          <>
          <img src={blue_calendar} alt="calendar" />
          </>
      );
  }
  /* ------------- small Icons ends ------------- */

  /* ------------- small submenu starts ------------- */


/* ------------- small submenu ends ------------- */

/* ------------- table data of service request starts ------------- */

/* ------------- table data of service request ends ------------- */

/* ------------- tabel cell components starts ------------- */

type prop_for_service_date={
    date:string,
    time:string
  }
const ServiceDate=(props:prop_for_service_date)=>{
  const classes=styles();
  return(
      <>
        <div className={classes.service_date_wrapper}>
            <div className={classes.date}>
                <img src={calender_user} alt="calender" />                
                <p>{props.date}</p>
            </div>
            <div className={classes.time}>
                <img src={watch} alt="clock" />                
                <p>{props.time}</p>
            </div>
        </div>
      </>
  );
 }
 
 type prop_for_Rating={
    name:string,
    rating:number,
    avatar:any
 }

   const ServiceProvider=(props:prop_for_Rating)=>{
    const classes=styles();
       return(
           <>
                <div className={classes.customer_review_wrapper}>
                    <div className={classes.image_wrapper}>
                        <img style={{width:'42px'}} src={props.avatar} alt="cap" />
                    </div>
                    <div className={classes.name_stars}>
                        <p style={{lineHeight:'18px'}}>{props.name}</p>
                        <div className={classes.stars}>
                            <Rating name="simple-controlled" precision={0.5} value={props.rating} readOnly />
                            <span style={{lineHeight:'24px',display:"block",height:'20px',paddingLeft:"3px"}}>{props.rating}</span>
                        </div>
                        
                    </div>
                </div>
           </>
       );
   }
 type prop_for_name_address={
    name:string,
    address:string
   }

   const CustomerDetails=(props:prop_for_name_address)=>{
    const classes=styles();

    // const {StreetName,HouseNo,PostalCode,City}=props.address as any
       return(
           <>
                <div className={classes.customer_details_wrapper}>
                    <div  >
                        <p>{props.name}</p>
                    </div>
                    <div className={classes.address}>
                        <img src={House} alt="house" />
                        {props.address&&<p>{(props.address as any).StreetName}, {(props.address as any).HouseNo}, {(props.address as any).PostalCode}, {(props.address as any).City} </p>}
                    </div>
                </div>
           </>
       );
   }
type prop_service_status={
    status:string    
}
    const ServiceStatus=(props:prop_service_status)=>{
        const classes=styles();
        return(
            <>
                {(props.status==='New')? <span className={classes.service_status} style={{backgroundColor:"#F2BB37",fontWeight:'300'}}>New</span> :(props.status==='Complete')? <span className={classes.service_status} style={{backgroundColor:'#67B644'}}>Completed</span>:<span className={classes.service_status} style={{backgroundColor:'#FF6B6B',fontWeight:'300'}}>Canceled</span>}
            </>
        );
    }
  type prop_user_status={
    userstatus:string
  }
    const UserStatus=(props:prop_user_status)=>{
        const classes=styles();
        return(
            <>
                {(props.userstatus==='Active')?
                 <span className={classes.status} style={{backgroundColor:"#67b644",fontWeight:'300'}}>Active</span> 
                : <span className={classes.status} style={{backgroundColor:'#ff6b6b',fontWeight:'300'}}>Inactive</span>}
            </>
        );
    }

    /* ------------- table cell components ends ------------- */

    /* ------------- table data of use management starts ------------- */

    type prop_for_date_time={
        date:string,
      }
    const RegisterationDate=(props:prop_for_date_time)=>{
      const classes=styles();
      return(
          <>
            <div className={classes.service_date_wrapper}>
                <div className={classes.date}>
                    <img src={calender_user} alt="calender" />
                    <p>{props.date}</p>
                </div>
            </div>
          </>
      );
     }
    
     const OpenTimePicker=()=>{
        return <img  src={dark_down_arrow} alt='down arrow'/>
    }
/* ------------- side bar menu data starts ------------- */
const adminSideMenu=[
    {
        label:'Service Management',
        a11yprops:0,
        submenu:null
    },
    {
        label:'Role Management',
        a11yprops:1,
        submenu:null
    },
    {
        text:'Coupon Code Management',
        submenu:[
            {
                label:'Coupon Codes',
                allyprops:2,
                submenu:null
            },
            {
                label:'Usage History',
                allyprops:3,
                submenu:null
            }
        ]
    },
    {
        label:'Escalation Management',
        a11yprops:4,
        submenu:null
    },
    {
        label:'Service Request',
        a11yprops:5,
        submenu:null
    },
    {
        label:'Service Providers',
        a11yprops:6,
        submenu:null
    },
    {
        label:'User Management',
        a11yprops:7,
        submenu:null
    },
    {
        text:'Finance Module',
        submenu:[
            {
                label:'All Transactions',
                allyprops:8,
                submenu:null
            },
            {
                label:'Generate Payment',
                allyprops:9,
                submenu:null
            },
            {
                label:'Customer Invoices',
                allyprops:10,
                submenu:null
            }
        ]
    },
    {
        label:'Zipcode Management',
        a11yprops:11,
        submenu:null
    },
    {
        label:'Rating Management',
        a11yprops:12,
        submenu:null
    },
    {
        label:'Inquiry Management',
        a11yprops:13,
        submenu:null
    },
    {
        label:'Newsletter Management',
        a11yprops:14,
        submenu:null
    },
    
    {
        text:'Content Management',
        submenu:[
            {
                label:'Blog',
                allyprops:15,
                submenu:null
            },
            {
                label:'FAQs',
                allyprops:16,
                submenu:null
            }
        ]
    },
]
/* ------------- side bar menu data ends ------------- */

/* ----------- sorting ends  ----------- */
const descending=(a:any,b:any,orderby:any)=>{
      if(b[orderby]<a[orderby])
        return -1;
      if(b[orderby]>a[orderby])
        return 1;
      return 0;
  }
  const getComparator=(order:any,orderby:any)=>{
      return order==='desc'
      ? (a:any,b:any) => descending(a,b,orderby)
      : (a:any,b:any) => -descending(a,b,orderby)
      
  }
  const sortedRows=(array:any,comparator:any)=>{
        const stabilizeArray=array.map((el:any,index:any)=>[el,index]);
        stabilizeArray.sort((a:any,b:any)=>{
            const order =comparator(a[0],b[0])
            if(order !== 0) 
            return order
            return a[1] - b[1]
        })
        return stabilizeArray.map((el:any)=>el[0])
  }
  /* ----------- sorting  ends  ----------- */
const AdminDashboard=()=>{
    const classes=styles();
    const {isauth,setAuth}:any =useContext(LoginContext)
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    {/* -------------- filter ----------------- */}
    const [user,setUser]=useState('all')
    const [ID,setID]=useState(-1)
    const [userName,setUserName]=useState('');
    const [userRole,setUserRole]=useState('0');
    const [serviceProvider,setServiceProvider]=useState('');
    const [customerUserName,setCustomerUserName]=useState('');
    const [users,setUsers]=useState([]);
    const [defaultUsers,setDefaultUsers]=useState([]);
    const [orders,setOrders]=useState([]);
    const [defaultOrders,setDefaultOrders]=useState([]);
    const [toggleList,setToggleList]=useState(false);
    useEffect(()=>{
        fetch('http://localhost:2000/Orders')
        .then(res=>res.json())
        .then(result=>{
            setDefaultOrders(result);
            setOrders(result);
        });

        fetch('http://localhost:2000/Data')
        .then(res=>res.json())
        .then(result=>{
            setUsers(result.filter((e:any)=>{
                return e.UserTypeId!==3;
            }))

            setDefaultUsers(result.filter((e:any)=>{
                return e.UserTypeId!==3;
            }))

        })

    },[toggleList])
    
    const [status,setStatus]=useState('');
    const handleStatus = (e:any) =>{
        setStatus(e.target.value)
    }
    const handleUsernameChange=(event: SelectChangeEvent)=>{
        setUserName(event.target.value as string);
        setUser(event.target.value as string);
    }
    const handleUserroleChange=(event: SelectChangeEvent)=>{
        setUserRole(event.target.value as string)
    }
    const handleID=(event: React.ChangeEvent<unknown>)=>{
        setID(parseInt((event.target as HTMLInputElement).value))
    }
    const handleServiceProvider=(event: SelectChangeEvent)=>{
        setServiceProvider(event.target.value as string)
    }
    const customerUsernameChange=(event: SelectChangeEvent)=>{
        setCustomerUserName(event.target.value as string)
    }
    /* ----------- for filtering row   ----------- */
    
    {/* ---------------filter ends ----------------- */}
    {/* ---------------- rows per pages starts -------------- */}

    
    const [page,setPage]=useState(0);
    const [rowsPerPage,setRowsPerPage]=useState('5')
    const handlePage = (
        event:React.ChangeEvent<unknown>,
        newPage: number,
    ) => {
        setPage(newPage-1);
    };
    const handleRowsPerPage = (event: SelectChangeEvent) => {
        setRowsPerPage(event.target.value as string);
    };
    {/* ---------------- rows per pages ends -------------- */}
    {/*------- for accordion ----------*/}
    const [name,setName]=useState('Service Management');
    const setname=(e:any)=>{
        setName(e);
    }
    
    /* ----------- seting order of row  ----------- */
    const [Order,setOrder] = useState('asc');
    const [OrderBy,setOrderBy] = useState('id');
    const handleSort=(property:any)=>{
        const isAsc=(OrderBy === property && Order === 'asc')
        setOrderBy(property)
        setOrder(isAsc ? 'desc': 'asc');   
        
    }
    const [searchClear,setSearchClear]=useState(true)
    const [filterDateFrom,setFilterDateFrom]=useState<Date|null>(new Date()) as any;
    const [filterDateTo,setFilterDateTo]=useState(new Date()) as any;
    const FilterFunction = (element:any) =>{
        element.preventDefault();
        let form=document.getElementById('Search-for-Orders') as HTMLFormElement
        
        
        if(searchClear){

            let filteredOrder=defaultOrders as any;
            
            if(ID!==-1){
                
                filteredOrder= filteredOrder.filter((e:any)=>{
                    return (e.ServiceId===ID)
                })
            }
            if(customerUserName!==''){
                
                filteredOrder= filteredOrder.filter((e:any)=>{
                    return (e.Name===(customerUserName))
                })
            }
            if(serviceProvider!==''){
                
                filteredOrder= filteredOrder.filter((e:any)=>{
                    return (e.ServiceProvider===(serviceProvider))
                })
            }
            if(status!==''){
                
                filteredOrder= filteredOrder.filter((e:any)=>{
                    return (e.Status===status)
                })
            }
            if(form.filterdateFrom.value!==''){
            
                filteredOrder = filteredOrder.filter((e:any)=>{
                    let Rangedate=false;
                    let day=parseInt(e.Date.substr(0,2));
                    let month=parseInt(e.Date.substr(3,5));
                    let year=parseInt(e.Date.substr(6,10));
                    
                    let fromDate=filterDateFrom.getDate();
                    let fromMonth=filterDateFrom.getMonth()+1;
                    let fromYear=filterDateFrom.getFullYear();
                    let toDate=filterDateTo.getDate();
                    let toMonth=filterDateTo.getMonth()+1;
                    let toYear=filterDateTo.getFullYear();

                    if((fromYear<year&&toYear>year)){
                        Rangedate=true;console.log('a')
                    }
                    else{
                        
                        if((fromMonth<month&&toMonth>month)){
                            Rangedate=true;
                        }
                        else if(((fromMonth===month)&&(toMonth!==month))&&(fromDate<=day)){
                            Rangedate=true;
                        }
                        else if(((fromMonth!==month)&&(toMonth===month))&&(toDate>=day)){
                            Rangedate=true;
                        }
                        else if((((fromMonth===month)&&(toMonth===month))&&((fromDate<=day)&&(toDate>=day)))){
                            Rangedate=true
                        }
                        
                        
                    }
                    return Rangedate;
                })
            }
            setOrders(filteredOrder)
           
        }
        else{
            setOrders(defaultOrders)
            setID(-1)  
        }
        
        
    }
    
    const FilterforUsers=(element:any)=>{
        element.preventDefault();
        let formUsers=document.getElementById('Filter-for-Users') as HTMLFormElement


        let filteredUsers=defaultUsers as any;
            
        if(searchClear){
            if(userName!==''){
                filteredUsers=filteredUsers.filter((e:any)=>{
                    return ((e.Firstname+' '+e.Lastname)===userName)
                })
            }
            if(userRole!=='0'){
                filteredUsers=filteredUsers.filter((e:any)=>{
                    return (e.UserTypeId===parseInt(userRole))
                })
            }
            if(formUsers.contact_number.value!==''){
                filteredUsers=filteredUsers.filter((e:any)=>{
                    return (e.MobileNumber===(formUsers.contact_number.value))
                })
            }
            if(formUsers.postalcode.value!==''){
                filteredUsers=filteredUsers.filter((e:any)=>{
                    return (e.Address?.PostalCode===(formUsers.postalcode.value))
                })
            }
            setUsers(filteredUsers)
        }
        else{
            setUsers(defaultUsers);
            setUserName('');
            setUserRole('0');
            element.target.reset();
        }
    }
    // rows per page 
    let Orders = parseInt(rowsPerPage) > 0
    ? orders.slice(page * parseInt(rowsPerPage), page * parseInt(rowsPerPage) + parseInt(rowsPerPage))
    : orders

    let Users = parseInt(rowsPerPage) > 0
    ? users.slice(page * parseInt(rowsPerPage), page * parseInt(rowsPerPage) + parseInt(rowsPerPage))
    : users
    const [openDetailDialog,setOpenDetailDialog]=useState(false)
    const closeDetailDialog=()=>{
        setOpenDetailDialog(false)
    }    

    const [tempUser,setTempUser]=useState([]) as any;
    const handleClickUser = (event: React.MouseEvent<HTMLElement>,userId:any) => {
        setAnchorEl(event.currentTarget);
        setTempUser(users.filter((e:any)=>{
            return e.UniqueId===userId;
        }))
    };
    const handleCloseUser = () => {
        setAnchorEl(null);
    };
    
    
    const [tempOrder,setTempOrder]=useState([]) as any;
    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);
        const handleClickReq = (event: React.MouseEvent<HTMLElement>,elementId:any) => {
            setTempOrder(orders.filter((e:any)=>{
                return e.ServiceId===elementId
            }))
            setAnchorEl(event.currentTarget);
        };
        const handleCloseReq = () => {
            setAnchorEl(null);
        };
        const EditReschedule=()=>{
            
            setOpenDetailDialog(true)
            setAnchorEl(null);
        }
        
        const cancelReq=async(element:any)=>{
            let MailPara={
                Name:tempOrder[0]['Name'],
                Mailto:[tempOrder[0]['UniqueUID']+'.com'],
                Messege:`your service request has been canceled by admin `
            }
            emailjs.send('Reschedule','RstPwd' ,MailPara, '9BlD6397XdGSbKNUb')
        
            setToggleList(!toggleList)
            let UpdateStatus={
                ...(tempOrder as any)[0],Status:'Cancel',
            }
            setAnchorEl(null)
            await fetch(`http://localhost:2000/Orders/${tempOrder[0]['id']}`,{
                method:'PUT',
                body:JSON.stringify(UpdateStatus),
                headers:{
                    'Content-Type':'application/json'
                }
            })
        }
    const [date,setDateValue]=useState<Date|null>(new Date()) as any;
    const [time,setTimeValue]=useState(new Date()) as any;

    const [streetService,setStreetService]=useState('');
    const [houseService,setHouseService]=useState('');
    const [postalService,setPostalService]=useState('');
    const [cityService,setCityService]=useState('');

    const [streetBilling,setStreetBilling]=useState('');
    const [houseBilling,setHouseBilling]=useState('');
    const [postalBilling,setPostalBilling]=useState('');
    const [cityBilling,setCityBilling]=useState('');
    const [providerAllOrder,setProviderAllOrder]=useState([]) as any;
    const [customerAllOrder,setCustomerAllOrder]=useState([]) as any;
    
    useEffect(()=>{
        setStreetService(tempOrder[0]&&tempOrder[0]['Address']['StreetName'])
        setHouseService(tempOrder[0]&&tempOrder[0]['Address']['HouseNo'])
        setPostalService(tempOrder[0]&&tempOrder[0]['Address']['PostalCode'])
        setCityService(tempOrder[0]&&tempOrder[0]['Address']['City'])
        setStreetBilling(tempOrder[0]&&tempOrder[0]['BillingAddress']['StreetName'])
        setHouseBilling(tempOrder[0]&&tempOrder[0]['BillingAddress']['HouseNo'])
        setPostalBilling(tempOrder[0]&&tempOrder[0]['BillingAddress']['PostalCode'])
        setCityBilling(tempOrder[0]&&tempOrder[0]['BillingAddress']['City'])
        setDateValue(`${tempOrder[0]&&tempOrder[0]['Date'].substr(3,2)}/${tempOrder[0]&&tempOrder[0]['Date'].substr(0,2)}/${tempOrder[0]&&tempOrder[0]['Date'].substr(6,10)}`)
        setTimeValue(tempOrder[0]&&tempOrder[0]['TimeStamp'])


        setProviderAllOrder((defaultOrders.filter((e:any)=>{
            const date=new Date();
            
            let conflict=false;
            if((parseInt(e['Date'].substr(6,10))>date.getFullYear()))
                conflict=true;
            else if((parseInt(e['Date'].substr(6,10))===date.getFullYear())){
                if((parseInt(e['Date'].substr(3,2))>(date.getMonth()+1))){
                    conflict=true;
                }
                else if((parseInt(e['Date'].substr(3,2))===(date.getMonth()+1))){
                    if((parseInt(e['Date'].substr(0,2))>date.getDate())){
                        conflict=true;
                    }
                    else if((parseInt(e['Date'].substr(0,2))===date.getDate())){
                        conflict=true;
                    }
                }
            }
            
            return ((e['ServiceProviderId']===tempOrder[0].ServiceProviderId)&&conflict);
        })))
        setCustomerAllOrder(
            (defaultOrders.filter((e:any)=>{
                const date=new Date();
                
                let conflict=false;
                if((parseInt(e['Date'].substr(6,10))>date.getFullYear()))
                    conflict=true;
                else if((parseInt(e['Date'].substr(6,10))===date.getFullYear())){
                    if((parseInt(e['Date'].substr(3,2))>(date.getMonth()+1))){
                        conflict=true;
                    }
                    else if((parseInt(e['Date'].substr(3,2))===(date.getMonth()+1))){
                        if((parseInt(e['Date'].substr(0,2))>date.getDate())){
                            conflict=true;
                        }
                        else if((parseInt(e['Date'].substr(0,2))===date.getDate())){
                            conflict=true;
                        }
                    }
                }
                
                return ((e['UniqueUID']===tempOrder[0].UniqueUID)&&conflict);
            }))
        )




    },[tempOrder])
    const [UpdateError,setUpdateError]=useState({})
    let UpdateErrorObj={};
    const ValidateUpdate=()=>{
        let errors={}
        const regx=/^\d{10}$/;
        const regxForText=/^[A-Za-z, ]+$/
        let regxForHouse=/[0-9]|[0-9][0-9]|[0-9][0-9][0-9]$/
        let regxForPost=/^\d{6}$/;

        if(!streetService)
            (errors as any).streetReq='Street name is required!'
        else if(!regxForText.test(streetService))
            (errors as any).streetInvalid='Street name is invalid!'
        if(!houseService)
            (errors as any).houseReq='House number is required!'
        else if(!regxForHouse.test(houseService))
            (errors as any).houseInvalid='House number is invalid!'
        if(!postalService)
            (errors as any).postalReq='Postal code is required!'
        else if(!regxForPost.test(postalService))
            (errors as any).postalInvalid='Postal code is invalid!'
        if(!cityService)
            (errors as any).cityReq='City name is required!'
        else if(!regxForText.test(cityService))
            (errors as any).cityInvalid='City name is invalid!'
            
        return errors;
    }
    
    const UpdateSchedule=async()=>{
        let form=document.getElementById('Reschedule-form') as HTMLFormElement
        UpdateErrorObj=ValidateUpdate();
        setUpdateError(UpdateErrorObj)

        if(Object.keys(UpdateErrorObj).length===0){
            setToggleList(!toggleList)
            

            let BillAdr={
                StreetName:tempOrder[0]['BillingAddress']['StreetName'],
                HouseNo:tempOrder[0]['BillingAddress']['HouseNo'],
                PostalCode:tempOrder[0]['BillingAddress']['PostalCode'],
                City:tempOrder[0]['BillingAddress']['City'],
            }
            let ServiceAdr={
                StreetName:tempOrder[0]['Address']['StreetName'],
                HouseNo:tempOrder[0]['Address']['HouseNo'],
                PostalCode:tempOrder[0]['Address']['PostalCode'],
                City:tempOrder[0]['Address']['City'],
            }
            let tempBillAdr;
            if(tempOrder[0]['BillingAddress']['StreetName']===undefined){
                tempBillAdr='Same as Service Address'
            }
            else{
                tempBillAdr={...BillAdr}
            }
            let Hours=parseInt(form.time.value.substr(0,2))
            let Minutes=parseInt(form.time.value.substr(3,2))
            let duration=tempOrder[0].Duration;
            let totalMin=duration*60+Minutes;
            let FinalHours=(Math.floor(totalMin/60))+Hours;
            
            let FinalMin=totalMin%60;
            
            if(FinalHours>12){
                FinalHours=FinalHours-12;   
            }
            
            let End=0.0 as any,Start=0.0 as any;
            if(form.time.value.substr(6,7)!=='am'&&(time.getHours()>12)){
                End=(Math.floor(totalMin/60))+Hours+12;
                Start=Hours+parseFloat((Minutes/60).toFixed(1))+12;
            }
            else{
                End=(Math.floor(totalMin/60))+Hours;
                Start=Hours+parseFloat((Minutes/60).toFixed(1));
            }

            let finalTime=`${FinalHours<10? `0${FinalHours}`:FinalHours}:${FinalMin<10? `0${FinalMin}`:FinalMin}`

            if(tempOrder[0].ServiceProviderId!==''){
                let conflictObjForPro=providerAllOrder.filter((e:any)=>{
                    let conflictVar=true;
                    let changedDate=parseInt(form.date.value.substr(0,2));
                    let changedMonth=parseInt(form.date.value.substr(3,2));
                    let changedYear=parseInt(form.date.value.substr(6,10));
                    let changedStartTime=Hours+parseFloat((Minutes/60).toFixed(1));
                    let changedEndTime=(FinalMin===0)?End+parseFloat((FinalMin/60).toFixed(1)):(End-1)+parseFloat((FinalMin/60).toFixed(1));
                    
                    
                    let conflictDate=parseInt(e.Date.substr(0,2));
                    let conflictMonth=parseInt(e.Date.substr(3,2));
                    let conflictYear=parseInt(e.Date.substr(6,10));
                    let conflictStartTime=e.StartTime
                    let conflictEndTime=e.EndTime
                    
                    if(changedYear>conflictYear){
                        conflictVar=false;
                    }
                    else if(changedYear===conflictYear){
                        
                        if((changedMonth>conflictMonth)||(changedMonth<conflictMonth)){
                            conflictVar=false;
                        }
                        else if(changedMonth===conflictMonth){
                            
                            if((changedDate>conflictDate)||(changedDate<conflictDate)){
                                conflictVar=false;
                            }
                            else if(changedDate===conflictDate){
                                if((changedStartTime>conflictEndTime)&&(conflictStartTime>changedEndTime)){
                                    conflictVar=false;
                                }
                            }
                        }
                    }
                    if(e.ServiceId===tempOrder[0]['ServiceId'])
                        conflictVar=false;

                    return conflictVar
                })

                let conflictObjForCust=customerAllOrder.filter((e:any)=>{
                    let conflictVar=true;
                    let changedDate=parseInt(form.date.value.substr(0,2));
                    let changedMonth=parseInt(form.date.value.substr(3,2));
                    let changedYear=parseInt(form.date.value.substr(6,10));
                    let changedStartTime=Hours+parseFloat((Minutes/60).toFixed(1));
                    let changedEndTime=(FinalMin===0)?End+parseFloat((FinalMin/60).toFixed(1)):(End-1)+parseFloat((FinalMin/60).toFixed(1));
                    
                    
                    let conflictDate=parseInt(e.Date.substr(0,2));
                    let conflictMonth=parseInt(e.Date.substr(3,2));
                    let conflictYear=parseInt(e.Date.substr(6,10));
                    let conflictStartTime=e.StartTime
                    let conflictEndTime=e.EndTime
                    
                    if(changedYear>conflictYear){
                        conflictVar=false;
                    }
                    else if(changedYear===conflictYear){
                        
                        if((changedMonth>conflictMonth)||(changedMonth<conflictMonth)){
                            conflictVar=false;
                        }
                        else if(changedMonth===conflictMonth){
                            
                            if((changedDate>conflictDate)||(changedDate<conflictDate)){
                                conflictVar=false;
                            }
                            else if(changedDate===conflictDate){
                                if((changedStartTime>conflictEndTime)&&(conflictStartTime>changedEndTime)){
                                    conflictVar=false;
                                }
                            }
                        }
                    }
                    if(e.ServiceId===tempOrder[0]['ServiceId'])
                        conflictVar=false;

                    return conflictVar
                })
                console.log(conflictObjForPro)
                console.log(conflictObjForCust)
                if((Object.keys(conflictObjForPro).length===0)&&(Object.keys(conflictObjForCust).length===0)){
                    let customer={
                        Name:tempOrder[0]['Name'],
                        Mailto:[tempOrder[0]['UniqueUID']+'.com'],
                        Messege:`Your Order rescheduled by on ${form.time.value.substr(0,5)+' - '+finalTime} at ${form.date.value} admin`
                    }
                    emailjs.send('Reschedule','RstPwd' ,customer, '9BlD6397XdGSbKNUb')
                    let provider={
                        Name:tempOrder[0]['ServiceProvider'],
                        Mailto:[tempOrder[0]['ServiceProviderId']+'.com'],
                        Messege:`Your Order rescheduled by on ${form.time.value.substr(0,5)+' - '+finalTime} at ${form.date.value} admin`
                    }
                    emailjs.send('Reschedule','RstPwd' ,provider, '9BlD6397XdGSbKNUb')
                    
                    let UpdateSchedule={
                        ...tempOrder[0],
                        Time:form.time.value.substr(0,5)+' - '+finalTime,
                        Date:form.date.value,
                        // TimeStamp:time.getTime(),
                        StartTime:Start,
                        EndTime:(FinalMin===0)?End+parseFloat((FinalMin/60).toFixed(1)):(End-1)+parseFloat((FinalMin/60).toFixed(1)),
                        Address:{...ServiceAdr,...tempOrder[0]['Address']},
                        BillingAddress:tempBillAdr,
                        RescheduleReason:""
                    }
                    await fetch(`http://localhost:2000/Orders/${tempOrder[0]['id']}`,{
                        method:'PUT',
                        body:JSON.stringify(UpdateSchedule),
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
                    
                    setOpenDetailDialog(false)
                }
                else{
                    setOpenToaster(true);
                    setOpenDetailDialog(false)
                }
            }else{
                let conflictObjForCust=customerAllOrder.filter((e:any)=>{
                    let conflictVar=true;
                    let changedDate=parseInt(form.date.value.substr(0,2));
                    let changedMonth=parseInt(form.date.value.substr(3,2));
                    let changedYear=parseInt(form.date.value.substr(6,10));
                    let changedStartTime=Hours+parseFloat((Minutes/60).toFixed(1));
                    let changedEndTime=(FinalMin===0)?End+parseFloat((FinalMin/60).toFixed(1)):(End-1)+parseFloat((FinalMin/60).toFixed(1));
                    
                    
                    let conflictDate=parseInt(e.Date.substr(0,2));
                    let conflictMonth=parseInt(e.Date.substr(3,2));
                    let conflictYear=parseInt(e.Date.substr(6,10));
                    let conflictStartTime=e.StartTime
                    let conflictEndTime=e.EndTime
                    
                    if(changedYear>conflictYear){
                        conflictVar=false;
                    }
                    else if(changedYear===conflictYear){
                        
                        if((changedMonth>conflictMonth)||(changedMonth<conflictMonth)){
                            conflictVar=false;
                        }
                        else if(changedMonth===conflictMonth){
                            
                            if((changedDate>conflictDate)||(changedDate<conflictDate)){
                                conflictVar=false;
                            }
                            else if(changedDate===conflictDate){
                                if((changedStartTime>conflictEndTime)&&(conflictStartTime>changedEndTime)){
                                    conflictVar=false;
                                }
                            }
                        }
                    }
                    
                    return conflictVar
                })
                // console.log(conflictObjForPro)
                console.log(conflictObjForCust)
                if((Object.keys(conflictObjForCust).length===0)){
                    let customer={
                        Name:tempOrder[0]['Name'],
                        Mailto:[tempOrder[0]['UniqueUID']+'.com'],
                        Messege:`Your Order rescheduled by on ${form.time.value.substr(0,5)+' - '+finalTime} at ${form.date.value} admin`
                    }
                    emailjs.send('Reschedule','RstPwd' ,customer, '9BlD6397XdGSbKNUb')
                    let provider={
                        Name:tempOrder[0]['ServiceProvider'],
                        Mailto:[tempOrder[0]['ServiceProviderId']+'.com'],
                        Messege:`Your Order rescheduled by on ${form.time.value.substr(0,5)+' - '+finalTime} at ${form.date.value} admin`
                    }
                    emailjs.send('Reschedule','RstPwd' ,provider, '9BlD6397XdGSbKNUb')
                    
                    let UpdateSchedule={
                        ...tempOrder[0],
                        Time:form.time.value.substr(0,5)+' - '+finalTime,
                        Date:form.date.value,
                        // TimeStamp:time.getTime(),
                        StartTime:Start,
                        EndTime:(FinalMin===0)?End+parseFloat((FinalMin/60).toFixed(1)):(End-1)+parseFloat((FinalMin/60).toFixed(1)),
                        Address:{...ServiceAdr,...tempOrder[0]['Address']},
                        BillingAddress:tempBillAdr,
                        RescheduleReason:""
                    }
                    await fetch(`http://localhost:2000/Orders/${tempOrder[0]['id']}`,{
                        method:'PUT',
                        body:JSON.stringify(UpdateSchedule),
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
                    
                    setOpenDetailDialog(false)
                }
                else{
                    // console.log(UpdateSchedule)
                    setOpenToaster(true)
                    setOpenDetailDialog(false)
                }
            }
            
            
        }
    }
    const ExportXlsx=()=>{
        setAnchorEl(null);
        const workSheet=XLSX.utils.json_to_sheet(tempOrder)
        const workBook=XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workBook,workSheet,'xyz')
        // let buf=XLSX.write(workBook,{bookType:'xlsx',type:'buffer'})
        XLSX.write(workBook,{bookType:'xlsx',type:'binary'})
        XLSX.writeFile(workBook,'ServiceDetail.xlsx')
        
    }
    const StatusManage =async (element:any)=>{
        
        let MailPara={
                Name:tempUser[0]['Firstname']+" "+tempUser[0]['Lastname'],
                Mailto:[tempUser[0]['EmailAddress']],
                Messege:`your account has been  ${element.target.innerText}d by admin `
            }
        emailjs.send('Reschedule','RstPwd' ,MailPara, '9BlD6397XdGSbKNUb')
        setToggleList(!toggleList)
        setAnchorEl(null);
        if(element.target.innerText==='Activate'){
            let UpdateStatus={
                ...tempUser[0],UserStatus:'Active'
            }
            await fetch(`http://localhost:2000/Data/${tempUser[0]['id']}`,{
                method:'PUT',
                body:JSON.stringify(UpdateStatus),
                headers:{
                    'Content-Type':'application/json'
                }
            })
        }
        else{
            let UpdateStatus={
                ...tempUser[0],UserStatus:'Inactive'
            }
            await fetch(`http://localhost:2000/Data/${tempUser[0]['id']}`,{
                method:'PUT',
                body:JSON.stringify(UpdateStatus),
                headers:{
                    'Content-Type':'application/json'
                }
            })
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
            message='Reschedule request is in conflict'
            
            action={action}
            className={classes.Toast}
        />
                                            

        <CustomDialog
            onClose={closeDetailDialog}
            TransitionComponent={Transition}
            aria-labelledby="customized-dialog-title"
            open={openDetailDialog}
        >
            <CustomDialogTitle id="customized-dialog-title" onClose={closeDetailDialog} > Service Details </CustomDialogTitle>
            <CustomDialogContent>
            <form action="" id='Reschedule-form'>
            <Grid container sx={{marginBottom:'15px'}} columnSpacing={{lg:2,md:2,sm:2}} rowSpacing={{lg:2,sm:2,md:2,xs:2}}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography sx={{color:'#646464',fontWeight:"600"}}>Date</Typography>
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
                        value={date}
                        minDate={new Date()}
                        onChange={(newValue:any) => {
                            setDateValue(newValue);
                        }}
                        renderInput={(params) => <TextField name='date' className={classes.dialog_datePicker}   {...params} />}
                    />
                </LocalizationProvider>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography sx={{color:'#646464',fontWeight:"600"}}>Time</Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopTimePicker
                        value={time}
                        components={{
                            OpenPickerIcon:OpenTimePicker
                        }}
                        onChange={(newValue:any) => {
                            setTimeValue(newValue);
                        }}
                        renderInput={(params) => <TextField name='time'  className={classes.time_picker} {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Typography sx={{color:'#646464',fontWeight:"600"}}>Service Address</Typography>
            <Grid container sx={{marginBottom:'15px'}} columnSpacing={{lg:2,md:2,sm:2}} rowSpacing={{lg:2,sm:2,md:2,xs:2}}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography sx={{color:'#646464'}}>Street name</Typography>
                    <TextField
                        placeholder='Street name'
                        className={classes.dialogInputs}
                        value={streetService}
                        
                        onChange={(e:any)=>setStreetService(e.target.value)}
                    />
                    {!streetService&&<p className={classes.error_msg}>{(UpdateError as any).streetReq}</p>}
                    <p className={classes.error_msg}>{(UpdateError as any).streetInvalid}</p>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography sx={{color:'#646464'}}>House number</Typography>
                    <TextField
                        placeholder='House number'
                        className={classes.dialogInputs}
                        value={houseService}
                        onChange={(e:any)=>setHouseService(e.target.value)}
                    />
                    {!houseService&&<p className={classes.error_msg}>{(UpdateError as any).houseReq}</p>}
                    <p className={classes.error_msg}>{(UpdateError as any).houseInvalid}</p>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography sx={{color:'#646464'}}>Postal code</Typography>
                    <TextField
                        placeholder='Postal code'
                        className={classes.dialogInputs}
                        value={postalService}
                        onChange={(e:any)=>setPostalService(e.target.value)}
                    />
                    {!postalService&&<p className={classes.error_msg}>{(UpdateError as any).postalReq}</p>}
                    <p className={classes.error_msg}>{(UpdateError as any).postalInvalid}</p>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography sx={{color:'#646464'}}>City</Typography>
                    <TextField
                        placeholder='City'
                        className={classes.dialogInputs}
                        value={cityService}
                        onChange={(e:any)=>setCityService(e.target.value)}
                    />
                    {!cityService&&<p className={classes.error_msg}>{(UpdateError as any).cityReq}</p>}
                    <p className={classes.error_msg}>{(UpdateError as any).cityInvalid}</p>
                </Grid>
            </Grid>
            <Typography sx={{color:'#646464',fontWeight:"600"}}>Invoice Address</Typography>
            <Grid container sx={{marginBottom:'15px'}} columnSpacing={{lg:2,md:2,sm:2}} rowSpacing={{lg:2,sm:2,md:2,xs:2}}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography sx={{color:'#646464'}}>Street name</Typography>
                    <TextField
                        placeholder='Street name'
                        className={classes.dialogInputs}
                        value={streetBilling}
                        onChange={(e:any)=>setStreetBilling(e.target.value)}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography sx={{color:'#646464'}}>House number</Typography>
                    <TextField
                        placeholder='House number'
                        className={classes.dialogInputs}
                        value={houseBilling}
                        onChange={(e:any)=>setHouseBilling(e.target.value)}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography sx={{color:'#646464'}}>Postal code</Typography>
                    <TextField
                        placeholder='Postal code'
                        className={classes.dialogInputs}
                        value={postalBilling}
                        onChange={(e:any)=>setPostalBilling(e.target.value)}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography sx={{color:'#646464'}}>City</Typography>
                    <TextField
                        placeholder='City'
                        className={classes.dialogInputs}
                        value={cityBilling}
                        onChange={(e:any)=>setCityBilling(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Typography sx={{color:'#646464',fontWeight:"600",marginBottom:'5px'}}>Why do you want to Reschedule service?</Typography>
            <Textarea multiline minRows={3}  name='comment' sx={{minHeight:'70px',marginBottom:'15px'}} placeholder='Why do you want to Reschedule service?'/>
            <Search onClick={UpdateSchedule} sx={{width:'100% !important',minHeight:'46px !important',margin:"0 !important"}}>Update</Search>
            </form>
            </CustomDialogContent>
        </CustomDialog>
        {/* ----------- main wrapper starts  ----------- */}
            <section className="wrapper">
                <HelmetProvider>
                    <Helmet>
                        <title>Admin | Helperland</title>
                    </Helmet>
                </HelmetProvider>
                <div className="overlay"></div>
                <AdminNavbar/>
               <main>
               {/* ----------- admin main wrapper starts  ----------- */}
                    <div className="admin-content-wrapper">
                    {/* ----------- side menu starts ----------- */}
                        <div className="side-menu-admin">   
                                   
                            <CustomTabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{  borderColor: 'divider'}}
                            >
                                {
                                    adminSideMenu.map((e:any)=>{
                                        const subMenu=(el:any)=>{
                                            if(el.submenu===null)
                                            return;
                                            else{
                                                return(
                                                    <CustomAccordion >
                                                        <AccordionSummary expandIcon={<ExpandIcon/>} >
                                                            <p>{el.text}</p>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                        <CustomTabs
                                                            orientation="vertical"
                                                            variant="scrollable"
                                                            value={value}
                                                            onChange={handleChange}
                                                            aria-label="Vertical tabs example"
                                                            sx={{  borderColor: 'divider'}}                   
                                                            >
                                                                {
                                                                    el.submenu.map((element:any)=>{
                                                                        return(                                                                           
                                                                            <AccordionTab onClick={(e:any)=>setname((e.target as HTMLInputElement).innerHTML)} disableRipple label={element.label} {...a11yProps(parseInt(`${element.a11yprops}`))} /> || subMenu(element)
                                                                        );
                                                                        
                                                                    })
                                                                }
                                                            
                                                        </CustomTabs>
                                                        </AccordionDetails>                                                        
                                                    </CustomAccordion>
                                                );
                                            }
                                        }
                                        return(                                            
                                            !e.submenu && <CustomTab onClick={(e:any)=>setname((e.target as HTMLInputElement).innerHTML)} disableRipple label={e.label} {...a11yProps(parseInt(`${e.a11yprops}`))} /> || subMenu(e)
                                        );
                                        
                                    })
                                    
                                }    
                            </CustomTabs>
                            
                        </div>
                    {/* ----------- side menu ends  ----------- */}
                        
                    {/* ----------- menu data admin starts  ----------- */}
                        <div className="main-data-admin">
                            <CustomTabPanel value={value} index={0}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3>  </div>
                                One
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3>  </div>
                                Two
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3>  </div>
                                Three
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={3}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3>  </div>
                                Four
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={4}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3> </div>
                                {/* -----------  top search bar   ----------- */}
                                <form action="" id='Search-for-Orders' onSubmit={FilterFunction}>
                                <div className="search">
                                        <TextField
                                            inputProps={{ inputMode: 'numeric' }}
                                            placeholder='Service ID'
                                            onChange={handleID}                                            
                                            className={classes.serviceId_Input}
                                        />
                                        <Select
                                            type='select'
                                            value={customerUserName}
                                            onChange={customerUsernameChange}
                                            displayEmpty
                                            IconComponent={Icon}
                                            
                                            className={classes.customer}
                                        >
                                            <MenuItem value={""}>Customer</MenuItem>
                                            {
                                                users.map((e:any)=>{
                                                    if(e.UserTypeId===1)
                                                    return <MenuItem value={e.Firstname+' '+e.Lastname}>{e.Firstname+' '+e.Lastname}</MenuItem>
                                                })
                                            }
                                        </Select>
                                        <Select
                                            type='select'
                                            value={serviceProvider}
                                            onChange={handleServiceProvider}
                                            displayEmpty
                                            IconComponent={Icon}
                                        
                                            className={classes.service_provider}
                                            >
                                            <MenuItem value={""}>Service Provider</MenuItem>
                                            {
                                                users.map((e:any)=>{
                                                    if(e.UserTypeId===2)
                                                    return <MenuItem value={e.Firstname+' '+e.Lastname}>{e.Firstname+' '+e.Lastname}</MenuItem>
                                                })
                                            }
                                            
                                        </Select>
                                        <Select
                                            type='select'
                                            value={status}
                                            onChange={handleStatus}
                                            displayEmpty
                                            IconComponent={Icon}
                                            placeholder='Status'
                                            className={classes.input_status}
                                            
                                            >
                                            
                                            <MenuItem value={""}>Status</MenuItem>
                                            <MenuItem value={"New"}>New</MenuItem>
                                            <MenuItem value={"Cancel"}>Canceled</MenuItem>
                                            <MenuItem value={"Complete"}>Completed</MenuItem>
                                        </Select>
                                        
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
                                                value={filterDateFrom}
                                                onChange={(newValue:any) => {
                                                    setFilterDateFrom(newValue);
                                                }}
                                                renderInput={(params) => <TextField name='filterdateFrom'  className={classes.date_picker}  {...params} />}
                                            />
                                        </LocalizationProvider>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DesktopDatePicker
                                                InputAdornmentProps={{
                                                    position:'start'
                                                }}
                                                components={{
                                                    OpenPickerIcon:OpenDatePicker
                                                }}
                                                mask='__/__/____'
                                                inputFormat='dd/MM/yyyy'
                                                value={filterDateTo}
                                                onChange={(newValue:any) => {
                                                    setFilterDateTo(newValue);
                                                }}
                                                renderInput={(params) => <TextField name='filterdateTo' className={classes.date_picker}  {...params}  />}
                                            />
                                        </LocalizationProvider>
                                        <Search type='submit' onClick={()=>setSearchClear(true)} >Search</Search>
                                        <Clear type='submit' onClick={()=>setSearchClear(false)} >Clear</Clear>
                                        
                                    </div>
                                    </form>
                                    <TableContainer component={Paper}  sx={{borderRadius:"0",border:"1px solid #E1E1E1",boxShadow:"none",'@media(max-width:767px)':{border:"none"}}}>
                                    <Table  aria-label="simple table" >

                                        {/*---------------------table header starts---------------------*/}

                                        <TableHead sx={{backgroundColor:"#F9F9F9",'@media(max-width:767px)':{display:"none"}}}>
                                        <TableRow >
                                            <HeaderDataCell > <TableSortLabel onClick={()=>handleSort('ServiceId')} IconComponent={sortIcon}>Service ID</TableSortLabel> </HeaderDataCell>
                                            <HeaderDataCell align="left"><TableSortLabel onClick={()=>handleSort('Date')} IconComponent={sortIcon}>Service date</TableSortLabel></HeaderDataCell>
                                            <HeaderDataCell align="left">Customer details</HeaderDataCell>
                                            <HeaderDataCell align="left">Service provider</HeaderDataCell>
                                            <HeaderDataCell align="left"> <TableSortLabel onClick={()=>handleSort('TotalPayment')} IconComponent={sortIcon}> Gross Amount </TableSortLabel></HeaderDataCell>
                                            <HeaderDataCell align="center"><TableSortLabel onClick={()=>handleSort('Status')}  IconComponent={sortIcon}>Status</TableSortLabel></HeaderDataCell>
                                            <HeaderDataCell align="center">Action</HeaderDataCell>
                                        </TableRow>
                                        </TableHead>

                                        {/*---------------------table header ends---------------------*/}

                                        {/*---------------------table body starts---------------------*/}

                                        <TableBody   sx={{'&.MuiTableBody-root':{backgroundColor:"#f2f4f5",}}}>
                                        {sortedRows(Orders,getComparator(Order,OrderBy)).map((row:any) => (
                                            <CustomTableRow  key={row.ServiceId} className={classes.service_req_table_row} >

                                            {/*---------------------id---------------------*/}
                                            <CustomTableCell align='center' >
                                                {row.ServiceId}
                                            </CustomTableCell>
                                            <CustomTableCell  >
                                                <ServiceDate date={row.Date} time={row.Time} />
                                            </CustomTableCell>

                                            {/*--------------------- service date---------------------*/}

                                            <CustomTableCell align="left" >
                                                <CustomerDetails name={row.Name} address={row.Address}/>
                                            </CustomTableCell>

                                            {/*---------------------customer details ---------------------*/}

                                            <CustomTableCell align="left" >
                                                {row.ServiceProvider&&<ServiceProvider avatar={row.Avatar} name={row.ServiceProvider} rating={row.Rating} />}
                                            </CustomTableCell>
                                            
                                            <CustomTableCell align="center">{row.TotalPayment} €</CustomTableCell>
                                            
                                            <CustomTableCell align="center" sx={{'@media(max-width:767px)':{textAlign:'left'}}}>
                                                <ServiceStatus status={row.Status}/>
                                            </CustomTableCell>

                                            {/*---------------------RateSP button---------------------*/}

                                            <CustomTableCell align="center" sx={{'@media(max-width:767px)':{textAlign:'left'}}}>
                                                <IconButton
                                                aria-label="more"
                                                id="long-button"
                                                aria-controls={open ? 'long-menu' : undefined}
                                                aria-expanded={open ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={(e:any)=>handleClickReq(e,row.ServiceId)}
                                                
                                                >
                                                    <MoreVertIcon />
                                                </IconButton>
                                                <Menu
                                                    id="long-menu"
                                                    MenuListProps={{
                                                    'aria-labelledby': 'long-button',
                                                    }}
                                                    anchorEl={anchorEl}
                                                    anchorOrigin={{vertical:'bottom',horizontal:'right'}}
                                                    transformOrigin={{vertical:'top',horizontal:'right'}}
                                                    open={open}
                                                    onClose={handleCloseReq}
                                                    className={classes.floatingMenu}
                                                >
                                                    
                                                    {tempOrder[0]&&<MenuItem className={classes.menuItem} disabled={(tempOrder as any)[0].Status==='Complete'||(tempOrder as any)[0].Status==='Cancel'} onClick={EditReschedule}> Edit & Reschedule </MenuItem>}
                                                    <MenuItem className={classes.menuItem} onClick={handleCloseReq}> Refund </MenuItem>
                                                    {tempOrder[0]&&<MenuItem className={classes.menuItem} disabled={(tempOrder as any)[0].Status==='Complete'||(tempOrder as any)[0].Status==='Cancel'}  onClick={cancelReq}> Cancel </MenuItem>}
                                                    {tempOrder[0]&&<MenuItem className={classes.menuItem} disabled={(tempOrder as any)[0].Status==='Complete'||(tempOrder as any)[0].Status==='Cancel'} onClick={handleCloseReq}> Change SP </MenuItem>}
                                                    <MenuItem className={classes.menuItem} onClick={handleCloseReq}> Escalate </MenuItem>
                                                    <MenuItem className={classes.menuItem} onClick={handleCloseReq}> History Log </MenuItem>
                                                    <MenuItem className={classes.menuItem} onClick={ExportXlsx}> Download Invoice </MenuItem>
                                                </Menu>
                                                </CustomTableCell>
                                            </CustomTableRow>
                                        ))}
                                        {/*---------------------custome row ends---------------------*/}
                                        
                                        </TableBody>

                                        {/*---------------------table body ends---------------------*/}
                                            
                                    </Table>
                            
                                </TableContainer>
                                {/* ----------- pagination starts  ----------- */}
                                    <div className={classes.pagination_section}>
                                    <div className={classes.row_per_page}>
                                        <p>Show</p>
                                        <Select
                                        className={classes.no_of_rows}
                                        value={rowsPerPage}
                                        onChange={handleRowsPerPage}
                                        >                                    
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                            <MenuItem value={15}>15</MenuItem>
                                        </Select>
                                        <p>Total Entries {orders.length}</p>
                                        
                                    </div>
                                    <Pagination className={classes.pagination}  siblingCount={1} boundaryCount={0} size='large' renderItem={(item) => (
                                        <PaginationItem
                                            components={{ previous: ArrowLeftIcon , next: ArrowRightIcon  }}
                                            {...item}
                                        />)}
                                    count={5} shape='rounded' variant='outlined' onChange={(event: React.ChangeEvent<unknown>,value:number)=>handlePage(event, value)} 
                                    />
                                </div>
                                {/* ----------- pagination ends  ----------- */}
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={5}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3>  </div>
                                six
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={6}>
                                <form action="" id='Filter-for-Users' onSubmit={FilterforUsers}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3> <AddUser> <img src={add} alt="" /> Add new user</AddUser> </div>
                                {/* ----------- top seach bar   ----------- */}
                                    <div className="search">
                                        <Select
                                        type='select'
                                        value={userName}
                                        onChange={handleUsernameChange}
                                        displayEmpty
                                        IconComponent={Icon}                                        
                                        className={classes.selectuser}
                                        >

                                            <MenuItem value={""}>User name</MenuItem>
                                            {
                                                defaultUsers.map((e:any)=>{
                                                    return <MenuItem value={e.Firstname+' '+e.Lastname}>{e.Firstname}</MenuItem>
                                                })
                                            }
                                            
                                            
                                        </Select>
                                        <Select
                                            type='select'
                                            value={userRole}
                                            onChange={handleUserroleChange}
                                            displayEmpty
                                            IconComponent={Icon}                                                                                   
                                            className={classes.selectrole}
                                            >
                                            <MenuItem value={0}>Usertype</MenuItem>
                                            <MenuItem value={1}>Customer</MenuItem>
                                            <MenuItem value={2}>Service Provider</MenuItem>
                                        </Select>
                                        <TextField                                            
                                            type='tel'
                                            className={classes.mobileno}
                                            placeholder='Phone number'
                                            name='contact_number'
                                            InputProps={{
                                                startAdornment:  <InputAdornment position="start"><span className={classes.span} >+49</span> </InputAdornment>
                                            }}
                                        />
                                        <TextField
                                            inputProps={{ inputMode: 'numeric' }}                                     
                                            className={classes.zipcode}
                                            placeholder='Zipcode'     
                                            name='postalcode'                                       
                                        />
                                        
                                        <Search type='submit' onClick={()=>setSearchClear(true)}>Search</Search>
                                        <Clear type='submit' onClick={()=>setSearchClear(false)}>Clear</Clear>
                                        
                                    </div>
                                    </form>
                                <TableContainer component={Paper}  sx={{borderRadius:"0",border:"1px solid #E1E1E1",boxShadow:"none",'@media(max-width:767px)':{border:"none"}}}>
                                    <Table  aria-label="simple table" >

                                        {/*---------------------table header starts---------------------*/}

                                        <TableHead sx={{backgroundColor:"#F9F9F9",'@media(max-width:767px)':{display:"none"}}}>
                                        <TableRow  >
                                            <HeaderDataCell > <TableSortLabel onClick={()=>handleSort('Firstname')} IconComponent={sortIcon}>User Name</TableSortLabel> </HeaderDataCell>
                                            <HeaderDataCell align="left">User Type</HeaderDataCell>
                                            <HeaderDataCell align="left"> <TableSortLabel onClick={()=>handleSort('RegisterDate')} IconComponent={sortIcon}> Register Date</TableSortLabel></HeaderDataCell>
                                            <HeaderDataCell align="left">Postal Code</HeaderDataCell>
                                            <HeaderDataCell align="left">City</HeaderDataCell>
                                            <HeaderDataCell align="left">Contact</HeaderDataCell>
                                            <HeaderDataCell align="left"><TableSortLabel onClick={()=>handleSort('UserStatus')} IconComponent={sortIcon}>User Status</TableSortLabel></HeaderDataCell>
                                            <HeaderDataCell align="center">Action</HeaderDataCell>
                                        </TableRow>
                                        </TableHead>

                                        {/*---------------------table header ends---------------------*/}

                                        {/*---------------------table body starts---------------------*/}

                                        <TableBody   sx={{'&.MuiTableBody-root':{backgroundColor:"#f2f4f5",}}}>
                                        {sortedRows(Users,getComparator(Order,OrderBy)).map((row:any) => (
                                            <CustomTableRow  key={row.UniqueId} >

                                            {/*---------------------id---------------------*/}

                                            <CustomTableCell  >
                                                {row.Firstname} {row.Lastname}
                                            </CustomTableCell>

                                            {/*--------------------- service date---------------------*/}

                                            <CustomTableCell align="left">
                                                {row.UserTypeId===1?'Customer':'Service Provider'}
                                            </CustomTableCell>

                                            {/*---------------------customer details ---------------------*/}

                                            <CustomTableCell align="left">
                                                
                                                <RegisterationDate date={row.RegisterDate} />
                                            </CustomTableCell>

                                            <CustomTableCell align="left">
                                                {row.Address&&row.Address.PostalCode}
                                            </CustomTableCell>

                                            <CustomTableCell align="left">
                                            {row.Address&&row.Address.City}
                                            </CustomTableCell>

                                            <CustomTableCell align="left">
                                                {row.MobileNumber}
                                            </CustomTableCell>

                                            {/*---------------------status---------------------*/}

                                            <CustomTableCell  align='center' sx={{'@media(max-width:767px)':{textAlign:'left'}}}>
                                                <UserStatus userstatus={row.UserStatus} /> 
                                             </CustomTableCell>

                                            {/*---------------------RateSP button---------------------*/}

                                            <CustomTableCell align="center" sx={{'@media(max-width:767px)':{textAlign:'left'}}}>
                                            <IconButton
                                                aria-label="more"
                                                id="long-button"
                                                aria-controls={open ? 'long-menu' : undefined}
                                                aria-expanded={open ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={(e:any)=>handleClickUser(e,row.UniqueId)}
                                            >
                                                <MoreVertIcon />
                                            </IconButton>
                                            <Menu
                                                id="long-menu"
                                                MenuListProps={{
                                                'aria-labelledby': 'long-button',
                                                }}
                                                anchorEl={anchorEl}
                                                anchorOrigin={{vertical:'bottom',horizontal:'right'}}
                                                transformOrigin={{vertical:'top',horizontal:'right'}}
                                                open={open}
                                                onClose={handleCloseUser}
                                                className={classes.floatingMenu}
                                            >
                                                
                                                <MenuItem className={classes.menuItem} onClick={handleCloseUser}> Edit </MenuItem>
                                                
                                                {tempUser[0]&&<MenuItem className={classes.menuItem} onClick={StatusManage}>{tempUser[0].UserStatus==='Active'?`Deactivate`:'Activate'}  </MenuItem>}
                                                <MenuItem className={classes.menuItem} onClick={handleCloseUser}> Service History </MenuItem>
                                                
                                            </Menu>
                                            </CustomTableCell>
                                            </CustomTableRow>
                                        ))}
                                        {/*---------------------custome row ends---------------------*/}
                                        
                                        </TableBody>

                                        {/*---------------------table body ends---------------------*/}
                                            
                                    </Table>
                            
                                </TableContainer>
                                {/* ----------- pagination starts  ----------- */}
                                <div className={classes.pagination_section}>
                                    <div className={classes.row_per_page}>
                                        <p>Show</p>
                                        <Select
                                        className={classes.no_of_rows}
                                        value={rowsPerPage}
                                        onChange={handleRowsPerPage}
                                        >                                    
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                            <MenuItem value={15}>15</MenuItem>
                                        </Select>
                                        <p>entries {defaultUsers.length}</p>
                                        
                                    </div>
                                    <Pagination className={classes.pagination}  siblingCount={1} boundaryCount={0} size='large' renderItem={(item) => (
                                        <PaginationItem
                                            components={{ previous: ArrowLeftIcon , next: ArrowRightIcon  }}
                                            {...item}
                                        />)}
                                    count={5} shape='rounded' variant='outlined' onChange={(event: React.ChangeEvent<unknown>,value:number)=>handlePage(event, value)} 
                                    />
                                </div>
                                {/* ----------- pagination ends  ----------- */}
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={7}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3>  </div>
                                eight
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={8}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3>  </div>
                                nine
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={9}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3>  </div>
                                ten
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={10}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3>  </div>
                                Three
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={11}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3>  </div>
                                Three
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={12}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3>  </div>
                                Three
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={13}>
                                <div className={classes.tabpanel_header}><h3>{name}</h3>  </div>
                                ten
                            </CustomTabPanel>
                            <p style={{color:'#A2A6A8',padding:'22px 0',fontSize:'14px'}}>©2018 Helperland. All rights reserved.</p>
                        </div>
                    {/* ----------- menu data admin ends  ----------- */}
                    </div>
                    {/* ----------- admin main wrapper ends  ----------- */}
                </main>
            </section>
            {/* ----------- main wrapper ends  ----------- */}
        </>
    );
}
export default AdminDashboard;