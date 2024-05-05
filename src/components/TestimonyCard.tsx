import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {bg_messege} from '../assets/images/index';
import {arrow_right} from '../assets/images/index';
import { makeStyles } from '@mui/styles';


type definationofprop={
    image:string,
    title:string,
    subheader:string
}

const styles= makeStyles({
  cardheaders:{
    '& .MuiCardHeader-title ':{
      fontSize: '20px !important',
      color: '#4f4f4f',
      fontWeight:' bold !important',
    },
    '& .MuiCardHeader-subheader': {
      fontSize: '14px !important',
      color: '#8e8e8e',
    },
    '&.MuiCardHeader-root':{
      padding:"0px ",
    }
  },
  cardcontent:{
    '&.MuiCardContent-root':{
      padding:"24px 0px 0px 0px !important"
    }
  },
  card_description:{
    
    '&.MuiTypography-root':{
      color:"#565656",
      fontSize:"16px",
      lineHeight:'22px',
    }
  }

})


const TestimonyCard =(props:definationofprop)=> {
    const classes= styles();
  

  return (
    
    <Card className="testimony-card"  sx={{ maxWidth: 356 }}>
        <img className="home-card-message" src={bg_messege} alt="messege image" />
      <CardHeader className={classes.cardheaders}
        avatar={
          <Avatar sx={{ width:"70px",height:"70px" }} aria-label="recipe">
            <img src={props.image} alt="person image" />
          </Avatar>
        }
        title={props.title}
        subheader={props.subheader}
      />
      <CardContent className={classes.cardcontent}  >
        <Typography className={classes.card_description} component='p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus pulvinar aliquet consequat. Praesent nec malesuada nibh.
        </Typography>
        <br />
        <Typography className={classes.card_description} component='p'>
          Nullam et metus congue, auctor augue sit amet, consectetur tortor.
        </Typography>
        <br />
        <a href="" className="read-more-home" title="read more">Read More <img src={arrow_right} alt="arrow"  /></a>
      </CardContent>
      
    </Card>
    
  );
}

export default TestimonyCard;
