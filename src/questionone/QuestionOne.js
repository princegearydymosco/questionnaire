import React from 'react'
import MyComponent from '../mycomponent/MyComponent'

import ImageBefore from '../assets/1_Before.png'
import ImageAfter from '../assets/1_After.png'

const QuestionOne = () => {
  return (
    <div className='question-one' style={{ marginBottom: '5rem' }}>
        <h2>Question #1 - React - Identify the Problem and Refactor</h2>
        <div className='grouped_images'>
            <figure>
                <img className='grouped_images--left' src={ImageBefore} />
                <figcaption>Fig.1 - Original Code from the Questionnaire.</figcaption>
            </figure>
            <figure>
                <img className='grouped_images--right' src={ImageAfter} />
                <figcaption>Fig.2 - Solution / Refactored Code.</figcaption>
            </figure>
        </div>
        <p>Here are the few problems with the given React component:</p>
        <ol>
            <li>The <b>clickHandler()</b> method is not bound to <b>this</b>, which can cause issues with the <b>setState()</b> call.</li>
            <li>The <b>clickHandler()</b> method does not correctly update the <b>clicks</b> state property. It should reference <b>this.state.clicks</b>, not <b>this.clicks</b>.</li>
            <li>The <b>refs</b> approach to adding and removing the click handler is not the recommended approach in React, and it can lead to issues with unmounted components.</li>
            <li>The <b>refs</b> approach to getting the component's <b>div</b> is not recommended in newer versions of React, as it is a legacy approach. Instead, we can use the <b>useRef()</b> hook to create a ref to the <b>div</b>.</li>
            <li>The component can be refactored as a functional component instead of a class component.</li>
        </ol>
        <p>Below is an interactive component for the task. Click on the 'My Component (0 clicks)' button to see the results.</p>
        <MyComponent />
    </div>
  )
}

export default QuestionOne
