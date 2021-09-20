import React,{useState,useEffect} from 'react';

const GetData = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://guarded-woodland-52046.herokuapp.com/data')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <img src={data.image} alt="img"/>
        </div>
    );
};

export default GetData;