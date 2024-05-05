import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import {logo} from '../assets/images/index'
import Footer from "../components/Footer";
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
import  Select, {SelectChangeEvent} from '@mui/material/Select'
import { MenuItem, PaginationItem, TableSortLabel,Pagination, TextField, Grid, InputAdornment } from '@mui/material';
import {watch} from '../assets/images/index'
import {calender_user} from '../assets/images/index'
import {House} from '../assets/images/index'
import {sort_button,dark_down_arrow,first_last_arrow,Left_dark_arrow,green_calendar} from '../assets/images/index'
import Menu from '@mui/material/Menu';
import Checkbox from '@mui/material/Checkbox';
import {uparrow,cap,largeCap} from '../assets/images/index'
import Cookie from '../components/Cookie';
import {Helmet,HelmetProvider} from 'react-helmet-async'
import {useContext} from 'react'
import { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { MySettingVarContext,UserProfileContext } from '../components/LoginContext';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';
import Snackbar from '@mui/material/Snackbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { avatarCap,avatarShip,avatarCar,avatarMale,avatarFemale,avatarIron } from '../assets/images/index';
import emailjs from '@emailjs/browser';
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
        width:'50vw',
        maxWidth:'none',
        '@media(max-width:575px)':{
            width:'100vw'
        }
    }
})

const DialogButton=styled(Button)({
    
    '&.MuiButton-root':{
        minWidth:"70px",
        width:'fit-content',
        padding:'10px',
        height:"44px",
        borderRadius:"22px",
        '@media(max-width:575px)':{
            // height:'auto'
        }
    },
    '&.MuiButtonBase-root':{
        color:"white !important",
        backgroundColor:"green ",
        textTransform:'capitalize',
        fontWeight:'500',
        fontSize:"16px",
        '&:hover':{
            backgroundColor:"#2c737f"
        }

    },
    
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

  const CustomSettingsTabPanel=styled(TabPanel)({
    '& .MuiBox-root':{
        paddingTop:"20px !important",
    }
})
const CustomSettingTabs=styled(Tabs)({
    '& .MuiTabs-indicator':{
        // display:"none"
        backgroundColor:'#1D7A8C'
    },
    
    '&.MuiTabs-root':{
        border:"none",
    },    
})

/*---------------------custom tab ---------------------*/

const CustomSettingTab=styled(Tab)({
    '&.Mui-selected':{
        
        color:"#1D7A8C !important",
    }, 
    '&.MuiButtonBase-root ':{
        color:"#646464",
        borderBottom:"2px solid #0000001f",
        fontSize:"18px",
        textTransform:"capitalize",
        fontWeight:"500",
        height:'55px',
        backgroundColor:'transparent',
        width:"50%",
        maxWidth:'100%',
        alignItems:"center",
        
    },
    
    '@media(max-width:991px)':{
        '&.MuiButtonBase-root ':{
            fontSize:"16px"
        },
    },
    '@media(max-width:575px)':{
        '&.MuiButtonBase-root.MuiTab-root':{
            minWidth:'100%'
        }
    },
    '&:hover':{
        color:"#1D7A8C",
    }
})

  const Input = styled(TextField)({
    width:'100%' ,
    '& .MuiInputBase-root':{
        height:"46px",
        padding:"0 !important" ,
        
    },
    '& .Mui-focused':{
        border:"1px solid #1D7A8C",
        '& .MuiOutlinedInput-notchedOutline':{
            border:"none",
            
        }
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
        borderColor:'gray'
    }
})
  const Accept=styled(Button)({
    
    '&.MuiButton-root':{
        minWidth:"70px",
        height:"34px",
        borderRadius:"17px",
        '@media(max-width:575px)':{
            height:'auto'
        }
    },
    '&.MuiButtonBase-root':{
        color:"white !important",
        backgroundColor:"#146371 ",
        textTransform:'capitalize',
        fontWeight:'300',
        fontSize:"14px",
        '&:hover':{
            backgroundColor:"#2c737f"
        }

    },
    
})
/*---------------------custom tab panel---------------------*/

const CustomTabPanel=styled(TabPanel)({
    '& .MuiBox-root':{
        padding:"0px",
    }
})

/*--------------------- cancel button ---------------------*/
const Cancel=styled(Button)({
    
    '&.MuiButton-root':{
        width:"80px",
        height:"34px",
        borderRadius:"17px"
    },
    '&.MuiButtonBase-root':{
        color:"white !important",
        backgroundColor:"#FF6B6B ",
        textTransform:'capitalize',
        fontWeight:'300',
        '&:hover':{
            backgroundColor:"#cc6257 "
        }

    },
    
})

/*---------------------custom tabs---------------------*/
const CustomTabs=styled(Tabs)({
    '& .MuiTabs-indicator':{
        display:"none"
    },
    
    '&.MuiTabs-root':{
        border:"none",
    },    
    '@media(max-width:991px)':{
        minHeight:'auto'
    }
    
})
/*---------------------custom tab ---------------------*/

const CustomTab=styled(Tab)({
    '&.Mui-selected':{
        backgroundColor:"#146371",
        color:"white !important",
    }, 
    '&.MuiButtonBase-root ':{
        color:"white",
        borderBottom:"1px solid #ffffff33",
        fontSize:"18px",
        textTransform:"capitalize",
        fontWeight:"300",
        height:'55px',
        width:"100%",
        alignItems:"flex-start",
        
    },
    
    '@media(max-width:991px)':{
        '&.MuiButtonBase-root ':{
            fontSize:"16px"
        },
        '&.MuiButtonBase-root.MuiTab-root':{
            minWidth:'100%'
        }
    },
    '&:hover':{
        backgroundColor:"#146371",
    }
})

/*---------------------Header data cell ---------------------*/
const HeaderDataCell=styled(TableCell)({
    fontSize:"16px",
    fontWeight:"bold",
    whiteSpace:'nowrap',
    
    '&.MuiTableCell-root ':{
        height:"50px",
        padding:"0 16px",
        
    }
})
/*---------------------custom table cell---------------------*/
const CustomTableCell=styled(TableCell)({
    '&.MuiTableCell-root':{
        padding:"6px 15px",
    },
    '& .MuiTableCell-body':{
    },
    
})
/*---------------------custom table row---------------------*/

const CustomTableRow=styled(TableRow)({
    '& *':{
        fontSize:"16px !important",
        color:"#646464 !important"
    },
    '&:last-child td, &:last-child th': {
        border: 0 
    },
    '&>td:nth-child(2)':{
        minWidth:"190px"
    },
    '&>td:nth-child(1),&>td:nth-child(4)':{
        paddingTop:"10px"
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
            padding:"0px",
            '&>td:last-child ':{
                borderBottom:"none"
            },
            '& .MuiTableCell-root':{
                padding:"10px 20px"
            },
        },
        '&:last-child td, &:last-child th': { borderBottom: "1px solid #e0e0e0"},
    }
})
/*---------------------custom table row ends---------------------*/

/*---------------------styled classes starts---------------------*/
const styles=makeStyles({
    tabpanel_header:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:'6px'
    },
    tabheader:{
        minHeight:"55px",
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        padding:"12px 16px",
        color:"white",
        fontSize:"18px",
        fontWeight:'300',
        borderBottom:"1px solid #ffffff33", 
        '@media(max-width:991px)':{
            display:'none'
        }
    },
    
    service_date_wrapper:{
        display:'flex',
        flexDirection:"column"
    
    },
    date:{
        display:"flex",
        alignItems:'center',
        '& >img':{
            marginRight:"6px"
        },
        '&>p':{
            paddingTop:"4px",
            fontWeight:"bold"
        }
    },
    time:{
        display:"flex",
        alignItems:"center",
        '&>img':{
            marginRight:"6px",
            lineHeight:'18px'
        },
        '& p':{
            paddingTop:'4px',
            lineHeight:'20px'
        }
    },
    customer_details_wrapper:{
        display:'flex',
        flexDirection:"column",
        alignItems:"flex-start",
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
    select:{
        '&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8C",
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
            width:"62px",
            height:"38px",
        }, 
        
    },
    pagination_section:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        // height:'38px',
        '@media (max-width:767px)':{
            flexDirection:'column',
            height:'100%'
        }
    },
    row_per_page:{
        maxWidth:'268px',
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
        '& .MuiButtonBase-root.MuiPaginationItem-root':{
            margin:'0 2px',
            borderColor:'#E1E1E1',
            color:'#777777'
        },
        '& .MuiPaginationItem-root.Mui-selected':{
            backgroundColor:'#1D7A8C',
            color:'white',
            border:'none',
            '&:hover':{
                backgroundColor:'#77afba ',
                color:'white',
                border:'none'
            }
        },
        
        '& .MuiPaginationItem-root':{               
            '&:hover':{
                backgroundColor:'#77afba ',
                color:'white',
                border:'none'
            },
            '@media(max-width:767px)':{
                marginBottom:'5px',
            }, 
        },
        '& .MuiButtonBase-root ':{
            '@media(max-width:767px)':{
                height:'30px',
                minWidth:'30px',
                borderRadius:'50%',
            },   
        }
    },
    dialogSection:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        borderBottom:'1px solid #e0e0e0',
        padding:'10px 0px ',
        width:'100%',
    },
    dialogSectionTitle:{
        color:'#646464',
        fontWeight:'500',
        fontSize:'16px'
    },
    themeColor:{
        color:'#646464'
    },
    pet_checkbox:{
        display:'flex',
        alignItems:'center',
        justifyContent:"flex-start",
        
    },
    custom_checkbox:{
        color:"#C8C8C8 !important",
        '&.MuiCheckbox-root ':{
            padding:"0",
            marginRight:"6px",
            transform:'scale(.9)'
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
    error_msg:{
        color:'red'
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
    datePicker:{
        '& .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #C8C8C8'
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
            // width:'100%',       
        },
        '&.MuiFormControl-root.MuiTextField-root':{
            width:'100%'
        },
        '& .MuiInputAdornment-root':{
            marginRight:'0'
        }
        
    },
    Toast:{
        '& .MuiPaper-root.MuiSnackbarContent-root':{
            backgroundColor:'green',
        }
    },
    DatamapWrapper:{
        display:'flex',
        
        justifyContent:'space-between',
        '@media(max-width:991px)':{
            alignItems:'center',
            flexDirection:'column'
        }
    },
    Map:{
        display:'block',
        width:'50%',
        '@media(max-width:991px)':{
            width:'100%'
        }
        
    },
    dialogDataWrapper:{
        paddingRight:'15px',
        width:'100%',
        '@media(max-width:991px)':{
            marginBottom:'15px',
            paddingRight:"0"
        }
    },
    IndiRate:{
        padding:'15px',color:'#646464',border:'1px solid #E1E1E1',marginBottom:'20px',borderRadius:'4px',
        
    },
    RateTop:{
        display:'flex',justifyContent:'space-between',borderBottom:'1px solid #e1e1e1',marginBottom:'10px',paddingBottom:'5px',
        '@media(max-width:575px)':{
            flexDirection:'column'
        }
    },
    RateBottom:{
        display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'
    },
    lightBold:{
        fontWeight:'500',
        fontSize:"18px"
    },
    RateData:{
        display:"flex",flexDirection:'column',
        '@media(max-width:575px)':{
            borderBottom:'1px solid #e1e1e1',
            padding:'10px 0'
        }
    },
    RateStarWrp:{
        display:"flex",flexDirection:'column',
        '@media(max-width:575px)':{
            padding:'10px 0'
        }
    },
    image_wrapper:{
        height:"90px",
        width:'90px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'50%',
        border:'1px solid #aaaaaa',
        marginRight:'12px',
        marginBottom:'15px'
    },
    blockCardContainer:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        gridGap:'25px',
        marginBottom:'10px',
        '@media(max-width:767px)':{
            gridTemplateColumns:'1fr 1fr ',
        },
        '@media(max-width:575px)':{
            gridTemplateColumns:'1fr',
        }
    },
    blockCard:{
        display:'flex',
        flexDirection:"column",
        alignItems:'center',
        padding:'15px',
        border:"1px solid #e1e1e1",
        height:"230px",
        width:'100%',
        justifyContent:'center',
        margin:'0 auto',
        '@media(max-width:575px)':{
            maxWidth:'250px',
        }
    },
    selectOption:{
        '&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '&.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8C",
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
        '& .MuiOutlinedInput-input':{
            paddingRight:'25px !important',
        },
        '& .MuiSelect-select':{
            
            color:"#646464",
            opacity:"1",
            fontSize:"16px",

        },
        '& input::placeholder':{
            opacity:"1",
            color:"#646464",
        },
        '&.MuiOutlinedInput-root ':{
            width:"100%",
            height:"46px",
            paddingRight:'10px'
        }, 
        
    },
    radio_btn:{
        '&.MuiButtonBase-root.MuiRadio-root.Mui-checked':{
            color:'#1D7A8C',
        }
    },
    avtarChecked:{
        borderRadius:'50%',
        border:'5px solid #1D7A8C'
    },
    changePassword:{
        marginBottom:'15px',
        width:'35%',
        '@media(max-width:767px)':{
            width:'50%'
        },
        '@media(max-width:575px)':{
            width:'100%'
        }
    },
    changepasswordForm:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        '@media(max-width:767px)':{
            alignItems:'center'
        },
        '@media(max-width:575px)':{
            alignItems:'flex-start'
        }
    },
    saveBtn:{
        maxWidth:'fit-content',height:'46px !important',borderRadius:'46px !important',fontWeight:'400 !important',fontSize:'16px !important'
    },
    errorBig:{
        color:'red',backgroundColor:'#fccece',height:'40px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'4px',marginTop:'10px'
    },
})
/*---------------------styled classes ends---------------------*/


