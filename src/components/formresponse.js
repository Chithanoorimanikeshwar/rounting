import React,{Component} from "react";

class FormResponse extends Component{
    constructor(){
        super();
        this.state={
            form:{
                username:"",
                email:"",
                phno:""
            },
            course:""
        }
    }
    componentDidMount(){
        this.setState({
            form:{
                username:sessionStorage.getItem('username'),
                email:sessionStorage.getItem('email'),
                phno:sessionStorage.getItem('phonenumber')
            },
            course:sessionStorage.getItem('course')
        })
    }
    render(){
        if(this.state.form.username){
            return (
               
                 <div className="container border rounded bg-success p-5">
                    <h3 className="display-4">Congratulations {this.state.form.username} on your first step to become a {this.state.course}</h3>
                 <hr/>
                 <p><em>Thank u for registing for a query,we will soon reach you very soon..</em></p>
                 <p>A query is registered under
                    
                     <span>username:</span><span>{this.state.form.username}</span><br/>
                     <span>Email:</span><span>{this.state.form.email}</span><br/>
                     <span>PhoneNumber:</span><span>{this.state.form.phno}</span><br/>
                     
                 </p>
             </div>
            )
        }
       
        return(  
            <div className="container border rounded bg-danger p-5">
            <h3 className="display-4">sorry,cannot fetch your data</h3>
        </div>
           
        )

    }
}

export default FormResponse;