import React from 'react'
import { useRef } from 'react'

function UseRefExample1() {
  const inputRef = useRef()
  const pararef = useRef()
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    pararef.current.innerText = 'good bye hhaahha'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p ref={pararef}>Hellp </p>
      </form>
    </div>
  )
}

export default UseRefExample1
