
import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'

import './themFetaure.css'

const ThemeFeature = ({dataInput,deleteItem}) => {
   


    return (
        <div>
            <h2 className='heading'>Data List</h2>
            <table>
                <th>name</th>
                <th>version</th>
                <th>feature</th>
                <th>website</th>
                <th>Image</th>
                <th>action</th>
                {
                    dataInput.map(data=><tr>
                        <td>{data.event.name}</td>
                        <td>{data.event.version}</td>
                        <td><ul>
                        <li>{data.event.feature}</li>
                            </ul></td>
                            <td><ul>
                        <li>{data.event.website}</li>
                            </ul></td>
                            <td><img src={data.event.image} alt="img"/></td>


                        <td><Link to ={`/updatePage/${data._id}`}><span className="edit"><BiEdit/></span></Link><span onClick={()=>deleteItem(data._id)} className="delete"><AiFillDelete/>
                        </span></td>
                    </tr>)
                }
            </table>
           
        </div>
    );
};

export default ThemeFeature;