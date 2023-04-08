import * as React from "react";
import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import AddAnswer from "../client/src/components/qa/AddAnswer.jsx";
import AddQuestion from "../client/src/components/qa/AddQuestion.jsx";
import Answer from "../client/src/components/qa/Answer.jsx";
import AnswerList from "../client/src/components/qa/AnswerList.jsx";
import QA from "../client/src/components/qa/QA.jsx";
import Question from "../client/src/components/qa/Question.jsx";
import QuestionList from "../client/src/components/qa/QuestionList.jsx";
import SearchQuestion from "../client/src/components/qa/SearchQuestion.jsx";


afterEach(() => {
  cleanup();
});

const productId = 71701;

const question =  [
  {
      "question_id": 643304,
      "question_body": "hi",
      "question_date": "2022-09-17T00:00:00.000Z",
      "asker_name": "ggg",
      "question_helpfulness": 8,
      "reported": false,
      "answers": {
          "5988636": {
              "id": 5988636,
              "body": "hello",
              "date": "2022-09-24T00:00:00.000Z",
              "answerer_name": "jackson543@",
              "helpfulness": 3,
              "photos": []
          },
          "5988639": {
              "id": 5988639,
              "body": "hello",
              "date": "2022-09-24T00:00:00.000Z",
              "answerer_name": "bash.catchem",
              "helpfulness": 7,
              "photos": [
                  "https://res.cloudinary.com/dtlm8exth/image/upload/v1664026983/myggralntxv2ns8pa5gz.jpg",
                  "https://res.cloudinary.com/dtlm8exth/image/upload/v1664026993/wwlgym8xqwlrkosd564s.jpg",
                  "https://res.cloudinary.com/dtlm8exth/image/upload/v1664027003/zilgvxhtwokzq3i3itho.jpg",
                  "https://res.cloudinary.com/dtlm8exth/image/upload/v1664026989/upqgyazqvj4zxfddwnt8.jpg",
                  "https://res.cloudinary.com/dtlm8exth/image/upload/v1664026998/mzbtjh3bliwasops1lc3.jpg"
              ]
          },
          "5988649": {
              "id": 5988649,
              "body": "9999",
              "date": "2022-10-05T00:00:00.000Z",
              "answerer_name": "8888",
              "helpfulness": 2,
              "photos": [
                  "http://res.cloudinary.com/ddbilsvng/image/upload/v1664949518/mc6zqmb45m3xsjrqxh6m.jpg"
              ]
          },
          "5989391": {
              "id": 5989391,
              "body": "Adding a test answer.",
              "date": "2022-11-03T00:00:00.000Z",
              "answerer_name": "tester",
              "helpfulness": 1,
              "photos": [
                  "http://res.cloudinary.com/atelierfec/image/upload/v1667446039/lvmzwralautrnkfojkcd.jpg"
              ]
          }
      }
  }];

  const questionList =  [
    {
        "question_id": 643304,
        "question_body": "hi",
        "question_date": "2022-09-17T00:00:00.000Z",
        "asker_name": "ggg",
        "question_helpfulness": 8,
        "reported": false,
        "answers": {
            "5988636": {
                "id": 5988636,
                "body": "hello",
                "date": "2022-09-24T00:00:00.000Z",
                "answerer_name": "jackson543@",
                "helpfulness": 3,
                "photos": []
            },
            "5988639": {
                "id": 5988639,
                "body": "hello",
                "date": "2022-09-24T00:00:00.000Z",
                "answerer_name": "bash.catchem",
                "helpfulness": 7,
                "photos": [
                    "https://res.cloudinary.com/dtlm8exth/image/upload/v1664026983/myggralntxv2ns8pa5gz.jpg",
                    "https://res.cloudinary.com/dtlm8exth/image/upload/v1664026993/wwlgym8xqwlrkosd564s.jpg",
                    "https://res.cloudinary.com/dtlm8exth/image/upload/v1664027003/zilgvxhtwokzq3i3itho.jpg",
                    "https://res.cloudinary.com/dtlm8exth/image/upload/v1664026989/upqgyazqvj4zxfddwnt8.jpg",
                    "https://res.cloudinary.com/dtlm8exth/image/upload/v1664026998/mzbtjh3bliwasops1lc3.jpg"
                ]
            },
            "5988649": {
                "id": 5988649,
                "body": "9999",
                "date": "2022-10-05T00:00:00.000Z",
                "answerer_name": "8888",
                "helpfulness": 2,
                "photos": [
                    "http://res.cloudinary.com/ddbilsvng/image/upload/v1664949518/mc6zqmb45m3xsjrqxh6m.jpg"
                ]
            },
            "5989391": {
                "id": 5989391,
                "body": "Adding a test answer.",
                "date": "2022-11-03T00:00:00.000Z",
                "answerer_name": "tester",
                "helpfulness": 1,
                "photos": [
                    "http://res.cloudinary.com/atelierfec/image/upload/v1667446039/lvmzwralautrnkfojkcd.jpg"
                ]
            }
        }
    }];


  const answerList = [
    {
        "answer_id": 5988639,
        "body": "hello",
        "date": "2022-09-24T00:00:00.000Z",
        "answerer_name": "bash.catchem",
        "helpfulness": 7,
        "photos": [
            {
                "id": 5342361,
                "url": "https://res.cloudinary.com/dtlm8exth/image/upload/v1664026983/myggralntxv2ns8pa5gz.jpg"
            },
            {
                "id": 5342363,
                "url": "https://res.cloudinary.com/dtlm8exth/image/upload/v1664026993/wwlgym8xqwlrkosd564s.jpg"
            },
            {
                "id": 5342365,
                "url": "https://res.cloudinary.com/dtlm8exth/image/upload/v1664027003/zilgvxhtwokzq3i3itho.jpg"
            },
            {
                "id": 5342362,
                "url": "https://res.cloudinary.com/dtlm8exth/image/upload/v1664026989/upqgyazqvj4zxfddwnt8.jpg"
            },
            {
                "id": 5342364,
                "url": "https://res.cloudinary.com/dtlm8exth/image/upload/v1664026998/mzbtjh3bliwasops1lc3.jpg"
            }
        ]
    },
    {
        "answer_id": 5988636,
        "body": "hello",
        "date": "2022-09-24T00:00:00.000Z",
        "answerer_name": "jackson543@",
        "helpfulness": 3,
        "photos": []
    },
    {
        "answer_id": 5988649,
        "body": "9999",
        "date": "2022-10-05T00:00:00.000Z",
        "answerer_name": "8888",
        "helpfulness": 2,
        "photos": [
            {
                "id": 5342375,
                "url": "http://res.cloudinary.com/ddbilsvng/image/upload/v1664949518/mc6zqmb45m3xsjrqxh6m.jpg"
            }
        ]
    },
    {
        "answer_id": 5989391,
        "body": "Adding a test answer.",
        "date": "2022-11-03T00:00:00.000Z",
        "answerer_name": "tester",
        "helpfulness": 1,
        "photos": [
            {
                "id": 5342765,
                "url": "http://res.cloudinary.com/atelierfec/image/upload/v1667446039/lvmzwralautrnkfojkcd.jpg"
            }
        ]
    }
  ];

  const answer = {
    "answer_id": 5988636,
        "body": "hello",
        "date": "2022-09-24T00:00:00.000Z",
        "answerer_name": "jackson543@",
        "helpfulness": 3,
        "photos": []
  };

  const getQuestionsForOneProduct = (productId) => {
    return axios.get(`/qa/questions?product_id=${productId}`);
  };

