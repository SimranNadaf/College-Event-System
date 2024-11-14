import React from 'react'

function StudentMyEventItem(props) {
  return (
    <>
    
      <div className="container" style={{paddingTop:"20px"}}>
        <div className="card border border-info shadow-lg" style={{cursor:"pointer",width:"60%"}}>
          <div className="card-body">
            <h5 className="card-title">{props.event.ename}</h5>
            <h6 className="card-subtitle mb-2 text-info">{props.event.org}</h6>
            <p>Date : {props.event.edate}</p>
            <p>Time : {props.event.etime}</p>
            <p>Mode : {props.event.mode}</p>
            <p>Contact No. : {props.event.phone}</p>
            <a className="card-link text-info" >View</a>
            <a className='text-danger mx-3' style={{textDecoration:"none"}}>Registered</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentMyEventItem
