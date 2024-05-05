import * as React from 'react';
import Button from '@mui/material/Button'
import { styled } from "@mui/styles";
import Navbar from "../components/Navbar";
import {logo} from '../assets/images/index'
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer";
import {  Tab, Tabs, Typography } from '@mui/material';
import {diamond} from  '../assets/images/index'
import { makeStyles } from '@mui/styles';
import { Box, height, padding } from '@mui/system';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {circle_right_arrow} from '../assets/images/index'
import Cookie from '../components/Cookie';
import {Helmet,HelmetProvider} from 'react-helmet-async'

const Img = ()=>{
    return (
        <>
            <img src={circle_right_arrow} alt="circle arrow" />
        </>
    );
}

{/* --------------------- Accordion styling --------------------- */}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    minHeight:'60px',
    
}));

{/* ----------------------- Accordion summary styling ----------------------- */}

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={ <Img/> }
    {...props}
  />  
))
(() => ({

  flexDirection: 'row-reverse',
  alignItems:"center",
  justifyContent:"center",
  '& .MuiAccordionSummary-expandIconWrapper':{
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    paddingLeft:"15px",
    color:"#646464",
    fontSize:"16px",
    maxWidth:'100%',
    
    '@media(max-width:575px)':{
        fontSize:"14px",
    }
  },
  '& .MuiTypography-body1 ':{
    minHeight:"23px",
    fontWeight:"600",
    '@media(max-width:575px)':{
        fontSize:"14px",
    }
  },

  '&.MuiButtonBase-root':{
    minHeight:"auto",
    maxWidth:'100%',
    padding:'0'

  },
  
}));

{/* ----------------- Accordion summary styling ends ----------------- */}

{/* ----------------- Accordion detail styling starts ----------------- */}

const AccordionDetails = styled(MuiAccordionDetails)(() => ({  
    '& .MuiTypography-body1':{
        fontSize:"16px",
        color:"#646464",
        paddingBottom:'10px',
        '@media(max-width:575px)':{
            fontSize:"14px",
        },        
    },
    '&.MuiAccordionDetails-root':{
        padding:"0 0 0 36px ",
    },
}));

{/* ----------------- Accordion details styling ends ----------------- */}

{/* ----------------- custom layout classes ----------------- */}

// layout classes 

const styles= makeStyles({
    tabslayout:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        width:"946px",
        marginBottom:"15px",
        '@media(max-width:991px)':{
            width:"90%"
        },
        '@media(max-width:767px)':{
            marginBottom:"50px",
        },
    },

    discription:{
        '@media(max-width:575px)':{
            width:"80%",
            fontSize:"14px !important"
        },
        
    }

})
{/* -------------------- custom layout classes ends -------------------- */}

{/* ----------------- main tab button styling starts ----------------- */}

const CustomTab =styled(Tab)({
        '&.MuiButtonBase-root':{
            maxWidth:"none !important",
            width:"50%",
            fontSize:"24px",
            lineHeight:'52px',
            textTransform:'uppercase',
            padding:"5px 0",
            background:"#F6F6F6",
            fontWeight:"normal",
            height:'66px',
            '@media(max-width:767px)':{
                fontSize:"15px",
                '&.MuiButtonBase-root':{
                    height:'50px',
                }
            },
            '@media(max-width:575px)':{
                textTransform:'initial',
                '&.MuiButtonBase-root':{
                    minHeight:'auto',
                    height:'40px',
                    padding:'0'
                }
            },
            
        } ,
})

{/* ---------------------- on selection tab styling ---------------------- */}

const CustomTabs=styled(Tabs)({
    
    '& .MuiTabs-indicator': {
        display:"none"
    },
    '& .MuiTab-root.Mui-selected':{
        backgroundColor:"#1D7A8C",
        color:"white",
        
        '&.MuiButtonBase-root':{
            fontWeight:'400',
        }
    },
    '@media(max-width:575px)':{
        '&.MuiTabs-root':{
            minHeight:'auto',
            height:'40px'
        }
    }
  })

{/* ---------------------- tab functionality implementation starts ---------------------- */}

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
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        style={{maxWidth:'100%'}}
      >
        {value === index && (
          <Box sx={{pt:"35px",'@media(max-width:767px)':{pt:"10px"} }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
{/* -------------------- tab functionality implementation ends ------------------- */}

{/* -------------------- main faq function starts --------------------*/} 

/* ----------- json data for faq starts  ----------- */
const Faq_for_customer=[
    {
        summary:"What's included in a cleaning?",
        details:'Bedroom, Living Room & Common Areas, Bathrooms, Kitchen, Extras',
        panel:'panel1',
        aria_control:'panel1d-content',
        id:'panel1d-header'
    },
    {
        summary:'Which Helperland professional will come to my place?',
        details:"Helperland has a vast network of experienced, top-rated cleaners. Based on the time and date of your request, we work to assign the best professional available. Like working with a specific pro? Add them to your Pro Team from the mobile app and they'll be requested first for all future bookings. You will receive an email with details about your professional prior to your appointment",
        panel:'panel2',
        aria_control:'panel2d-content',
        id:'panel2d-header'
    },
    {
        summary:'Can I skip or reschedule bookings?',
        details:"You can reschedule any booking for free at least 24 hours in advance of the scheduled start time. If you need to skip a booking within the minimum commitment, we’ll credit the value of the booking to your account. You can use this credit on future cleanings and other Helperland services.",        panel:'panel3',
        aria_control:'panel3d-content',
        id:'panel3d-header'
    },
    {
        summary:'Do I need to be home for the booking?',
        details:'We strongly recommend that you are home for the first clean of your booking to show your cleaner around. Some customers choose to give a spare key to their cleaner, but this decision is based on individual preferences.',
        panel:'panel4',
        aria_control:'panel4d-content',
        id:'panel4d-header'
    },
    
];
const Faq_for_provider=[
    {
        summary:'How much do service providers earn?',
        details:'The self-employed service providers working with Helperland set their own payouts, this means that they decide how much they earn per hour.',
        panel:'panel1',
        aria_control:'panel1d-content',
        id:'panel1d-header'
    },
    {
        summary:'What support do you provide to the service providers?',
        details:'Our call-centre is available to assist the service providers with all queries or issues in regards to their bookings during office hours. Before a service provider starts receiving jobs, every individual partner receives an orientation session to familiarise with the online platform and their profile.',
        panel:'panel2',
        aria_control:'panel2d-content',
        id:'panel2d-header'
    },
]
/* ----------- jason data for faq ends  ----------- */

const Faq=()=>{
    const classes= styles();
    // tab functionality helper code 

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    /* ----------- for accordion  ----------- */
    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChangeAccordion =(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
    return(
    <>  

    {/* --------------------- main faq container starts --------------------- */}

        <section className="wrapper">
            <HelmetProvider>
                <Helmet>
                    <title>FAQ | Helperland</title>
                </Helmet>
            </HelmetProvider>
        <Navbar  otherpage={true} logo={logo} link1="Book now" link2="Prices & service" link3="Warranty" link4="Blog" link5="Contact" link6="Login" link7="Become a Helper" languageoption={false}/>
              {/* ----------------------- landing page starts ----------------------- */}

              <section className="other-page-hero-banner">
                  <section className="landing-image-faq common-landing-image"></section>
              </section>

              {/* ----------------------- landing page ends ----------------------- */}

              {/* ----------------------- main container starts ----------------------- */}

              <main >

                  {/* ----------------------- main content starts ----------------------- */}

                <section className="main-content-wrapper">
                  
                  <Typography variant="h2" className="headings" sx={{fontSize:"36px",color:"#4F4F4F",textAlign:"center",fontWeight:"500",marginBottom:"10px"}}>FAQs</Typography>

                  <div className="seperator" style={{marginBottom:"34px"}}>
                      <div className="hr-line"></div>
                            <img src={diamond} alt="" />
                      <div className="hr-line"></div>
                  </div>
                  
                  <Typography className={classes.discription} sx={{fontSize:"18px",color:"#646464",textAlign:"center",marginBottom:"34px"}}>Whether you are Customer or Service provider, <br /> We have tried our best to solve all your queries and questions.</Typography>

                {/* ------------------- main tabs starts ------------------- */}

                  <Box className={classes.tabslayout}  >
                    <Box sx={{ borderBottom: 4, borderColor: '#1D7A8C' ,width:"100%",'@media(max-width:575px)':{borderBottom:2,borderColor: '#1D7A8C'}}}>

                        {/* ------------------- horizontal tabs starts ------------------- */}

                        <CustomTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <CustomTab label="For Customer" {...a11yProps(0)} />
                            <CustomTab label="For Service Provider" {...a11yProps(1)} />
                        </CustomTabs>

                        {/* ------------------- horizontal tabs ends ------------------- */}

                    </Box>
                     {/* ---------------------- first tabpanel starts --------------------- */}
                    
                    <TabPanel value={value} index={0} >
                        <div style={{maxWidth:"100%"}} >

                            {
                                Faq_for_customer.map((e:any)=>{
                                    return(
                                        <Accordion  expanded={expanded === `${e.panel}`} onChange={handleChangeAccordion(`${e.panel}`)}>
                                            <AccordionSummary   aria-controls={e.aria_control} id={e.id}>
                                                <Typography>{e.summary}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails >
                                            <Typography>
                                                {e.details}
                                            </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    );
                                })    
                            }
                            
                        </div>
                    </TabPanel>

                    {/* ---------------------- first tabpanel ends --------------------- */}

                    {/* ---------------------- second tabpanel starts --------------------- */}

                    <TabPanel value={value} index={1}>
                    <div style={{width:"100%"}} >
                    {
                        Faq_for_provider.map((e:any)=>{
                            return(
                                <Accordion  expanded={expanded === `${e.panel}`} onChange={handleChangeAccordion(`${e.panel}`)}>
                                    <AccordionSummary  aria-controls={e.aria_control} id={e.id}>
                                        <Typography>{e.summary}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails >
                                    <Typography>
                                        {e.details}
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })    
                    }    

                    </div>
                    </TabPanel>
                    
                    {/* ---------------------- second tabpanel ends --------------------- */}

                    </Box>
                    {/* ---------------------- main tabs ends --------------------- */}

                    {/* ---------------------- bottom email form starts --------------------- */}

                  <EmailForm/>

                    {/* ---------------------- bottom email form ends --------------------- */}

                </section>

                  {/* ----------------------- main content ends ----------------------- */}

              </main>

                {/* ----------------------- main container ends ----------------------- */}

                {/* ----------------------- footer starts ----------------------- */}

              
               <Footer/>
              

              {/* ----------------------- footer ends ----------------------- */}

        </section>

        {/* --------------------- main faq container ends --------------------- */}
            <Cookie/>
        
    </>
    );
}
export default Faq;