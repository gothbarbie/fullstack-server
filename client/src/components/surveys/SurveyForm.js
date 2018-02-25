import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields'

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          key={name}
        />
      )
    })
  }

  render() {
    const { handleSubmit, onSurveySubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'This field must be filled.'
    }
  })

  errors.recipients = validateEmails(values.recipients || '')

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)
