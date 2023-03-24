import React, {useState, useEffect} from 'react';

const SearchQuestion = (props) => {

  const [searchQuestion, setSearchQuestion] = useState('');

  let questionListCopy = props.questionList.slice();

  const searchQuestionHandler = (event) => {
    setSearchQuestion(event.target.value)
  };


  useEffect(()=>{
    if (searchQuestion.length >= 3) {
      let newQuestionList = [];
      questionListCopy.forEach(question=>{
        if (question.question_body.toLowerCase().includes(searchQuestion)) {
          newQuestionList.unshift(question);
        }
      })
      props.setFilterQuestions(newQuestionList);
      props.setShowFilteredQuestions(true)
    } else {
      props.setFilterQuestions(props.questionList);
    }
  }, [searchQuestion]);



  return (
    <div>
    <form >
      <label data-testid="qaSearchQuestion">Seach Questions</label><input type='text' placeholder='Have a question? Search for answers…' onChange={searchQuestionHandler}></input>
    </form>
    </div>
  )
}

export default SearchQuestion;