import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './themFetaure.css'

const ThemeFeature = ({data}) => {
    console.log(data)
    const [feature,setFeature]=useState([])
    useEffect(()=>{
        
        setFeature(data)
       
    })
    console.log(feature)
    


    

    const deleteItem=(id)=>{
       fetch(`https://guarded-woodland-52046.herokuapp.com/delete/${id}`,{
           method:'DELETE'
       }
       )
       .then(res=>res.json())
       .then(data=>{
           if(data){
               const updateData=feature.filter(data=>data._id===feature._id)
               setFeature(updateData)

           }
       } 
       )}

      
    
    return (
        <div>
            <table>
                <th>name</th>
                <th>version</th>
                <th>feature</th>
                <th>website</th>
                <th>action</th>
                {
                    feature.map(data=><tr>
                        <td>{data.themeData.name}</td>
                        <td>{data.themeData.version}</td>
                        <td><ul>
                        <li>{data.themeData.feature}</li>
                            </ul></td>
                            <td><ul>
                        <li>{data.themeData.website}</li>
                            </ul></td>


                        <td><Link to ={`/updatePage/${data._id}`}><span >edit</span></Link>/<span onClick={()=>deleteItem(data._id)}>delete
                        </span></td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default ThemeFeature;