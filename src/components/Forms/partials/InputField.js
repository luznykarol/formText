import React from 'react'

const InputField = (props) => {
  const {
    label,
    name,
    error,
    type,
    placeholder,
    required,
    onChange,
    errorMessage,
    register,
  } = props

  const inputLabel = label && (
    <label className='control__label' htmlFor={name}>
      {label}
    </label>
  )
  const inputError = error && (
    <span className='control__error'>{errorMessage}</span>
  )
  return (
    <div className='control control-expanded'>
      {inputLabel}
      <input
        onChange={onChange}
        type={type}
        name={name}
        ref={register}
        className='input'
        placeholder={placeholder}
        required={required}
      />
      {inputError}
    </div>
  )
}

export default InputField
