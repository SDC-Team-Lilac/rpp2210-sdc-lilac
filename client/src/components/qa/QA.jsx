import React, {useState, useEffect} from 'react';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import SearchQuestion from './SearchQuestion.jsx';
import axios from 'axios';

const QA = (props) => {

  //props will have the product_id from parent component ---> props.product_id
  //questionList state ---> all questions for product_id
  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestions, setFilterQuestions] = useState([])
  const [showFilteredQuestions, setShowFilteredQuestions] = useState(false);

  // on the initial APP rendering, do we need to call the below func??
  const getQuestionsForOneProduct = (productId) => {
    return axios.get(`/qa/questions?product_id=${productId}`);
  };

  useEffect(()=>{
    getQuestionsForOneProduct(props.productId)
    .then(result=>{
      setQuestionList(result.data.results)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [props.productId]);

  return (
    <div className='qa_qa' >
      <h1 data-testid='qaQa'> Questions & Answers </h1>
      <SearchQuestion setFilterQuestions={setFilterQuestions} productId={props.productId} questionList={questionList} setShowFilteredQuestions={setShowFilteredQuestions}/>
      <QuestionList questionList={questionList} filteredQuestions={filteredQuestions} showFilteredQuestions={showFilteredQuestions} productName={props.productName}/>
      <AddQuestion productId={props.productId} productName={props.productName} setQuestionList={setQuestionList} getQuestionsForOneProduct={getQuestionsForOneProduct}/>
    </div>
  )
}

export default QA;