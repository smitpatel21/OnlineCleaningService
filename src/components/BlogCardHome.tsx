import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {arrow} from '../assets/images/index'
type definationofprop={
    image:string,
}



const BlogCardHome=(props:definationofprop)=>{
    return (<>
        
        <Card sx={{ maxWidth: 356 ,borderRadius:'0'}} className="blog-card-home">
            <div className="blog-image-wrapper" >
                <CardMedia
                    component="img"
                    height="164"
                    image={props.image}    
                    alt='blog image'
                />
            </div>
            <CardContent sx={{padding:'20px 20px 0 20px'}}>
                <Typography marginBottom='5px'  color="#3D4046" fontWeight="bold" fontSize="20px"  component="p"  lineHeight="20px">
                    Lorem ipsum dolor sit amet
                </Typography>
                <Typography variant="body2" color="#A3A3A3" fontSize='13px' marginBottom="10px" display="block"  component="span">January 28, 2019</Typography>
                
                <Typography variant="body1" sx={{color:"#565656",fontSize:"16px",lineHeight:'22px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus pulvinar aliquet.
                </Typography>
                <br />
                <a href="" className="blog-read-more">Read the Post <img src={arrow} alt=""/></a>
                
            </CardContent>
            
        </Card>
        
    </>);
}
export default BlogCardHome;