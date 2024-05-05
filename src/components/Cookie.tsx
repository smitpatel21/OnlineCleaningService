import Button from '@mui/material/Button'
import { styled } from '@mui/system';
const OK = styled(Button)({
    position:'absolute',
    right:'15px',
    height:"40px",
    width:"100px",
    borderRadius:"40px",
    backgroundColor:"#EED507 !important",
    boxShadow:"none !important",
    textTransform:"initial",
    fontSize:"14px",
    color:"black",
    lineHeight:'32px',
    '&:hover,&:focus':{
        backgroundColor:"#f8ee9c !important",
    }
})


const Cookie = ()=>{
    let cookie=document.getElementsByClassName("cookie");

    const disappear=()=>{
        cookie[0].classList.add("disappear");
    };
    return(
            
        <div className="cookie">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nunc libero, ac malesuada ligula aliquam ac. <a href="" title='privacy policy'>Privacy Policy</a> </p>
            <OK disableFocusRipple onClick={()=>{disappear()}} >OK!</OK>
        </div>
        );
    
}
export default Cookie;