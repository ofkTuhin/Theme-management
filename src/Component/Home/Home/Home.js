import axios from 'axios';
import React from 'react';
import AddForm from '../AddForm/AddForm';



const Home = () => {
    // const [encode, setEncode] = useState('')
    const p={
        a:'y'
    }


const postData=()=>{
    axios.post('http://localhost:3000/updateTest',{
        p

    })
}
const q={
    b:'z'
}
setInterval(()=>{
    axios.patch('http://localhost:3000/update',{q})
},[1000])

   



    return (
        <div>

            <h2 className="heading">Add Theme Description</h2>
            <AddForm></AddForm>

           
            <div>

            </div>
            <button onClick={postData}>delete</button>
        </div>
    );
};

export default Home;