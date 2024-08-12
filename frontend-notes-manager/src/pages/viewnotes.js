import React, { useState,useEffect } from 'react';
import DashboardNavbar from '../Components/DashboardNavbar';
import Cookies from 'universal-cookie';

const cookies= new Cookies();
function Viewnotes(){

    const [notes,setNotes]=useState([])
     useEffect(()=>{
        const fetchdata=async()=>{
            const response=await fetch('http://127.0.0.1:2000/viewusernotes?username='+cookies.get('username'));
            const data=await response.json();
            setNotes(data['status']);
        }
        fetchdata();
     },[]);

    return(
        <div>
            <DashboardNavbar/>
            <div className='container col-sm-6'>
             <table className='table table-bordered'>
                <tbody>
                {
                    notes.map((note,key)=>
                    <tr key={key}>
                        <td className='table-data'>{key}</td>
                        <td className="table-data">{note.notes}</td>
                        <td className="table-data">{note.owner}</td>
                    </tr>
               ) }
                </tbody>
             </table>
            </div>
        </div>
    )
}
export default Viewnotes;