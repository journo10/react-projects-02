import React, { useState } from 'react'
import "./App.css"
import data from "./data"

const App = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);//parseInt =>kendisine ondalıklı olarak verdiğiniz değerin ondalık kısmını siler ve kalan kısımdan yeni bir değişken oluşturarak döndürür ve değikenin tipi string ise number yapar.
        if (amount <= 0) {
            amount = 1
        }
        if (count > 8) {
            amount = 8;
        }
        setText(data.slice(0, amount));//slice =>kendisine parametre olarak verilen dizi aralığında bulunan değerleri kopyalar ve yeni bir dizi oluşturarak geri döndürür.
    }

    return (
        <section className='section-center'>
            <h3>tired of boring lorem ipsum?</h3>
            <form className='lorem-form' onClick={onFormSubmit}>
                <label htmlFor='amount'>paragraphs:</label>
                <input
                    type="number"
                    name='amount'
                    id='amount'
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <button className='btn'>generate</button>
            </form>
            <article className='lorem-text'>
                {text.map((t, key) => (
                    <p key={key}>{t}</p>
                ))}
            </article>
        </section>
    )
}

export default App