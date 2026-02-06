import { useState } from 'react'

function Die(props) {

  
  return (
    <>
        <div className='col-5-custom mb-2'>
          <button
            className={`die ${props.dieBoolean ? 'die-frozen' : ''}`}
            onClick={() => props.stopChange(props.id)}
            aria-pressed={props.dieBoolean}
          >
            {props.value}
          </button>
        </div>
    </>
  )
}

export default Die
