import React from "react";
import { Component } from "react";
import axios from "axios";
class EnquireForm extends Component{
    constructor(props){
       
        super(props);
        this.fname = React.createRef();
        this.lname= React.createRef();
        this.email=React.createRef();
        this.phno=React.createRef();
        this.state={
            course:{
                course_title:props.location.search.split('&')[0].split("=")[1].replaceAll("%20"," "),
            },
            form:{
                status:"init"
            }
        }
      
    }
    formSubmitted=(event)=>{
        event.preventDefault();
        // console.log(`${process.env.REACT_APP_BASE_URL}/userInfo`);
        axios.post(`${process.env.REACT_APP_BASE_URL}/userInfo`,{
            username:this.fname.current.value + this.lnamename.current.value,
            email:this.email.current.value,
            phonenumber:this.phno.current.value,
            course:this.state.course.course_title
        }).then((response)=>{
            console.log(response);
            sessionStorage.setItem('username',response.data.username);
            sessionStorage.setItem('email',response.data.email);
            sessionStorage.setItem('phonenumber',response.data.phonenumber);
            sessionStorage.setItem('course',response.data.course);
            // this.setState({
            //     form:{
            //         status:"success"
            //     }
            // })

            this.props.history.replace('/formresponse');
        }).catch((error)=>{
            console.log(error)
            this.setState({
                form:{
                    status:"error"
                }
            })
        })

    }
    render(){
            if(this.state.form.status === "error"){
               return (
               <div className="container">
                    <h2>Sorry something went worng please try again</h2>
                    <link to="/" className="btn btn-outline-primary">backTohome</link>
                </div>)
            }
            else if(this.state.form.status === "success"){
                return (
                    <div className="container">
                         <h2>thanks u we will react u soon</h2>
                         <link to="/" className="btn btn-outline-primary">backTohome</link>
                     </div>)
            }
            return <div className="container">
            <h2>{this.state.course.course_title} query form</h2>
            <form onSubmit={this.formSubmitted}>
                <div className="mb-3 text-start ">
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="fname" name="fname" ref={this.fname}/>

                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="lname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lname" name="lname"ref={this.lname} />

                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required ref={this.email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 text-start ">
                    <label htmlFor="phno" className="form-label">Phone No:</label>
                    <input type="number" className="form-control" id="phno" name="phno" required ref={this.phno}/>
                </div>
                <input type="submit" className="btn btn-primary"/>
            </form></div>
    }
}

export default EnquireForm