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
import Sider from "../Atoms/Sider";

//svgs
import drone from '../../imgs/drone.svg';
import navigation from '../../imgs/navigation.svg';
import trowel from '../../imgs/trowel.svg';

//THIS FUNCTIONAL COMPONENT

function MissionPage(props){
    // useEffect(() => {
    //     props.somefunction()
    // }, []);

    return(
        <div>
            <section id="mission">
                
                <div class="grid-mission">
                    <div class="flex-box-mission s2-a-title">
                    <h1>Your <span style={{color: "#2A1CEC"}}>Future</span> <span style={{fontSize:"1.3em"}}>+</span> Our <span style={{color: "#0CB906"}}>Past</span> <br/> <span style={{color:"#E88015"}}>Now</span>.</h1>
                    </div>   
                    <div class="flex-box-mission2 s2-b-images">
                    <img src={drone} alt="top down image of drone"/>
                    <img src={navigation} alt="icon image of map with location marker"/>
                    <img src={trowel} style={{paddingLeft:"15em", marginTop:"2em"}} alt="icon image of a trowel, a tool used by archaeologists during excavation"/>
                    </div>
                    <div class="grid-box s2-c-mission-text">
                        <p class="top">We've all heard the adage that those who ignore history are doomed to repeat it, Lucid Consulting helps end that pattern. Owned by technology driving anthropologists, we are intimate with applying historical information and broader cultural context to our problem solving approach.</p> 

                        <p class="middle">Alongside our GIS, web and app development, photogrammetry, 3D modeling, and drone expertise, we are also accustomed to field work in the United States and project management in Latin America, where we have assessed many archaeological sites for their cultural resources. Our assessments include all three phases of excavation, pedestrian survey, and monitoring. We're happy to help staff or manage staff.</p>

                        <p class="bottom">Below you will find some services that we can provide for you, in the case that you don't find what you are looking for, then reach out! We are always interested in developing new solutions and exploring other technologies.</p>
                    </div>
                </div>
                <div class="navBar">
                        <Sider/>
                 </div>
            </section>
        </div>
        
    )
};



const mapDispatchToProps ={
    somefunction,
    functionFailure
}

export default connect(state => state, mapDispatchToProps)(MissionPage);