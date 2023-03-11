import React, {useState} from 'react';

const SearchQuestion = () => {

  const [searchQuestion, setSearchQuestion] = useState('');

  return (
    <div>
    <div> SearchQuestion! </div>
    <form>
    <button>Search Question</button>
    </form>
    </div>
  )
}

export default SearchQuestion;