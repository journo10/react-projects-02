import React from 'react'
import Button from './Button';
import Header from './Header';
import { useTheme } from '../context/ThemeContext'

const Container = () => {
    const {theme} = useTheme()
  return (
    <div className={`app ${theme}`}>
        <Header />
        <Button />
    </div>
  )
}

export default Container