import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {useForm } from "react-hook-form";
import axios from 'axios';



const UpdateData = () => {

    const [dataInput, setDataInput] = useState({})
    console.log("dataInput",dataInput)
    
//   const [imageUrl,setImageUrl]=useState()
   
  const [themeName,setThemeName]=useState('')
  const [fork,setFork]=useState('')
  const [star,setStar]=useState('')
  const [LastCommit,setLastCommit]=useState('')
  const [create,setCreate]=useState('')
 const { register, handleSubmit, formState: { errors } } = useForm({});

    
   
const {id}=useParams()
console.log(id)
// useEffect(()=>{
//     fetch(`https://guarded-woodland-52046.herokuapp.com/singleValue/${id}`)
// .then(res=>res.json())
// .then(data=>{


// })



// },[id,reload])


useEffect(()=>{
    axios.get(`https://guarded-woodland-52046.herokuapp.com/singleValue/${id}`)
    .then(data=>{console.log(data.data.event)     
    setThemeName(data.data.event.themeName)
    setFork(data.data.event.fork)
     setStar(data.data.event.star)
    setCreate(data.data.event.create)
    setLastCommit(data.data.event.LastCommit)
    
    }
    
)

   
},[id])

    const updateData={
        themeName:themeName,
        fork:fork,
        star:star,
       create:create,
        LastCommit:LastCommit
       
        }
        console.log(updateData)

    //        setInterval(()=>{
    // fetch(`https://guarded-woodland-52046.herokuapp.com/updateOne/${id}`,{
    //     method:'PATCH',
    //     headers:{'content-type':'application/json'},
    //     body: JSON.stringify(updateData)
    // },)},[60*1000])

//update data

// const onSubmit = (data,e) => {
   
 
    

//         console.log(updateData)
//     console.log(id)

//    })
//     .then(res=>{console.log(res)
    
//       history.push('/getData')
//     })
//     .then(data=>setReload(data))
//     e.target.reset()

// };
// const handleImageChange=e=>{

//     const imageData=new FormData()
//     imageData.set('key','ac14fb7fe7d3b9b39f81a751405dbb8e')
//     imageData.append('image',e.target.files[0])
//     axios.post('https://api.imgbb.com/1/upload',imageData)
//     .then(res=>{
//         setImageUrl(res.data.data.display_url)
//     })
// }

   
    return (
        <div className="add-form">
            <h2 className="heading">Update Data</h2>
{/*            
           <form onSubmit={handleSubmit(onSubmit)}>
      
     <div className="input-group">
     <input className="form-control"  {...register("name")} placeholder="Theme Name" id="name" type="text" value={name}
      onInput={e=>setName(e.target.value)} /><br/>
     </div>

      <div className="input-group">
     <input className="form-control" {...register("version")} placeholder="Theme Version" id="version" value={version} onInput={e=>setVersion(e.target.value)}/><br/>
     </div>
    
      {errors.exampleRequired && <span>This field is required</span>}
      
      <div className="input-group">

     <textarea className="form-control" {...register("feature")} 
      name="feature" placeholder="Feature" id="feature" value={feature}onInput={e=>setFeature(e.target.value)}/><br/>
     </div>
      
      {errors.exampleRequired && <span>This field is required</span>}

      <div className="input-group">
     <textarea className="form-control" {...register("website")} placeholder="Inspiration Site" id="website" value={website}onInput={e=>setWebsite(e.target.value)}/><br/>
     </div>
    
      {errors.exampleRequired && <span>This field is required</span>}
      <div className="input-group">
     <input className="form-control" {...register("image")} placeholder="Theme Image" id="image"  type="file" 
    value={image} alt="fff" onInput={
         (e)=>handleImageChange(e)}/><br/>
     </div>
      
      {errors.exampleRequired && <span>This field is required</span>}
      
      
 <div class="d-grid gap-2"> <button class="btn btn-primary"  type="submit">Update</button></div>
  

    </form> */}

    
         
        </div>
    );
};

export default UpdateData;