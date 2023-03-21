import React, {useState} from 'react';
import Answer from './Answer.jsx'

const AnswerList = (props) => {

  return (
    <div style={{border: '2px solid yellow'}}>
      <div> AnswerList! </div>
      {props.answerList.map(answer=>
      <Answer key={answer.answer_id} answer={answer}/>)}
      <button data-testid='answerList1'>See more answers</button>
    </div>
  )
}

export default AnswerList;