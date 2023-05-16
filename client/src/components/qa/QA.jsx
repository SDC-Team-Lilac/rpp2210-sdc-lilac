import React, {useState, useEffect} from 'react';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import SearchQuestion from './SearchQuestion.jsx';
import axios from 'axios';
import useInteraction from '../../useInteraction.jsx';

const QA = (props) => {

  //props will have the product_id from parent component ---> props.product_id
  //questionList state ---> all questions for product_id
  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestions, setFilterQuestions] = useState([])
  const [showFilteredQuestions, setShowFilteredQuestions] = useState(false);
  const [noQuestionMessage, setNoQuestionMessage] = useState('')

  // on the initial APP rendering, do we need to call the below func??
  const getQuestionsForOneProduct = (productId) => {
    return axios.get(`/qa/questions?product_id=${productId}`);
  };

  useEffect(()=> {
    if (questionList.length === 0) {
      setNoQuestionMessage('There is no questions for this product yet!  :)')
    } else {
     setNoQuestionMessage('')
    }
  }, [questionList]);

  useEffect(()=>{
    getQuestionsForOneProduct(props.productId)
    .then(result=>{
      setQuestionList(result.data.results)
    })
    .catch(()=>{
      console.log('err in qa')
    })
  }, [props.productId]);

  return (
    <div className='qa_parent'>
    <div className='qa_qa' onClick={(event)=>useInteraction(event, 'QA')} >
      {/* <div>
      <h3 data-testid='qaQa'> Questions & Answers </h3>
      </div> */}
      {!noQuestionMessage &&
      <SearchQuestion setFilterQuestions={setFilterQuestions} productId={props.productId} questionList={questionList} setShowFilteredQuestions={setShowFilteredQuestions}/>
      }
       {noQuestionMessage && <div className='qa_noQuestions'><span >{noQuestionMessage}</span></div>}
      {!noQuestionMessage &&
      <QuestionList questionList={questionList} filteredQuestions={filteredQuestions} showFilteredQuestions={showFilteredQuestions} productName={props.productName} noQuestionMessage={noQuestionMessage}/>
      }
      <div>
      <AddQuestion productId={props.productId} productName={props.productName} setQuestionList={setQuestionList} getQuestionsForOneProduct={getQuestionsForOneProduct}/>
      </div>
    </div>
    </div>
  )
}

export default QA;