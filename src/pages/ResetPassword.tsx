import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useEffect } from "react";
import { useState } from "react";
import { EmailContext } from "../components/LoginContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const Reset = styled(Button)({
    '&.MuiButtonBase-root.MuiButton-root':{
        height:"46px",
        backgroundColor:"#1D7A8C",
        color:"white",
        fontSize:"20px",
        borderRadius:"46px",
        fontWeight:"bold",
        padding:'0 20px',
        display:"block",
        textTransform:'initial',
        '&:hover':{
            backgroundColor:"#114954",
        },
    }
})
const styles=makeStyles({
    inputField:{
        
        width:"100%",
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
            borderColor:'gray'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            border:"1px solid #1D7A8C",  
        },
        '& .MuiOutlinedInput-root':{
            paddingLeft:"0" ,
        },
        '& .MuiInputBase-root':{
            height:"46px",
        },
        '& input::placeholder':{
            opacity:"1",
            color:"#A0A0A0",
        },        
    },
    form:{
        width:'300px',
        display:'block',
        margin:'0 auto',
        paddingTop:'100px'
    },
    warning_text:{
        color:'red',
        marginBottom:'10px'
    },
    notmatching:{
        color:'red',
        height:'40px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fccece',
        borderRadius:'4px',
        marginBottom:"10px",
    }

})
const ResetPassword = ()=>{
    const classes= styles();
    const navigate=useNavigate();
    const [Data,setData]=useState([]);
    const [Obj,setObj]=useState({})
    let {Email,setEmail}:any=useContext(EmailContext);
    useEffect(()=>{
        fetch('http://localhost:2000/Data')
        .then(res=>res.json())
        .then(result=>setData(result))
    },[])
    const element=Data.filter((e:any)=>{
        return e.EmailAddress===Email;
    })
    
    useEffect(()=>{
        if(Object.keys(element).length){
            fetch(`http://localhost:2000/Data/${element[0]['id']}`)
            .then(res=>res.json())
            .then(result=>setObj(result))
        }
    },[Data]);
    const Validate=(form:HTMLFormElement)=>{
        const errors={};
        let P1=form.password.value,P2=form.confirm_password.value;
        if(!form.password.value)
            (errors as any).Password='Password is not filled!'
        if(!form.confirm_password.value)
            (errors as any).ConfirmPwd='Confirm password is not filled!'
        else if(P1!==P2)
            (errors as any).Notmatching='Passwords are not matching!'
        return errors;
    }
    let Errorobject={};
    const [Errors,setErrors]=useState({})
    const [showmsg,setShowmsg]=useState(false);
    const ResetPwd= async(e:any)=>{
        e.preventDefault();
        const form= document.getElementById('Reset') as HTMLFormElement;
        Errorobject=Validate(form);
        setErrors(Errorobject);
        setShowmsg(Object.keys(Errorobject).length!==0)

        if(Object.keys(Errorobject).length===0){
            let updatePassword={
                ...Obj,
                Password:form.password.value
            }
            if(form.password.value===form.confirm_password.value){
                await fetch(`http://localhost:2000/Data/${element[0]['id']}`,{
                    method:'PUT',
                    body:JSON.stringify(updatePassword),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                navigate('/')
            }
        }
    }
    return(
        <>
            <form action="" id='Reset' onSubmit={ResetPwd} className={classes.form}>
                {(showmsg&&(Errors as any).Notmatching)&&<h1 className={classes.notmatching}>{(Errors as any).Notmatching}</h1>}
            <Typography color='#646464'fontWeight='500'>New Password</Typography>
            <TextField
                type='password'
                placeholder='New Password'
                name='password'
                InputProps={{
                    startAdornment:  <InputAdornment position="start"> </InputAdornment>
                }}
                className={classes.inputField}
            />
            <p className={classes.warning_text}>{(Errors as any).Password}</p>

            <Typography color='#646464' fontWeight='500'>Confirm Password</Typography>
            <TextField
                type='password'
                placeholder='Confirm password'
                name='confirm_password'
                InputProps={{
                    startAdornment:  <InputAdornment position="start"> </InputAdornment>
                }}
                className={classes.inputField}
            />
            <p className={classes.warning_text}>{(Errors as any).ConfirmPwd}</p>
            <Reset type="submit">Save</Reset>
            </form>
        </>
    )
}
export default ResetPassword;