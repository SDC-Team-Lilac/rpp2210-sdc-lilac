import React, {useState, useEffect} from 'react';

const SearchQuestion = (props) => {

  const [searchQuestion, setSearchQuestion] = useState('');
  const [filteredQuestions, setFilterQuestions] = useState([])

  let questionListCopy = props.questionList.slice();

  const searchQuestionHandler = (event) => {
    setSearchQuestion(event.target.value)
  };


  useEffect(()=>{
    if (searchQuestion.length >= 3) {
      let newQuestionList = [];
      questionListCopy.forEach(question=>{
        if (question.question_body.includes(searchQuestion)) {
          newQuestionList.push(question);
        }
      })
      setFilterQuestions(newQuestionList);
    }
  }, [searchQuestion]);



  return (
    <div>
    <form >
      <label>Seach Questions</label><input type='text' placeholder='Have a question? Search for answers…' onChange={searchQuestionHandler}></input>
      {/* <button type='submit'>Submit</button> */}
    </form>
    </div>
  )
}

export default SearchQuestion;