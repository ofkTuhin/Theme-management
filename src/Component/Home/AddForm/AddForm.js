import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

import './style.css'



const AddForm = () => {
    const [themeData,setThemeData]=useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();
    

  
    const onSubmit = data => {
        console.log(data)
        setThemeData(data)
        
        axios.post('https://guarded-woodland-52046.herokuapp.com/addTheme',{
           themeData
        })
       .then(res=>console.log(res))

       console.log()
        
        
        console.log(data)

       
   


    };
    return (
        <div className="add-form">
            {
         
      }
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
     <input className="form-control" {...register("image")} placeholder="Theme Image"/><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      
 <div class="d-grid gap-2"> <button class="btn btn-primary" type="submit">Submit</button></div>
  

    </form>
        </div>
    );
};

export default AddForm;