import React from 'react'

function PreEvent(props) {
  return (
    <>
       <div className="container" style={{paddingTop:"20px"}}>
        <div className="card border border-info shadow-lg" style={{cursor:"pointer",width:"60%"}}>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            {/* <h6 className="card-subtitle mb-2 text-info">{props.event.org}</h6> */}
            <p>Mode : {props.mode}</p>
            <p>Rules : {props.rules}</p>
            <p>Registration fee: {props.fee} </p>
            <a className="card-link text-info">View</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default PreEvent
