import { useState } from 'react'

function Die(props) {

  
  return (
    <>
        <div className='col-3'>
          <button className={props.dieBoolean? 'btn btn-success btn-outline-dark mb-2' : 'btn btn-outline-dark btn-outline-dark mb-2' } onClick={() => props.stopChange(props.id)} >{props.value}</button>
        </div>
    </>
  )
}

export default Die
