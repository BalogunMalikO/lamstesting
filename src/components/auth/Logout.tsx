import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import exit from "../../image/exit.png"



export class Logout extends Component {
  render() {
    return (
      <div>
       <Link to={"/login"}className='d-inline-block align-top position-absolute top-0 end-0 py-3 px-2'>
          <img src ={exit} alt="exit" width ={40}/>
          </Link>
      </div>
    )
  }
}

export default Logout