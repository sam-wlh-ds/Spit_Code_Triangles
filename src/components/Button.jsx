import React from 'react'

const Button = ({ type, text }) => {

  const customColor = "var(--medium-blue)"
  const nameOfClass = `btn btn-${type} px-3 py-2`;
  const classname = `btn ${type === 'custom' ? 'btn-custom' : `btn-${type}`}`


  return (
    <button type="button" className={nameOfClass}> { text }</button >

  )
}


export default Button