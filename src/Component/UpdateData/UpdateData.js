import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";



const UpdateData = () => {
   const history= useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [updateVAlue,setUpdateValue]=useState([])
   
const {id}=useParams()
console.log(id)
useEffect(()=>{
    fetch(`https://guarded-woodland-52046.herokuapp.com/singleValue/${id}`)
.then(res=>res.json())
.then(data=>setUpdateValue(data))
},[id])
console.log(updateVAlue)

    
const onSubmit = (data,e) => {
   
   
    
    const updateData={
        name:data.name,
        version:data.version,
        feature:data.feature,
        website:data.website,
        image:data.image
        }
        console.log(updateData)
    console.log(id)
    fetch(`https://guarded-woodland-52046.herokuapp.com/updateOne/${id}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(updateData)
    })
//     const url=`http://localhost:3000/update/${id}`
   
//   axios.put(url,
//       {updateData}
//   )
  history.push('/getData')
    e.target.reset()

    
  
  

};
   
    return (
        <div className="add-form">
           
           <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
     <div className="input-group">
     <input className="form-control"  {...register("name")} placeholder="Theme Name" id="name" value={updateVAlue.data.name}/><br/>
     </div>
      
      {/* include validation with required or other standard HTML validation rules */}
      <div className="input-group">
     <input className="form-control" {...register("version")} placeholder="Theme Version" id="version" /><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <div className="input-group">

     <textarea className="form-control" {...register("feature")} 
      name="feature" placeholder="Feature" id="feature" /><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <div className="input-group">
     <textarea className="form-control" {...register("website")} placeholder="Inspiration Site" id="website" /><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <div className="input-group">
     <input className="form-control" {...register("image")} placeholder="Theme Image" id="image" /><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      
 <div class="d-grid gap-2"> <button class="btn btn-primary" type="submit">Update</button></div>
  

    </form>

    
         
        </div>
    );
};

export default UpdateData;