import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Base64 } from 'js-base64';

import ThemeFeature from '../../Theme/ThemeFeture/ThemeFeature';


const GetData = () => {
    const [reload, setReload] = useState(true)
   
    const [dataInput, setDataInput] = useState([])
    const [fullName,setFullName]=useState('')
    const [id,setId]=useState('')

    const [themeName, setThemeName] = useState('')
    // console.log((themeName))
    const [fork, setFork] = useState('')
    const [star, setStar] = useState('')
    const [LastCommit, setLastCommit] = useState('')
    const [create, setCreate] = useState('')
    const [readme, setReadme] = useState('')
    // console.log(readme);

   

    useEffect(() => {


         axios.get('https://guarded-woodland-52046.herokuapp.com/data')
        .then(data=>{
            setDataInput(data.data)
            
      
    
        })
        setReload(false)
       

    },[reload])
         
 useEffect(()=>{
    const mapData = dataInput.map(data => ({

        fullName: data.event.fullName,
        id:data._id

    }))
    console.log('mapdata', mapData)
    
   

   mapData.map(fn =>  {
    setFullName(fn.fullName)
    setId(fn.id)
     axios.get(`https://api.github.com/repos/${fn.fullName}`)
               .then(data => {
                console.log('object', data.data)
                setCreate(data.data.created_at)
                setFork(data.data.forks)
                setLastCommit(data.data.updated_at)
                setStar(data.data.stargazers_count)
                setThemeName(data.data.name)
                
               

            })
            
            axios.get(`https://api.github.com/repos/${fn.fullName}/contents/README.md`)
            .then(r=>setReadme(r.data.content))
            return fn.fullName
        }     
  )


 },[dataInput,fullName])
 
    const decodeCode=Base64.atob(readme)
    // console.log(decodeCode)

    const updateData={
        themeName:themeName,
        fork:fork,
        star:star,
       create:create,
        LastCommit:LastCommit,
        readMe:decodeCode,
        fullName:fullName,
        id:id

       
        }
        
  
    // setInterval(() => {

    // }, [10*1000]);
        
       
       
      
    console.log('update',updateData)

    const updateAll=()=>{
                fetch(`https://guarded-woodland-52046.herokuapp.com/updateOne/${id}`,{
            method:'PATCH', 
            headers:{'content-type':'application/json'},
            body: JSON.stringify(updateData)
        },)
        // axios.patch('http://localhost:3000/updateOne',updateData)
        console.log('update',updateData)

    }




    //delete item

    // const deleteItem = (id) => {
    //     fetch(`https://guarded-woodland-52046.herokuapp.com/delete/${id}`, {
    //         method: 'DELETE'
    //     }
    //     )
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data) {
    //                 const updateData = dataInput.filter(dt => dt._id === data._id)
    //                 setDataInput(updateData)
                    

    //             }

    //         }
    //         )
    // }

    return (
        <>
            <ThemeFeature
                dataInput={dataInput}
                // deleteItem={deleteItem}


            >

            </ThemeFeature>
            <button onClick={updateAll}>update</button>


        </>
    );
};

export default GetData;