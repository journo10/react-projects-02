import React, { useState } from 'react'
import Values from 'values.js'
import "./App.css"
import SingleColor from './SingleColor';

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] =  useState(new Values('#f15025').all(10))

  const onFormSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(error)
      console.log(error);
    }

  }
  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index}  hexColor={color.hex} />
        ))}
      </section>
    </>
  )
}

export default App