describe('AddAnswer', () => {
  it('renders AddAnswer component', () => {

    render(<AddAnswer question={question}/>);
    const qaAddAnswer = screen.getByTestId("addButton");
    expect(qaAddAnswer).toBeInTheDocument();
    expect(qaAddAnswer).toHaveTextContent("Add Ansewer");
  });
});

describe('AddQuestion', () => {
  it('renders AddQuestion component', () => {
    render(<AddQuestion />);
    const qaAddQuestion = screen.getByTestId("AddQuestion");
    expect(qaAddQuestion).toBeInTheDocument();
    expect(qaAddQuestion).toHaveTextContent("AddQuestion!");
  });
});

describe('Answer', () => {
  it('renders Answer component', () => {

    render(<Answer key={answer.answer_id} answer={answer}/>);
    const qaAnswer = screen.getByTestId("answer");
    expect(qaAnswer).toBeInTheDocument();
    expect(qaAnswer).toHaveTextContent("Helpful?");
  });
});

describe('AnswerList', () => {
  it('renders AnswerList component', () => {
    render(<AnswerList answerList={answerList}/>);
    const qaAnswerList = screen.getByTestId("answerList1");
    expect(qaAnswerList).toBeInTheDocument();
    expect(qaAnswerList).toHaveTextContent("See more answers");
  });
});

describe('QA', () => {
  it('renders QA component', () => {
    render(<QA productId={productId}/>);
    const qaQa = screen.getByTestId("qaQa");
    expect(qaQa).toBeInTheDocument();
    expect(qaQa).toHaveTextContent("QA!");
  });
});

describe('Question', () => {
  it('renders Question component', () => {
    render(<Question key={question.question_id} question={question}/>);
    const qaQuestion = screen.getByTestId("qaQuestion");
    expect(qaQuestion).toBeInTheDocument();
    // expect(qaQuestion).toHaveTextContent("Q");
  });
});

describe('QuestionList', () => {
  it('renders QuestionList component', () => {
    render(<QuestionList questionList={questionList}/>);
    const qaQuestionList = screen.getByTestId("qaQuestionList");
    expect(qaQuestionList).toBeInTheDocument();
    expect(qaQuestionList).toHaveTextContent("QuestionList!");
  });
});

describe('SearchQuestion', () => {
  it('renders SearchQuestion component', () => {
    render(<SearchQuestion  getQuestionsForOneProduct={getQuestionsForOneProduct} productId={productId} questionList={questionList}/>);
    const qaSearchQuestion = screen.getByTestId("qaSearchQuestion");
    expect(qaSearchQuestion).toBeInTheDocument();
    expect(qaSearchQuestion).toHaveTextContent("Seach Questions");
  });
});
