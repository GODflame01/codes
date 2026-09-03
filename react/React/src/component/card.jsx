import React from 'react'
const Card = (props) => {
    return (

        <div className="card">
           <div className="logo">
            <img src={props.image} alt="amazon" />
           </div>
           <h4>{props.name} <span> {props.days}</span></h4>
           <h3>{props.skill}</h3>
           <div className="requirement">
            <h5>{props.tag1}</h5><h5>{props.tag2}</h5>
           </div>
           <p className='price'>${props.price}/hr</p>
           <span className='location'>{props.location}</span>
            <div className="btn">
                <button>Apply now</button>
            </div>
        </div>

    )
}

export default Card
