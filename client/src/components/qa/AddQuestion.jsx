import React, {useState} from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddQuestion = (props) => {

  //states for user input in the form to add a new question for product_id
  const [questionInput, setQuestionInput] = useState ('');
  const [questionNicknameInput, setQuestionNicknameInput] = useState ('');
  const [questionEmailInput, setQuestionEmailInput] = useState ('');
  const [showModal, setShowModal] = useState(false);

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

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const addNewQuestions = (newQuestion) => {
    return axios.post('/qa/questions', newQuestion);
  };

  const newQuestionSubmitHandler = (event) =>{
    event.preventDefault();
    let newQuestion = {
      body: questionInput,
      name: questionNicknameInput,
      email: questionEmailInput,
      product_id: props.productId
    };
    console.log('newQuestion', newQuestion)

    addNewQuestions(newQuestion)
    .then(()=> {
      console.log('Your question has been submitted!')
    })
    .catch(err=>{
      console.log(err);
    })

  };

  return (
    <div>
    <div data-testid='AddQuestion'> AddQuestion! </div>
    <button onClick={handleClick}>Add a new Question</button>
    <Modal style={customStyles} isOpen={showModal} onRequestClose={handleClose}>
    <form onSubmit={newQuestionSubmitHandler}>
      <h1>Ask Your Question</h1>
      <h3>About the {props.productName}</h3>
      <label>Your Question</label><input type='text' onChange={(e)=>{setQuestionInput(e.target.value)}}></input>
      <label>Your Nickname</label><input type='text' onChange={(e)=>{setQuestionNicknameInput(e.target.value)}}></input>
      <label>Your Email</label><input type='text' onChange={(e)=>{setQuestionEmailInput(e.target.value)}}></input>
      <button type='submit' >Submit</button>
    </form>
    </Modal>
    </div>
  )
}

export default AddQuestion;