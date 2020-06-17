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
            <section id="contact">
            <div class="grid-contact">
                <div class="box s9-a-header" >
                    <h2>S9-A</h2>
                </div>
                <div class="box s9-b-footer">
                    <h2>S9-B</h2>
                <div class="s9-c-header-2"> 
                    <h2>Contact Us</h2>
                    <button>Pay</button>
                </div>
                            <p>Lucid Consulting, L.L.C.
                    500 Westover Dr. Unit#14157,
                    Sanford, NC 27330</p>
                            <p>828.222.0895
                    admin@consulting-lucid.com</p>
                            <p>Jobs
                    Volunteers
                    NGOs</p>
                            <p>Quotes
                    Technologies
                    Staffing</p>
                    
                </div>

            </div>
            </section>  
        </div>
        
    )
};



const mapDispatchToProps ={
    somefunction,
    functionFailure
}

export default connect(state => state, mapDispatchToProps)(ContactPage);