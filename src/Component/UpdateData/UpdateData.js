import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const UpdateData = () => {
    const [dataId,setDataId]=useState({})
    console.log(dataId)
    const {id}=useParams()
    console.log(id)
    useEffect(()=>{
        axios.get('http://localhost:3000/updateData/'+id)
        .then(data=>setDataId(data))
        
        
       
    },[id])

    
        const updateItem = async(id)=>{
            console.log(id)
       const res= await axios.put(`http://localhost:3000/update/${id}`,id
        
        )
        console.log(res.data)

    
        }
   
    return (
        <div>
           
           <input type="text"></input>
            <input type="submit" onClick={()=>updateItem(id)}></input>
         
        </div>
    );
};

export default UpdateData;