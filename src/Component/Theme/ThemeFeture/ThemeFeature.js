
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { AiFillDelete } from 'react-icons/ai'
// import { BiEdit } from 'react-icons/bi'

import axios from 'axios';


import './themFetaure.css'
import ModalData from '../Modal/ModalData';
import { Link } from 'react-router-dom';

// import axios from 'axios';


// { deleteItem, }
const ThemeFeature = () => {

    const [dataInput, setDataInput] = useState([])
    const [reload, setReload] = useState('')
    
       


    
    useEffect(() => {

        axios.get('https://guarded-woodland-52046.herokuapp.com/data')
        
      .then(data=>  setDataInput(data.data))

        
    }, [dataInput])



    const handleAll = (e) => {


        
        setDataInput([...dataInput])
       

        console.log(dataInput)

    }
    const handleFork = () => {
        dataInput.sort((a, b) => b.event.fork - a.event.fork)

        setDataInput([...dataInput])
       

    }
    const handleStars = () => {
        console.log('star')
        dataInput.sort((a, b) => b.event.star - a.event.star)
        setDataInput([...dataInput])
        

    }

    const currentDate = new Date()
 

    return (
        <div>


            <div className="filterButton d-flex justify-content-between">
                <button className="active btn btn-default"
                    onClick={handleAll} active >
                    All
                </button>
                <button className=" btn" onClick={handleFork} >
                    Fork
                </button>
                <button className=" btn" onClick={handleStars} >
                    Star
                </button>

            </div>


            <div className="organizeData">
                <div className="container">
                    <div className="row">
                        {
                            dataInput.map(data =>
                                <div className="col-lg-3">
                               
                               <div className="themeData">
                                        <div className="themeImage">
                                            <img src={`https://demo.gethugothemes.com/thumbnails/${data.event.themeName.replace("-hugo","")}.webp`} alt="ddd" />



                                        </div>
                                        <div className="themeName">
                                        <Link to={`/updatePage/${data._id}`}>  <h4>{data.event.themeName}</h4>  </Link>
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
                                                console.log()
                                            }


                                                {
                                                  

                                                    currentDate.getFullYear() > new Date(data.event.LastCommit).getFullYear() ? <small>{currentDate.getFullYear() - new Date(data.event.LastCommit).getFullYear()}  year ago</small> :
                                                        currentDate.getMonth() > new Date(data.event.LastCommit).getMonth() ? <small>{currentDate.getMonth() - new Date(data.event.LastCommit).getMonth()} month ago</small> :

                                                            currentDate.getDate() > new Date(data.event.LastCommit).getDate() ? <small> {currentDate.getDate() - new Date(data.event.LastCommit).getDate()}days ago</small> :

                                                                currentDate.getHours() > new Date(data.event.LastCommit).getHours() ? <small>{currentDate.getHours() - new Date(data.event.LastCommit).getHours()} hours ago</small> :

                                                                    currentDate.getMinutes() > new Date(data.event.LastCommit).getMinutes() ? <small>{currentDate.getMinutes() - new Date(data.event.LastCommit).getMinutes()} minutes ago</small> :
                                                                        <small>{currentDate.getSeconds() - new Date(data.event.LastCommit).getSeconds()} seconds ago</small>
                                                }
                                            </h6>
                                        </div>

                                        <div className="button d-flex justify-content-between">
                                            
                                            <ModalData href={data.event.readMe}

                                            ></ModalData>
                                            <a className="btn btn-secondary" href={data.event.gitUrl} target="_blank" rel="noreferrer">Github</a>
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