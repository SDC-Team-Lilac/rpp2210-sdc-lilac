import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx'
import AddAnswer from './AddAnswer.jsx'

const Question = (props) => {

  //answerList state --->  list of answers for question_id
  const [answerList, setAnswerList] = useState([]);

  return (
    <div style={{border: '2px solid red'}}>
      <div> Question! </div>
      <AnswerList />
      <AddAnswer />
    </div>
  )
}

export default Question;