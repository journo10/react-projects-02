import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import "./App.css"

//LocalStorage
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};
const App = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'lütfen değer girin');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'değer değişti');
    } else {
      showAlert(true, 'success', 'eleman listeye eklendi');
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName('');
    }
  };

  //alert
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  //tümünü sil
  const clearList = () => {
    showAlert(true, 'danger', 'liste boş');
    setList([]);
  };

  //sil
  const removeItem = (id) => {
    showAlert(true, 'danger', 'eleman silindi...');
    setList(list.filter((item) => item.id !== id));
  };

  //düzenle
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  //LocalStorage
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}

        <h3>Todo List</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='Eleman ekle'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'düzenle' : 'ekle'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            temizle
          </button>
        </div>
      )}
    </section>
  )
}

export default App