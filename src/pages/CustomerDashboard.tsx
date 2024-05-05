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
import { Grid, InputAdornment, MenuItem, PaginationItem, TableSortLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {calender_transparent} from '../assets/images/index'
import {sort_button} from '../assets/images/index'
import {uparrow} from '../assets/images/index'
import {dark_down_arrow} from '../assets/images/index'
import {first_last_arrow} from '../assets/images/index'
import {Left_dark_arrow} from '../assets/images/index'
import Pagination from '@mui/material/Pagination';
import {cap} from '../assets/images/index'
import {yellow_star} from '../assets/images/index'
import {normal_star} from '../assets/images/index'
import Cookie from '../components/Cookie';
import {Helmet,HelmetProvider} from 'react-helmet-async'
import {useContext} from 'react'
import { LoginContext,MySettingVarContext,UserProfileContext } from '../components/LoginContext';
import { useEffect } from 'react';
import {watch} from '../assets/images/index'
import {calender_user,green_calendar,edit,deleteIcon} from '../assets/images/index'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';
import { TextField } from '@mui/material';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
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

  const RescheduleDialog=styled(Dialog)({
    '& .MuiPaper-root.MuiDialog-paper':{
        
    }
    })
  export interface TitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }
const RescheduleDialogTitle = (props: TitleProps) => {
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

/*---------------------custom tab panel---------------------*/

const CustomTabPanel=styled(TabPanel)({
    '& .MuiBox-root':{
        padding:"0px !important",
    }
})

const CustomSettingsTabPanel=styled(TabPanel)({
    '& .MuiBox-root':{
        paddingTop:"20px !important",
    }
})


/*--------------------- RateSP button ---------------------*/
const RateSP=styled(Button)({
    
    '&.MuiButton-root':{
        // width:"70px",
        padding:'0 9px 0 12px',
        height:"34px",
        borderRadius:"17px",
    },
    '&.MuiButtonBase-root':{
        color:"white !important",
        backgroundColor:"#6DA9B5 ",
        textTransform:'capitalize',
        fontWeight:'300',
        fontSize:"14px",
        lineHeight:'14px',
        '&:hover':{
            backgroundColor:"#4c767f"
        },
    },
    
})

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
const Export=styled(Button)({
    
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

const DialogButton=styled(Button)({
    
    '&.MuiButton-root':{
        minWidth:"70px",
        width:'100%',
        height:"44px",
        borderRadius:"22px",
        '@media(max-width:575px)':{
            height:'auto'
        }
    },
    '&.MuiButtonBase-root':{
        color:"white !important",
        backgroundColor:"#146371 ",
        textTransform:'capitalize',
        fontWeight:'500',
        fontSize:"16px",
        '&:hover':{
            backgroundColor:"#2c737f"
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
        width:"33%",

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
/*---------------------Header data cell ---------------------*/
const HeaderDataCell=styled(TableCell)({
    fontSize:"16px",
    fontWeight:"bold",
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

    '& .MuiTableCell-root':{
        fontSize:"16px !important",
        color:"#646464 !important", 
        // height:'85px'
    },
    '&>td:nth-child(5)':{
        fontSize:'13px !important',
        color:"white  !important"
    },
    '&:last-child td, &:last-child th': {
        border: 0 
    },
    
    '&>td:nth-child(1),&>td:nth-child(5)':{
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
                padding:"10px 20px",
                height:'100%'

            },
        },
        '&:last-child td, &:last-child th': { borderBottom: "1px solid #e0e0e0"},
    }
})
/*---------------------custom table row ends---------------------*/


/*---------------------custom Accordion ---------------------*/


/*---------------------styled classes starts---------------------*/
const styles=makeStyles({
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
        // marginBottom:'8px',
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
        },
        '&>p':{
            paddingTop:"2px"
        }
    },
    customer_details_wrapper:{
        display:'flex',
        alignItems:'center'
        
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
    status:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'22px',
        width:'82px !important',
        textAlign:'center',
        lineHeight:'0'
    },
    currency:{
        display:'inline-block',
        color:'#1d7a8c',
        fontSize:"24px",
        fontWeight:"bold",
        width:'fit-content',
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
    tabpanel_header:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:'6px',
        '&>h3':{
            fontSize:"22px",
            fontWeight:'bold',
            color:'#646464',
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
        '& .MuiSelect-select':{
            
            color:"#646464",
            opacity:"1",
            // fontSize:"14px",
            
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#646464",
        },
        '&.MuiOutlinedInput-root ':{
            height:"46px",
            width:'100%',
            paddingRight:"10px"
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
        padding:'10px 0'
    },
    dialogSectionTitle:{
        color:'#646464',
        fontWeight:'500',
        fontSize:'16px'
    },
    themeColor:{
        color:'#646464'
    },
    date_picker:{
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD',
        },
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
            maxWidth:'143px',       
        },
        '&.MuiFormControl-root.MuiTextField-root':{
            marginRight:'10px',
        },
        '& .MuiInputAdornment-root':{
            marginRight:'0'
        }
        
    },
    time_picker:{
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #DEDDDD',
        },
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
            maxWidth:'143px',       
        },
        '&.MuiButtonBase-root.MuiIconButton-root':{
            margin:'0'
        },
        '&.MuiFormControl-root.MuiTextField-root':{
        },
        '& .MuiInputAdornment-root':{
            marginRight:'0px',
            marginLeft:"0"
        },
        
    },
    text:{
        width:"100% ",
        
        '& .MuiInputBase-root':{
            height:"46px",
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
            fontSize:"16px"
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
    datePicker:{
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':{
            border:'1px solid #C8C8C8',
        },
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
    error_msg:{
        color:'red'
    },
    errorBig:{
        color:'red',backgroundColor:'#fccece',height:'40px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'4px',marginTop:'10px'
    },
    addservice:{
        backgroundColor:"#146371 ",
        height:'34px',
        textDecoration:'none',
        color:'white',
        borderRadius:'17px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize:'14px',
        padding:'0 10px',
        '@media(max-width:575px)':{
            height:'45px'
        }
    },
    selectLanguage:{
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
    Green:{
        '& .MuiPaper-root.MuiSnackbarContent-root':{
            backgroundColor:'green',
        }
    },
    Red:{
        '& .MuiPaper-root.MuiSnackbarContent-root':{
            backgroundColor:'red',
        }
    },
    tabheader_text:{
        '@media(max-width:575px)':{
            fontSize:'18px !important'
        }
    },
    rating_wrapper:{
        display:'flex',alignItems:'center',
        justifyContent:'space-between',
        padding:'10px 0'
    },
    rating_text:{
        paddingTop:'4px',color:'#646464'
    },
    dialogContent:{
        '&.MuiDialogContent-root':{
            width:"500px",
            '@media(max-width:575px)':{
                width:'80vw'
            }
        },
        
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
})  

/*---------------------styled classes ends---------------------*/


/*---------------------tabs ja code starts---------------------*/
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
  const ServiceDetails=(props:prop_for_date_time)=>{
    const classes=styles();
    return(
        <>
          <div className={classes.service_date_wrapper}>
              <div className={classes.date}>
                  <img src={calender_transparent} alt="calender" />
                  <p>{props.date}</p>
              </div>
              <div className={classes.time}>
                  <p>{props.time}</p>
              </div>
          </div>
        </>
    );
   }
   /*---------------------service date component ends---------------------*/

   /*---------------------customer details component starts---------------------*/
   type prop_for_Rating={
    name:string,
    rating:number,
    avatar:string,
   }

   const ServiceProvider=(props:prop_for_Rating)=>{
    const classes=styles();
       return(
           <>
                <div className={classes.customer_details_wrapper}>
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
   /*---------------------customer details componet ends---------------------*/
   /* ----------- status component   ----------- */
   type prop_for_status={
        work_done:string
   }
   const Status=(props:prop_for_status)=>{
    const classes=styles();
       return(
           <>
                {(props.work_done==='Complete')? <span className={classes.status} style={{backgroundColor:"#67b644",fontWeight:'300'}}>Completed</span> : <span className={classes.status} style={{backgroundColor:'#ff6b6b',fontWeight:'300'}}>Canceled</span>}
           </>
       );
   }
/* ----------- payment component  ----------- */
   type prop_amount={
    amount:number
    }
  const Payment=(props:prop_amount)=>{
    const classes=styles();
      return(
          <>
            <h3 className={classes.currency}> <span style={{fontWeight:'normal',fontSize:"20px"}}>€</span>{props.amount}</h3>
          </>
      );
  }
/*---------------------Icons starts---------------------*/
   
  const Icon=()=>{
      return(
          <>
            <img style={{marginLeft:"10px"}} src={sort_button} alt="sort button" />
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
/* ----------- Icones ends  ----------- */
/* ----------- side menu data  ----------- */
const customerTabs=[
    {
        name:"Dashboard",
        a11yProps:0
    },
    {
      name:"Service History",
      a11yProps:1
    },
    {
      name:"Service Schedule",
      a11yProps:2
    },
    {
      name:"Favourite Pros",
      a11yProps:3
    },
    {
      name:"Invoices",
      a11yProps:4
    },
    {
      name:"Notifications",
      a11yProps:5
    },
    
]

type prop_date_time={
    date:string,
    time:string
  }
const ServiceDate=(props:prop_date_time)=>{
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
 type prop_payment={
     amount:string
 }
 const PaymentBold=(props:prop_payment)=>{
     return (
        <p style={{color:'#1d7a8c',fontSize:'25px',fontWeight:'600'}} >{props.amount}<span style={{color:'#1d7a8c',fontWeight:'500'}}> €</span> </p>
     );
 }

 const OpenDatePicker=()=>{
    return(
        <>
            <img src={green_calendar} alt="calendar" />
        </>
    );
}
const OpenTimePicker=()=>{
    return <img  src={dark_down_arrow} alt='down arrow'/>
}
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
const CustomerDashboard=()=>{
    const classes=styles();
    
    const {mySettingVar,setMySettingVar}:any =useContext(MySettingVarContext)
    const {userProfile,setUserProfile}:any=useContext(UserProfileContext)
    
    const [reqData,setReqData]=useState([]);
    const [historyData,setHistoryData]=useState([]);
    const [OrderData,setOrderData]=useState([]);
    const [toggleList,setToggleList]=useState(false)
    const [address,setAddress]=useState([])
    const [toastMsg,setToastMsg]=useState('')
    const [allProvider,setAllProvider]=useState([]) as any;
    const [Order,setOrder] = useState('asc');
    const [OrderBy,setOrderBy] = useState('ServiceId');
    const [postalcodes,setPostalCodes]=useState([]) as any;
    const handleSort=(property:any)=>{
        const isAsc=(OrderBy === property && Order === 'asc')
        setOrderBy(property)
        setOrder(isAsc ? 'desc': 'asc');
    }
    useEffect(()=>{        
     
        fetch('http://localhost:2000/Orders')
        .then(res=>res.json())
        .then(result=>{
            setOrderData(result.filter((e:any)=>{
                return((e['UniqueUID']===userProfile[0]?.UniqueId))
            }))
            setHistoryData(result.filter((e:any)=>{
                return((e['UniqueUID']===userProfile[0]?.UniqueId)&&((e['Status']==='Cancel')||(e['Status']==='Complete')))
            }))
            setReqData(result.filter((e:any)=>{
                return((e['UniqueUID']===userProfile[0]?.UniqueId)&&(e['Status']==='New'))
            }))
        });
        
        fetch('http://localhost:2000/Data')
        .then(res=>res.json())
        .then(result=>{
            setAllProvider(result.filter((e:any)=>{
                return((e['UserTypeId']===2))
            }))
        });

        fetch('http://localhost:2000/UserAddress')
        .then(res=>res.json())
        .then(result=>{
            setAddress(result.filter((e:any)=>{
                return((e['UniqueUID']===userProfile[0]?.UniqueId))
            }))
        });

        fetch('http://localhost:2000/PostalCode')
        .then(res=>res.json())
        .then(result=>setPostalCodes(result))
        },[toggleList])

    const [errorToast,setErrorToast]=useState(false);

    
    /*---------------------tab function---------------------*/
    const [value, setValue] = React.useState(0);
    const [Tabvalue, setTabValue] = React.useState(0);
    const handleSettingTabs = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };
    useEffect(()=>{
        if(mySettingVar){
            setValue(customerTabs.length)
        }
        else
            setValue(0);
    },[mySettingVar])
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setMySettingVar(false);
    };
    /*---------------------setname functionality---------------------*/
    const [name,setName]=useState('Dashboard');
    const [open,setOpen]=useState(false)
    const setname=(name:any)=>{
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
    /* ---------- to open top accordion -------------- */
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
    const [providerForRating,setProviderForRating]=useState([]) as any
    const [tempServiceProvider,setTempServiceProvider]=useState([]) as any;
    const [openRating,setOpenRating]=useState(false)
    const [NoOfReview,setNoOfReview]=useState(0);
    const [orderHistProvider,setOrderHistProvider]=useState([]) as any;
    const clickOpenRating=async(element:any)=>{
        setOpenRating(true);
        let TempOrder={}
        TempOrder=OrderData.filter((e:any)=>{
            return e['ServiceId']===element;
        })
        setProviderForRating((TempOrder as any)[0]);
        await fetch('http://localhost:2000/Data')
        .then(res=>res.json())
        .then(result=>{
            setTempServiceProvider(result.filter((e:any)=>{
                return e['ServiceProviderId']===(TempOrder as any)[0]['ServiceProviderId'];
            })
        )})

        await fetch('http://localhost:2000/Orders')
        .then(res=>res.json())
        .then(result=>setOrderHistProvider(
            result.filter((e:any)=>{
                return e['ServiceProviderId']===(TempOrder as any)[0]['ServiceProviderId'];
            })
        ))

        await fetch('http://localhost:2000/Ratings')
        .then(res=>res.json())
        .then(result=>result.map((e:any)=>{
            if(e['ServiceProviderId']===(TempOrder as any)[0]['ServiceProviderId']){
                setNoOfReview(NoOfReview+1);
            }
        }))
        
    }
    const closeRating=()=>{
        setOpenRating(false);
    }
    const [timeRate, setTimeRate] = React.useState(0);
    const [friendlyRate, setFriendlyRate] = React.useState(0);
    const [serviceRate, setServiceRate] = React.useState(0);
    const [disableRate,setDisableRate]=useState(false);
    const finalRating= async(element:any)=>{
        element.preventDefault();
        let form= document.getElementById('Rate') as HTMLFormElement;
        setToggleList(!toggleList);
        setDisableRate(true)
        setOpenRating(false);
        let totalRating=(parseFloat(timeRate as any)+parseFloat(friendlyRate as any)+parseFloat(serviceRate as any));
        let avgRating=totalRating/3;
        let FinalAvg=((tempServiceProvider as any)[0]['Rating']+avgRating)/(NoOfReview+1)
        let Rate=parseFloat((FinalAvg as any).toFixed(2));   
             
        // console.log(FinalAvg,avgRating,Rate,NoOfReview)
        let quality='';
        if(avgRating>=4)
            quality='Very Good'
        else if(avgRating>=3&&avgRating<4)
            quality='Good'
        else if(avgRating>=2&&avgRating<3)
            quality='Medium'
        else if(avgRating<2)
            quality='Poor'

        let UpdateRating={
            ...(tempServiceProvider)[0],
            Rating:Rate,
        }
        
        for(let i=0;i<orderHistProvider.length;i++){
            let UpdateOrderRating={
                ...orderHistProvider[i],
                Rating:Rate,
                Avatar:(tempServiceProvider)[0]['Avatar'],
                ServiceProvider:(tempServiceProvider)[0]['Firstname']+' '+(tempServiceProvider)[0]['Lastname']
            }
            await fetch(`http://localhost:2000/Orders/${(orderHistProvider)[i]['id']}`,{
                method:"PUT",
                body:JSON.stringify(UpdateOrderRating),
                headers:{
                    'Content-Type':'application/json'
                }
            })
        }
        
        await fetch(`http://localhost:2000/Data/${tempServiceProvider[0]['id']}`,{
            method:"PUT",
            body:JSON.stringify(UpdateRating),
            headers:{
                'Content-Type':'application/json'
            }
        })
        let Rating={
            ServiceId:(providerForRating as any)['ServiceId'],
            ServiceProviderId:(providerForRating as any)['ServiceProviderId'],
            UniqueUId:(providerForRating as any)['UniqueUID'],
            Name:userProfile[0]['Firstname'] +' '+ userProfile[0]['Lastname'],
            Rating:avgRating,
            Time:(providerForRating as any)['Time'],
            Date:(providerForRating as any)['Date'],
            OnTimeArrival:timeRate,
            Friendliness:friendlyRate,
            QualityOfService:serviceRate,
            Quality:quality,
            Messege:form.messege.value,
        }
        await fetch('http://localhost:2000/Ratings',{
            method:"POST",
            body:JSON.stringify(Rating),
            headers:{
                'Content-Type':'application/json'
            }
        })


    }


    const [date,setDateValue]=useState<Date>(new Date()) as any;
    const [time,setTimeValue]=useState<Date>(new Date()) as any;
    const [openCancelDialog,setOpenCancelDialog]=useState(false);
    
    const closeCancelDialog=()=>{
        setOpenCancelDialog(false)
    }
    const [orderToCancel,setOrderToCancel]=useState({}) as any;
    const [disableCancel,setDisableCancel]=useState(true);
    const CancelReason=(e:any)=>{
        if(e.target.value)
            setDisableCancel(false)
        else
            setDisableCancel(true)
    }
    const CancelReq=(element:any)=>{
        setOpenCancelDialog(true);
        setOpenDetailDialog(false);
        setToggleList(!toggleList)
        setOrderToCancel(OrderData.filter((e:any)=>{
            return e['ServiceId']===element;
        }))
    }

    const cancelRequest=async(e:any)=>{
        e.preventDefault();
        if(orderToCancel[0]['ServiceProviderId']!==''){
            let MailPara={
                Name:orderToCancel[0]['ServiceProvider'],
                Mailto:orderToCancel[0]['ServiceProviderId']+'.com',
                Messege:`Service Request ${orderToCancel[0]['ServiceId']} has been canceled by user ${orderToCancel[0]['Name']}`
            }
            emailjs.send('Reschedule','RstPwd' ,MailPara, '9BlD6397XdGSbKNUb')
        }else{
            let emailArr=[];
            
            for(let i=0;i<allProvider.length;i++){
                emailArr[i]= allProvider[i]['EmailAddress']
            
            }

            let MailPara={
                Name:'User',
                Mailto:[...emailArr],
                Messege:`Service Request ${orderToCancel[0]['ServiceId']} has been canceled by user ${orderToCancel[0]['Name']}`
            }
            emailjs.send('Reschedule','RstPwd' ,MailPara, '9BlD6397XdGSbKNUb')
        }
        
        
        let form = document.getElementById('Cancel-Order') as HTMLFormElement
        setOpenCancelDialog(false);
        setToggleList(!toggleList);
        let UpdatedOrder={
            ...(orderToCancel as any)['0'],Status:'Cancel',CancelReason:form.reason.value
        }
        await fetch(`http://localhost:2000/Orders/${(orderToCancel as any)[0]['id']}`,{
            method:'PUT',
            body:JSON.stringify(UpdatedOrder),
            headers:{
                'Content-Type':'application/json'
            }
        })
        setErrorToast(true)
        setToastMsg('Order request is canceled successfully !')
        setOpenToaster(true)
    }

    const [openRechedule,setOpenReschedule]=useState(false);
    const closeReschedule=()=>{
        setOpenReschedule(false);
    }
    const [orderToReschedule,setOrderToReschedule]=useState({}) as any;
    const [providerID,serProviderID]=useState('') as any;
    const [providerAcceptedOrder,setProviderAcceptedOrder]=useState([]) as any;
    const RecheduleOrder=(element:any)=>{
        setOpenDetailDialog(false);
        setOrderToReschedule((OrderData.filter((e:any)=>{
            return e['ServiceId']===element;
        })))
        setOpenReschedule(true);
        
    }
    
    useEffect(()=>{
        setDateValue(`${orderToReschedule[0]&&orderToReschedule[0]['Date'].substr(3,2)}/${orderToReschedule[0]&&orderToReschedule[0]['Date'].substr(0,2)}/${orderToReschedule[0]&&orderToReschedule[0]['Date'].substr(6,10)}`)
        setTimeValue(orderToReschedule[0]&&orderToReschedule[0]['TimeStamp'])
        serProviderID(orderToReschedule[0]&&orderToReschedule[0]['ServiceProviderId'])
    },[orderToReschedule])


    useEffect(()=>{
        setProviderAcceptedOrder((OrderData.filter((e:any)=>{
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
            
            return ((e['ServiceProviderId']===providerID)&&conflict&&(e['Status']==='New'));
        })))
    },[providerID])

    const ChangeDateTime=async(element:any)=>{
        element.preventDefault();
        setOpenReschedule(false)
        setToggleList(!toggleList);
        let form = document.getElementById('change-date-time') as HTMLFormElement;
        let Hours=parseInt(form.time.value.substr(0,2))
            let Minutes=parseInt(form.time.value.substr(3,2))
            let duration=orderToReschedule[0].Duration;
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
        //     let tempTime=new Date(date) as any;
        // let t =tempTime.getTime()
        // console.log(tempTime)
        let UpdateDateTime={
            ...(orderToReschedule as any)['0'],
            Time:form.time.value.substr(0,5)+' - '+finalTime,
            Date:form.date.value,
            // TimeStamp:t,
            StartTime:Start,
            EndTime:(FinalMin===0)?End+parseFloat((FinalMin/60).toFixed(1)):(End-1)+parseFloat((FinalMin/60).toFixed(1)),
        }
        
        if(orderToReschedule[0].ServiceProviderId!==''){

            

            let conflictObj=providerAcceptedOrder.filter((e:any)=>{
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
                if(e.ServiceId===(orderToReschedule as any)[0]['ServiceId'])
                    conflictVar=false;

                return conflictVar
            })
            console.log(conflictObj)
            if(Object.keys(conflictObj).length===0){
                setToggleList(!toggleList);
                
            let MailPara={
                Name:orderToReschedule[0]['ServiceProvider'],
                Mailto:[orderToReschedule[0]['ServiceProviderId']+'.com'],
                Messege:`Service Request ${orderToReschedule[0]['ServiceId']} has been Rescheduled on ${form.date.value} at ${form.time.value} by user ${orderToReschedule[0]['Name']}`
            }
            emailjs.send('Reschedule','RstPwd' ,MailPara, '9BlD6397XdGSbKNUb')
               
               await fetch(`http://localhost:2000/Orders/${(orderToReschedule as any)[0]['id']}`,{
                    method:'PUT',
                    body:JSON.stringify(UpdateDateTime),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                setErrorToast(true)
                setToastMsg('Service Request is reschedule successfully!')
                setOpenToaster(true);
            }
            else{
                setToggleList(!toggleList);
                setErrorToast(false)
                setToastMsg('The request is conflict with provider schedule!')
                setOpenToaster(true);
            }

        }
        else{
            
            setToggleList(!toggleList);
           await fetch(`http://localhost:2000/Orders/${(orderToReschedule as any)[0]['id']}`,{
                method:'PUT',
                body:JSON.stringify(UpdateDateTime),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            setErrorToast(true)
            setToastMsg('Service Request is reschedule successfully!')
            setOpenToaster(true);
        }
        
        
        
    }
    const [openAddAddress,setOpenAddAddress]=useState(false);
    const clickOpenAddress=()=>{
        setOpenAddAddress(true);
    }

    const closeAddAddress=()=>{
        setOpenAddAddress(false)
    }

    const [newCity,setNewCity]=useState([]) as any;
    const handleNewCity=(e:any)=>{
        setNewCity(e.target.value)
    }
    let AddError={}
    const [AddressError,setAddressError]=useState({});
    const AddAddress=async(element:any)=>{
        element.preventDefault();
        let form=document.getElementById('Add-address') as HTMLFormElement;
        AddError=validateAddress(form);
        setAddressError(AddError);

        if(Object.keys(AddError).length===0){
            let AddAddress={
                StreetName:form.street_name.value ,
                HouseNo:form.house_no.value ,
                PostalCode:form.postal_code.value,
                City: newCity,
                Phonenumber: form.contact_number.value,
                UniqueUID: userProfile[0]?.UniqueId,
            }
            await fetch('http://localhost:2000/UserAddress',{
                method:'POST',
                body:JSON.stringify(AddAddress),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            setToastMsg('Address is added successfully!')
            setOpenToaster(true)
            setToggleList(!toggleList)
            setOpenAddAddress(false)
            element.target.reset();
        }
    }
    const [openDetailDialog,setOpenDetailDialog]=useState(false)
    const closeDetailDialog=()=>{
        setOpenDetailDialog(false)
    }    
    const [dialogOrder,setDialogOrder]=useState([]);
    
    const detailDialog=(element:any)=>{
        setOpenDetailDialog(true);
        let Order=OrderData.filter((e:any)=>{
            return e['ServiceId']===element;
        })

        setDialogOrder(Order[0]);
    }
    const [openEditAddress, setOpenEditAddress]=useState(false)

    const closeEditAddress=()=>{
        setOpenEditAddress(false)
    }

    const [tempAddress,setTempAddress]=useState([]);
    const [street,setStreet]= useState(null)
    const [houseNo,setHouseNo]= useState(null)
    const [postalcode,setPostalCode]= useState(null)
    const [city,setCity]= useState(null)
    const [mobile,setMobile]= useState(null)
    const SelectCity=(e:any)=>{
        setCity(e.target.value)
    }
    const clickOpenEditAddress=(element:any)=>{
        setOpenEditAddress(true);
        setTempAddress(address.filter((e:any)=>{
            return e['id']===element;
        }))
        setStreet(null);setHouseNo(null);setPostalCode(null);setCity(null);setMobile(null)
    }
    const validateAddress=(form:HTMLFormElement)=>{
        const errors={};
        const regx=/^\d{10}$/;
        const regxForText=/^[A-Za-z ]+$/
        let regxForHouse=/[0-9]|[0-9][0-9]|[0-9][0-9][0-9]$/
        let regxForPost=/^\d{6}$/;
        if(!form.street_name.value)
            (errors as any).streetReq='Street name is required!'
        else if(!regxForText.test(form.street_name.value))
            (errors as any).streetInvalid='Street name is invalid!'
        if(!form.house_no.value)
            (errors as any).houseReq='House number is required!'
        else if(!regxForHouse.test(form.house_no.value))
            (errors as any).houseInvalid='House number is invalid!'
        if(!form.postal_code.value)
            (errors as any).postalReq='Postal code is required!'
        else if(!regxForPost.test(form.postal_code.value))
            (errors as any).postalInvalid='Postal code is invalid!'
        if(!form.city.value)
            (errors as any).cityReq='City is required!'
        else if(!regxForText.test(form.city.value))
            (errors as any).cityInvalid='City is invalid!'
        if(!form.contact_number.value)
            (errors as any).mobileReq='Phone number is required!'
        else if(!regx.test(form.contact_number.value))
            (errors as any).mobileInvalid='Phone number is invalid!'

        return errors;
    }
    let addressError={}
    const [AddressEr,setAddressEr]=useState({})
    const EditAddress=async(e:any)=>{
        e.preventDefault();
        let form= document.getElementById('Address') as HTMLFormElement;
        addressError=validateAddress(form)
        setAddressEr(addressError)
        if(Object.keys(addressError).length===0){
        let UpdateAddress={
            StreetName:form.street_name.value,
            HouseNo:form.house_no.value,
            PostalCode:form.postal_code.value,
            City:city,
            Phonenumber:form.contact_number.value,
            UniqueUID:userProfile[0]?.UniqueId
        }
        await fetch(`http://localhost:2000/UserAddress/${(tempAddress as any)[0]['id']}`,{
            method:'PUT',
            body:JSON.stringify(UpdateAddress),
            headers:{
                'Content-Type':'application/json'
            }
        })
        setErrorToast(true);
        setToastMsg('Address is updated successfully !')
        setOpenToaster(true);
        setToggleList(!toggleList)
        setOpenEditAddress(false);
        }
    }

    const ExportXlsx=()=>{
        const workSheet=XLSX.utils.json_to_sheet(historyData)
        const workBook=XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workBook,workSheet,'xyz')
        // let buf=XLSX.write(workBook,{bookType:'xlsx',type:'buffer'})
        XLSX.write(workBook,{bookType:'xlsx',type:'binary'})
        XLSX.writeFile(workBook,'ServiceHistory.xlsx')
    }
    const deleteAddress=async(element:any)=>{
        await fetch(`http://localhost:2000/UserAddress/${element}`,{
            method:"DELETE"
        })
        setErrorToast(true);
        setToastMsg('Address deleted successfully !')
        setOpenToaster(true);
        setToggleList(!toggleList)
        console.log(element)
    }
    const [firstname,setFirstName]=useState(userProfile[0]&&userProfile[0]['Firstname'])
    const [lastname,setLastName]=useState(userProfile[0]&&userProfile[0]['Lastname'])
    const [mobileNumber,setMobileNumber]=useState(userProfile[0]&&userProfile[0]['MobileNumber'])
    const [Email,setEmail]=useState(userProfile[0]&&userProfile[0]['EmailAddress'])
    const [dateOfBirth,setDOB]=useState<Date|null>(new Date(`${userProfile[0]['DOB']?.substr(3,2)}/${userProfile[0]['DOB']?.substr(0,2)}/${userProfile[0]['DOB']?.substr(6,10)}`)) as any;
    
    
    const validatePersonalInfo=()=>{
        const errors = {}
        const regx=/^\d{10}$/;
        const regxForText=/^[A-Za-z]+$/

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
        if(!regx.test(mobileNumber))
            (errors as any).mobileInvalid='Mobile number is invalid!'
        return errors;
    }
    let PersonalError={}
    const [personalError,setPersonalError]=useState({});
    const EditPersonalInfo=async(e:any)=>{
        e.preventDefault();
        PersonalError=validatePersonalInfo();
        setPersonalError(PersonalError)

        if(Object.keys(PersonalError).length===0){
        let UpdateProfile={
            ...userProfile[0],
            Firstname:firstname,
            Lastname: lastname,      
            MobileNumber: mobileNumber,
            DOB: dateOfBirth.getDate()+'/'+(dateOfBirth.getMonth()+1)+'/'+dateOfBirth.getFullYear(),
            Language:lan
        }
        await fetch(`http://localhost:2000/Data/${(userProfile as any)[0]['id']}`,{
            method:"PUT",
            body:JSON.stringify(UpdateProfile),
            headers:{
                'Content-Type':'application/json'
            }
        })

        setErrorToast(true)
        setToastMsg('Personal details updated successfully !')
        setOpenToaster(true);
        setToggleList(!toggleList)
        e.target.reset()
        }
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
            setErrorToast(true);
            setToastMsg('password is changed successfully!')
            element.target.reset();
            setOpenToaster(true);
            setToggleList(!toggleList)
        }
    }
    const [lan,setLan]=useState('english')
    const Selectlanguage=(e:any)=>{
        setLan(e.target.value)
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
      let slicedHistoryData=parseInt(rowsPerPage) > 0
      ? historyData.slice(page * parseInt(rowsPerPage), page * parseInt(rowsPerPage) + parseInt(rowsPerPage))
      : historyData
    return(
        <>

        <Snackbar
            anchorOrigin={{vertical:'top',horizontal:'right'}}
            open={openToaster}
            onClose={closeToaster}
            message={toastMsg}
            autoHideDuration={3000}
            action={action}
            className={ errorToast?`${classes.Green}`:`${classes.Red}`}
        />


        {/*---------------------main wrapper starts---------------------*/}
        <CustomDialog
            onClose={closeDetailDialog}
            TransitionComponent={Transition}
            aria-labelledby="customized-dialog-title"
            open={openDetailDialog}
        >
            <CustomDialogTitle id="customized-dialog-title" onClose={closeDetailDialog} > Service Details </CustomDialogTitle>
            
            <CustomDialogContent>
                <div className={classes.dialogSection} >
                    {(dialogOrder as any)['Date']&&<p style={{fontSize:'18px',color:'#646464',fontWeight:'600'}}>{(dialogOrder as any)['Date']}  {(dialogOrder as any)['Time']}</p>}
                   <p className={classes.themeColor}> <span className={classes.dialogSectionTitle}>   Duration : </span> {(dialogOrder as any)['Duration']} Hrs</p>
                </div>
                <div className={classes.dialogSection}>
                    <p className={classes.themeColor}> <span className={classes.dialogSectionTitle}> Service Id </span>: {(dialogOrder as any)['ServiceId']}</p>
                    {(dialogOrder as any)['Extra']&&<p className={classes.themeColor}> <span className={classes.dialogSectionTitle}> Extras : </span> {Object.keys((dialogOrder as any)['Extra']).map((key:any)=> {return <span> {key}, </span>})}</p>}
                    <p className={classes.dialogSectionTitle}>Net Amount :</p>
                    <p style={{alignSelf:'center',color:"#1d7a8c",fontWeight:'600',fontSize:'22px'}}>{(dialogOrder as any)['TotalPayment']} €</p>
                </div>
                <div className={classes.dialogSection}>
                    {(dialogOrder as any)['Address']&&<p className={classes.themeColor} > <span className={classes.dialogSectionTitle}> Service Address: </span> {(dialogOrder as any)['Address'].StreetName} ,{(dialogOrder as any)['Address'].HouseNo}, {(dialogOrder as any)['Address'].PostalCode}, {(dialogOrder as any)['Address'].City} </p>}
                    <p className={classes.themeColor} > <span className={classes.dialogSectionTitle}> Billing Address: </span> {(dialogOrder as any)['BillingAddress']?.StreetName===undefined?'Same as cleaning address':''} {(dialogOrder as any)['BillingAddress']?.StreetName} {(dialogOrder as any)['BillingAddress']?.HouseNo} {(dialogOrder as any)['BillingAddress']?.PostalCode} {(dialogOrder as any)['BillingAddress']?.City}</p>
                    <p className={classes.themeColor}> <span className={classes.dialogSectionTitle}>Email: </span> {userProfile[0]&&userProfile[0]['EmailAddress']}</p>
                    {(dialogOrder as any)['Address']&&<p className={classes.themeColor}> <span className={classes.dialogSectionTitle}>Phone Number : </span> {(dialogOrder as any)['Address'].Phonenumber}</p>}
                </div>
                <div className={classes.dialogSection}>
                    <p className={classes.dialogSectionTitle}>Comments</p>
                    { !(dialogOrder as any)['Pet']?<p style={{display:'flex',alignItems:'center',color:'#646464'}}> <CancelRoundedIcon sx={{color:'red',marginRight:'5px'}}/> <p style={{paddingTop:'3px'}}> I don't have pets at home </p> </p>:<p style={{display:'flex',alignItems:'center',color:'#646464'}}> <CheckCircleRoundedIcon sx={{color:'green',marginRight:'5px'}}/> <p style={{paddingTop:'3px'}}> I have pet at home </p></p>}
                </div>
                <div style={{display:'flex',paddingTop:'10px'}}>
                <Export onClick={(e:any)=>{e.stopPropagation();RecheduleOrder((dialogOrder as any)['ServiceId'])}} sx={{maxWidth:'140px',marginRight:'20px'}}> <HistoryRoundedIcon sx={{marginRight:'5px'}}/> Reschedule</Export>
                <Cancel onClick={(e:any)=>{e.stopPropagation();CancelReq((dialogOrder as any)['ServiceId'])}} style={{width:'90px'}} > <CloseRoundedIcon/> Cancel</Cancel>
                </div>
            </CustomDialogContent>
                
        </CustomDialog >

        <RescheduleDialog
            onClose={closeReschedule}
            TransitionComponent={Transition}
            aria-labelledby="customized-dialog-title"
            open={openRechedule}
        >
            <RescheduleDialogTitle id="customized-dialog-title" onClose={closeReschedule} >Reschedule Service Request</RescheduleDialogTitle>
            <CustomDialogContent>
            <form action="" id='change-date-time' onSubmit={ChangeDateTime}>
               <p style={{color:"#646464",marginBottom:'5px'}}> Select New Date & Time</p>
            <div style={{display:'flex',marginBottom:'15px'}}>
                
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
                        OpenPickerIcon:OpenTimePicker
                    }}
                    onChange={(newValue:any) => {
                        setTimeValue(newValue);
                    }}
                    renderInput={(params) => <TextField name='time' className={classes.time_picker} {...params} />}
                    />
                </LocalizationProvider>
                
                </div>
                <DialogButton type='submit' >Update</DialogButton>
                </form>
            </CustomDialogContent>
                
        </RescheduleDialog >
        
        <RescheduleDialog
            onClose={closeCancelDialog}
            TransitionComponent={Transition}
            aria-labelledby="customized-dialog-title"
            open={openCancelDialog}
        >
            <RescheduleDialogTitle id="customized-dialog-title" onClose={closeCancelDialog} >Cancel Service Request</RescheduleDialogTitle>
            <CustomDialogContent>
            <form action="" id='Cancel-Order' onSubmit={cancelRequest}>
               <p style={{color:"#646464",marginBottom:'5px'}}> Why you want to cancel the service request?</p>
               <div style={{marginBottom:'15px'}}>
                <Textarea multiline minRows={3} onChange={CancelReason} name='reason' sx={{minHeight:'70px'}}/>
                </div>
                <DialogButton type='submit' disabled={disableCancel} >Cancel Now</DialogButton>
            </form>
            </CustomDialogContent>
                
        </RescheduleDialog >


        <RescheduleDialog
            onClose={closeRating}
            TransitionComponent={Transition}
            aria-labelledby="customized-dialog-title"
            open={openRating}
            sx={{minWidth:'100vw'}}
        >
            <RescheduleDialogTitle id="customized-dialog-title" onClose={closeRating} >{(providerForRating as any)&&<ServiceProvider avatar={(providerForRating as any)['Avatar']} rating={(providerForRating as any)['Rating']} name={(providerForRating as any)['ServiceProvider']} />}</RescheduleDialogTitle>

            <CustomDialogContent  className={classes.dialogContent}> 
            <form action="" id='Rate' onSubmit={finalRating}>
               <p style={{color:"#646464",marginBottom:'5px'}}>Rate Your Service Provider  </p>
               <div style={{backgroundColor:'#c8c8c8',width:'100%',height:'1px'}}></div>
                
                <div className={classes.rating_wrapper} ><p className={classes.rating_text}  >On time arrival</p>  <Rating name="simple-controlled" precision={0.5} value={timeRate} onChange={(e:any)=>setTimeRate(e.target.value)}/></div>
                
                <div className={classes.rating_wrapper}><p className={classes.rating_text} >Friendly  </p><Rating name="simple-controlled" precision={0.5} value={friendlyRate} onChange={(e:any)=>setFriendlyRate(e.target.value)}/></div>
                
                <div className={classes.rating_wrapper}><p className={classes.rating_text}>Quality of service </p><Rating name="simple-controlled" precision={0.5} value={serviceRate} onChange={(e:any)=>setServiceRate(e.target.value)}/></div>
                
               <div style={{marginBottom:'15px'}}>
                  <p style={{color:"#646464",marginBottom:'10px'}} > feed back on service provider</p>
                <Textarea multiline minRows={3} name='messege' sx={{minHeight:'70px'}}/>
                </div>
                <DialogButton disabled={(timeRate===0)||(friendlyRate===0)||(serviceRate===0)||disableRate}  type='submit' sx={{maxWidth:'fit-content',padding:'auto 20px'}} >Submit</DialogButton>
            </form>
            </CustomDialogContent>
                
        </RescheduleDialog >
       
        <RescheduleDialog
            onClose={closeEditAddress}
            TransitionComponent={Transition}
            aria-labelledby="customized-dialog-title"
            open={openEditAddress}
            sx={{minWidth:'100vw'}}
        >
            <RescheduleDialogTitle id="customized-dialog-title" onClose={closeEditAddress} >Edit Address</RescheduleDialogTitle>
                <CustomDialogContent sx={{minWidth:'35vw'}} >
                    <form action="" id='Address' onSubmit={EditAddress}>
                    <Grid container columnSpacing={{lg:2,md:2,sm:2}} rowSpacing={{lg:2,sm:2,md:2,xs:2}}>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{color:'#646464',fontWeight:"500"}}>Street name</Typography>
                            <Input className={classes.text} value={(street===null)?tempAddress[0]&&tempAddress[0]['StreetName']:street} onChange={(e:any)=>setStreet(e.target.value)} placeholder='First name' name='street_name'/>
                            <p className={classes.error_msg}>{(AddressEr as any).streetReq}</p>
                            <p className={classes.error_msg}>{(AddressEr as any).streetInvalid}</p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{color:'#646464',fontWeight:"500"}}>House number</Typography>
                            <Input className={classes.text} value={(houseNo===null)?tempAddress[0]&&tempAddress[0]['HouseNo']:houseNo} onChange={(e:any)=>setHouseNo(e.target.value)}  placeholder='First name' name='house_no'/>
                            <p className={classes.error_msg}>{(AddressEr as any).houseReq}</p>
                            <p className={classes.error_msg}>{(AddressEr as any).houseInvalid}</p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{color:'#646464',fontWeight:"500"}}>Postal code</Typography>
                            <Input className={classes.text} value={(postalcode===null)?tempAddress[0]&&tempAddress[0]['PostalCode']:postalcode} onChange={(e:any)=>setPostalCode(e.target.value)}  placeholder='First name' name='postal_code'/>
                            <p className={classes.error_msg}>{(AddressEr as any).postalReq}</p>
                            <p className={classes.error_msg}>{(AddressEr as any).postalInvalid}</p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{color:'#646464',fontWeight:"500"}}>City</Typography>
                            
                            <Select
                                placeholder='city'
                                type='select'
                                className={classes.selectOption}
                                IconComponent={OpenTimePicker}
                                name='city'
                                onChange={SelectCity}
                                value={(city===null)?tempAddress[0]&&tempAddress[0]['City']:city}
                                >   
                                {
                                    postalcodes.map((e:any)=>{
                                        if(e.code===((postalcode===null)?tempAddress[0]&&tempAddress[0]['PostalCode']:postalcode))
                                        return  <MenuItem value={e.city}>{e.city}</MenuItem> 
                                    })
                                }
                                    
                            </Select>
                            <p className={classes.error_msg}>{(AddressEr as any).cityReq}</p>
                            
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{color:'#646464',fontWeight:"500"}}>Phone number</Typography>
                            <TextField
                                type='tel'
                                className={classes.mobileno}
                                placeholder='Mobile number'
                                name='contact_number'
                                value={(mobile===null)?tempAddress[0]&&tempAddress[0]['Phonenumber']:mobile} onChange={(e:any)=>setMobile(e.target.value)}
                                InputProps={{
                                    startAdornment:  <InputAdornment position="start"><span className={classes.span} >+49</span> </InputAdornment>
                                }}
                            />
                            <p className={classes.error_msg}>{(AddressEr as any).mobileReq}</p>
                            <p className={classes.error_msg}>{(AddressEr as any).mobileInvalid}</p>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <DialogButton type="submit">Edit</DialogButton>
                        </Grid>
                    </Grid>
                    </form>
                </CustomDialogContent>
        </RescheduleDialog>


        <RescheduleDialog
            onClose={closeAddAddress}
            TransitionComponent={Transition}
            aria-labelledby="customized-dialog-title"
            open={openAddAddress}
            sx={{minWidth:'100vw'}}
        >
            <RescheduleDialogTitle id="customized-dialog-title" onClose={closeAddAddress} >Add New Address</RescheduleDialogTitle>
                <CustomDialogContent sx={{minWidth:'35vw'}} >
                    <form action="" id='Add-address' onSubmit={AddAddress}>
                    <Grid container columnSpacing={{lg:2,md:2,sm:2}} rowSpacing={{lg:2,sm:2,md:2,xs:2}}>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{color:'#646464',fontWeight:"500"}}>Street name</Typography>
                            <Input className={classes.text}   placeholder='First name' name='street_name'/>
                            <p className={classes.error_msg}>{(AddressError as any).streetReq}</p>
                            <p className={classes.error_msg}>{(AddressError as any).streetInvalid}</p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{color:'#646464',fontWeight:"500"}}>House number</Typography>
                            <Input className={classes.text}  placeholder='First name' name='house_no'/>
                            <p className={classes.error_msg}>{(AddressError as any).houseReq}</p>
                            <p className={classes.error_msg}>{(AddressError as any).houseInvalid}</p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{color:'#646464',fontWeight:"500"}}>Postal code</Typography>
                            <Input className={classes.text}  onChange={(e:any)=>setPostalCode(e.target.value)}   placeholder='First name' name='postal_code'/>
                            <p className={classes.error_msg}>{(AddressError as any).postalReq}</p>
                            <p className={classes.error_msg}>{(AddressError as any).postalInvalid}</p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{color:'#646464',fontWeight:"500"}}>City</Typography>
                            <Select
                                placeholder='city'
                                type='select'
                                className={classes.selectOption}
                                IconComponent={OpenTimePicker}
                                name='city'
                                onChange={handleNewCity}
                                value={newCity}
                                >   
                                {
                                    postalcodes.map((e:any)=>{
                                        if(e.code===postalcode)
                                        return  <MenuItem value={e.city}>{e.city}</MenuItem> 
                                    })
                                }
                                    
                            </Select>
                            <p className={classes.error_msg}>{(AddressError as any).cityReq}</p>
                            
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{color:'#646464',fontWeight:"500"}}>Phone number</Typography>
                            <TextField
                                type='tel'
                                className={classes.mobileno}
                                placeholder='Mobile number'
                                name='contact_number'
                                InputProps={{
                                    startAdornment:  <InputAdornment position="start"><span className={classes.span} >+49</span> </InputAdornment>
                                }}
                            />
                            <p className={classes.error_msg}>{(AddressError as any).mobileReq}</p>
                            <p className={classes.error_msg}>{(AddressError as any).mobileInvalid}</p>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <DialogButton type="submit">Add</DialogButton>
                        </Grid>
                    </Grid>
                    </form>
                </CustomDialogContent>
        </RescheduleDialog>
         
         <section className="wrapper">
            <HelmetProvider>
                <Helmet>
                    <title>Customer | Helperland</title>
                </Helmet>
            </HelmetProvider>
            {/*---------------------Navbar---------------------*/}

            <Navbar  otherpage={true} logo={logo} link1="Book Now" link2="Prices & services" link3="Warantee" link4="Blog" link5="Contact" link6="Login" link7="Become a Helper" languageoption={false}/>

            {/*---------------------other page hero banner start---------------------*/}

            <section className=" other-page-hero-banner">

                {/*---------------------custom accordian starts---------------------*/}

                <button  className='accordion-btn' onClick={()=>openMenu()} >{name} <span className={open?'active-expandicon':'normal-expandicon'}><ExpandIcon/></span></button> 
                {/*---------------------custom accordion ends---------------------*/}            
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
                    sx={{  borderColor: 'divider'}}                   
                    >
                        {
                            customerTabs.map((e:any)=>{
                                return(
                                <CustomTab onClick={(e:any)=>setname((e.target as HTMLInputElement).innerHTML)} disableRipple label={e.name} {...a11yProps(parseInt(`${e.a11yProps}`))} />    
                                );
                            })
                        }
                    </CustomTabs>
                    {/*---------------------custom tabs ends---------------------*/}
                    </div>
                    {/*---------------------data table starts---------------------*/}
                    <div className="data-table-customer">
                    <CustomTabPanel value={value} index={0}>
                        <div className={classes.tabpanel_header}> <h3 className={classes.tabheader_text}>Current Service Requests</h3> <NavLink to='/BookService' className={classes.addservice} title='Add New Service Request' > Add New Service Request </NavLink> </div>
                        <TableContainer component={Paper}  sx={{borderRadius:"0",border:"1px solid #E1E1E1",boxShadow:"none",marginBottom:'10px','@media(max-width:767px)':{border:"none"}}}>
                            <Table  aria-label="simple table"  >
                                <TableHead sx={{backgroundColor:"#f9f9f9",'@media(max-width:767px)':{display:"none"}}}>
                                    <TableRow sx={{'*':{ fontSize:"16px !important", color:"#646464 !important",}}} >
                                        <HeaderDataCell > Service Id </HeaderDataCell>
                                        <HeaderDataCell align="left">Service Date</HeaderDataCell>
                                        <HeaderDataCell align="left">Service Provider</HeaderDataCell>
                                        <HeaderDataCell align="center">Payment</HeaderDataCell>
                                        <HeaderDataCell align="center">Action</HeaderDataCell>
                                    </TableRow>
                                </TableHead>
                                
                                <TableBody>
                                    {( parseInt(rowsPerPage) > 0
                                    ? reqData.slice(page * parseInt(rowsPerPage), page * parseInt(rowsPerPage) + parseInt(rowsPerPage))
                                    : reqData
                                    ).map((row:any) => (
                                    <CustomTableRow onClick={()=>detailDialog(row['ServiceId'])} >
                                    <CustomTableCell  scope="row">
                                        {row.ServiceId}
                                    </CustomTableCell>
                                    <CustomTableCell  scope="row">
                                        {<ServiceDate date={row.Date} time={row.Time}/>}
                                    </CustomTableCell>
                                    <CustomTableCell  scope="row">
                                        {row.ServiceProvider&&<ServiceProvider avatar={row.Avatar} rating={row.Rating} name={row.ServiceProvider} />}
                                    </CustomTableCell>
                                    <CustomTableCell  scope="row">
                                        <PaymentBold amount={row.TotalPayment} />
                                    </CustomTableCell>
                                    <CustomTableCell  scope="row" >
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'100% !important'}}>
                                            <Export sx={{lineHeight:'26px'}} onClick={(e:any)=>{e.stopPropagation();RecheduleOrder(row.ServiceId)}} >Reschedule</Export>
                                            <Cancel onClick={(e:any)=>{e.stopPropagation();CancelReq(row.ServiceId)}} sx={{lineHeight:"0"}}  >Cancel</Cancel>
                                        </div>
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
                                <p>Total Record: {reqData.length}</p> 
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
                    <CustomTabPanel value={value} index={1}>

                    {/*---------------------table starts---------------------*/}
                    <div className={classes.tabpanel_header}> <h3>Service History</h3> <Export onClick={ExportXlsx}>export</Export> </div>
                    <TableContainer component={Paper}  sx={{borderRadius:"0",border:"1px solid #E1E1E1",boxShadow:"none",marginBottom:'10px','@media(max-width:767px)':{border:"none"}}}>
                        <Table  aria-label="simple table"  >

                            {/*---------------------table header starts---------------------*/}

                            <TableHead sx={{backgroundColor:"#f9f9f9",'@media(max-width:767px)':{display:"none"}}}>
                                <TableRow sx={{'*':{ fontSize:"16px !important", color:"#646464 !important",}}} >
                                    <HeaderDataCell > <TableSortLabel onClick={()=>handleSort('ServiceId')} IconComponent={Icon}>Service ID</TableSortLabel> </HeaderDataCell>
                                    <HeaderDataCell > <TableSortLabel onClick={()=>handleSort('Date')} IconComponent={Icon}>Service Details</TableSortLabel> </HeaderDataCell>
                                    <HeaderDataCell align="left">Service Provider</HeaderDataCell>
                                    <HeaderDataCell align="left"><TableSortLabel onClick={()=>handleSort('TotalPayment')}  IconComponent={Icon}>Payment</TableSortLabel></HeaderDataCell>
                                    <HeaderDataCell align="center">Status</HeaderDataCell>
                                    <HeaderDataCell align="center">Rate SP</HeaderDataCell>
                                </TableRow>
                            </TableHead>

                            {/*---------------------table header ends---------------------*/}

                            {/*---------------------table body starts---------------------*/}

                            <TableBody>
                            {sortedRows(slicedHistoryData,getComparator(Order,OrderBy)).map((row:any) => (
                                <CustomTableRow  key={row.id} >

                                {/*---------------------id---------------------*/}
                                <CustomTableCell  scope="row">
                                    {row.ServiceId}
                                </CustomTableCell>
                                <CustomTableCell  scope="row">
                                    <ServiceDetails date={row.Date} time={row.Time}/>
                                </CustomTableCell>
                                {/*--------------------- service date---------------------*/}
                                <CustomTableCell align="left">
                                    {row.ServiceProvider&&<ServiceProvider avatar={row.Avatar} rating={row.Rating} name={row.ServiceProvider} />}
                                </CustomTableCell>
                                {/*---------------------customer details ---------------------*/}
                                <CustomTableCell align="left">
                                    <Payment amount={row.TotalPayment}/>
                                </CustomTableCell>
                                {/*---------------------status---------------------*/}
                                <CustomTableCell align="center"> <Status work_done={row.Status} /> </CustomTableCell>
                                {/*---------------------RateSP button---------------------*/}
                                <CustomTableCell align='center' sx={{'@media(max-width:767px)':{marginRight:'auto'}}}><RateSP disabled={row.Status==='Cancel'} onClick={(e:any)=>{clickOpenRating(row.ServiceId)}} >Rate SP</RateSP></CustomTableCell>
                                </CustomTableRow>
                            ))}
                            {/*---------------------custome row ends---------------------*/}
                            </TableBody>

                            {/*---------------------table body ends---------------------*/}

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
                                <p>Total Record: {historyData.length}</p> 
                            </div>
                            <Pagination className={classes.pagination}  siblingCount={1} boundaryCount={0} size='large'showFirstButton showLastButton renderItem={(item) => (
                                <PaginationItem 
                                    components={{ first: FirstIcon, last: LastIcon,previous: Arrow_Back_Icon, next: Arrow_Next_Icon  }}
                                    {...item}
                                />)}
                             count={4} variant='outlined' onChange={(event: React.ChangeEvent<unknown>,value:number)=>handlePage(event, value)} 
                             />
                        </div>
                        {/*---------------------table ends---------------------*/}

                    </CustomTabPanel>
                    <CustomTabPanel  value={value} index={2} > 
                        Invisible Table
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        Item Three
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={4}>
                        Item Four
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={5}>
                        Item Five
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={6}>
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
                            <CustomSettingTab disableRipple label='My Addresses' />
                            <CustomSettingTab disableRipple label='Change Password' />
                        </CustomSettingTabs>
                        <CustomSettingsTabPanel value={Tabvalue} index={0}>
                            <form action="" id='Personal-info' onSubmit={EditPersonalInfo}>
                                <Grid container columnSpacing={{lg:4,md:4,sm:4}} rowSpacing={{lg:2,md:2,sm:2,xs:2}}>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>First name</Typography>
                                        <Input className={classes.text} value={firstname} onChange={(e:any)=>setFirstName(e.target.value)}   placeholder='First name' name='first_name'/>
                                        <p className={classes.error_msg}>{(personalError as any).firstReq}</p>
                                        <p className={classes.error_msg}>{(personalError as any).firstInvalid}</p>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>Last name</Typography>
                                        <Input className={classes.text} value={lastname} onChange={(e:any)=>setLastName(e.target.value)} placeholder='Last name' name='last_name'/>
                                        <p className={classes.error_msg}>{(personalError as any).lastReq}</p>
                                        <p className={classes.error_msg}>{(personalError as any).lastInvalid}</p>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>Email Address</Typography>
                                        <Input className={classes.text}   placeholder='Email Address' value={Email}  name='email' disabled/>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                        <Typography sx={{color:'#646464',fontWeight:"500"}}>Mobile Number</Typography>
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
                                        <p className={classes.error_msg}>{(personalError as any).mobileReq}</p>
                                        <p className={classes.error_msg}>{(personalError as any).mobileInvalid}</p>
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
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <span style={{display:'inline-block',width:'100%',height:'1px', backgroundColor:'#0000001f'}}></span>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={6} xs={12}>
                                    <Typography sx={{color:'#646464',fontWeight:"500"}}>My Prefered Language</Typography>
                                        <Select
                                            type='select'
                                            className={classes.selectLanguage}
                                            IconComponent={OpenTimePicker}
                                            name='Language'
                                            onChange={Selectlanguage}
                                            value={lan}
                                            
                                            >
                                                <MenuItem value={"english"}>English</MenuItem>
                                                <MenuItem value={"german"}>German</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <DialogButton type='submit' sx={{maxWidth:'fit-content'}}>Save</DialogButton>
                                    </Grid>
                                </Grid>
                                
                            </form>
                        </CustomSettingsTabPanel>
                    
                        <CustomSettingsTabPanel value={Tabvalue} index={1}>
                            <TableContainer component={Paper}  sx={{borderRadius:"0",border:"1px solid #E1E1E1",boxShadow:"none",marginBottom:'10px','@media(max-width:767px)':{border:"none"}}}>
                                <Table  aria-label="simple table"  >
                                <TableHead sx={{backgroundColor:"#f9f9f9",'@media(max-width:767px)':{display:"none"}}}>
                                <TableRow sx={{'*':{ fontSize:"16px !important", color:"#646464 !important",}}} >
                                    <HeaderDataCell > Service Details </HeaderDataCell>
                                    
                                    <HeaderDataCell align="center">Rate SP</HeaderDataCell>
                                </TableRow>
                                </TableHead>
                                    <TableBody>
                                        {
                                            address.map((element:any)=>{
                                               return <CustomTableRow  >
                                                    <CustomTableCell  scope="row">
                                                       <strong className={classes.subheaders}> Address </strong>: {element.StreetName +' ' + element.HouseNo +', ' + element.PostalCode + ', ' + element.City} <br />
                                                       <strong className={classes.subheaders}> Phone Number</strong> : {element.Phonenumber}
                                                    </CustomTableCell>
                                                    <CustomTableCell  scope="row" align='center'>
                                                        
                                                        <button style={{background:'transparent',border:'none'}} onClick={()=>clickOpenEditAddress(element.id)}><img src={edit} alt='edit icon'/></button>
                                                        <button style={{background:'transparent',border:'none'}} onClick={()=>deleteAddress(element.id)} ><img src={deleteIcon} alt='delete icon'/></button>
                                                        
                                                    </CustomTableCell>
                                                </CustomTableRow>
                                            })    
                                        }
                                        
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <DialogButton sx={{maxWidth:'fit-content'}} onClick={clickOpenAddress} >Add New Address</DialogButton>
                        </CustomSettingsTabPanel>
                      
                        <CustomSettingsTabPanel value={Tabvalue} index={2}>
                            <form action="" className={classes.changepasswordForm} onSubmit={ChangePassword} id='Change-Password'>
                                
                                <div className={classes.changePassword}>
                                    <Typography sx={{color:'#646464',fontWeight:"500"}}>Current Password</Typography>
                                    <Input className={classes.text}   placeholder='Current Password' type='password'  name='current_password' />
                                    <p className={classes.error_msg}>{(passError as any).currentrequired}</p>
                                    <p className={classes.error_msg}>{(passError as any).notmatch}</p>
                                </div>
                                <div className={classes.changePassword}>
                                    <Typography sx={{color:'#646464',fontWeight:"500"}}>New Password</Typography>
                                    <Input className={classes.text}   placeholder='New Password' type='password' name='new_password' />
                                    <p className={classes.error_msg}>{(passError as any).newrequired}</p>
                                    
                                </div>
                                <div className={classes.changePassword}>
                                    <Typography sx={{color:'#646464',fontWeight:"500"}}>Confirm Password</Typography>
                                    <Input className={classes.text}   placeholder='Confirm Password' type='password' name='confirm_password' />
                                    <p className={classes.error_msg}>{(passError as any).confirmrequired}</p>
                                    {(passError as any).notmatching&&<p className={classes.errorBig}>{(passError as any).notmatching}</p>}
                                    {(passError as any).length&&<p className={classes.errorBig}>{(passError as any).length}</p>}
                                </div>
                                
                                <DialogButton type='submit' sx={{maxWidth:'fit-content'}}>Save</DialogButton>
                                
                            
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

export default CustomerDashboard;