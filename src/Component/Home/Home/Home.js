import axios from 'axios';
import React from 'react';
import AddForm from '../AddForm/AddForm';
// import { Base64 } from 'js-base64';
// import axios from 'axios';
// import parse from 'html-react-parser';

// import markdownPro from 'markdown-pro';


const Home = () => {
    // const [encode, setEncode] = useState('')
    const p='hi update ok'



// setInterval(()=>{
//     axios.post('http://localhost:3000/updateTest',{
//         p
//         })
//         console.log(p)
// },[3000])


    // useEffect(() => {
    //     axios.get('https://api.github.com/repos/themefisher/vex-hugo/contents/README.md')
    //         .then(data => setEncode(data.data.content))

    // }, [])
    // // console.log(encode)
    // const decodeCode=Base64.atob(encode)
    // // console.log(decodeCode)
    // const parsCode =  markdownPro(decodeCode)
    // console.log(parsCode)




    return (
        <div>

            <h2 className="heading">Add Theme Description</h2>
            <AddForm></AddForm>

            {/* <div style={{
                border: '1px solid blue',
                height: "300px",
                width: "300px"

            }}>

                {parse(parsCode)}

            </div> */}
            <div>

            </div>
        </div>
    );
};

export default Home;