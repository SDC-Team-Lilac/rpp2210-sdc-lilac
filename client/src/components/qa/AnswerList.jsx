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
      <Scrollbars
      autoHeight
        // autoHeightMin={300}
        autoHeightMax={500}
        >
      <div >
        {visibleAnswers.map(answer=>
        <Answer key={answer.answer_id} answer={answer}/>)}
      </div>
      </Scrollbars>
     </div>
     {props.answerList.length > 2? <button className='qa_button' data-testid='answerList1' onClick={onClickHandler}>{expanded? 'Collapse answers' : 'See more answers'}</button> : null}
    </div>
  )
}

export default AnswerList;