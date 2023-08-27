import React,{Component} from "react";
import Card from "./card"
import "./home.css"
import { Fragment } from "react";

class Home extends Component{
    constructor(){
        super();
        this.state={
            courses:[],
            updatedcourses:[],
            loading:true
        }
        // console.log('constructor');
    }
    searchCourse(event){
        // console.log(event.target.value);
    }
    componentDidMount(){
       fetch('http://localhost:3000/courses',{method:"GET"})
       .then((res)=>{
        return res.json();
       }).then((data)=>{
        // console.log(data);
        this.setState({
            courses:data,
            updatedcourses:data,
            loading:false
        })
       },(error)=>{
        console.log(error);
       })
    }
    searchFor=(event)=>{
        const searchfor=event.target.value;
        const updatedstate=this.state.courses.filter((course)=>{
            return course.courseTitle.toLowerCase().indexOf(searchfor.toLowerCase())>-1   
        })
        // console.log(updatedstate);
        this.setState({
            updatedcourses:updatedstate
        })
    }
    
   render(){
    let card=this.state.updatedcourses.map((course,index)=>{
        // console.log(course)
        return <Card title={course.courseTitle} discrip={course.courseDiscription} start={course.courseStarting} key={course.courseId} className="col "/>
    })
    
    return (
        <Fragment>
            <div className="logo" style={{position:"relative"}}>
                <h2 className="text-end">Eduraka's</h2>
                <form >
                    <input type="text" className="form-control w-25 rounded-start " placeholder="serach for course.." onChange={this.searchFor}/>
                </form>
            </div>
        
            <div style={{display:this.state.loading?'block':'none'}} className="mt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
            <div className="container mt-2" style={{display:this.state.loading?"none":"block"}}>
                <div className="row g-2">
               {card}
               </div>
            </div> 
        </Fragment>
    )
   }
}
export default Home;