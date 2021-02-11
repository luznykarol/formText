import React from 'react'

const CheckboxField = ({
  name,
  label,
  selected,
  error,
  styles,
  onChange,
  register,
  errorMessage,
}) => {
  const handleChange = (e) => e.target.checked

  const inputError = error && (
    <span className='control__error'>{errorMessage}</span>
  )

  return (
    <div className={`checkbox__wrap ${styles && styles}`}>
      <label htmlFor={name}>
        <input
          name={name}
          id={name}
          type='checkbox'
          value={selected}
          defaultChecked={selected}
          onChange={handleChange}
          ref={register}
        />
        {label}
      </label>
      {inputError}
    </div>
  )
}

export default CheckboxField
