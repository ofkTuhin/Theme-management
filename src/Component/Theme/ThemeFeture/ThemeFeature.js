
import React, {  useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'

import axios from 'axios';


import './themFetaure.css'
// import axios from 'axios';

const ThemeFeature = ({deleteItem,}) => {
    
    const [dataInput,setDataInput]=useState([])
    const [reload,setReload]=useState('')
    const res=async()=>{
            
        const result=await axios.get('https://guarded-woodland-52046.herokuapp.com/data')
        console.log(result.data)
        setDataInput(result.data)
        
       }
    useEffect(()=>{

         
         
     res()
     },[reload])

 

     const handleAll=(e)=>{
       
        console.log('all')
           setDataInput([...dataInput])
           setReload(dataInput)
           console.log(dataInput)
       }
       const handleFork=()=>{
      dataInput.sort((a,b)=>b.event.fork-a.event.fork)
        
         setDataInput( [...dataInput])
         console.log( dataInput)
 
     }
     const handleStars=()=>{
     dataInput.sort((a,b)=>b.event.star-a.event.star)
       setDataInput([...dataInput])
      
     
       console.log(dataInput)
       
   }   
   
const currentDate = new Date()
    return (
        <div>
            

            <div className="filterButton d-flex justify-content-between">
               <button className="active btn btn-default" 
               onClick={handleAll}  active >
                   All
               </button>
               <button className=" btn" onClick={handleFork} >
                   Fork
                </button>
               <button className=" btn" onClick={handleStars} >
                   Star
               </button>
            
            </div>

            <table>
                <th>name</th>
                <th>fork</th>

                <th>stars</th>
                <th>Last Commit</th>
                <th>create Date</th>
                <th>action</th>
               { 


 dataInput.map(data =>
         <tr>
             <td>{data.event.themeName}</td>
             <td>{data.event.fork}</td>
             <td>
                 <li>{data.event.star}</li>
             </td>
             <td>
                 {

                     currentDate.getFullYear() > new Date(data.event.LastCommit).getFullYear() ? <td>{currentDate.getFullYear() - new Date(data.event.LastCommit).getFullYear()}  year ago</td> :
                         currentDate.getMonth() > new Date(data.event.LastCommit).getMonth() ? <td>{currentDate.getMonth() - new Date(data.event.LastCommit).getMonth()} moth ago</td> :

                             currentDate.getDate() > new Date(data.event.LastCommit).getDate() ? <td> {currentDate.getDate() - new Date(data.event.LastCommit).getDate()}days ago</td> :

                                 currentDate.getHours() > new Date(data.event.LastCommit).getHours() ? <td>{currentDate.getHours() - new Date(data.event.LastCommit).getHours()} hours ago</td> :

                                     currentDate.getMinutes() > new Date(data.event.LastCommit).getMinutes() ? <td>{currentDate.getMinutes() - new Date(data.event.LastCommit).getMinutes()} minutes ago</td> :
                                         <td>{currentDate.getSeconds() - new Date(data.event.LastCommit).getSeconds()} seconds ago</td>

                 }
             </td>
             {
 currentDate.getFullYear() > new Date(data.event.create).getFullYear() ? <td>{currentDate.getFullYear() - new Date(data.event.create).getFullYear()}  year ago</td> :
                     currentDate.getMonth() > new Date(data.event.create).getMonth() ? <td>{currentDate.getMonth() - new Date(data.event.create).getMonth()} month ago</td> :

                         currentDate.getDate() > new Date(data.event.create).getDate() ? <td> {currentDate.getDate() - new Date(data.event.create).getDate()}days ago</td> :

                             currentDate.getHours() > new Date(data.event.create).getHours() ? <td>{currentDate.getHours() - new Date(data.event.create).getHours()} hours ago</td> :

                                 currentDate.getMinutes() > new Date(data.event.create).getMinutes() ? <td>{currentDate.getMinutes() - new Date(data.event.create).getMinutes()} minutes ago</td> :
                                     <td>{currentDate.getSeconds() - new Date(data.event.create).getSeconds()} seconds ago</td>



             }


             <td><Link to={`/updatePage/${data?._id}`}><span className="edit"><BiEdit /></span></Link><span onClick={() => deleteItem(data?._id)} className="delete"><AiFillDelete />
             </span></td>
         </tr>
     )
 
 }
</table>
<div className="organizeData">
                <div className="container">
                    <div className="row">
                       {
                         dataInput.map(data=>
                            <div className="col-lg-3">
                            <div className="themeData">
                                <div className="themeImage">
                                    <img src={`https://demo.gethugothemes.com/thumbnails/${data.event.themeName.replace("-hugo","")}.webp`}alt="ddd"/>
                                   

                                    
                                </div>
                                <div className="themeName">
                                    <h4>{data.event.themeName}</h4>
                                </div>
                                <div className="startFork">
                                    <div className="row">
                                        <p>Fork: {data.event.fork}</p>
                                        <p>Stars: {data.event.star}</p>
                                    </div>
                                </div>
                                <div className="date">
                                    <h6 className="commitCreate">Create Date: {
                                          currentDate.getFullYear() > new Date(data.event.create).getFullYear() ? <small>{currentDate.getFullYear() - new Date(data.event.create).getFullYear()}  year ago</small> :
                                          currentDate.getMonth() > new Date(data.event.create).getMonth() ? <small>{currentDate.getMonth() - new Date(data.event.create).getMonth()} month ago</small> :
      
                                              currentDate.getDate() > new Date(data.event.create).getDate() ? <small> {currentDate.getDate() - new Date(data.event.create).getDate()}days ago</small> :
      
                                                  currentDate.getHours() > new Date(data.event.create).getHours() ? <small>{currentDate.getHours() - new Date(data.event.create).getHours()} hours ago</small> :
      
                                                      currentDate.getMinutes() > new Date(data.event.create).getMinutes() ? <small>{currentDate.getMinutes() - new Date(data.event.create).getMinutes()} minutes ago</small> :
                                                          <small>{currentDate.getSeconds() - new Date(data.event.create).getSeconds()} seconds ago</small>
                                    }</h6>
                                    <h6 className="commitCreate">LastCommit: 
                                    {
                                       
                                currentDate.getFullYear() > new Date(data.event.create).getFullYear() ? <small>{currentDate.getFullYear() - new Date(data.event.create).getFullYear()}  year ago</small> :
                                currentDate.getMonth() > new Date(data.event.create).getMonth() ? <small>{currentDate.getMonth() - new Date(data.event.create).getMonth()} month ago</small> :

                                    currentDate.getDate() > new Date(data.event.create).getDate() ? <small> {currentDate.getDate() - new Date(data.event.create).getDate()}days ago</small> :

                                        currentDate.getHours() > new Date(data.event.create).getHours() ? <small>{currentDate.getHours() - new Date(data.event.create).getHours()} hours ago</small> :

                                            currentDate.getMinutes() > new Date(data.event.create).getMinutes() ? <small>{currentDate.getMinutes() - new Date(data.event.create).getMinutes()} minutes ago</small> :
                                                <small>{currentDate.getSeconds() - new Date(data.event.create).getSeconds()} seconds ago</small> 
                                    }
                                    </h6>
                                </div>

                                <div className="button d-flex justify-content-between">
                                    <a className="btn btn-success" href={data.event.readme} target="_blank" rel="noreferrer">Read Me</a>
                                    <a className="btn btn-secondary" href={data.event.gitUrl}  target="_blank" rel="noreferrer">Github</a>
                                </div>
                            </div>
                        </div>
                            )
                            
                       }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeFeature;