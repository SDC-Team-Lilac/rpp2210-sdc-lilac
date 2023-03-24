import React, {useState} from 'react';
import axios from 'axios';

const AddAnswer = (props) => {

  const [answerInput, setAnswerInput] = useState ('');
  const [answerNicknameInput, setAnswerNicknameInput] = useState ('');
  const [answerEmailInput, setAnswerEmailInput] = useState ('');
  const [photos, setPhotos] = useState([]);
  const [showAddAnswerForm, setShowAddAnswerForm] = useState(false);
  const [warning, setWarning] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');


  const ansewerInputHandler = (event) => {
    // if (event.target.value.length <= 1000) {
      setAnswerInput(event.target.value);
    // }
  };

  const nicknameInputHandler = (event) => {
    if (event.target.value.length <= 60) {
    setAnswerNicknameInput(event.target.value);
    }
  };

  const emailInputHandler = (event) => {
    if (event.target.value.length <= 60 && event.target.value.includes('@')) {
    setAnswerEmailInput(event.target.value);
    }
  };

  const photosInputHandler = (event) => {
    const files = event.target.files;
    const newPhotos= [...photos];
    for (let i = 0; i < files.length && i + photos.length < 5; i++) {
      newPhotos.push(files[i]);
    }

    setPhotos(newPhotos);

  };

  const onClickHandler = () => {
    setShowAddAnswerForm(true);
  };

  const answerSubmitFunc = (id, answer) => {
    return axios.post(`/qa/questions/${id}/answers`, answer)
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let newAnswer = {
      body:answerInput,
      name:answerNicknameInput,
      email:answerEmailInput,
      photos:photos.map(photo=>URL.createObjectURL(photo))
    };
    console.log('newAnswer', newAnswer)

    answerSubmitFunc(props.question.question_id, newAnswer)
    .then(()=> {
      console.log('Your answer has been submitted!');
      setShowAddAnswerForm(false);
      setSubmitSuccess('Your answer has been submitted!')
      props.getAnswersForOneQuestion(props.question.question_id)
      .then((result)=> {
        console.log('new ansewer result --->>', result.data.results)
        props.setAnswerList(result.data.results);
      })
      .catch(err=>{
        console.log(err)
      })
    })
    .catch(err=>{
      console.log(err);
      setShowAddAnswerForm(false)
      setSubmitSuccess('Your answer has not been submitted! Please valid your input!')
    });
  // }
  setShowAddAnswerForm(false)
  setPhotos([])
  };

  return (
    <div>
      <div>
        <button data-testid="addButton" onClick={onClickHandler}>Add Ansewer</button>
        {submitSuccess && (<div>{submitSuccess}</div>)}
      </div>
      {showAddAnswerForm && (<div>
        <h2>Submit your Ansewer</h2>
        {/* <h3>{`${productName}: ${questionBody}`}</h3> */}
        <form onSubmit={submitHandler}>
          <div><label>Your Answer</label><input type='text' onChange={ansewerInputHandler} maxLength={1000} required></input></div>
          <div><label>Your Nickname</label><input type='text' onChange={nicknameInputHandler} maxLength={60} required></input><div>For privacy reasons, do not use your full name or email address</div></div>
          <div><label>Your email</label><input type='text' placeholder='Example: jack@email.com' onChange={emailInputHandler} maxLength={60} required></input><div>For authentication reasons, you will not be emailed</div></div>
          <div><label>Your Photos</label><input id="photos" type="file" onChange={photosInputHandler} accept="image/*" multiple />

          {photos.length > 0 && (
            <div className="photo-preview">
              {photos.map((photo) => (
                <img key={photo.name} src={URL.createObjectURL(photo)} alt={photo.name} />
              ))}
            </div>
          )}
          </div>
          <button type='submit'>Submit Answer</button>
        </form>
      </div>)}
    </div>
  )
}

export default AddAnswer;

