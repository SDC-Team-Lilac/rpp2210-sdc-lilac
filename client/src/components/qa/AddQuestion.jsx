import React, {useState} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

const AddQuestion = (props) => {

  //states for user input in the form to add a new question for product_id
  const [questionInput, setQuestionInput] = useState ('');
  const [questionNicknameInput, setQuestionNicknameInput] = useState ('');
  const [questionEmailInput, setQuestionEmailInput] = useState ('');
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState('');

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

    if (!newQuestion.body || !newQuestion.name || !newQuestion.email) {
      setShowError('You must enter the following: Question, Name and Email');
      return;
    }

    if (!newQuestion.email.includes('@')) {
      setShowError('The email address provided is not in correct email format');
      return;
    }

    addNewQuestions(newQuestion)
    .then(()=> {
      alert('Your question has been submitted!')
      props.getQuestionsForOneProduct(props.productId)
      .then(result=>{
        props.setQuestionList(result.data.results);
        setShowModal(false);
      })
      .catch(err=>
        console.log(err));
    })
    .catch(err=>{
      console.log(err);
    })

  };

  return (
    <span className='qa_addQuestion'>
    <div data-testid='AddQuestion'> <strong>Didn't find the question you were looking for? Ask your question!</strong> </div>
    <button className='qa_button3' onClick={handleClick}> ADD A QUESTION <FontAwesomeIcon icon={faPlus} /></button>

    <Modal className="qa_addQuestionModal" isOpen={showModal} onRequestClose={handleClose}>
       <div>
        <form onSubmit={newQuestionSubmitHandler}>
          <h1>Ask Your Question</h1>
          <h3>About the {props.productName}</h3>
          <div >
            <div className='qa_qaFormItem'>
            <label>Your Question*</label><input maxLength={1000} type='text' onChange={(e)=>{setQuestionInput(e.target.value)}}></input>
            </div>
            <div>
            <label>Your Nickname*</label><input type='text' maxLength={60} onChange={(e)=>{setQuestionNicknameInput(e.target.value)}} placeholder='Example: jackson11!'></input>
            </div>
            <div className='qa_qaFormText'>For privacy reasons, do not use your full name or email address</div>
            <div>
            <label>Your Email*</label><input maxLength={60} type='text' onChange={(e)=>{setQuestionEmailInput(e.target.value)}} placeholder='Example: jack@email.com'></input>
            </div>
            <div className='qa_qaFormText'>For authentication reasons, you will not be emailed</div>
            <div>
              {showError && (<div className='qa_qaFormErrorText'>{showError}</div>)}
            </div>
            <button type='submit' >Submit</button>
          </div>
        </form>
        </div>
    </Modal>
    </span>
  )
}

export default AddQuestion;