// import React from 'react'
// import { useState, useCallback } from 'react'

// function UseCallbackExample() {
//   const [tasks, setTasks] = useState([])

//   const addTask = () => {
//     setTasks((prevState) => [...prevState, 'Some Task'])
//   }
//   return (
//     <div>
//       <Button addTask={addTask} />
//       {tasks.map((task, index) => (
//         <p key={index}>{task}</p>
//       ))}
//     </div>
//   )
// }

// const Button = React.memo(({ addTask }) => {
//   console.log('Button Rendered')
//   return (
//     <div>
//       <button className="btn btn-primary" onClick={addTask}>
//         Add Task
//       </button>
//     </div>
//   )
// })

// export default UseCallbackExample
