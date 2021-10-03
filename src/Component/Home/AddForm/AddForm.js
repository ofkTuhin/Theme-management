import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router';
import GitUrlParse from 'git-url-parse'
import { Base64 } from 'js-base64';


import './style.css'




const AddForm = () => {
    const history=useHistory()
    
  
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const onSubmit = (data,e) => {

        console.log(data.url)
       const pathname = GitUrlParse(data.url).pathname
       console.log(pathname)
       
        
      
       const res = async () => {
        const result = await axios.get(`https://api.github.com/repos${[pathname]}`);
       const readMe= await axios.get(`https://api.github.com/repos${[pathname]}/contents/README.md`)
       console.log(readMe.data.content)
       
       
       const decodeCode=Base64.atob(readMe.data.content)
       console.log(decodeCode)

        console.log('result',result.data)
      

         const event = {
             themeName:result.data.name,
             fork:result.data.forks,
             fullName:result.data.full_name,
             star:result.data.stargazers_count,
             LastCommit:result.data.updated_at,
             create:result.data.created_at,
             gitUrl:result.data.html_url,
             readMe:decodeCode
            
 
         }
         console.log(event)
         axios.post('https://guarded-woodland-52046.herokuapp.com/addTheme',{
           event
            
         })
      
        .then(da=>console.log(da))
       

      };
      res()
       
    //   history.push('/getData')
        
        e.target.reset()
    };

    // update 
 
   
   
    return (
        <div className="add-form">
       
     <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
     <div className="input-group">
     <input className="form-control"  {...register("url")} placeholder="url" /><br/>
     </div>
      
      {/* include validation with required or other standard HTML validation rules */}
      {/* <div className="input-group">
     <input className="form-control" {...register("version")} placeholder="Theme Version"/><br/>
     </div> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>}
      
      <div className="input-group">

     <textarea className="form-control" {...register("feature")} 
      name="feature" placeholder="Feature"/><br/>
     </div> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>}

      <div className="input-group">
     <textarea className="form-control" {...register("website")} placeholder="Inspiration Site"/><br/>
     </div> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>}
      <div className="input-group">
     <input className="form-control" {...register("image")} placeholder="Theme Image" onChange={handleImageChange} type="file"/><br/>
     </div> */}
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      
 <div class="d-grid gap-2"> <input class="btn btn-primary" type="submit" value="Submit"></input></div>
  

    </form>
    
    
        </div>
    );
};

export default AddForm;