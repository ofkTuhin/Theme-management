
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'

import './themFetaure.css'

const ThemeFeature = ({ dataInput, deleteItem }) => {
   

    const [themeData, setThemData] = useState([])
    // useEffect(()=>{
    //     setThemData(dataInput)
    //     console.log(themeData)
    // },[dataInput,themeData])
  
     const handleClick=()=>{
        
   setThemData(dataInput)
  
   

    }
    
    
 
  const handleFork=()=>{
      dataInput.sort((a,b)=>b.event.fork-a.event.fork)
      setThemData(dataInput)
      console.log(themeData)
    
  }
  const handleStars=()=>{
   dataInput.sort((a,b)=>b.event.star-a.event.star)
    setThemData(dataInput)
    console.log(themeData)
    
}
const currentDate = new Date()
    return (
        <div>
            <h2 className='heading'>Data List</h2>

            <div className="filterButton d-flex justify-content-between">
               <button className="active btn btn-default" children onClick={handleClick} >
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


    themeData.map(data =>
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
                           themeData.map(data=>
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
                                    <button className="btn btn-success">Read Me</button>
                                    <button className="btn btn-secondary">Github</button>
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