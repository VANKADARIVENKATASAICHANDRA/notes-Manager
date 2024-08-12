import React ,{useState} from 'react';
import DashboardNavbar from '../Components/DashboardNavbar';
import {Form,Button,Container} from 'react-bootstrap';
import Cookies from 'universal-cookie';


const cookies=new Cookies();


const styles={
    heading1:{
        color:"blue"

    }
}
function Insertnotes(){
    const [enterNotes,setNotes]=useState('');

    const notesChangeHandler=(event)=>{
        setNotes(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        setNotes('');

        fetch('http://127.0.0.1:2000/insertnotes?'+'notes='+enterNotes+'&owner='+cookies.get('username'))
        .then((response)=>(response.json())
        ).then((response)=>{
            if(response.status==='success'){
                document.getElementById('res').innerHTML='Notes Inserted successfully';
                document.getElementById('err').innerHTML='';
               }else if(response.status==='failure'){
               
                document.getElementById('err').innerHTML='Notes Failure';
                document.getElementById('res').innerHTML='';
            }
        });
    }
    return (
        <div>
            <DashboardNavbar/>
            <Container className='col-sm-3'>
                <h1 style={styles.heading1}>Insert Notes</h1>

                <Form onSubmit={submitHandler}>
                    <Form.Group>
                       <Form.Label>Notes:</Form.Label> 
                       <Form.Control as="textarea" value={enterNotes} onChange={notesChangeHandler} cols={1000} rows={4} type='text' placeholder='enter notes' required />

                    </Form.Group>
                    <Button type='submit'>insert notes</Button>
                </Form>
                <br />
                <span style={{color:'red'}} id='err'></span>
                <span style={{color:'green'}} id='res'></span>
            </Container>
        </div>
    )
}
export default Insertnotes;