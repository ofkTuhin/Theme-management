
import React from 'react';
import { Link } from 'react-router-dom';
import './themFetaure.css'

const ThemeFeature = ({dataInput}) => {
    console.log(dataInput)
   
    


    

    const deleteItem=(id)=>{
       fetch(`https://guarded-woodland-52046.herokuapp.com/delete/${id}`,{
           method:'DELETE'
       }
       )
       .then(res=>res.json())
       .then(data=>{
           if(data){
               const updateData=dataInput.filter(dt=>dt._id===data._id)
               dataInput={...data,updateData}

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
                    dataInput.map(data=><tr>
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