import React from "react";
import { Component } from "react";
import {Link} from "react-router-dom";

class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            course_title:props.title || "",
            course_discrip:props.discrip || "",
            course_date:props.start || ""
        }
    }

    render(){
        // console.log("iam from card",this.props);
        const { course_title } = this.state; // Assuming these values come from the component's state

        const linkToEnquire = `/enquireform?course_title=${course_title}`;
        return (
            <div className="card" style={{width: "18rem"}} >
                <div className="card-body">
                    <h5 className="card-title">{this.state.course_title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.state.course_date}</h6>
                    <p className="card-text">{this.state.course_discrip}</p>
                    <Link className="btn btn-outline-primary" to={linkToEnquire}>Enquire</Link>
                </div>
            </div>
        )
    }
}

export default Card;