import React, {useState} from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => {

  const [Qexpanded, setQExpanded] = useState(true);
  const [questionShowLength, setQuestionShowLength] = useState(2)

  const visibleQuestions = props.questionList.slice(0, questionShowLength);

  const onClickHandler = () => {
    if (questionShowLength < props.questionList.length) {
      setQuestionShowLength(preLength => preLength + 2);
      if (questionShowLength >= props.questionList.length - 1) {
        setQExpanded(false);
      }
    } else {
      setQExpanded(false);
    };
  };


  return (
    <div>
      <label className='qa_questionList' data-testid="qaQuestionList"> <strong>Customer questions & answers</strong> </label>
      {!props.showFilteredQuestions && visibleQuestions.map(question=>
      <Question key={question.question_id} question={question} productName={props.productName}/>)}
      {props.showFilteredQuestions && props.filteredQuestions.map(question=>
      <Question key={question.question_id} question={question} productName={props.productName}/>)}
       {Qexpanded && <button onClick={onClickHandler}>More Answered Questions</button>}
    </div>
  )
}

export default QuestionList;