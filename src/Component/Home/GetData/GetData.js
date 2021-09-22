import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ThemeFeature from '../../Theme/ThemeFeture/ThemeFeature';

const GetData = () => {
    const [reload,setReload]=useState('')
    const [dataInput,setDataInput]=useState([])
    useEffect(()=>{
        axios.get('https://guarded-woodland-52046.herokuapp.com/data')
        .then(data=>setDataInput(data.data))
        // fetch('https://guarded-woodland-52046.herokuapp.com/data')
        // .then(res=>res.json())
        // .then(data=>setData(data))
        // console.log(data)
    },[reload])

    const deleteItem=(id)=>{
        fetch(`https://guarded-woodland-52046.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        }
        )
        .then(res=>res.json())
        .then(data=>{
            
            if(data){
                const updateData=dataInput.filter(dt=>dt._id===data._id)
                setDataInput(updateData)
                setReload(data)
 
            }
            
        } 
        )}
    return (
        <>
          <ThemeFeature dataInput={dataInput} deleteItem={deleteItem}></ThemeFeature>
         
        </>
    );
};

export default GetData;