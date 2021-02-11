import React from 'react'
import { useForm } from 'react-hook-form'
import InputField from '@/components/Forms/partials/InputField'
import TextField from '@/components/Forms/partials/TextField'
import CheckboxField from '@/components/Forms/partials/Checkbox'

export default function NewForm(title) {
  const { register, watch, handleSubmit, reset, errors } = useForm({
    mode: 'onBlur',
  })

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&')
  }

  //onSubmit
  const onSubmit = (data, e) => {
    e.preventDefault()
    // console.log('event', e)
    // console.log('data', data)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': e.target.getAttribute('name'),
        ...data,
      }),
    }).then(() => {
      console.log(
        encode({ 'form-name': e.target.getAttribute('name'), ...data }),
      )
      reset()
      // this.clearForm()
    })
  }

  //validation options
  const requiredOnly = register({ required: true })
  const nameValidation = register({ required: true, minLength: 2 })
  const emailValidation = register({
    required: true,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
  })

  console.log('errors', errors)

  return (
    <form
      className='form-wrap'
      name={title}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      data-netlify='true'>
      <InputField
        type='text'
        name='firstName'
        label='First Name'
        placeholder='First Name'
        register={nameValidation}
        error={errors.firstName}
        errorMessage={
          (errors.firstName &&
            errors.firstName.type === 'required' &&
            'this field is required') ||
          (errors.firstName &&
            errors.firstName.type === 'minLength' &&
            'Name too short')
        }
      />
      <InputField
        type='text'
        name='lastName'
        label='Last Name'
        placeholder='Last Name'
        register={nameValidation}
        error={errors.lastName}
        errorMessage={
          (errors.lastName &&
            errors.lastName.type === 'required' &&
            'this field is required') ||
          (errors.lastName &&
            errors.lastName.type === 'minLength' &&
            'Last name too short')
        }
      />
      <InputField
        type='email'
        name='email'
        label='Email'
        placeholder='Email'
        register={emailValidation}
        error={errors.email}
        errorMessage='Enter correct email format'
      />
      <TextField
        name='message'
        label='Message'
        placeholder='Message'
        register={nameValidation}
        error={errors.message}
        errorMessage={
          (errors.message &&
            errors.message.type === 'required' &&
            'this field is required') ||
          (errors.message &&
            errors.message.type === 'minLength' &&
            'Message too short')
        }
      />
      <CheckboxField
        register={requiredOnly}
        name='policy'
        register={nameValidation}
        label='Privacy Policy'
        error={errors.policy}
        errorMessage='Privacy policy required'
      />

      <button className='btn btn--submit' type='submit'>
        Submit
      </button>
    </form>
  )
}
