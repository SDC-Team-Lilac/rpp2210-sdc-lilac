import React, {useState, useEffect} from 'react';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import SearchQuestion from './SearchQuestion.jsx';
import axios from 'axios';

const QA = (props) => {

  //props will have the product_id from parent component ---> props.product_id
  //questionList state ---> all questions for product_id
  const [questionList, setQuestionList] = useState([]);

  // on the initial APP rendering, do we need to call the below func??
  const getQuestionsForOneProduct = (productId) => {
    return axios.get(`/qa/questions?product_id=${productId}`);
  };

  useEffect(()=>{
    getQuestionsForOneProduct(71701)
    .then(result=>{
      console.log('result', result.data)
      setQuestionList(result.data.results)
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);


  return (
    <div style={{border: '2px solid black'}}>
      <div data-testid='qaQa'> QA! </div>
      <SearchQuestion getQuestionsForOneProduct={getQuestionsForOneProduct} productId={props.productId} questionList={questionList}/>
      <QuestionList questionList={questionList} />
      <AddQuestion />
    </div>
  )
}

export default QA;