import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router';

import './style.css'




const AddForm = () => {
    const history=useHistory()
    const [imageUrl,setImageUrl]=useState()
    
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    
 
       


    const onSubmit = (data,e) => {
        console.log(data)
      
        const event = {
            name:data.name,
            version:data.version,
            feature:data.feature,
            website:data.website,
            image:imageUrl
        }
        axios.post('https://guarded-woodland-52046.herokuapp.com/addTheme',{
          event
           
        })
       .then(res=>{
           console.log(res)
           history.push('/getData')
       })
       .then(data=>console.log(data))
        console.log(data)
        e.target.reset()
    };

    const handleImageChange=e=>{

        const imageData=new FormData()
        imageData.set('key','ac14fb7fe7d3b9b39f81a751405dbb8e')
        imageData.append('image',e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(res=>{
            console.log(res.data.data)
            setImageUrl(res.data.data.display_url)
        })
    }
   
   
    return (
        <div className="add-form">
       
     <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
     <div className="input-group">
     <input className="form-control"  {...register("name")} placeholder="Theme Name" /><br/>
     </div>
      
      {/* include validation with required or other standard HTML validation rules */}
      <div className="input-group">
     <input className="form-control" {...register("version")} placeholder="Theme Version"/><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <div className="input-group">

     <textarea className="form-control" {...register("feature")} 
      name="feature" placeholder="Feature"/><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <div className="input-group">
     <textarea className="form-control" {...register("website")} placeholder="Inspiration Site"/><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <div className="input-group">
     <input className="form-control" {...register("image")} placeholder="Theme Image" onChange={handleImageChange} type="file"/><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      
 <div class="d-grid gap-2"> <input class="btn btn-primary" type="submit" value="Submit"></input></div>
  

    </form>
    
    
        </div>
    );
};

export default AddForm;