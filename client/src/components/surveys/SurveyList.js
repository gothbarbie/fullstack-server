import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'

class SurveyList extends Component {
  render() {
    return (
      <div>SurveyList</div>
    )
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys }
}

export default connect(mapStateToProps)(SurveyList)
