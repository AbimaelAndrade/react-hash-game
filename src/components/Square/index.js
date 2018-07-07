import React from 'react'
import './square.css'
import X from '../../assets/X.png'
import O from '../../assets/O.png'

const Square = (props) => {

  const { value, onClick, classCss } = props
  
  return (
    <button className={`square ${classCss}`} onClick={ onClick }>
      {value ? (value === 'X' ? <img src={X} alt="Jogador X"/> : <img src={O} alt="Jogador O"/> ) : ''}
    </button>
  )
}

export default Square