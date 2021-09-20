import React, { useEffect, useState } from 'react';
import './themFetaure.css'

const ThemeFeature = (props) => {
    const [feature,setFeature]=useState([])

    useEffect(()=>{
        setFeature(props.data)
        console.log(feature._id)
    },[])

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
        
        )
       

    }
    
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
                        <td>{data.name}</td>
                        <td>{data.version}</td>
                        <td><ul>
                        {data.feature.map(data=><li>{data}</li>)}
                            </ul></td>
                            <td><ul>
                        {data.website.map(data=><li>{data}</li>)}
                            </ul></td>


                        <td><span>edit</span>/<span onClick={()=>deleteItem(data._id)}>delete</span></td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default ThemeFeature;