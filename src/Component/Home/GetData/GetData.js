import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ThemeFeature from '../../Theme/ThemeFeture/ThemeFeature';

const GetData = () => {
    const [dataInput,setDataInput]=useState([])
    useEffect(()=>{
        axios.get('https://guarded-woodland-52046.herokuapp.com/data')
        .then(data=>setDataInput(data.data))
        // fetch('https://guarded-woodland-52046.herokuapp.com/data')
        // .then(res=>res.json())
        // .then(data=>setData(data))
        // console.log(data)
    },[])
    return (
        <>
          <ThemeFeature dataInput={dataInput}></ThemeFeature>
        </>
    );
};

export default GetData;