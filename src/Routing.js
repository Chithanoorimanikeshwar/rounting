import React from "react";
import { BrowserRouter,Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/home";
import EnquireForm from "./components/enquireform";
import FormResponse from "./components/formresponse";

const Routing=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/enquireform" component={EnquireForm}/>
                <Route path="/formresponse" component={FormResponse}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routing;