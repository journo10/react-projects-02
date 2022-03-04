import React, { useEffect, useRef, useState } from 'react'
import "./App.css"

const App = () => {
    const [, setDumy] = useState({})
    const inputRef = useRef();
    const divRef = useRef()
    const value = useRef(0)

    console.log(value);

    const onInc = () => {
        setDumy({})
        value.current += 1;
    }
    const onFocusButton = () => {
        inputRef.current.focus();
    }

    const divBorderButton = () => {
        divRef.current.style.border = "1px solid red"
    }

    useEffect(() => {
        console.log(inputRef.current);
    }, [])
    return (
        <div ref={divRef} className='App'>
            <input ref={inputRef} type="text" placeholder='Buraya yaz...' />
            <button onClick={onFocusButton}>Focus Ol</button>
            <button onClick={divBorderButton}>Div'e Border Ekle</button>
            <button onClick={onInc}>Inc Ref Value</button>
        </div>
    )
}

export default App


//NOT => useRef:useRef, .current değeri içinde değiştirilebilen bir obje döndürür. Bu objenin en önemli özelliği, bileşenin yaşam süresi boyunca aynı obje olarak kalmasıdır.
//Normalde bileşeni oluşturan fonksiyon gövdesinde oluşturulan değerler, bileşen her yeniden render edildiğinde yeniden oluşturulup değişkene ataması yapılır.
//useRef ile oluşturulan obje bileşenin yaşam süresi boyunca değişmez ve hep başlangıçta oluşturulan objeye referans gösterir ve tekrardan render etmez.