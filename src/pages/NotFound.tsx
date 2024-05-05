import { makeStyles } from "@mui/styles";
const styles=makeStyles({
    wrapper:{
        width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'
    },
    text:{
        fontSize:'50px',fontWeight:'600',
        '@media(max-width:575px)':{
            fontSize:'35px'
        }
    }
})
const NotFound=()=>{
    const classes= styles();
    return(
        <>
            <div className={classes.wrapper}>
                <h1 className={classes.text}>404 Not Found !!!</h1>
            </div>
        </>
    );
}
export default NotFound;