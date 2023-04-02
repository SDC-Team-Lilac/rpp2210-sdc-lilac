import React, {useState} from 'react';
import axios from 'axios';

const Answer = (props) => {

  const [helpfulCount, setHelpfulCount] = useState(props.answer.helpfulness);
  const [report, setReport] = useState('Report')

  const helpfulCountHandler = (e) =>{
    e.preventDefault();
    let count = props.answer.helpfulness + 1;
    setHelpfulCount(count);
    axios.put(`/qa/answers/${props.answer.answer_id}/helpful`)
    .then(()=> {
      console.log('Helpful count for this answer has been updated!')
    })
    .catch(err=>{
      console.log(err)
    })
  };

  const reportHandler = (e) => {
    e.preventDefault();
    axios.put(`/qa/answers/${props.answer.answer_id}/report`)
    .then(()=> {
      console.log('This answer has been reported!');
      setReport('Reported')
    })
    .catch(err=>{
      console.log(err)
    })
  };

  const dateConverter = (inputDate) => {
    const dateObj = new Date(inputDate);
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  }


  return (
    <div className='qa_answer'>
      <div>
        <strong>{'A: '}</strong> {props.answer.body}
      </div>
      <div>
        {props.answer.photos.map(photo=>(
          <span key={photo.id}><img style={{height: '200px', width: '200px'}} src={photo.url}></img></span>
        ))}
      </div>
     <div className=''>
        <div>
        <span>{'by '+ props.answer.answerer_name + ', '}</span><span>{dateConverter(props.answer.date)}</span>
        </div>
        <div>
        <span data-testid='answer'>Helpful? </span><a href='' onClick={helpfulCountHandler}>Yes({helpfulCount})</a>{report === 'Report'?<a href='' onClick={reportHandler}>{' | ' + report}</a>:<span>{' | ' + report}</span>}
      </div>
    </div>
  </div>
  )
}

export default Answer;