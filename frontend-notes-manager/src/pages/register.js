import React,{useState} from 'react';
import Navbar from '../Components/Navbar';
import{Form,Button,Container}from 'react-bootstrap';
import'../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Register(){
    const[enterEmail,setEmail]=useState('');
    const[enterName,setName]=useState('');
    const[enterMobile,setMobile]=useState('');
    const[enterPassword,setPassword]=useState('');
    const[enterOrg,setOrg]=useState('');

    const emailChangeHandler= (event)=>{
        setEmail(event.target.value);
    }
    const nameChangeHandler= (event)=>{
        setName(event.target.value);
    }
    const mobileChangeHandler= (event)=>{
        setMobile(event.target.value);
    }
    const passwordChangeHandler= (event)=>{
        setPassword(event.target.value);
    }
    const orgChangeHandler= (event)=>{
        setOrg(event.target.value);
    }
    const RegisterHandler =(event)=>{
        event.preventDefault();

        //rest values
        setEmail('');
        setName('');
        setMobile('');
        setOrg('');
        setPassword('');

        console.log(enterEmail,enterMobile,enterName,enterOrg,enterPassword);
        fetch('http://127.0.0.1:2000/newregistration?'+'name='+enterName+'&mobile='+enterMobile+'&email='+enterEmail+'&org='+enterOrg+'&password='+enterPassword)
        .then(
            (response)=>(response.json())
        ).then(
            (response)=>{
                if(response.status==='success'){
                    document.getElementById('res').innerHTML="Registered Successfully";
                    document.getElementById('err').innerHTML="";
                }else if(response.status==='failure'){
                    document.getElementById('err').innerHTML="account exist already";
                    document.getElementById('res').innerHTML="";
                }
            }
        )

        
    
    }
    return(
      <div>
        <Navbar/>
        <Container className='col-sm-3'>
            <center>
            <h1 style={StyleSheet.heading1}>Register page</h1>
            </center>
            <br />

          <Form onSubmit={RegisterHandler}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control Type="text" value={enterName} onChange={nameChangeHandler} placeholder="enter name" required/>
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control Type="text" value={enterEmail} onChange={emailChangeHandler} placeholder="enter email" required/>
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Mobile</Form.Label>
                <Form.Control Type="text" value={enterMobile} onChange={mobileChangeHandler} placeholder="enter mobile " required/>
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Organaization</Form.Label>
                <Form.Control Type="text" value={enterOrg} onChange={orgChangeHandler} placeholder="enter organsization" required/>
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control Type="text"value={enterPassword} onChange={passwordChangeHandler} placeholder="enter password" required/>
              </Form.Group>
              <br />
              <Button type='submit'>Register</Button>
          </Form>
          <br />
          <span style={{color:'red'}} id='err'></span>
          <span style={{color:'green'}} id='res'></span>
      
        </Container>
      </div>  
    );
}

export default Register;