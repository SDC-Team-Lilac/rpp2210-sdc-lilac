import React, { useState } from 'react';

const Characteristics = ({ characteristic, characteristicId, characteristicSelections, handleClick}) => {

  /* This component will:
    1) Receive characteristics from the reviews metadata in NewReview
    2) Generate the 5 radio buttons
  */
  const characteristicOption1 = characteristicSelections[characteristic][1] +"  (1)";
  const characteristicOption2 = characteristicSelections[characteristic][2] +"  (2)";
  const characteristicOption3 = characteristicSelections[characteristic][3] +"  (3)";
  const characteristicOption4 = characteristicSelections[characteristic][4] +"  (4)";
  const characteristicOption5 = characteristicSelections[characteristic][5] +"  (5)";


  return (
    <div data-testid='characteristics-1' className="reviews charatersticReview">
    <div>{characteristic}</div>
    <label for={characteristicOption1}>{characteristicOption1}</label>
    <input type="radio" name={characteristicId} value={characteristicOption1} onClick={(e) => {handleClick(e, 1)}} ></input>
    <label for={characteristicOption2}>{characteristicOption2}</label>
    <input type="radio" name={characteristicId} value={characteristicOption2} onClick={(e) => {handleClick(e, 2)}}></input>
    <label for={characteristicOption3}>{characteristicOption3}</label>
    <input type="radio" name={characteristicId} value={characteristicOption3} onClick={(e) => {handleClick(e, 3)}}></input>
    <label for={characteristicOption4}>{characteristicOption4}</label>
    <input type="radio" name={characteristicId} value={characteristicOption4} onClick={(e) => {handleClick(e, 4)}}></input>
    <label for={characteristicOption5}>{characteristicOption5}</label>
    <input type="radio" name={characteristicId} value={characteristicOption5} onClick={(e) => {handleClick(e, 5)}}></input>
    </div>
  )
}

export default Characteristics;