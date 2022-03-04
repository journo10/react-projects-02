import React, {useState} from 'react'
import "./App.css"
import Question from './components/Question';
import data from "./data"

const App = () => {
const [questions, setQuestions] = useState(data);
  return (
    <main>
    <div className='container'>
      <h3>Giriş İle İlgili Soru ve Cevaplar</h3>
      <section className='info'>
        {questions.map((question) => {
          return (
           <Question key={question.id} question={question}/>
          );
        })}
      </section>
    </div>
  </main>
  )
}

export default App