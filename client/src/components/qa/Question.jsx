import React, {useState, useEffect} from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import axios from 'axios';


const Question = (props) => {

  const [answerList, setAnswerList] = useState([]);

  const getAnswersForOneQuestion = (question_id) => {
    return axios.get(`/qa/questions/${question_id}/answers`)
  };

  useEffect(()=>{
    getAnswersForOneQuestion(props.question.question_id)
    .then((result)=> {
      // console.log('ansewer result --->>', result)
      setAnswerList(result.data.results);
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);


  return (
    <div style={{border: '2px solid red'}}>
      <div data-testid="qaQuestion"> {'Q: ' + props.question.question_body} </div>
      <AnswerList answerList={answerList}/>
      <AddAnswer question={props.question}/>
    </div>
  )
};

export default Question;