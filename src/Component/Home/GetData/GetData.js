import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ThemeFeature from '../../Theme/ThemeFeture/ThemeFeature';

const GetData = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://guarded-woodland-52046.herokuapp.com/data')
        .then(data=>setData(data.data))
        // fetch('https://guarded-woodland-52046.herokuapp.com/data')
        // .then(res=>res.json())
        // .then(data=>setData(data))
        // console.log(data)
    },[])
    return (
        <>
          <ThemeFeature data={data}></ThemeFeature>
        </>
    );
};

export default GetData;