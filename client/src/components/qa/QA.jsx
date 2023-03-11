import React from 'react';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import SearchQuestion from './SearchQuestion.jsx';

const QA = () => {

  return (
    <div>
      <div> QA! </div>
      <SearchQuestion />
      <QuestionList />
      <AddQuestion />
    </div>
  )
}

export default QA;