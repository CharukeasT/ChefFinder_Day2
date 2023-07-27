import React from 'react'
import '../assets/ChefCard.css'
function SampleCard(props) {
  return (
    <div className='cc'>
    <div className='divcc'>
        <div className='imgcc'></div>
        <div className='txtcc'>
            {/* <h1>ID : {props.data.no}</h1> */}
            <h1>ID : {props.details.id}</h1>
            <h1>Name : {props.details.name}</h1>
            <h1>Experience : {props.details.experience} years</h1>
            <h1>Rating : {props.details.rating} <div className='star'></div></h1>
        </div>
        </div>
     </div>
  )
}

export default SampleCard