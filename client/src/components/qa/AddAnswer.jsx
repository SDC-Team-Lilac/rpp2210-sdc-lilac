import React, {useState} from 'react';
import axios from 'axios';

const AddAnswer = (props) => {

  const [answerInput, setAnswerInput] = useState ('');
  const [answerNicknameInput, setAnswerNicknameInput] = useState ('');
  const [answerEmailInput, setAnswerEmailInput] = useState ('');
  const [answerPhotoInput, setAnswerPhotoInput] = useState ('');
  const [showAddAnswerForm, setShowAddAnswerForm] = useState(false);
  const [warning, setWarning] = useState('');

  const ansewerInputHandler = (event) => {
    if (event.target.value.length <= 1000) {
      setAnswerInput(event.target.value);
    }
  };

  const nicknameInputHandler = (event) => {
    if (event.target.value.length <= 60) {
    setAnswerNicknameInput(event.target.value);
    }
  };

  const emailInputHandler = (event) => {
    if (event.target.value.length <= 60 && event.target.value.includes('@')) {
    setAnswerEmailInput(event.target.value);
    }
  };

  const photosInputHandler = (event) => {
    setAnswerPhotoInput(event.target.value);
  };

  const onClickHandler = () => {
    setShowAddAnswerForm(true);
    setWarning('')
  };

  const answerSubmitFunc = (id, answer) => {
    return axios.post(`/qa/questions/${id}/answers`, answer)
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (answerInput===''){
      setWarning('Invalid Input!')
    } else if (answerNicknameInput===''){
      setWarning('Invalid Input!')
    } else if (answerEmailInput===''){
      setWarning('Invalid Input!')
    };
    if (warning !== 'Invalid Input!') {

    let newAnswer = {
      answer:answerInput,
      name:answerNicknameInput,
      email:answerEmailInput,
      photo:[answerPhotoInput]
    };

    answerSubmitFunc(props.question.question_id, newAnswer)
    .then(()=> {
      console.log('Your answer has been submitted!');
      setShowAddAnswerForm(false)
    })
    .catch(err=>{
      console.log(err);
      setShowAddAnswerForm(false)
    });
  }
  setShowAddAnswerForm(false)
  };

  return (
    <div>
      <div>
        <button data-testid="addButton" onClick={onClickHandler}>Add Ansewer</button>
        {warning && (<div>{warning}</div>)}
      </div>
      {showAddAnswerForm && (<div>
        <h2>Submit your Ansewer</h2>
        {/* <h3>{`${productName}: ${questionBody}`}</h3> */}
        <form onSubmit={submitHandler}>
          <div><label>Your Answer</label><input type='text' onChange={ansewerInputHandler}></input></div>
          <div><label>Your Nickname</label><input type='text' onChange={nicknameInputHandler}></input><div>For privacy reasons, do not use your full name or email address</div></div>
          <div><label>Your email</label><input type='text' placeholder='Example: jack@email.com' onChange={emailInputHandler}></input><div>For authentication reasons, you will not be emailed</div></div>
          <div><label>Your Photos</label><input type='text' onChange={photosInputHandler}></input></div>
          <button type='submit'>Submit Answer</button>
        </form>
      </div>)}
    </div>
  )
}

export default AddAnswer;