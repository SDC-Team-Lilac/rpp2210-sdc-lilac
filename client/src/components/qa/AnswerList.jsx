import React, {useState} from 'react';
import Answer from './Answer.jsx'
import { Scrollbars } from 'react-custom-scrollbars-2';

const AnswerList = (props) => {

  const [expanded, setExpanded] = useState(false);

  const sortedAnswers = props.answerList.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
  });

  const visibleAnswers = expanded ? sortedAnswers : sortedAnswers.slice(0, 2);

  const onClickHandler = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
     <div >
      {/* <Scrollbars
      autoHeight
        // autoHeightMin={300}
        autoHeightMax={500}
        > */}
      <div className='qa_answerScrollBar'>
        {visibleAnswers.map(answer=>
        <Answer key={answer.answer_id} answer={answer}/>)}
      </div>
      {/* </Scrollbars> */}
     </div>
     {props.answerList.length > 2? <button className='qa_button2' data-testid='answerList1' onClick={onClickHandler}>{expanded? 'COLLAPSE ANSWERS' : 'LOAD MORE ANSWERS'}</button> : null}
    </div>
  )
}

export default AnswerList;