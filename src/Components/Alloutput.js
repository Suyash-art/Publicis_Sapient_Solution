import React from 'react'
import './Alloutput.css'

function Alloutput(props) {
       const a=props.lists[0]
      

    return (
        <div className="outer-image">
        <div className="details">
            {props.lists.length ? props.lists.map(item => {
                const {flight_number : id,mission_name : name,links ,launch_year,launch_success} = item
                return <div key={id} className="image-box" >
                  <img className="image-container" src={links.mission_patch_small}   height="100px" width="70px"/><br/>
                  <small>{name}#{id}</small><br/>
                  <small>Launch year :{launch_year}</small><br/>
                  <small>Successfull Launch : {JSON.stringify(launch_success)} </small><br/>
                  <small>Successfull Landing : {JSON.stringify(item.rocket.first_stage.cores[0].land_success)}</small>
                  
              </div>

            }) : <h1>No Result found</h1>}
            
        </div>
        <h5 style = {{display : "block",justifyContent : "center",margin : "auto"}}>Developed By : <small>Suyash Anurag Mishra</small></h5>
        </div>
    )
}

export default Alloutput
