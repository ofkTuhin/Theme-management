
import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'

import './themFetaure.css'

const ThemeFeature = ({dataInput,deleteItem}) => {
  
    console.log(dataInput)

const currentDate=new Date()
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
               {
                   dataInput.map(data=>
                    <tr>
                    <td>{data.event.themeName}</td>
                    <td>{data.event.fork}</td>
                    <td>
                    <li>{data.event.star}</li>
                        </td>
                        <td>
                        {

            currentDate.getFullYear()>new Date(data.event.LastCommit).getFullYear() ?<td>{currentDate.getFullYear()-new Date(data.event.LastCommit).getFullYear()}  year ago</td> :
            currentDate.getMonth()>new Date(data.event.LastCommit).getMonth() ?<td>{currentDate.getMonth()-new Date(data.event.LastCommit).getMonth()} moth ago</td>:

            currentDate.getDate()>new Date(data.event.LastCommit).getDate()? <td> {currentDate.getDate()-new Date(data.event.LastCommit).getDate()}days ago</td>:

            currentDate.getHours()>new Date(data.event.LastCommit).getHours()? <td>{currentDate.getHours()-new Date(data.event.LastCommit).getHours()} hours ago</td>:

            currentDate.getMinutes()>new Date(data.event.LastCommit).getMinutes()? <td>{currentDate.getMinutes()-new Date(data.event.LastCommit).getMinutes()} minutes ago</td>:
            <td>{currentDate.getSeconds()-new Date(data.event.LastCommit).getSeconds() } seconds ago</td>



}
                        </td>
                        
                       {

                           currentDate.getFullYear()>new Date(data.event.create).getFullYear() ?<td>{currentDate.getFullYear()-new Date(data.event.create).getFullYear()}  year ago</td> :
                            currentDate.getMonth()>new Date(data.event.create).getMonth() ?<td>{currentDate.getMonth()-new Date(data.event.create).getMonth()} moth ago</td>:

                            currentDate.getDate()>new Date(data.event.create).getDate()? <td> {currentDate.getDate()-new Date(data.event.create).getDate()}days ago</td>:

                             currentDate.getHours()>new Date(data.event.create).getHours()? <td>{currentDate.getHours()-new Date(data.event.create).getHours()} hours ago</td>:

                             currentDate.getMinutes()>new Date(data.event.create).getMinutes()? <td>{currentDate.getMinutes()-new Date(data.event.create).getMinutes()} minutes ago</td>:
                             <td>{currentDate.getSeconds()-new Date(data.event.create).getSeconds() } seconds ago</td>

                       
                       
                       }


                    <td><Link to ={`/updatePage/${data?._id}`}><span className="edit"><BiEdit/></span></Link><span onClick={()=>deleteItem(data?._id)} className="delete"><AiFillDelete/>
                    </span></td>
                </tr>
                    )
               }
                
            </table>
        </div>
    );
};

export default ThemeFeature;