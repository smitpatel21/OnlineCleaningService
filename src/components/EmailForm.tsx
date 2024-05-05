import { Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { makeStyles } from "@mui/styles";



const Submit = styled(Button)({
    '&.MuiButton-root':{
        height:"40px ",
        width:"88px ",
        borderRadius:"40px ",        
        boxShadow:"none ",
        fontWeight:"300 ",
        fontSize:"14px ",
        lineHeight:'20px'
    },
    '&.MuiButtonBase-root':{
        backgroundColor:"#FF7B6D ",
        "&:hover,&:focus":{
            backgroundColor:"#cc6257 !important",
            boxShadow:'none'
        }
    }
    

})
const Email = styled(TextField)({
    
    '& .MuiOutlinedInput-notchedOutline ':{
        border:"1px solid #565656",
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
        borderColor:'gray'
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
        border:'1px solid #1D7A8C ',
    },
    '& .MuiOutlinedInput-root':{
        width:"233px",
        height:"40px",
        marginRight:"12px",
        backgroundColor:"#F4F5F8",
        borderRadius:"40px",
    },
    '& .MuiInputBase-formControl':{
        fontSize:"14px",   
    },
    '& .MuiInputBase-input ':{
        paddingLeft: '20px !important',
    },
    '& input::placeholder':{
        color:"#565656 !important",
        fontWeight:"400",
        opacity:"1"
    },
    '@media(max-width:350px)':{
        '& .MuiOutlinedInput-notchedOutline ':{
           borderRadius:"40px ",
           width:"190px !important",
        },
        '& .MuiOutlinedInput-root':{
            width:"190px",
            height:"40px",
            marginRight:"12px",
        },
       }
 })
 


const EmailForm=()=>{
    
    return(
        <>
            
                <Typography variant="h5" sx={{fontSize:"18px", textAlign:"center", color:"#353548", marginBottom:"14px",fontWeight:"600"}} >GET OUR NEWSLETTER</Typography>
                <form action="" className="email-form" >
                    <Email  variant="outlined"  placeholder='YOUR EMAIL'></Email>
                    <Submit disableFocusRipple sx={{textTransform:"initial"}} variant="contained" >Submit</Submit>
                </form>
            
        </>
    );
}

export default EmailForm;