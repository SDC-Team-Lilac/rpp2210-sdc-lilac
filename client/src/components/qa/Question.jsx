import React, {useState, useEffect} from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import axios from 'axios';


const Question = (props) => {

  const [answerList, setAnswerList] = useState([]);
  const [helpfulCount, setHelpfulCount] = useState(props.question.question_helpfulness);

  const helpfulCountHandler = (e) =>{
    e.preventDefault();
    let count = props.question.question_helpfulness + 1;
    setHelpfulCount(count);
    axios.put(`/qa/questions/${props.question.question_id}/helpful`)  ///qa/questions/:question_id/helpful
    .then(()=> {
      console.log('Helpful count for this question has been updated!')
    })
    .catch(err=>{
      console.log(err)
    })
  };

  const getAnswersForOneQuestion = (question_id) => {
    return axios.get(`/qa/questions/${question_id}/answers`)
  };

  useEffect(()=>{
    getAnswersForOneQuestion(props.question.question_id)
    .then((result)=> {
      setAnswerList(result.data.results);
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);


  return (
    <div>
      <div className='qa_answerList'>
      <div  className='qa_question' data-testid="qaQuestion">
          <strong>{'Q: '}</strong> {props.question.question_body}  <span className='qa_questionHelpful'>| Helpful? <a href='' onClick={helpfulCountHandler}>Yes({helpfulCount})</a></span>
      </div>
        <AnswerList answerList={answerList}/>
        <AddAnswer question={props.question} getAnswersForOneQuestion={getAnswersForOneQuestion} setAnswerList={setAnswerList} productName={props.productName}/>
      </div>
    </div>
  )
};

export default Question;