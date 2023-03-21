import React, {useState} from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => {

  return (
    <div>
      <div data-testid="qaQuestionList"> QuestionList! </div>
      {props.questionList.map(question=>
      <Question key={question.question_id} question={question}/>)}
       <button>More Answered Questions</button>
    </div>
  )
}

export default QuestionList;