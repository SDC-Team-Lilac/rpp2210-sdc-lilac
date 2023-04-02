import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import AddPhoto from './AddPhoto.jsx'

Modal.setAppElement('#root');

const AddAnswer = (props) => {

  const [answerInput, setAnswerInput] = useState ('');
  const [answerNicknameInput, setAnswerNicknameInput] = useState ('');
  const [answerEmailInput, setAnswerEmailInput] = useState ('');
  const [showAddAnswerForm, setShowAddAnswerForm] = useState(false);
  const [warning, setWarning] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const [imageTypes, setImageTypes] = useState([])



  const ansewerInputHandler = (event) => {
      setAnswerInput(event.target.value);
  };

  const nicknameInputHandler = (event) => {
    setAnswerNicknameInput(event.target.value);
  };

  const emailInputHandler = (event) => {
    setAnswerEmailInput(event.target.value);
  };

  const onClickHandler = () => {
    setShowModal(true)
  };

  const closeHandler = () => {
    setShowModal(false)
  };

  const answerSubmitFunc = (id, answer) => {
    return axios.post(`/qa/questions/${id}/answers`, answer)
  };



  const submitHandler = (event) => {
    event.preventDefault();

    let newAnswer = {
      body:answerInput,
      name:answerNicknameInput,
      email:answerEmailInput,
      photos:imageUrls
    };

    if (!newAnswer.body || !newAnswer.name || !newAnswer.email) {
      setSubmitSuccess('You must enter the following: Answer, Name and Email');
      return;
    }

    if (!newAnswer.email.includes('@')) {
      setSubmitSuccess('The email address provided is not in correct email format');
      return;
    }

    if (imageTypes.length !== 0) {
       for (let i=0; i<imageTypes.length; i++){
      if (imageTypes[i] !== 'image/jpeg') {
        setSubmitSuccess('The photo provided is not in correct format');
        return;
      };
    };
    };



    answerSubmitFunc(props.question.question_id, newAnswer)
    .then(()=> {
      console.log('Your answer has been submitted!');
      setShowAddAnswerForm(false);
      setSubmitSuccess('Your answer has been submitted!')
      props.getAnswersForOneQuestion(props.question.question_id)
      .then((result)=> {
        console.log('new ansewer result --->>', result.data.results)
        props.setAnswerList(result.data.results);
      })
      .catch(err=>{
        console.log(err)
      })
    })
    .catch(err=>{
      console.log(err);
      setShowAddAnswerForm(false)
      setSubmitSuccess('Your answer has not been submitted! Please valid your input!')
    });
  // }
  setShowAddAnswerForm(false)
  };


  return (
    <div className='qa_addAnswer'>
      <div>
        <button className='qa_button' data-testid="addButton" onClick={onClickHandler}>Add Ansewer</button>

      </div>
      <Modal  className='qa_addAnswerModal' isOpen={showModal} onRequestClose={closeHandler}  >
        <div>
            <h2>Submit your Ansewer</h2>
            <h3>{`${props.productName}: ${props.question.question_body}`}</h3>
            <form onSubmit={submitHandler}>
              <div className='qa_qaFormItem'><label>Your Answer*</label><input type='text' onChange={ansewerInputHandler} maxLength={1000} ></input></div>
              <div><label>Your Nickname*</label><input type='text' onChange={nicknameInputHandler} maxLength={60} ></input><div className='qa_qaFormText'>For privacy reasons, do not use your full name or email address</div></div>
              <div><label>Your email*</label><input type='text' placeholder='Example: jack@email.com' onChange={emailInputHandler} maxLength={60} ></input><div className='qa_qaFormText'>For authentication reasons, you will not be emailed</div></div>
              <div className='qa_qaFormItem'><AddPhoto setImageUrls={setImageUrls} imageUrls={imageUrls} setImageTypes={setImageTypes} imageTypes={imageTypes}/></div>
              {submitSuccess && (<div className='qa_qaFormErrorText'>{submitSuccess}</div>)}
              <button type='submit'>Submit Answer</button>
            </form>
          </div>
      </Modal>
    </div>
  )
}

export default AddAnswer;

