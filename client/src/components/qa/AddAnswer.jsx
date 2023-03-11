import React, {useState} from 'react';

const AddAnswer = () => {

  const [answerInput, setAnswerInput] = useState ('');
  const [answerNicknameInput, setAnswerNicknameInput] = useState ('');
  const [answerEmailInput, setAnswerEmailInput] = useState ('');
  const [answerPhotoInput, setAnswerPhotoInput] = useState ('');

  return (
    <div>
    <div> AddAnswer! </div>
    <button>Add Answer</button>
    </div>
  )
}

export default AddAnswer;