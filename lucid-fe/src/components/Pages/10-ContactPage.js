import React, {useEffect} from "react";

import {connect} from "react-redux";

//ACTION FUNCTIONS
import{
    somefunction,
    functionFailure
} from "../../actions";

//STYLE COMING FROM LESS CLASSES AND ANTD COMPONENTS

//PAGES
import {Route, Link} from "react-router-dom";

//THIS FUNCTIONAL COMPONENT

function ContactPage(props){
    // useEffect(() => {
    //     props.somefunction()
    // }, []);

    return(
        <div>
            <p>Some Contact Info</p>
        </div>
        
    )
};



const mapDispatchToProps ={
    somefunction,
    functionFailure
}

export default connect(state => state, mapDispatchToProps)(ContactPage);