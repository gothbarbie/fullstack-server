import React from 'react'

export default ({ input, label }) => (
  <div>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} />
  </div>
)