/*---------------------tabs code starts---------------------*/
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

/*---------------------tabs js code ends---------------------*/


/*---------------------table data starts---------------------*/

  
  

/*---------------------service date component---------------------*/
  type prop_for_date_time={
      date:string,
      time:string
    }
  const ServiceDate=(props:prop_for_date_time)=>{
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
   /*---------------------service date component ends---------------------*/

   /*---------------------customer details component starts---------------------*/
   type prop_for_name_address={
    name:string,
    address:any
   }

   const CustomerDetails=(props:prop_for_name_address)=>{
    const {StreetName,City,PostalCode,HouseNo}=props.address
    
    const classes=styles();
       return(
           <>
                <div className={classes.customer_details_wrapper}>
                    <div >
                        <p>{props.name}</p>
                    </div>
                    <div className={classes.address}>
                        <img src={House} alt="house" />
                        <p>{StreetName}, {HouseNo}, {PostalCode},{City}</p>
                    </div>
                </div>
           </>
       );
   }
   /*---------------------customer details componet ends---------------------*/
   
  
   /*---------------------Icons---------------------*/
  const Icon=()=>{
      return(
          <>
            <img style={{marginLeft:"10px"}} src={sort_button} alt="" />
          </>
      );
  }

  const ExpandIcon=()=>{
      return(
          <>
          <img style={{transform:"rotate(180deg)"}} src={uparrow} alt="accordian icon" />
          </>
      );
  }
  const SelectIcon=()=>{
    return(
        <>
          <img src={dark_down_arrow} alt="select" />
        </>
    );
}
const FirstIcon=()=>{
    return(
        <>
          <img src={first_last_arrow} alt="back" />
        </>
    );
}
const LastIcon=()=>{
  return(
      <>
        <img style={{transform:"rotate(180deg)"}} src={first_last_arrow} alt="first arrow" />
      </>
  );
}
const Arrow_Back_Icon=()=>{
    return(
        <>
          <img src={Left_dark_arrow} alt="left arrow" />
        </>
    );
}
const Arrow_Next_Icon=()=>{
  return(
      <>
        <img style={{transform:"rotate(180deg)"}} src={Left_dark_arrow} alt="next arrow" />
      </>
  );
}
const OpenDatePicker=()=>{
    return(
        <>
            <img src={green_calendar} alt="calendar" />
        </>
    );
}
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
const OpenTimePicker=()=>{
    return <img  src={dark_down_arrow} alt='down arrow'/>
}
  {/*---------------------status---------------------*/}

  /* ----------- sorting functions starts  ----------- */
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
  /* ----------- sorting function ends  ----------- */

  {/*---------------------tabs data starts---------------------*/}
  const providerTabs=[
      {
        name:"Dashboard",
        a11yProps:0
      },
      {
        name:"New Service Requests",
        a11yProps:1
      },
      {
        name:"Upcoming Services",
        a11yProps:3
      },
      {
        name:"Service Schedule",
        a11yProps:4
      },
      {
        name:"Service History",
        a11yProps:5
      },
      {
        name:"My Ratings",
        a11yProps:6
      },
      {
        name:"Block Customer",
        a11yProps:7
      },
  ]
  {/*---------------------tabs data ends---------------------*/}
const ServiceProviderDashboard=()=>{
    const classes=styles();
    const {mySettingVar,setMySettingVar}:any =useContext(MySettingVarContext)
    const {userProfile,setUserProfile}:any=useContext(UserProfileContext)
    const [toastMsg,setToastMsg]=useState('')
    const [newReq,setNewReq]=useState(true);
    const [historyView,setHistoryView]=useState(false)
    const currentDate= new Date();
    /*---------------------tab function---------------------*/
    const [value, setValue] = React.useState(0);
    const [toggleList,setToggleList]=useState(false);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setMySettingVar(false);
    };
    const [Tabvalue, setTabValue] = React.useState(0);
    const handleSettingTabs = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };
    useEffect(()=>{
        if(mySettingVar){
            setValue(providerTabs.length)
        }
        else
            setValue(0);
    },[mySettingVar])
    /*---------------------setname functionality---------------------*/
    const [name,setName]=useState('New Service Requests')
    const [open,setOpen]=useState(false)
    const setname=(name:string)=>{
        setName(name);
        
        if(window.innerWidth<991){
            setOpen(!open);
            let sideBar=document.getElementsByClassName('common-side-menu');
            sideBar[0].classList.remove('open-accordion');
            if(open)
                sideBar[0].classList.add('side-menu-dashboard');
            else    
                sideBar[0].classList.remove('side-menu-dashboard')
        }
       
    }
    /* ---------- to open top accordion  -------------- */
    const openMenu=()=>{
        if(window.innerWidth<991){
            let sideBar=document.getElementsByClassName('common-side-menu');
            sideBar[0].classList.toggle('open-accordion');
        setOpen(!open);
        if(open)
            sideBar[0].classList.add('side-menu-dashboard');
        else
            sideBar[0].classList.remove('side-menu-dashboard')
        }
        
    }
    
    /* ---------- for sorting column -------------- */
    const [Order,setOrder] = useState('asc');
    const [OrderBy,setOrderBy] = useState('ServiceId');
    const handleSort=(property:any)=>{
        const isAsc=(OrderBy === property && Order === 'asc')
        setOrderBy(property)
        setOrder(isAsc ? 'desc': 'asc');
    }



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
    const [request,setRequest]=useState([]);
    const [accepted,setAccepted]=useState([]);
    const [complete,setComplete]=useState([]);
    const [ratings,setRatings]=useState([]);
    const [workedFor,setWorkedFor]=useState([]) as any;
    const [allProvider,setAllProvider]=useState([]) as any;
    const [providerHist,setProviderHist]=useState([]) as any;
    const [postalcodes,setPostalCodes]=useState([]) as any;
    const [provider,setProvider]=useState([]) as any;
    useEffect(()=>{
        fetch('http://localhost:2000/Orders')
        .then(res=>res.json())
        .then(result=>{
            setRequest(result.filter((element:any)=>{   

                let IsExist=userProfile[0].BlockList.filter((e:any)=> { return(Object.keys(e)[0]===element.UniqueUID) })
                let BlockCheck=false;
                
                if(userProfile[0].BlockList.length===0){
                    BlockCheck=true;
                    userProfile[0].BlockList.push({[element.UniqueUID]:false})
                    
                    let UpdateList={
                        ...userProfile[0],BlockList:[...userProfile[0].BlockList]
                    }
                    
                    fetch(`http://localhost:2000/Data/${userProfile[0]['id']}`,{
                        method:'PUT',
                        body:JSON.stringify(UpdateList),
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
                    
                }
                else if(IsExist.length!==0){
                    let tempUnBlocked={};
                    let tempBlocked={};
                    tempUnBlocked=userProfile[0].BlockList.filter((e:any)=> {return e[element.UniqueUID]===false})
                    tempBlocked=userProfile[0].BlockList.filter((e:any)=> {return e[element.UniqueUID]===true})
                    
                    if((Object.keys(tempUnBlocked).length!==0)){
                        BlockCheck=true;
                    }
                    else if((Object.keys(tempBlocked).length!==0)){ 
                        BlockCheck=false; 
                        
                    }
                    
                }
                else{
                    
                    userProfile[0].BlockList.push({[element.UniqueUID]:false})
                    let UpdateList={
                        ...userProfile[0],BlockList:[...userProfile[0].BlockList]
                    }
                    fetch(`http://localhost:2000/Data/${userProfile[0]['id']}`,{
                        method:'PUT',
                        body:JSON.stringify(UpdateList),
                        headers:{
                            'Content-Type':'application/json'
                        }
                    })
                    
                    BlockCheck=true;
                }
                
                
                return ((element['ServiceProviderId']==='')&&(element['Status']==='New')&&(BlockCheck)&&(Object.keys(userProfile[0].Address).length!==0))
            }))
            setAccepted(result.filter((element:any)=>{
                return ((element['ServiceProviderId']===userProfile[0]['UniqueId'])&&((element['Status']!='Complete')&&(element['Status']!='Cancel')));
            }))
            setComplete(result.filter((element:any)=>{
                return ((element['ServiceProviderId']===userProfile[0]['UniqueId'])&&(element['Status']==='Complete'));
            }))
            setProviderHist(result.filter((element:any)=>{
                return ((element['ServiceProviderId']===userProfile[0]['UniqueId']));
            }))
            


        })

        fetch('http://localhost:2000/Data')
        .then(res=>res.json())
        .then(result=>{
            setAllProvider(result.filter((e:any)=>{
                return((e['UserTypeId']===2)&&(e['UniqueId']!==userProfile[0]['UniqueId']))
            }))

            setProvider(result.filter((e:any)=>{
                return((e['UserTypeId']===2)&&(e['UniqueId']===userProfile[0]['UniqueId']))
            }))
        });

        fetch('http://localhost:2000/Ratings')
        .then(res=>res.json())
        .then(result=>setRatings(
            result.filter((e:any)=>{
                return e['ServiceProviderId']===userProfile[0]['UniqueId'];
            })
        ))
        
        fetch('http://localhost:2000/PostalCode')
        .then(res=>res.json())
        .then(result=>setPostalCodes(result))
        
    },[toggleList])

    
   
    const AcceptReq=async(element:any)=>{
        setToggleList(!toggleList)
        let tempObj=request.filter((e:any)=>{
            return e['ServiceId']===element;
        })
        let NonconflictObjs= accepted.filter((e:any)=>{
            let a= (tempObj[0]['StartTime']>=e['EndTime']+1)
            let b= (tempObj[0]['EndTime']+1<=e['StartTime'])
            
            let decision=false;
            if((a||b)){
                decision=true;
            }
            else {
                if(e['Date']!=tempObj[0]['Date'])
                decision=true;
            }
            return (decision)
        })
        
        if(Object.keys(NonconflictObjs).length===accepted.length||accepted.length===0){
            
            let emailArr=[];
                
            for(let i=0;i<allProvider.length;i++){
                if(allProvider[i]['EmailAddress']!==tempObj[0]['ServiceProviderId']+'.com')
                emailArr[i]= allProvider[i]['EmailAddress']
            }
            let MailPara={
                Name:'User',
                Mailto:[...emailArr],
                Messege:`Service Request ${tempObj[0]['ServiceId']} has been accepted by Service Provider ${userProfile[0]['Firstname']} `
             }
             emailjs.send('Reschedule','RstPwd' ,MailPara, '9BlD6397XdGSbKNUb')    
        let MailCusto={
            Name:tempObj[0]['Name'],
            Mailto:tempObj[0]['UniqueUID']+'.com',
            Messege:`Hurray!!! .Your Service Request ${tempObj[0]['ServiceId']} is accepted by Service Provider ${userProfile[0]['Firstname']}.`
        }
        emailjs.send('Reschedule','RstPwd' ,MailCusto, '9BlD6397XdGSbKNUb')    
        let AssignProvider={
            ...(tempObj as any)[0],
            Avatar:userProfile[0].Avatar,
            ServiceProviderId:userProfile[0]['ServiceProviderId'],
            Rating:userProfile[0]['Rating'],
            ServiceProvider:userProfile[0]['Firstname']+' '+userProfile[0]['Lastname']
        }
        await fetch(`http://localhost:2000/Orders/${AssignProvider['id']}`,{
            method:'PUT',
            body:JSON.stringify(AssignProvider),
            headers:{
                'Content-Type':'application/json'
            }
        })
        
        
        }
        else{
            setToastMsg('Request is in conflict')
            setOpenToaster(true);
        }
        setOpenDetailDialog(false)
    }
    const [openDetailDialog,setOpenDetailDialog]=useState(false)
    const closeDetailDialog=()=>{
        setOpenDetailDialog(false)
    }    
    const [dialogOrder,setDialogOrder]=useState([]);
    
    const detailDialog=(element:any,accept:any,completed:any)=>{
        setOpenDetailDialog(true);
        let Order
        if(completed){
            Order=complete.filter((e:any)=>{
                return e['ServiceId']===element;
            })
        }
        else if(accept){ 
            Order=request.filter((e:any)=>{
                return e['ServiceId']===element;
            })
        }
        else{
            Order=accepted.filter((e:any)=>{
                return e['ServiceId']===element;
            })
        }
        
        
        setDialogOrder(Order[0]);
    }

    useEffect(()=>{
        let object={}
        complete.map((e:any)=>{
            Object.assign(object,{[e['Name']]:e['UniqueUID']})
        })

        let Arr=[{...object}]
        setWorkedFor([...new Set(Arr)])
        

    },[complete])
    
   
    
    
    
    let NetRequests=parseInt(rowsPerPage) > 0
    ? request.slice(page * parseInt(rowsPerPage), page * parseInt(rowsPerPage) + parseInt(rowsPerPage))
    : request

    let Accepted=parseInt(rowsPerPage) > 0
    ? accepted.slice(page * parseInt(rowsPerPage), page * parseInt(rowsPerPage) + parseInt(rowsPerPage))
    : accepted

    let Completed=parseInt(rowsPerPage) > 0
    ? complete.slice(page * parseInt(rowsPerPage), page * parseInt(rowsPerPage) + parseInt(rowsPerPage))
    : complete

    let Ratings=parseInt(rowsPerPage) > 0
    ? ratings.slice(page * parseInt(rowsPerPage), page * parseInt(rowsPerPage) + parseInt(rowsPerPage))
    : ratings

    let WorkedFor=parseInt(rowsPerPage) > 0
    ? workedFor.slice(page * parseInt(rowsPerPage), page * parseInt(rowsPerPage) + parseInt(rowsPerPage))
    : workedFor

    const [includePet,setIncludePet]=useState(true)
    

    const Pet=(e:any)=>{
        if(e.target.checked)
            setIncludePet(true);
        else 
            setIncludePet(false)
    }
    const [generatedReq,setGeneratedReq]=useState(NetRequests);

    // console.log(request)
    
    useEffect(()=>{
        if(!includePet){
            let temp=request.filter((e:any)=>{
                return e['Pet']===false;
            })
            setGeneratedReq(parseInt(rowsPerPage) > 0
            ? temp.slice(page * parseInt(rowsPerPage), page * parseInt(rowsPerPage) + parseInt(rowsPerPage))
            : temp)
        }
    },[includePet,rowsPerPage])
    
    

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

    const completeService=async(element:any)=>{
        setToggleList(!toggleList)
        let tempOrderObj=accepted.filter((e:any)=>{
            return e['ServiceId']===element
        })
        let UpdateStatus={
            ...(tempOrderObj as any)['0'],Status:'Complete'
        }
        await fetch(`http://localhost:2000/Orders/${tempOrderObj[0]['id']}`,{
            method:'PUT',
            body:JSON.stringify(UpdateStatus),
            headers:{
                'Content-Type':'application/json'
            }
        })
        let tempMatchedIdObj=userProfile[0].BlockList.filter((e:any)=>{
            return(Object.keys(e)[0]===tempOrderObj[0]['UniqueUID'])
        })
        if(Object.keys(tempMatchedIdObj).length===0){
            let UpdateBlockList={
                ...userProfile[0],...userProfile[0]['BlockList'].push({[tempOrderObj[0]['UniqueUID']]:false})
            }
            await fetch(`http://localhost:2000/Data/${userProfile[0]['id']}`,{
                method:'PUT',
                body:JSON.stringify(UpdateBlockList),
                headers:{
                    'Content-Type':'application/json'
                }
            })
        }
        setToastMsg('Request is declared complete!')
        setOpenToaster(true);
        
        setOpenDetailDialog(false)
    }
    const cancelReq=async(element:any)=>{
        setToggleList(!toggleList)
        let tempObj=accepted.filter((e:any)=>{
            return e['ServiceId']===element
        })
        let emailArr=[];
            
        for(let i=0;i<allProvider.length;i++){
            emailArr[i]= allProvider[i]['EmailAddress']
        }
        let MailPara={
            Name:'User',
            Mailto:[...emailArr],
            Messege:`Service Request ${tempObj[0]['ServiceId']} has been canceled by Service Provider ${userProfile[0]['Firstname']} which was schedule on ${tempObj[0]['Date']} between ${tempObj[0]['Time']}`
        }
        emailjs.send('Reschedule','RstPwd' ,MailPara, '9BlD6397XdGSbKNUb')    
        let MailCusto={
            Name:tempObj[0]['Name'],
            Mailto:tempObj[0]['UniqueUID']+'.com',
            Messege:`Sorry for inconvenience.Your Service Request ${tempObj[0]['ServiceId']} has been canceled by Service Provider ${userProfile[0]['Firstname']}. you will get notified as soon as any provider in your area accept your request!`
        }
        emailjs.send('Reschedule','RstPwd' ,MailCusto, '9BlD6397XdGSbKNUb')  

        let UpdateProvider={
            ...(tempObj as any)['0'],
            ServiceProviderId: "",
            ServiceProvider: "",
            Rating: 0,
        }
        await fetch(`http://localhost:2000/Orders/${tempObj[0]['id']}`,{
            method:'PUT',
            body:JSON.stringify(UpdateProvider),
            headers:{
                'Content-Type':'application/json'
            }
        })
        setToastMsg('Request is canceled successfully!')
        setOpenToaster(true);
        
        setOpenDetailDialog(false)
    }
    
    const ExportXlsx=()=>{
        const workSheet=XLSX.utils.json_to_sheet(complete)
        const workBook=XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workBook,workSheet,'xyz')
        // let buf=XLSX.write(workBook,{bookType:'xlsx',type:'buffer'})
        XLSX.write(workBook,{bookType:'xlsx',type:'binary'})
        XLSX.writeFile(workBook,'ServiceHistory.xlsx')
    }
    // const [block,setBlock]=useState(false);
    const Block=async(element:any,state:any)=>{
        setToggleList(!toggleList);
        
        let UpdateBlockList={}
        if(state.target.innerText==='Block'){
            let index = userProfile[0]['BlockList'].findIndex((e:any)=>JSON.stringify(e)===JSON.stringify({[element]:false}))
            userProfile[0]['BlockList'][index]={[element]:true}
            UpdateBlockList={
                ...userProfile[0],BlockList:[...userProfile[0]['BlockList']]
            }
            
        }
        else{
            let index = userProfile[0]['BlockList'].findIndex((e:any)=>JSON.stringify(e)===JSON.stringify({[element]:true}))
            userProfile[0]['BlockList'][index]={[element]:false}
            UpdateBlockList={
                ...userProfile[0],BlockList:[...userProfile[0]['BlockList']]
            }
        }
        
        await fetch(`http://localhost:2000/Data/${userProfile[0]['id']}`,{
            method:'PUT',
            body:JSON.stringify(UpdateBlockList),
            headers:{
                'Content-Type':'application/json'
            }
        })
        
    }
    const [country,setCountry]=useState(userProfile[0]?.Nationality)
    const SelectNationality=(e:any)=>{
        setCountry(e.target.value);
    }
    
    const [dateOfBirth,setDOB]=useState(new Date());
    const [avatar,setAvatar]=useState(userProfile[0]?.Avatar)
    const [avatarChanged,setAvatarChanged]=useState(false)
    const SelectAvatar = (element:any) =>{
        setAvatar(element.target.value);
        setAvatarChanged(true)
    }
    const [gender,setGender]=useState(userProfile[0]?.Gender)
    const SelectGender = (element:any) =>{
        setGender(element.target.value)
    }

    const [firstname,setFirstName]=useState(userProfile[0]?.Firstname)
    const [lastname,setLastName]=useState(userProfile[0]?.Lastname)
    const [mobileNumber,setMobileNumber]=useState(userProfile[0]?.MobileNumber)
    const [streetname,setStreetName]=useState(userProfile[0]?.Address.StreetName)
    const [housenumber,setHouseNumber]=useState(userProfile[0]?.Address.HouseNumber)
    const [postalcode,setPostalCode]=useState(userProfile[0]?.Address.PostalCode)
    const [city,setCity]=useState(userProfile[0]?.Address.City)
    const SelectCity=(e:any)=>{
        setCity(e.target.value);
    }
    
    const ValidateDetails=()=>{
        let errors={}
        const regx=/^\d{10}$/;
        const regxForText=/^[A-Za-z ]+$/
        let regxForHouse=/[0-9]|[0-9][0-9]|[0-9][0-9][0-9]$/
        let regxForPost=/^\d{6}$/;
        
        if(!firstname)
            (errors as any).firstReq='First name is required!'
        else if(!regxForText.test(firstname))
            (errors as any).firstInvalid='First name is invalid!'
        if(!lastname)
            (errors as any).lastReq='Last name is required!'
        else if(!regxForText.test(lastname))
            (errors as any).lastInvalid='Last name is invalid!'
        if(!mobileNumber)
            (errors as any).mobileReq='Mobile number is required!'
        else if(!regx.test(mobileNumber))
            (errors as any).mobileInvalid='Mobile number is invalid!'
        if(!gender)
            (errors as any).gender='Please select gender!'
        if(!country)
            (errors as any).nationality='Please select your nationality!'
        if(!streetname)
            (errors as any).streetReq='Street name is required!'
        else if(!regxForText.test(streetname))
            (errors as any).streetInvalid='Street name is invalid!'
        if(!housenumber)
            (errors as any).houseReq='House number is required!'
        else if(!regxForHouse.test(housenumber))
            (errors as any).houseInvalid='House number is invalid!'
        if(!postalcode)
            (errors as any).postalReq='Postal code is required!'
        else if(!regxForPost.test(postalcode))
            (errors as any).postalInvalid='Postal code is invalid!'
        if(!city)
            (errors as any).cityReq='City name is required!'
    

        return errors;
    }
    const [detailsErrors,setDetailsErrors]=useState({});
    let DetailsErrorObj={};
    const PersonalDetail=async(element:any)=>{
        element.preventDefault();
        DetailsErrorObj=ValidateDetails();
        setDetailsErrors(DetailsErrorObj);
        if(Object.keys(DetailsErrorObj).length===0){
            
            for(let i=0;i<providerHist.length;i++){
                let UpdateProvider={
                    ...providerHist[i],
                    ServiceProvider:firstname+' '+lastname,
                    Avatar:avatar,
                    Rating:userProfile[0].Rating
                }
                // console.log(providerHist)
                await fetch(`http://localhost:2000/Orders/${providerHist[i]['id']}`,{
                    method:'PUT',
                    body:JSON.stringify(UpdateProvider),
                    
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
            }
            const AddressObj={
                StreetName:streetname,
                HouseNumber:housenumber,
                PostalCode:postalcode,
                City:city
            }
            const UpdateProfile={
                ...userProfile[0],
                Firstname:firstname,
                Lastname:lastname,
                MobileNumber:mobileNumber,
                Avatar:avatar,
                DOB:dateOfBirth.getDate()+'/'+(dateOfBirth.getMonth()+1)+'/'+dateOfBirth.getFullYear(),
                Nationality:country,
                Gender:gender,
                Address:{...userProfile[0]['Address'],...AddressObj}
            }

            await fetch(`http://localhost:2000/Data/${userProfile[0]['id']?userProfile[0]['id']:provider[0]['id']}`,{
                method:'PUT',
                body:JSON.stringify(UpdateProfile),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            setToastMsg('Your personal details has been updated!')
            setOpenToaster(true);
            setToggleList(!toggleList)
        }
        
        // console.log(UpdateProfile)
    }


    const validatePassword=(form:HTMLFormElement)=>{
        const errors={}
        let newpassword=form.new_password.value ,confirm=form.confirm_password.value;
        if(!form.current_password.value)
            (errors as any).currentrequired='Current password is required!'
        else if(form.current_password.value!==userProfile[0]['Password'])
            (errors as any).notmatch='Entered current password is wrong!'
        if(!form.new_password.value)
            (errors as any).newrequired='New Password is required!'
        else if(form.new_password.value.length<6)
            (errors as any).length='At least 6 characters required!'
        if(!form.confirm_password.value)
            (errors as any).confirmrequired='Confirm Password is required!'
        else if(newpassword!==confirm)
            (errors as any).notmatching='Passwords are not matching'
        return errors;
    }
    let PasswordErrors={}
    const [passError,setPassError]=useState({})
    const ChangePassword=async(element:any)=>{
        element.preventDefault();
        let form=document.getElementById('Change-Password') as HTMLFormElement;
        PasswordErrors=validatePassword(form);
        setPassError(PasswordErrors);
        if(Object.keys(PasswordErrors).length===0){
            let UpdatePassword={
                ...userProfile[0],
                Password:form.new_password.value
            }
            await fetch(`http://localhost:2000/Data/${userProfile[0]['id']}`,{
                method:'PUT',
                body:JSON.stringify(UpdatePassword),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            setToastMsg('password is changed successfully!')
            element.target.reset();
            setOpenToaster(true);
            setToggleList(!toggleList)
        }
    }
    return(
        <>
        {/*---------------------main wrapper starts---------------------*/}
        <Snackbar
            anchorOrigin={{vertical:'top',horizontal:'right'}}
            open={openToaster}
            onClose={closeToaster}
            message={toastMsg}
            autoHideDuration={3000}
            action={action}
            className={`${classes.Toast}`}
        />
        
        <CustomDialog
            onClose={closeDetailDialog}
            TransitionComponent={Transition}
            aria-labelledby="customized-dialog-title"
            open={openDetailDialog}
        >
            <CustomDialogTitle id="customized-dialog-title" onClose={closeDetailDialog} > Service Details </CustomDialogTitle>
            
            <CustomDialogContent>
                <div className={classes.DatamapWrapper} >
                    <div className={classes.dialogDataWrapper}>
                <div className={classes.dialogSection} >
                    {(dialogOrder as any)&&<p style={{fontSize:'18px',color:'#646464',fontWeight:'600'}}>{(dialogOrder as any)['Date']}  {(dialogOrder as any)['Time']}</p>}
                   {(dialogOrder as any)&&<p className={classes.themeColor}> <span className={classes.dialogSectionTitle}>   Duration : </span> {(dialogOrder as any)['Duration']} Hrs</p>}
                </div>
                <div className={classes.dialogSection}>
                    {/* {console.log((dialogOrder as any))} */}
                    {(dialogOrder as any)&&<p className={classes.themeColor}> <span className={classes.dialogSectionTitle}> Service Id </span>: {(dialogOrder as any)['ServiceId']}</p>}
                    {(dialogOrder as any)['Extra']&&<p className={classes.themeColor}> <span className={classes.dialogSectionTitle}> Extras : </span> {Object.keys((dialogOrder as any)['Extra']).map((key:any)=> {return <span> {key}, </span>})}</p>}
                    {(dialogOrder as any)&&<p className={classes.dialogSectionTitle} >Net Amount : <span style={{color:"#1d7a8c",fontWeight:'600',fontSize:'22px'}}>{(dialogOrder as any)['TotalPayment']} € </span></p>}
                    
                </div>
                <div className={classes.dialogSection}>
                    {(dialogOrder as any)&&<p className={classes.themeColor}><span className={classes.dialogSectionTitle}> Customer Name: </span>{(dialogOrder as any)['Name']}</p>}
                    {(dialogOrder as any)['Address']&&<p className={classes.themeColor} > <span className={classes.dialogSectionTitle}> Service Address: </span> {(dialogOrder as any)['Address'].StreetName} ,{(dialogOrder as any)['Address'].HouseNo}, {(dialogOrder as any)['Address'].PostalCode}, {(dialogOrder as any)['Address'].City}  </p>}
                    {(dialogOrder as any)&&<p className={classes.themeColor}> <span className={classes.dialogSectionTitle}>Email: </span> {(dialogOrder as any)['UniqueUID']}.com </p>}
                </div>
                <div className={classes.dialogSection}>
                    <p className={classes.dialogSectionTitle}>Comments</p>
                    { !(dialogOrder as any)['Pet']?<p style={{display:'flex',alignItems:'center',color:'#646464'}}> <CancelRoundedIcon sx={{color:'red',marginRight:'5px'}}/> <p style={{paddingTop:'3px'}}> I don't have pets at home </p> </p>:<p style={{display:'flex',alignItems:'center',color:'#646464'}}> <CheckCircleRoundedIcon sx={{color:'green',marginRight:'5px'}}/> <p style={{paddingTop:'3px'}}> I have pet at home </p></p>}
                </div>
                {!historyView&&<div style={{display:'flex',paddingTop:'10px'}}>
                {newReq?
                    <DialogButton onClick={()=>AcceptReq((dialogOrder as any)['ServiceId'])}> <DoneRoundedIcon/> Accept</DialogButton>:
                    <div>
                        {(((parseInt((dialogOrder as any)['Date'].substr(0,2))<currentDate.getDate())
                            &&(parseInt((dialogOrder as any)['Date'].substr(3,5))<=currentDate.getMonth()+1)
                            &&(parseInt((dialogOrder as any)['Date'].substr(6,10))<=currentDate.getFullYear())))
                            ?<Accept onClick={()=>completeService((dialogOrder as any)['ServiceId'])}> <DoneRoundedIcon/>  Complete</Accept>
                            :((parseInt((dialogOrder as any)['Date'].substr(0,2))===currentDate.getDate())&&((dialogOrder as any)['EndTime']<currentDate.getHours())?<Accept onClick={()=>completeService((dialogOrder as any)['ServiceId'])}> <DoneRoundedIcon/> Complete</Accept>:<Cancel onClick={()=>cancelReq((dialogOrder as any)['ServiceId'])}> <CloseIcon/> cancel</Cancel>)}     
                        
                    </div>
                    }
                </div>}
                    </div>
                    
                        
                    {(dialogOrder as any)['Address']&&<iframe className={classes.Map} src={`https://www.google.com/maps?q=${(dialogOrder as any)['Address'].StreetName+(dialogOrder as any)['Address'].HouseNo+(dialogOrder as any)['Address'].PostalCode+(dialogOrder as any)['Address'].City}&output=embed`} ></iframe>}
                    
                </div>
            </CustomDialogContent>
                
        </CustomDialog >

        

        <section className="wrapper">
            <HelmetProvider>
                <Helmet>
                    <title>ServiceProvider | Helperland</title>
                </Helmet>
            </HelmetProvider>
            {/*---------------------Navbar---------------------*/}

            <Navbar   otherpage={true} logo={logo} link1="Book a Cleaner" link2="Prices & services" link3="Waranty" link4="Blog" link5="Contact" link6="Login" link7="Become a Helper" languageoption={false}/>

            {/*---------------------other page hero banner start---------------------*/}

            <section className=" other-page-hero-banner">

                <button  className='accordion-btn' onClick={()=>openMenu()} >{name} <span className={open?'active-expandicon':'normal-expandicon'}><ExpandIcon/></span></button>
                
                <section className="landing-section-services">
                    <h3>Welcome, <span>{firstname}!</span> </h3>
                </section>
            </section>

            {/*---------------------other page hero banner ends---------------------*/}

            {/*---------------------main section starts---------------------*/}

            <main>

                {/*---------------------main content services starts---------------------*/}

                <section className="main-content-services">

                    {/*---------------------side menu starts---------------------*/}

                    <div className="side-menu-dashboard common-side-menu">


                    {/*---------------------custom tabs starts---------------------*/}

                    <CustomTabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{borderColor:'divider'}}
                    >
                        {
                            providerTabs.map((e:any)=>{
                                return(
                                <CustomTab onClick={(e:any)=>setname((e.target as HTMLInputElement).innerHTML)} disableRipple label={e.name} {...a11yProps(parseInt(`${e.a11yProps}`))} />    
                                );
                            })
                        }
                    </CustomTabs>
                    {/*---------------------custom tabs ends---------------------*/}
                    </div>

                    {/*---------------------data table starts---------------------*/}

                    <div className="data-table-service">
                    <CustomTabPanel  value={value} index={0} > </CustomTabPanel>
                    <CustomTabPanel  value={value} index={1} > 
                    <div className={classes.pet_checkbox}><Checkbox onChange={Pet} checked={includePet} icon={<Span/>} className={classes.custom_checkbox} /> <p style={{color:'#646464',paddingTop:'2px'}}>Include Pet at home.</p></div>
                        <TableContainer component={Paper}  sx={{borderRadius:"0",border:"1px solid #E1E1E1",marginBottom:'10px',boxShadow:"none",'@media(max-width:767px)':{border:"none"}}}>
                            <Table aria-label="simple table">
                                <TableHead sx={{backgroundColor:"#f9f9f9",'@media(max-width:767px)':{display:"none"}}}>
                                <TableRow sx={{'*':{ fontSize:"16px !important", color:"#646464 !important",}}} >
                                    <HeaderDataCell> <TableSortLabel onClick={()=>handleSort('ServiceId')}  IconComponent={Icon}>Service ID</TableSortLabel> </HeaderDataCell>
                                    <HeaderDataCell align="left">Service Date</HeaderDataCell>
                                    <HeaderDataCell align="left">Customer details</HeaderDataCell>
                                    <HeaderDataCell align="left"><TableSortLabel onClick={()=>handleSort('TotalPayment')}  IconComponent={Icon}>Payment</TableSortLabel></HeaderDataCell>
                                    {/* <HeaderDataCell align="left">Time conflict</HeaderDataCell> */}
                                    <HeaderDataCell align="center">Actions</HeaderDataCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                
                                {sortedRows(includePet?NetRequests:generatedReq,getComparator(Order,OrderBy)).map((row:any)=>(
                                    <CustomTableRow onClick={()=>{setHistoryView(false);setNewReq(true); detailDialog(row.ServiceId,true,false)}} key={row.id}>
                                        <CustomTableCell>
                                            {row.ServiceId}
                                        </CustomTableCell>
                                        <CustomTableCell align="left">
                                            <ServiceDate date={row.Date} time={row.Time}/>
                                        </CustomTableCell>
                                        <CustomTableCell align="left">
                                            <CustomerDetails name={row.Name} address={row.Address}/>
                                        </CustomTableCell>
                                        <CustomTableCell align="left">{row.TotalPayment} €</CustomTableCell>
                                        {/* <CustomTableCell align="left"></CustomTableCell> */}
                                        <CustomTableCell align="left">
                                            <Accept onClick={(e:any)=>{e.stopPropagation();AcceptReq(row.ServiceId)}}>Accept</Accept>
                                        </CustomTableCell>
                                    </CustomTableRow>

                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className={classes.pagination_section}>
                            <div className={classes.row_per_page}>
                                <p>Show</p>
                                <Select
                                className={classes.select}
                                
                                IconComponent={SelectIcon}
                                value={rowsPerPage}
                                onChange={handleRowsPerPage}
                                >
                                    
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={15}>15</MenuItem>
                                </Select>
                                <p>entries</p>
                                <p>Total Record: {request.length}</p> 
                            </div>
                            <Pagination className={classes.pagination}  siblingCount={1} boundaryCount={0} size='large'showFirstButton showLastButton renderItem={(item) => (
                                <PaginationItem 
                                    components={{ first: FirstIcon, last: LastIcon,previous: Arrow_Back_Icon, next: Arrow_Next_Icon  }}
                                    {...item}
                                />)}
                             count={4} variant='outlined' onChange={(event: React.ChangeEvent<unknown>,value:number)=>handlePage(event, value)} 
                             />
                        </div>
                    
                    </CustomTabPanel>
                   
                    <CustomTabPanel value={value} index={2}>

                        {/*---------------------table starts---------------------*/}

                    <TableContainer component={Paper}  sx={{borderRadius:"0",border:"1px solid #E1E1E1",marginBottom:'10px',boxShadow:"none",'@media(max-width:767px)':{border:"none"}}}>
                        <Table aria-label="simple table">

                            {/*---------------------table header starts---------------------*/}

                            <TableHead sx={{backgroundColor:"#f9f9f9",'@media(max-width:767px)':{display:"none"}}}>
                            <TableRow sx={{'*':{ fontSize:"16px !important", color:"#646464 !important",}}} >
                                <HeaderDataCell> <TableSortLabel onClick={()=>handleSort('ServiceId')}  IconComponent={Icon}>Service ID</TableSortLabel> </HeaderDataCell>
                                <HeaderDataCell align="left"><TableSortLabel IconComponent={Icon}>Service Date</TableSortLabel></HeaderDataCell>
                                <HeaderDataCell align="left">Customer details</HeaderDataCell>
                                <HeaderDataCell align="left"><TableSortLabel IconComponent={Icon}>Payment</TableSortLabel></HeaderDataCell>
                                <HeaderDataCell align="center">Actions</HeaderDataCell>
                            </TableRow>
                            </TableHead>

                            {/*---------------------table header ends---------------------*/}

                            {/*---------------------table body starts---------------------*/}
                            
                            <TableBody>
                                {/*---------------------custom row starts---------------------*/}
                            {
                                sortedRows(Accepted,getComparator(Order,OrderBy)).map((row:any)=>(
                                    <CustomTableRow onClick={()=>{setHistoryView(false);setNewReq(false);detailDialog(row.ServiceId,false,false)}} key={row.id}> 
                                        <CustomTableCell>
                                            {row.ServiceId}
                                        </CustomTableCell>
                                    <CustomTableCell align="left">
                                        <ServiceDate date={row.Date} time={row.Time}/>
                                    </CustomTableCell>

                                {/*---------------------customer details ---------------------*/}

                                <CustomTableCell align="left">
                                    <CustomerDetails name={row.Name} address={row.Address}/>
                                </CustomTableCell>

                                {/*---------------------distance---------------------*/}

                                <CustomTableCell align="left">{row.TotalPayment} €</CustomTableCell>

                                {/*---------------------cancel button---------------------*/}

                                <CustomTableCell align="left">
                                    
                                    {(((parseInt(row.Date.substr(0,2))<currentDate.getDate())
                                    &&(parseInt(row.Date.substr(3,5))<=currentDate.getMonth()+1)
                                    &&(parseInt(row.Date.substr(6,10))<=currentDate.getFullYear())))
                                    ?<Accept onClick={(e:any)=>{e.stopPropagation();completeService(row.ServiceId)}}>Complete</Accept>
                                    :((parseInt(row.Date.substr(0,2))===currentDate.getDate())&&(row.EndTime<currentDate.getHours())?<Accept onClick={(e:any)=>{e.stopPropagation();completeService(row.ServiceId)}}>Complete</Accept>:<Cancel onClick={(e:any)=>{e.stopPropagation();cancelReq(row.ServiceId)}}>cancel</Cancel>)}     
                                </CustomTableCell>
                                    </CustomTableRow>
                                ))
                            }

                            {/*---------------------custome row ends---------------------*/}
                            </TableBody>

                            {/*---------------------table body ends---------------------*/}

                        </Table>
                        </TableContainer>

                        {/*---------------------table ends---------------------*/}
                        <div className={classes.pagination_section}>
                            <div className={classes.row_per_page}>
                                <p>Show</p>
                                <Select
                                className={classes.select}
                                
                                IconComponent={SelectIcon}
                                value={rowsPerPage}
                                onChange={handleRowsPerPage}
                                >
                                    
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={15}>15</MenuItem>
                                </Select>
                                <p>entries</p>
                                <p>Total Record: {request.length}</p> 
                            </div>
                            <Pagination className={classes.pagination}  siblingCount={1} boundaryCount={0} size='large'showFirstButton showLastButton renderItem={(item) => (
                                <PaginationItem 
                                    components={{ first: FirstIcon, last: LastIcon,previous: Arrow_Back_Icon, next: Arrow_Next_Icon  }}
                                    {...item}
                                />)}
                             count={4} variant='outlined' onChange={(event: React.ChangeEvent<unknown>,value:number)=>handlePage(event, value)} 
                             />
                        </div>
                    
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={3}>
                        Item Three
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={4}>
                    <div className={classes.tabpanel_header}> <div style={{color:"#646464"}}>Payment Status <Select className={classes.select} value={5} displayEmpty IconComponent={SelectIcon} > <MenuItem value={5}>All</MenuItem> </Select> </div>  <Accept onClick={ExportXlsx}>export</Accept> </div>
                        <TableContainer component={Paper}  sx={{borderRadius:"0",border:"1px solid #E1E1E1",boxShadow:"none",marginBottom:'10px','@media(max-width:767px)':{border:"none"}}}>
                        <Table aria-label="simple table">
                            <TableHead sx={{backgroundColor:"#f9f9f9",'@media(max-width:767px)':{display:"none"}}}>
                                <TableRow sx={{'*':{ fontSize:"16px !important", color:"#646464 !important",}}} >
                                    <HeaderDataCell> <TableSortLabel onClick={()=>handleSort('id')}  IconComponent={Icon}>Service ID</TableSortLabel> </HeaderDataCell>
                                    <HeaderDataCell align="left">Service Date</HeaderDataCell>
                                    <HeaderDataCell align="left">Customer details</HeaderDataCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                {
                                    
                                    sortedRows(Completed,getComparator(Order,OrderBy)).map((row:any)=>(
                                        <CustomTableRow  key={row.id} onClick={()=>{setHistoryView(true);detailDialog(row.ServiceId,true,true)}}>
                                            <CustomTableCell>
                                                {row.ServiceId} 
                                            </CustomTableCell>
                                            <CustomTableCell align="left">
                                                <ServiceDate date={row.Date} time={row.Time}/>
                                            </CustomTableCell>

                                            <CustomTableCell align="left">
                                                <CustomerDetails name={row.Name} address={row.Address}/>
                                            </CustomTableCell>
                                        </CustomTableRow> 
                                    ))
                                }
                            </TableBody>
                            </Table>
                         </TableContainer>
                         <div className={classes.pagination_section}>
                            <div className={classes.row_per_page}>
                                <p>Show</p>
                                <Select
                                className={classes.select}
                                
                                IconComponent={SelectIcon}
                                value={rowsPerPage}
                                onChange={handleRowsPerPage}
                                >
                                    
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={15}>15</MenuItem>
                                </Select>
                                <p>entries</p>
                                <p>Total Record: {Completed.length}</p> 
                            </div>
                            <Pagination className={classes.pagination}  siblingCount={1} boundaryCount={0} size='large'showFirstButton showLastButton renderItem={(item) => (
                                <PaginationItem 
                                    components={{ first: FirstIcon, last: LastIcon,previous: Arrow_Back_Icon, next: Arrow_Next_Icon  }}
                                    {...item}
                                />)}
                             count={4} variant='outlined' onChange={(event: React.ChangeEvent<unknown>,value:number)=>handlePage(event, value)} 
                             />
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={5}>
                    
                        {
                            Ratings.map((row:any)=>(
                                
                                <div className={classes.IndiRate} >
                                    <div className={classes.RateTop} >
                                        <div className={classes.RateData}>
                                            {row.ServiceId}
                                        <p className={classes.lightBold}> {row.Name}</p>
                                        </div>
                                        <div className={classes.RateData}>
                                            <ServiceDate date={row.Date} time={row.Time}/>
                                        </div>
                                        <div>
                                            <div className={classes.RateStarWrp}>
                                                <p className={classes.lightBold}> ratings</p>
                                                <div style={{display:'flex',alignItems:'center'}}>
                                                <Rating name="simple-controlled" precision={0.5} value={row.Rating} readOnly /> <p style={{paddingTop:'4px',paddingLeft:'10px'}}> {row.Quality}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.RateBottom} >
                                        <p className={classes.lightBold}> Customer Comment :</p>{row.Messege}
                                    </div>
                                </div>
                                
                            ))
                        }
                        <div className={classes.pagination_section}>
                            <div className={classes.row_per_page}>
                                <p>Show</p>
                                <Select
                                className={classes.select}
                                
                                IconComponent={SelectIcon}
                                value={rowsPerPage}
                                onChange={handleRowsPerPage}
                                >
                                    
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={15}>15</MenuItem>
                                </Select>
                                <p>entries</p>
                                <p>Total Record: {Completed.length}</p> 
                            </div>
                            <Pagination className={classes.pagination}  siblingCount={1} boundaryCount={0} size='large'showFirstButton showLastButton renderItem={(item) => (
                                <PaginationItem 
                                    components={{ first: FirstIcon, last: LastIcon,previous: Arrow_Back_Icon, next: Arrow_Next_Icon  }}
                                    {...item}
                                />)}
                             count={4} variant='outlined' onChange={(event: React.ChangeEvent<unknown>,value:number)=>handlePage(event, value)} 
                             />
                        </div>
                   
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={6}>
                        <div className={classes.blockCardContainer}>
                            
                        {
                            WorkedFor.map((e:any)=>(
                                Object.keys(e).map((element:any)=>{
                                    return (
                                        <>
                                            <div className={classes.blockCard}>
                                                <div className={classes.image_wrapper}>
                                                    <img src={largeCap} alt="cap" />
                                                </div>
                                                <p className={classes.lightBold} style={{color:'#646464',marginBottom:'10px'}}>{element}</p>
                                                <Cancel onClick={(el:any)=>Block(e[element],el)} >  { userProfile[0].BlockList.filter((el:any)=>{ return(el[e[element]])===true}).length>0 ? `Unblock`:`Block`}</Cancel>
                                                {/* {console.log(e[element])} */}
                                                
                                            </div>
                                        </>
                                    )
                                })
                            ))
                        }
                        </div>
                        <div className={classes.pagination_section}>
                            <div className={classes.row_per_page}>
                                <p>Show</p>
                                <Select
                                className={classes.select}
                                
                                IconComponent={SelectIcon}
                                value={rowsPerPage}
                                onChange={handleRowsPerPage}
                                >
                                    
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={15}>15</MenuItem>
                                </Select>
                                <p>entries</p>
                                <p>Total Record: {workedFor[0]&&Object.keys(workedFor[0]).length}</p> 
                            </div>
                            <Pagination className={classes.pagination}  siblingCount={1} boundaryCount={0} size='large'showFirstButton showLastButton renderItem={(item) => (
                                <PaginationItem 
                                    components={{ first: FirstIcon, last: LastIcon,previous: Arrow_Back_Icon, next: Arrow_Next_Icon  }}
                                    {...item}
                                />)}
                             count={4} variant='outlined' onChange={(event: React.ChangeEvent<unknown>,value:number)=>handlePage(event, value)} 
                             />
                        </div>
                    
                    </CustomTabPanel>
                    
                    <CustomTabPanel value={value} index={7}>
                    <CustomSettingTabs
                        // orientation=""
                        variant="scrollable"
                        scrollButtons={false}
                        value={Tabvalue}
                        onChange={handleSettingTabs}
                        aria-label="Vertical tabs example"
                        sx={{  borderColor: 'divider'}}                   
                        >
                            <CustomSettingTab disableRipple label='My Details' />
                            <CustomSettingTab disableRipple label='Change Password' />
                            
                        </CustomSettingTabs>
                        <CustomSettingsTabPanel value={Tabvalue} index={0}>
                            <form action="" id='Personal-info' onSubmit={PersonalDetail} >
                                <Grid container columnSpacing={{lg:4,md:4,sm:4}} rowSpacing={{lg:2,md:2,sm:2,xs:2}}>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500",fontSize:'20px',width:'fit-content',display:"inline"}}>Account Status :</Typography> {userProfile[0].UserStatus==='deactivate'?<span style={{color:'Red',fontSize:'20px'}}> Inactive </span>:<span style={{color:'green',fontSize:'20px'}}> Active </span>}
                                        <div style={{display:'flex',alignItems:'flex-end'}}>
                                            <div style={{width:'100%'}} >
                                                <Typography sx={{color:'#646464',fontWeight:"500",fontSize:'18px',marginBottom:'5px'}}>Basic details</Typography>
                                                <div style={{display:"block",width:'100%',height:'1px', backgroundColor:'#0000001f'}}></div> 
                                            </div>
                                            
                                            <img src={avatarChanged?avatar:userProfile[0].Avatar} alt="avatar" />
                                        </div>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>First name</Typography>
                                        <Input placeholder='First name' name='first_name' onChange={(e:any)=>setFirstName(e.target.value)} value={firstname}/>
                                            {!firstname&&<p className={classes.error_msg}>{(detailsErrors as any).firstReq}</p>}
                                            <p className={classes.error_msg}>{(detailsErrors as any).firstInvalid}</p>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>Last name</Typography>
                                        <Input placeholder='Last name' name='last_name' onChange={(e:any)=>setLastName(e.target.value)} value={lastname}/>
                                        {!lastname&&<p className={classes.error_msg}>{(detailsErrors as any).lastReq}</p>}
                                        <p className={classes.error_msg}>{(detailsErrors as any).lastInvalid}</p>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>Email Address</Typography>
                                        <Input placeholder='Email Address' value={userProfile[0].EmailAddress} disabled/>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}  >Mobile Number</Typography>
                                        <TextField
                                            type='tel'
                                            className={classes.mobileno}
                                            placeholder='Mobile number'
                                            name='contact_number'
                                            value={mobileNumber}
                                            onChange={(e:any)=>setMobileNumber(e.target.value)}
                                            InputProps={{
                                                startAdornment:  <InputAdornment position="start"><span className={classes.span} >+49</span> </InputAdornment>
                                            }}
                                        />
                                        {!mobileNumber&&<p className={classes.error_msg}>{(detailsErrors as any).mobileReq}</p>}
                                        <p className={classes.error_msg}>{(detailsErrors as any).mobileInvalid}</p>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                    <Typography sx={{color:'#646464',fontWeight:"500"}}>Date of Birth</Typography>
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
                                            maxDate={new Date()}
                                            value={dateOfBirth}
                                            onChange={(newValue:any) => {
                                                setDOB(newValue);
                                            }}
                                            renderInput={(params) => <TextField name='date' className={classes.datePicker}  {...params} />}
                                        />
                                    </LocalizationProvider>
                                        
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>Nationality</Typography>
                                        <Select
                                            
                                            type='select'
                                            className={classes.selectOption}
                                            IconComponent={OpenTimePicker}
                                            name='Nationality'
                                            onChange={SelectNationality}
                                            value={country}
                                            displayEmpty
                                            >
                                                <MenuItem value={""}>Nationality</MenuItem>
                                                <MenuItem value={"German"}>German</MenuItem>
                                                <MenuItem value={"Indian"}>Indian</MenuItem>
                                        </Select>
                                        {!country&&<p className={classes.error_msg}>{(detailsErrors as any).nationality}</p>}
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>Gender</Typography>
                                        <RadioGroup onChange={SelectGender} sx={{display:'flex',flexDirection:'row',color:'#646464'}} value={gender} >
                                            <FormControlLabel sx={{width:'fit-content'}} control={<Radio className={classes.radio_btn} name='Male' value='male'   icon={<RadioIcon/>} /> } label='Male' />
                                            <FormControlLabel sx={{width:'fit-content'}} control={<Radio className={classes.radio_btn} name='Female' value='female'  icon={<RadioIcon/>} /> } label='Female' />
                                            <FormControlLabel sx={{width:'fit-content'}} control={<Radio className={classes.radio_btn} name='Other' value='other'  icon={<RadioIcon/>} /> } label='Rather not to say' />
                                        </RadioGroup>
                                        {!gender&&<p className={classes.error_msg}>{(detailsErrors as any).gender}</p>}
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <Typography sx={{color:'#646464',fontWeight:"500"}}>Select Avatar</Typography>
                                        <RadioGroup onChange={SelectAvatar} sx={{display:"flex",alignItems:'center',justifyContent:'space-between',flexDirection:'row'}} value={avatar} >
                                            <Radio className={classes.radio_btn} name='female' value='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAAEH5aXCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTc0MEFENkYyQ0UzMTFFOEE2NTY4RkJBRDFDNEFBM0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTc0MEFENzAyQ0UzMTFFOEE2NTY4RkJBRDFDNEFBM0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NzQwQUQ2RDJDRTMxMUU4QTY1NjhGQkFEMUM0QUEzRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NzQwQUQ2RTJDRTMxMUU4QTY1NjhGQkFEMUM0QUEzRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuvUoO4AAA4/SURBVHjajFI7DoAg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' checkedIcon={<img src={avatarFemale} className={classes.avtarChecked} alt='female'/>}   icon={<img src={avatarFemale} alt='female'/>} />
                                            <Radio className={classes.radio_btn} name='car' value='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAAEH5aXCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJEOENEMTAyQ0UzMTFFOEFDODFBQTdENzZDNDA4MTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJEOENEMTEyQ0UzMTFFOEFDODFBQTdENzZDNDA4MTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkQ4Q0QwRTJDRTMxMUU4QUM4MUFBN0Q3NkM0MDgxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MkQ4Q0QwRjJDRTMxMUU4QUM4MUFBN0Q3NkM0MDgxMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pka4iv0AAA5ZSURBVHjaYvz8+TMD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' checkedIcon={<img src={avatarCar} className={classes.avtarChecked} alt='Car' />}   icon={<img src={avatarCar} alt='Car'/>}  />
                                            <Radio className={classes.radio_btn} name='cap' value='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAAEH5aXCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTA4RDhDMTMyQ0UzMTFFOEJDODBCOUQ4NkVERDIzNTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTA4RDhDMTQyQ0UzMTFFOEJDODBCOUQ4NkVERDIzNTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDhEOEMxMTJDRTMxMUU4QkM4MEI5RDg2RUREMjM1MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MDhEOEMxMjJDRTMxMUU4QkM4MEI5RDg2RUREMjM1MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqZxzXsAAA1ISURBVHjaYvz8+TMD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' checkedIcon={<img src={avatarCap} className={classes.avtarChecked} alt='Cap'/>}   icon={<img src={avatarCap} alt='Cap'/>} />
                                            <Radio className={classes.radio_btn} name='male' value='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAAEH5aXCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUI0MzhDOUEyQ0UzMTFFOEJENjhGN0QyRDU5NEIzQUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUI0MzhDOUIyQ0UzMTFFOEJENjhGN0QyRDU5NEIzQUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QjQzOEM5ODJDRTMxMUU4QkQ2OEY3RDJENTk0QjNBQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QjQzOEM5OTJDRTMxMUU4QkQ2OEY3RDJENTk0QjNBQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtZnll0AAAzYSURBVHjaYvz8+TMD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' checkedIcon={<img src={avatarMale} className={classes.avtarChecked} alt='male'/>}   icon={<img src={avatarMale} alt='male'/>} />
                                            <Radio className={classes.radio_btn} name='ship' value='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAAEH5aXCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDdCRDEyQzYyQ0UzMTFFOEI5OTRBQzNENTIwMDExOUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDdCRDEyQzcyQ0UzMTFFOEI5OTRBQzNENTIwMDExOUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0N0JEMTJDNDJDRTMxMUU4Qjk5NEFDM0Q1MjAwMTE5QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0N0JEMTJDNTJDRTMxMUU4Qjk5NEFDM0Q1MjAwMTE5QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmck7lwAAAwbSURBVHjaYvz8+TMD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' checkedIcon={<img src={avatarShip} className={classes.avtarChecked} alt='ship'/>}   icon={<img src={avatarShip} alt='ship'/>} />
                                            <Radio className={classes.radio_btn} name='iron' value='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAAEH5aXCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENFQjQwNjIyQ0UzMTFFOEFFNDhBMDlFOTY3MEQzNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NENFQjQwNjMyQ0UzMTFFOEFFNDhBMDlFOTY3MEQzNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Q0VCNDA2MDJDRTMxMUU4QUU0OEEwOUU5NjcwRDM2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0Q0VCNDA2MTJDRTMxMUU4QUU0OEEwOUU5NjcwRDM2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqgGjuUAAAxtSURBVHjaYvz8+TMD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' checkedIcon={<img src={avatarIron} className={classes.avtarChecked} alt='iron'/>}   icon={<img src={avatarIron} alt='iron'/>} />
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>

                                        <Typography sx={{color:'#646464',fontWeight:"500",fontSize:'18px',marginBottom:'5px'}}>My Address</Typography>
                                        <div style={{display:"block",width:'100%',height:'1px', backgroundColor:'#0000001f'}}></div>     

                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>Street name</Typography>
                                        <Input placeholder='Street name' name='street_name' onChange={(e:any)=>setStreetName(e.target.value)} value={streetname}/>
                                        {!streetname&&<p className={classes.error_msg}>{(detailsErrors as any).streetReq}</p>}
                                        <p className={classes.error_msg}>{(detailsErrors as any).streetInvalid}</p>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>House number</Typography>
                                        <Input placeholder='House number' name='houseNo' onChange={(e:any)=>setHouseNumber(e.target.value)} value={housenumber}/>
                                        {!housenumber&&<p className={classes.error_msg}>{(detailsErrors as any).houseReq}</p>}
                                        <p className={classes.error_msg}>{(detailsErrors as any).houseInvalid}</p>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>Postal code</Typography>
                                        <Input placeholder='Postal code' name='postal_code'onChange={(e:any)=>setPostalCode(e.target.value)} value={postalcode} />
                                        {!postalcode&&<p className={classes.error_msg}>{(detailsErrors as any).postalReq}</p>}
                                        <p className={classes.error_msg}>{(detailsErrors as any).postalInvalid}</p>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>City</Typography>
                                        
                                        <Select
                                            placeholder='city'
                                            type='select'
                                            className={classes.selectOption}
                                            IconComponent={OpenTimePicker}
                                            name='City'
                                            onChange={SelectCity}
                                            value={city}
                                            >   
                                            {
                                                postalcodes.map((e:any)=>{
                                                    if(e.code===postalcode)
                                                    return  <MenuItem value={e.city}>{e.city}</MenuItem> 
                                                })
                                            }
                                               
                                        </Select>
                                        {!city&&<p className={classes.error_msg}>{(detailsErrors as any).cityReq}</p>}
                                        
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <Accept type='submit' className={classes.saveBtn} >Save</Accept>
                                    </Grid>
                                </Grid>
                                
                            </form>
                        </CustomSettingsTabPanel>
                    
                        <CustomSettingsTabPanel value={Tabvalue} index={1}>
                        <form action="" className={classes.changepasswordForm} onSubmit={ChangePassword} id='Change-Password'>
                                
                                <div className={classes.changePassword}>
                                    <Typography sx={{color:'#646464',fontWeight:"500"}}>Current Password</Typography>
                                    <Input    placeholder='Current Password' type='password'  name='current_password' />
                                    <p className={classes.error_msg}>{(passError as any).currentrequired}</p>
                                    <p className={classes.error_msg}>{(passError as any).notmatch}</p>
                                </div>
                                <div className={classes.changePassword}>
                                    <Typography sx={{color:'#646464',fontWeight:"500"}}>New Password</Typography>
                                    <Input    placeholder='New Password' type='password' name='new_password' />
                                    <p className={classes.error_msg}>{(passError as any).newrequired}</p>
                                    
                                </div>
                                <div className={classes.changePassword}>
                                    <Typography sx={{color:'#646464',fontWeight:"500"}}>Confirm Password</Typography>
                                    <Input    placeholder='Confirm Password' type='password' name='confirm_password' />
                                    <p className={classes.error_msg}>{(passError as any).confirmrequired}</p>
                                    {(passError as any).notmatching&&<p className={classes.errorBig}>{(passError as any).notmatching}</p>}
                                    {(passError as any).length&&<p className={classes.errorBig}>{(passError as any).length}</p>}
                                </div>
                                
                                <Accept type='submit' className={classes.saveBtn} >Save</Accept>
                                
                            
                            </form>
                            
                        </CustomSettingsTabPanel>
                      
                        
                    </CustomTabPanel>
                    </div>

                {/*---------------------data table ends---------------------*/}

                </section>

                {/*---------------------main content services ends---------------------*/}

            </main>

            {/*---------------------main section ends---------------------*/}

            <Footer/>            
        </section>
            <Cookie/>
        </>
    );
}

export default ServiceProviderDashboard;