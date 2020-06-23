import React from "react";
//, {useEffect}
import {connect} from "react-redux";

//ACTION FUNCTIONS
import{
    somefunction,
    functionFailure
} from "../../actions";

//STYLE COMING FROM LESS CLASSES AND ANTD COMPONENTS

//PAGES
//import {Route, Link} from "react-router-dom";

//ATOMS
//import Sider from "../Atoms/Sider";

//pictures
// import Cara from "../../imgs/CaraCOO.JPG";
// import Carlo from "../../imgs/CarloCEO.JPG";
// import Alex from "../../imgs/AlexCFO.JPG";

//THIS FUNCTIONAL COMPONENT

function TeamPage(props){
    // useEffect(() => {
    //     props.somefunction()
    // }, []);

    return(
        <div>
            <section id="team">
                <div class="grid-team">
                    <div class="grid-box s3-a-team-links">
                    
                        <div class="flex-box-team ceo s3-c-team-link orange">
                            {/* <img src={Carlo}/> */}
                            <p>Carlo Lucido CEO</p>
                        </div>
                        <div class="flex-box-team cfo s3-c-team-link blue">
                            {/* <img src={Alex}/> */}
                            <p>Alexander Rivas CFO</p>
                        </div>
                        <div class="flex-box-team coo s3-c-team-link green">
                            {/* <img src={Cara}/> */}
                            <p>Cara Kubiak COO</p>
                        </div>
                        <div class="flex-box-team cto s3-c-team-link orange">
                            <p>Marc Marino CTO</p>
                        </div>
                    </div>   
                    <div class="flex-box-team2 s3-b-team-statement">
                    <h1>We look forward to solving your problem!</h1>
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

export default connect(state => state, mapDispatchToProps)(TeamPage);