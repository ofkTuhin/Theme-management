import React from 'react';
import { useForm } from "react-hook-form";

import './style.css'



const AddForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const feature=[]
    const website=[]

    const handleFeatureChange=(e)=>{
       let featureInput=e.target.value
       feature.push(featureInput)
       console.log(feature)
       if(e.key==='Enter'){
           featureInput=''
       }
        

       
        

    }
    const handleWebsiteChange=(e)=>{
        const websiteInput=e.target.value
       website.push(websiteInput)
       console.log(website)
    }
    const onSubmit = data => {
        const event={
            name:data.name,
            version:data.version,
            feature:feature,
            website:website,
            image:data.image

        }

       console.log()
        fetch('https://guarded-woodland-52046.herokuapp.com/addTheme',{
            method:"POST",
            headers:{'content-type':'application/json'},
        body:JSON.stringify(event)

        })
        
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
     <input className="form-control" {...register("version")} placeholder="Theme Version"/><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <div className="input-group">
     <input className="form-control" {...register("feature")} onKeyPress={handleFeatureChange} name="feature" placeholder="Feature"/><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <div className="input-group">
     <input className="form-control" {...register("website")} onBlur={handleWebsiteChange} placeholder="Inspiration Site"/><br/>
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