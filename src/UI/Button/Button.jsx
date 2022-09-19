import React from 'react'

const customVariant = {
  primary: {
    backgroundColor: 'green',
    color: '#fff',
  },
  dark: {
    backgroundColor: '#000',
    color: '#fff',
  },
  info: {
    backgroundColor: 'blue',
    color: '#fff',
  },
  danger: {
    backgroundColor: 'red',
    color: '#fff',
  },
  warning: {
    backgroundColor: 'orange',
    color: '#fff',
  },
  outline_primary: {
    border: '2px solid green',
    padding: '.3rem 1rem',
  },
  outline_dark: {
    border: '2px solid #000',
    padding: '.3rem 1rem',
  },
  outline_info: {
    border: '2px solid blue',
    padding: '.3rem 1rem',
  },
  outline_danger: {
    border: '2px solid red',
    padding: '.3rem 1rem',
  },
  outline_warning: {
    border: '2px solid orange',
    padding: '.3rem 1rem',
  },
}

const Button = ({ text, variant }) => {
  //btnStyle;
  const btnStyle = {
    display: 'inline-block',
    border: 'none',
    borderRadius: '7px',
    fontSize: '1rem',
    padding: '.4rem 1rem',
    textTransform: 'capitalize',
    cursor: 'pointer',
    ...customVariant[variant],
  }
  return (
    <>
      <span style={btnStyle}>{text}</span>
    </>
  )
}

export default Button
