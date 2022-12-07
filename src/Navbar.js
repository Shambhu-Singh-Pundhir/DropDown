import React from "react"


export default function Navbar ()
{
    const animal=["Lion","Horse","Tiger","Zebra","Buffalo"]
    return(
        <div className="div">
        {/* <nav className="nav"> */}
     <h1 className="head">DropDown Project</h1>
    <hr />
     <select className="select">
      <option >Select</option>
     { animal.map(displayData=>
      (
        <option>{displayData}</option>
      ))}
     </select>
     {/* </nav> */}
     </div>
    )
}