import React from 'react'
import TodoList from '../todolist/TodoList'

import ImageBefore from '../assets/2_Before.png'
import ImageAfter from '../assets/2_After.png'

const QuestionTwo = () => {
  return (
    <div className='question-two' style={{ marginBottom: '5rem' }}>
        <h2>Question #2 - React - Solve the Problem</h2>
        <p>Complete the following {'<TodoList>'} component to display todos and allow for adding and removing of todo items</p>
        <div className='grouped_images'>
            <figure>
                <img className='grouped_images--left' src={ImageBefore} />
                <figcaption>Fig.3 - Original Incomplete Code from the Questionnaire.</figcaption>
            </figure>
            <figure>
                <img className='grouped_images--right' src={ImageAfter} />
                <figcaption>Fig.4 - Solution / Completed Code.</figcaption>
            </figure>
        </div>
        <p>In the above complete functional component code, we did the following:</p>
        <ol>
            <li>We imported <b>React</b> and <b>useReducer</b>.</li>
            <li>We define the <b>todosReducer</b> function that takes the state and action and returns a new state based on the action type.</li>
            <li>We define the {'<TodoList>'} component that initializes the <b>todos</b> state and <b>dispatch</b> using <b>useReducer</b> hook.</li>
            <li>We define two functions, <b>handleAddTodo</b> and <b>handleRemoveTodo</b>, to handle adding and removing of todo items, respectively.</li>
            <li>In the return statement, we map over the <b>todos</b> state to display each todo item's text and a button to remove the item.</li>
            <li>We also add a <b>key</b> attribute to each list item to avoid a warning from React.</li>
            <li>We update the "Add todo" button to call the <b>handleAddTodo</b> function when clicked.</li>
            <li>Finally, We export the {'<TodoList>'} component as default.</li>
        </ol>
        <p>Below is an interactive component for the task. Click the 'Add todo' button, enter a task in the input prompt, and click 'OK' to add it to the list above the button. To remove an item, click the 'Remove' button next to the item in the list.</p>
        <TodoList />
    </div>
  )
}

export default QuestionTwo