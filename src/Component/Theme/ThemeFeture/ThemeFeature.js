
import React from 'react';
import { Link } from 'react-router-dom';
import AddForm from '../../Home/AddForm/AddForm';
import './themFetaure.css'

const ThemeFeature = ({dataInput,deleteItem}) => {
    console.log(dataInput)


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
                        <td>{data.event.name}</td>
                        <td>{data.event.version}</td>
                        <td><ul>
                        <li>{data.event.feature}</li>
                            </ul></td>
                            <td><ul>
                        <li>{data.event.website}</li>
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