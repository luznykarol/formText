import React, { Component } from 'react'

export default function TextField(props) {
  const {
    label,
    name,
    error,
    placeholder,
    required,
    onChange,
    errorMessage,
    register,
  } = props

  const inputLabel = label && (
    <label className='label' htmlFor={name}>
      {label}
    </label>
  )

  const inputError = error && (
    <span className='control__error'>{errorMessage}</span>
  )

  return (
    <div className='control control-expanded'>
      {inputLabel}
      <textarea
        onChange={onChange}
        name={name}
        ref={register}
        className='textarea'
        placeholder={placeholder}
        required={required}
      />
      {inputError}
    </div>
  )
}
