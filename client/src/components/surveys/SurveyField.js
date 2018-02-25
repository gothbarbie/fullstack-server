import React from 'react'

export default ({ input, label, meta: { error, touched } }) => (
  <div>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} style={{ marginBottom: '1rem' }}/>
    <div className="red-text" style={{ marginBottom: '2rem' }}>
      {touched && error}
    </div>
  </div>
)
