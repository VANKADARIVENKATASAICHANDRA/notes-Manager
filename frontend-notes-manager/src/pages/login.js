import React,{useState} from 'react';
import {Form,Button,Container} from 'react-bootstrap';
import Navbar from '../Components/Navbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const cookies=new Cookies();
const styles={
    heading1:{
        color:"blue"
    }
}




function Login(){
    const [enterPassword,setPassword]=useState('');
    const [enterMobile,setMobile]=useState('');

    const passwordChangeHandler=(event)=>{
        setPassword(event.target.value);
    }

    const mobileChangeHandler=(event)=>{
        setMobile(event.target.value);
    }

    const loginHandler=(event)=>{
        event.preventDefault();
        console.log("hello");

        setPassword('');
        setMobile('');
        fetch('http://127.0.0.1:000/verifylogin?'+'username='+enterMobile+'&password='+enterPassword)
        .then(
            (response)=>(response.json())
        ).then((response)=>{
            if(response.status==='success'){
                cookies.set('username',enterMobile);
                document.getElementById('res').innerHTML='Credentials are correct';
                document.getElementById('err').innerHTML='';
                window.location.replace('/dashboard');
            }else if(response.status==='failure'){
               
                document.getElementById('err').innerHTML='Credentials are wrong';
                document.getElementById('res').innerHTML='';
            }
        })
    }
    return (
        <div>
            <Navbar/>
         <Container className='col-sm-3'>
            <h1 style={styles.heading1}>Login Form</h1>
            <Form>
               <Form.Group onSubmit={loginHandler}>
                   <Form.Label>Mobile</Form.Label>
                   <Form.Control type="text" onChange={mobileChangeHandler} value={enterMobile} placeholder='enter mobile' required/>
               </Form.Group>
               <br />
               <Form.Group>
                   <Form.Label>password</Form.Label>
                   <Form.Control type="password" value={enterPassword} onChange={passwordChangeHandler} placeholder='enter password' required/>
               </Form.Group>
               <Button type='submit' onClick={loginHandler}>Login</Button>
            </Form><br />
            <span style={{color:'red'}}id='err'></span>
            <span  style={{color:'green'}} id='res'></span>
         </Container>
        </div>
    )
    }

export default Login;