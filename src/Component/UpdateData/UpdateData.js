import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';


const UpdateData = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [updateVAlue,setUpdateValue]=useState([])
   
const {id}=useParams()
console.log(id)
useEffect(()=>{
    fetch(`http://localhost:3000/singleValue/${id}`)
.then(res=>res.json())
.then(data=>setUpdateValue(data.themeData))
},[id])
console.log(updateVAlue)
    
const onSubmit = data => {
   
   console.log(updateVAlue)
   
    axios.put(`https://localhost:3000/update/${id}`,{
       
       updateVAlue
     })
    .then(res=>console.log(res))
    
    console.log(data)

   



};
   
    return (
        <div className="add-form">
           
           <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
     <div className="input-group">
     <input className="form-control"  {...register("name")} placeholder="Theme Name" /><br/>
     </div>
      
      {/* include validation with required or other standard HTML validation rules */}
      <div className="input-group">
     <input className="form-control" {...register("version")} placeholder="Theme Version" /><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <div className="input-group">

     <textarea className="form-control" {...register("feature")} 
      name="feature" placeholder="Feature" value={updateVAlue.feature}/><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <div className="input-group">
     <textarea className="form-control" {...register("website")} placeholder="Inspiration Site" /><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <div className="input-group">
     <input className="form-control" {...register("image")} placeholder="Theme Image" /><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      
 <div class="d-grid gap-2"> <button class="btn btn-primary" type="submit">Update</button></div>
  

    </form>
         
        </div>
    );
};

export default UpdateData;