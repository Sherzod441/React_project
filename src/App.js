import './App.css';
import React, {  useState } from 'react';

function App() {

 const  questions = [
    {
      question: 'state nima',
      answerselect:[
        {answer: 'bilimman', isCorrect: false},
        {answer: 'oz ichida obyekt saqlovchi', isCorrect: true},
        {answer: 'bilaman lekin aytolmiman', isCorrect: false},
        {answer: 'b props shu', isCorrect: false}
      ]
    },
    {
      question: 'props nima',
      answerselect:[
        {answer: 'bilimman', isCorrect: false},
        {answer: 'oz ichida obyekt saqlovchi', isCorrect: false},
        {answer: 'bilaman lekin aytolmiman', isCorrect: false},
        {answer: 'globalniy ozgaruvchi', isCorrect: true}
      ]
    },
    {
      question: 'useState nima uchun kerak',
      answerselect:[
        {answer: 'bilimman', isCorrect: false},
        {answer: 'oz ichida obyekt saqlovchi', isCorrect: false},
        {answer: 'u oddiy state ga qaraganda osonroq', isCorrect: true},
        {answer: 'bilaman lekin aytolmiman', isCorrect: false}
      ]
    },
    
    {
      question: 'useContext nima',
      answerselect:[
        {answer: 'bilimman', isCorrect: true},
        {answer: 'oz ichida obyekt saqlovchi', isCorrect: false},
        {answer: 'bilaman lekin aytolmiman', isCorrect: false},
        {answer: 'b props shu', isCorrect: false}
      ]
    }
  ];

const [current, setcurrent] = useState(0);
const [score, setscore] = useState(0);
const [showscore, setshowscore] = useState(false);


const click = (isCorrect) => {

    if(isCorrect){
      setscore(score + 1)
    }

    const nextq = current + 1

    if(nextq < questions.length){
      setcurrent(nextq)
    }else{
      setshowscore(true)
    }

}


    return (
      <div className='container'>
         
          
          {
            showscore
            ? <div className='javoblar'>
              <h1 className='text-center'> To'g'ri javoblar :{score} / {questions.length} </h1>
              </div>
              : <div className='quiz'>
              <h1 className='text-center my-5'>Savol : {current + 1} / {questions.length}</h1>
              <h3 className='text-center my-5'>{questions[current].question}</h3>
                {questions[current].answerselect.map(item => (
                  <button onClick={() => click(item.isCorrect)} >{item.answer}</button>
                ))}
                </div>
          }

      </div>
    )
  }


export default App;