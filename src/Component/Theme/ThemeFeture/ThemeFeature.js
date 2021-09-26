
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'

import './themFetaure.css'

const ThemeFeature = ({dataInput,deleteItem}) => {
   const [data,setData]= useState([])
    console.log(dataInput)
   
useEffect(() => {
    dataInput.map(data=>{
        return(
            setData(data.event)
        )
    })
  
}, [dataInput])

const createDate=new Date(data.create)
const commitDate= new Date(data.LastCommit)

const currentDate=new Date()
console.log(createDate,currentDate)


    return (
        <div>
            <h2 className='heading'>Data List</h2>
            <table>
            <th>name</th>
                <th>fork</th>
               
                <th>stars</th>
                <th>Last Commit</th>
                <th>create Date</th>
                <th>action</th>
                <tr>
                        <td>{data.themeName}</td>
                        <td>{data.fork}</td>
                        <td>
                        <li>{data.star}</li>
                            </td>
                            <td>
                            {

currentDate.getFullYear()>commitDate.getFullYear() ?<td>{currentDate.getFullYear()-commitDate.getFullYear()}  year ago</td> :
 currentDate.getMonth()>commitDate.getMonth() ?<td>{currentDate.getMonth()-commitDate.getMonth()} moth ago</td>:

 currentDate.getDate()>commitDate.getDate()? <td> {currentDate.getDate()-commitDate.getDate()}days ago</td>:

  currentDate.getHours()>commitDate.getHours()? <td>{currentDate.getHours()-commitDate.getHours()} hours ago</td>:

  currentDate.getMinutes()>commitDate.getMinutes()? <td>{currentDate.getMinutes()-commitDate.getMinutes()} minutes ago</td>:
  <td>{currentDate.getSeconds()-commitDate.getSeconds() } seconds ago</td>



}
                            </td>
                            
                           {

                               currentDate.getFullYear()>createDate.getFullYear() ?<td>{currentDate.getFullYear()-createDate.getFullYear()}  year ago</td> :
                                currentDate.getMonth()>createDate.getMonth() ?<td>{currentDate.getMonth()-createDate.getMonth()} moth ago</td>:

                                currentDate.getDate()>createDate.getDate()? <td> {currentDate.getDate()-createDate.getDate()}days ago</td>:

                                 currentDate.getHours()>createDate.getHours()? <td>{currentDate.getHours()-createDate.getHours()} hours ago</td>:

                                 currentDate.getMinutes()>createDate.getMinutes()? <td>{currentDate.getMinutes()-createDate.getMinutes()} minutes ago</td>:
                                 <td>{currentDate.getSeconds()-createDate.getSeconds() } seconds ago</td>

                           
                           
                           }


                        <td><Link to ={`/updatePage/${data?._id}`}><span className="edit"><BiEdit/></span></Link><span onClick={()=>deleteItem(data?._id)} className="delete"><AiFillDelete/>
                        </span></td>
                    </tr>
                
            </table>
           
        </div>
    );
};

export default ThemeFeature;