import React from 'react'

const CourseForm = () => {
    const submitForm=()=>{

    }
  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>Name:</h1>
        <h2>Course Name:</h2>
        <h2>Date:</h2>
      </form>
    </div>
  )
}

export default CourseForm
