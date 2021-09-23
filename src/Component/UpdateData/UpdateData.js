import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {useForm } from "react-hook-form";
import axios from 'axios';



const UpdateData = () => {
    
  const [imageUrl,setImageUrl]=useState()
    const [reload,setReload]=useState('')
    const[name,setName]=useState('')
    const[version,setVersion]=useState('')
    const[feature,setFeature]=useState('')
    const[website,setWebsite]=useState('')
    const[image,setImage]=useState('')
   const history= useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({});

    
   
const {id}=useParams()
console.log(id)
useEffect(()=>{
    fetch(`https://guarded-woodland-52046.herokuapp.com/singleValue/${id}`)
.then(res=>res.json())
.then(data=>{
    setName(data.event.name)
    setFeature(data.event.feature)
    setImage(data.event.image)
    setWebsite(data.event.website)
    setVersion(data.event.version)

})



},[id,reload])

//update data

const onSubmit = (data,e) => {
   
 
    
    const updateData={
        name:data.name,
        version:data.version,
        feature:data.feature,
        website:data.website,
        image:imageUrl
        }
        console.log(updateData)
    console.log(id)
    fetch(`https://guarded-woodland-52046.herokuapp.com/updateOne/${id}`,{
        method:'PATCH',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(updateData)
    })
    .then(res=>{console.log(res)
    
      history.push('/getData')
    })
    .then(data=>setReload(data))
    e.target.reset()

};
const handleImageChange=e=>{

    const imageData=new FormData()
    imageData.set('key','ac14fb7fe7d3b9b39f81a751405dbb8e')
    imageData.append('image',e.target.files[0])
    axios.post('https://api.imgbb.com/1/upload',imageData)
    .then(res=>{
        setImageUrl(res.data.data.display_url)
    })
}

   
    return (
        <div className="add-form">
            <h2 className="heading">Update Data</h2>
           
           <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
     <div className="input-group">
     <input className="form-control"  {...register("name")} placeholder="Theme Name" id="name" type="text" value={name}
      onChange={e=>setName(e.target.value)} /><br/>
     </div>
      
      {/* include validation with required or other standard HTML validation rules */}
      <div className="input-group">
     <input className="form-control" {...register("version")} placeholder="Theme Version" id="version" value={version} onChange={e=>setVersion(e.target.value)}/><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <div className="input-group">

     <textarea className="form-control" {...register("feature")} 
      name="feature" placeholder="Feature" id="feature" value={feature}onChange={e=>setFeature(e.target.value)}/><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <div className="input-group">
     <textarea className="form-control" {...register("website")} placeholder="Inspiration Site" id="website" value={website}onChange={e=>setWebsite(e.target.value)}/><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <div className="input-group">
     <input className="form-control" {...register("image")} placeholder="Theme Image" id="image"  type="file" onChange={
         (e)=>handleImageChange(e)}/><br/>
     </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      
 <div class="d-grid gap-2"> <button class="btn btn-primary"  type="submit">Update</button></div>
  

    </form>

    
         
        </div>
    );
};

export default UpdateData;