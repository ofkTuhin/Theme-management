import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router';

import axios from 'axios';
import { Base64 } from 'js-base64';



const UpdateData = () => {

    const [dataInput, setDataInput] = useState({})
    console.log("dataInput",dataInput)
    
  
   const [fullName,setFullName]=useState('')
   console.log('abc',fullName)
  const [themeName,setThemeName]=useState('')
  const [fork,setFork]=useState('')
  const [star,setStar]=useState('')
  const [LastCommit,setLastCommit]=useState('')
  const [create,setCreate]=useState('')
  const [readme,setReadme]=useState('')
//   console.log('readme',readme)
//  const { register, handleSubmit, formState: { errors } } = useForm({});


    
   
const {id}=useParams()
console.log(id)




useEffect(()=>{
    axios.get(`https://guarded-woodland-52046.herokuapp.com/singleValue/${id}`)
    .then(data=>{console.log(data.data.event)
        setDataInput(data.data.event)
        setFullName(data.data.event.fullName)

    }    
   
)
   
},[id])


// const decodeReadme=Base64.


useEffect(()=>{
    
    axios.get(`https://api.github.com/repos/${fullName}`)
.then(data=>{
    console.log('object',data.data)
    setCreate(data.data.created_at)
    setFork(data.data.forks)
    setLastCommit(data.data.updated_at)
    setStar(data.data.stargazers_count)
    setThemeName(data.data.name)
    
})

},[fullName])
axios.get(`https://api.github.com/repos/${fullName}/contents/README.md`)
.then(data=>setReadme(data.data.content))
const decodeCode=Base64.atob(readme)



    const updateData={
        themeName:themeName,
        fork:fork,
        star:star,
       create:create,
        LastCommit:LastCommit,
        readMe:decodeCode,
        fullName:fullName

       
        }
        console.log('update',updateData)
 


          
  
    // const updatedData=()=>{
      
    // }
  setInterval(()=>{
    const newData={...updateData,dataInput}
    console.log('abcd',newData)
    fetch(`https://guarded-woodland-52046.herokuapp.com/${id}`,{
        method:'PATCH', 
        headers:{'content-type':'application/json'},
        body: JSON.stringify(updateData)
    },)
  },[100*3000])
  
    return (
        <div className="add-form">
            <h2 className="heading">Update Data</h2>
            {/* <button onClick={updatedData}>button</button> */}
 
        </div>
    );
};

export default UpdateData;