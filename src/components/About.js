import React, { useState } from 'react'

export default function About() {

    const[myStyle,setMyStyle] = useState({
        color:'white',
        backgroundColor:'black'
    })
    const [btntext, setBtnText] = useState("Enable Light Mode")
   const  toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black'
            })
            setBtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
             setBtnText("Enable Dark Mode");
        }
    }
 
  return (
    <div className="container" style={myStyle}>
        <h3 className="my-3">About Us</h3>
                <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong> Who We Are</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                We’re passionate developers dedicated to creating clean, intuitive, and feature-rich user experiences. This project is more than just functionality—it’s about crafting interfaces people enjoy using.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>What This App Offers</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Our tool empowers you to edit and refine text effortlessly, with features like grammar correction, dark/light mode toggling, and sleek formatting options. Whether you're working late or writing on the go, we’ve got you covered.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Our Design Philosophy</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                We believe functionality should never compromise style. From glowing text effects to accessible layouts, we blend creativity with precision so every interaction feels satisfying and seamless.
            </div>
            </div>
        </div>
        </div>
        <div className="container my-3">
           <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div>
        
</div>
  )
}
