import { Typography } from "@mui/material";

type definationofprop={
    image:string,
    heading:string,
    discription:string,
}


const FeatureCardHome=(props:definationofprop)=>{
    
    return(
        <>
        <div  className="feature-card-container" >
            <div className="round-image-container">
                <img src={props.image} alt="feature image" />
            </div>
            <div className="feature-card-heading">
                <Typography variant="h4" sx={{color:"#565656",fontSize:"30px",textAlign:"center",fontWeight:"bold"}}>{props.heading} </Typography>
            </div>
            <div className="feature-card-discription">
                <Typography variant="body1" sx={{color:"#565656",textAlign:"center",fontSize:'17px',lineHeight:'24px'}}>{props.discription}</Typography>
            </div>
        </div>
        </>
    );
}
export default FeatureCardHome;