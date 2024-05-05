import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {downarrow} from '../assets/images/index'
import {flag} from '../assets/images/index'
import { Button } from '@mui/material';
import { makeStyles } from "@mui/styles";
import React from 'react';

const styles=makeStyles({
  
  language:{
    '&.MuiButtonBase-root.MuiButton-root':{
      padding:'0 !important',
      // minWidth:'auto'
    },
    height:'100%'
  }
})

const WebLanguage=()=>{
    const classes= styles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
   
    return(<>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        disableRipple
        className={classes.language}
        >
        <div className="flags">
            <img className='flag' src={flag} alt="flag" />
            <img className='nav-downarrow' src={downarrow} alt="down arrow" />    
        </div>
        
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            anchorOrigin={{vertical:'bottom',horizontal:'right'}}
            transformOrigin={{vertical:'top',horizontal:'right'}}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>English</MenuItem>
            <MenuItem onClick={handleClose}>German</MenuItem>
        </Menu>  
        </>
        );
}
export default WebLanguage;