import React, {useState} from 'react';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import SearchQuestion from './SearchQuestion.jsx';

const QA = (props) => {

  //props will have the product_id from parent component ---> props.product_id
  //questionList state ---> all questions for product_id
  const [questionList, setQuestionList] = useState([]);

  return (
    <div style={{border: '2px solid black'}}>
      <div> QA! </div>
      <SearchQuestion />
      <QuestionList questionList={questionList}/>
      <AddQuestion />
    </div>
  )
}

export default QA;