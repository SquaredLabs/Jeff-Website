import React, { Component } from 'react'
import { colors } from '../../config'

import Course from './Course'

import './styles.css'

const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }

class CourseTile extends Component {
  semesterCourses (semester, allCourses) {
    const courses = (allCourses
      .filter(course => course.semester.toLowerCase() === semester.toLowerCase()))
      .map((course, i) => <Course course={course} key={i}/>)
    const msg = <div className="coursetitle-semester-alt" style={black}>
      <div>All of my energy went</div>
      <div>toward research this</div>
      <div>semester!</div>
    </div>

    return <div className="coursetile-semester-container">
      <div className="coursetile-semester" style={gray}>{semester}</div>
      {courses.length > 0 ? courses : msg}
    </div>
  }

  render () {
    const { year, courses } = this.props

    const fallCourses = this.semesterCourses('Fall', courses)
    const springCourses = this.semesterCourses('Spring', courses)

    return <div className="coursetile-container">
      <div className="coursetile-year" style={black}>{year}</div>
      <div className="coursetile-semester-wrapper">
        {fallCourses}
        {springCourses}
      </div>
    </div>
  }
}

export default CourseTile
