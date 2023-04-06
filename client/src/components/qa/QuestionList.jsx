import React, {useState, useEffect} from 'react';
import Question from './Question.jsx';
import { Scrollbars } from 'react-custom-scrollbars-2';

const QuestionList = (props) => {

  const [Qexpanded, setQExpanded] = useState(true);
  const [questionShowLength, setQuestionShowLength] = useState(2)

  const sortedQuestions = props.questionList.sort((a, b) => {
    return b.question_helpfulness - a.question_helpfulness;
  });

  const sortedFilteredQuestions = props.filteredQuestions.sort((a, b) => {
    return b.question_helpfulness - a.question_helpfulness;
  });


  const visibleQuestions = sortedQuestions.slice(0, questionShowLength);

  useEffect(()=> {
    if (props.questionList.length <= 2) {
      setQExpanded(false)
    } else {
      setQExpanded(true)
    }
  }, [props.questionList]);


  const onClickHandler = () => {1
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
    <div className='qa_questionListWrapper'>

      <label className='qa_questionList' data-testid="qaQuestionList"> <strong>Customer questions & answers</strong> </label>
      {/* <Scrollbars
      autoHeight
        // autoHeightMin={600}
        autoHeightMax={1000}> */}
      <div className='qa_questionScrollBar'>
        {!props.showFilteredQuestions && visibleQuestions.map(question=>
        <Question key={question.question_id} question={question} productName={props.productName}/>)}
        {props.showFilteredQuestions && sortedFilteredQuestions.map(question=>
        <Question key={question.question_id} question={question} productName={props.productName}/>)}
        {/* </Scrollbars> */}
      </div>
       {Qexpanded && <button className='qa_button4' onClick={onClickHandler}>MORE ANSWERED QUESTIONS</button>}
    </div>
  )
}

export default QuestionList;