import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import '../component/home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Dropdown, DropdownButton, FormControl, InputGroup, Nav } from "react-bootstrap";
export default function Home(){
  const [index, setIndex] = useState(0);
  //let user=JSON.parse(localStorage.getItem("admin")).data
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
        <>
    <div className="homecontainer">
         
        <div className="video-background-holder">
                    <div className="video-background-overlay"></div>
                    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                        <source src="https://media.istockphoto.com/videos/wind-reading-book-in-the-morning-video-id1152336815" type="video/mp4"/>
                    </video>
                    <div className="video-background-content container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <main className="px-3">
                                    <h1 className="display-2">AspiringReads.</h1>
                                    <p className="lead">“Books are the best Weapons in the World”</p>
                                    <p className="lead">
                                        <Link to="/about" className="btn btn-lg btn-secondary text-black fw-bold border-white bg-white">Learn more</Link>
                                    </p>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
       </div>
  </>  
    )
}