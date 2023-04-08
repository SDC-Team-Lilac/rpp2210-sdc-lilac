import React, {useState} from 'react';
import axios from 'axios';
import Modal from 'react-modal'

Modal.setAppElement('#root');

const Answer = (props) => {

  const [helpfulCount, setHelpfulCount] = useState(props.answer.helpfulness);
  const [report, setReport] = useState('Report')
  const [helpfulClicked, setHelpfulClicked] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState('')
  console.log('selectedPhoto', selectedPhoto)

  const helpfulCountHandler = (e) =>{
    e.preventDefault();
    let count = props.answer.helpfulness + 1;
    setHelpfulCount(count);
    axios.put(`/qa/answers/${props.answer.answer_id}/helpful`)
    .then(()=> {
      console.log('Helpful count for this answer has been updated!')
      setHelpfulClicked(true)
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

  const onClickHandler = (event) => {
  console.log('event.target', event.target)
    setSelectedPhoto(event.target.src)
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }


  return (
    <div className='qa_answer'>
      <div>
        <strong>{'A: '}</strong> {props.answer.body}
      </div>
      <div>
        {props.answer.photos.map(photo=>(
          <img onClick={onClickHandler} className='qa_img' src={photo.url}></img>
        ))}
      </div>

     <div className='qa_answerer'>

        <span>{'by '+ props.answer.answerer_name + ', '}</span><span>{dateConverter(props.answer.date)}</span>
        <span data-testid='answer'>&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;Helpful?&nbsp;</span>{helpfulClicked? <span>Yes({helpfulCount})</span>:<a href='' onClick={helpfulCountHandler}>Yes({helpfulCount})</a>}<span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>{report === 'Report'?<a href='' onClick={reportHandler}>{report}</a>:<span>{report}</span>}

    </div>
    <Modal isOpen={showModal} onRequestClose={handleClose} className='qa_imgModal'>
    <img src={selectedPhoto}></img>
    </Modal>
  </div>
  )
}

export default Answer;