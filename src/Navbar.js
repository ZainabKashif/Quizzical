import React from "react";
const Navbar = (props) => {
    
    return (
        <div className="nav">
            <h1>Quizzical : Mathematics</h1>
            <h3 className="score">Total Questions :{props.value}</h3>
        </div>
    )
}
export default Navbar;