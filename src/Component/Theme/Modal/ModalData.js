import React, { useState } from 'react';
import Modal from 'react-modal';
import parse from 'html-react-parser'
import markdownPro from 'markdown-pro';
import {AiFillCloseCircle} from 'react-icons/ai'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const ModalData = ({href}) => {
  console.log(href)


  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
const iframe=``
console.log(iframe)
  // const Iframe=()=> {
   
  //   <div dangerouslySetInnerHTML={{ __html: }}>
  //   </div>
    
  //   // references are now sync'd and can be accessed.
   
  // }

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
          <button className="btn btn-success" onClick={openModal}>Readme</button>
            <Modal
        isOpen={modalIsOpen}
       
        // onAfterOpen={Iframe}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         
        
        {/* <button ><AiFillCloseCircle/></button> */}
        <AiFillCloseCircle onClick={closeModal} style={{cursor:'pointer'}}/>
        
       
        <div style={{
          height:'400px',
          width:'400px'
        }}>{parse(markdownPro(href))}</div>
      </Modal>
        </div>
    );
};

export default ModalData;