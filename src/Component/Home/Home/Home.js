import React, { useEffect, useState } from 'react';
import AddForm from '../AddForm/AddForm';


const Home = () => {
   const [x,setX]= useState([])
    const array = [
        {
            x:2,
            y:2
        },
        {
            x:1,
            y:5
        },
        {
            x:4,
            y:1
        }
    ]
   useEffect(()=>{
       setX(array)
   },[])
    const handleClick=(a,b)=>{
        array.sort((a,b)=>{
            return(
                b.x-a.x
            )

        })
        console.log(x)
        setX(array)
    }
    console.log(x)

    
    
    return (
        <div>
            <button onClick={handleClick}>click</button>
            {
               x.map(x=><p>{x.x}</p>)
            }
            <h2 className="heading">Add Theme Description</h2>
            <AddForm></AddForm>
        </div>
    );
};

export default Home;