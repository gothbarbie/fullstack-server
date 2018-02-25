import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../../actions'
import { withRouter } from 'react-router-dom'

import formFields from './formFields'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <article key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </article>
    )
  })

  return (
    <section>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="teal white-text darken-2 btn-flat" onClick={onCancel}>
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="white black-text btn right">
        Send Survey <i className="material-icons right">email</i>
      </button>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
