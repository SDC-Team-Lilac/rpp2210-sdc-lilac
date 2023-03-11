import React, {useState} from 'react';

const AddQuestion = () => {

  //states for user input in the form to add a new question for product_id
  const [questionInput, setQuestionInput] = useState ('');
  const [questionNicknameInput, setQuestionNicknameInput] = useState ('');
  const [questionEmailInput, setQuestionEmailInput] = useState ('');


  return (
    <div>
    <div> AddQuestion! </div>
    <form>
      <button>Add Question</button>
    </form>
    </div>
  )
}

export default AddQuestion;