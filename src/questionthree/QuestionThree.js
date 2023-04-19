import React from 'react'
import ManipulateDate from '../manipulatedata/ManipulateData'

import ImageBefore from '../assets/3_Before.png'
import ImageAfter from '../assets/3_After.png'

const QuestionThree = () => {
  return (
    <div className='question-two' style={{ marginBottom: '5rem' }}>
        <h2>Technical Exam</h2>
        <p>Using the initial data below create a function that will achieve the expected result data show it to console:</p>
        <div className='grouped_images'>
            <figure>
                <img className='grouped_images--left' src={ImageBefore} />
                <figcaption>Fig.5 - Initial Data</figcaption>
            </figure>
            <figure>
                <img className='grouped_images--right' src={ImageAfter} />
                <figcaption>Fig.6 - Expected Data</figcaption>
            </figure>
        </div>
        <p>How to use:</p>
        <ol>
            <li>Open Developer Tools from the browser.</li>
            <li>Navigate to the Console tab.</li>
            <li>Click on "Display Data" to see the results displayed in the console.</li>
        </ol>
        <ManipulateDate />
    </div>
  )
}

export default QuestionThree
