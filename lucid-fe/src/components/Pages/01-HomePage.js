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
import {Link} from "react-router-dom";

//svgs
import contact from '../../imgs/contact.svg';
import articles from '../../imgs/articles.svg';
import news from '../../imgs/news.svg';

//THIS FUNCTIONAL COMPONENT

function HomePage(props){
    // useEffect(() => {
    //     props.somefunction()
    // }, []);

    return(
        <div>

            <section id="home" >
                <div class="main">
                <div class="grid-home">
                    <div class="s1-a-title">
                    <h2>Lucid Consulting</h2>
                    <h3>A Cultural Mitigation Solutions Company</h3>
                    </div>   
                    <div class="grid-box s1-b-links">
        
          
            <h2 class="team-link"><Link to="/team">Meet The Team</Link></h2>
          
          
            <h2 class="mission-link"><Link to="/mission">Mission</Link></h2>
            <h2 class="work-link"><Link to="/mission">Software, GIS, Drones</Link></h2>
                    </div>
                    <div class="s1-c-grants-link">
                    <h2><Link to="/mission">Grants Awarded</Link></h2>
                    </div>
                    <div class="grid-box s1-d-side-links">
                    
                    <Link to="/mission" class="flex-box-home"><img src={articles} alt="outline of pencil" /></Link>
                    <Link to="/mission" class="flex-box-home"><img src={news} alt="outline of bell"/></Link>
                     <Link to="/contact" class="flex-box-home"><img src={contact} alt="outline of phone"/></Link>
                    

                    </div>
                    {/* <div class="s1-e-mobile-links">
                        <a>Mission</a>
                        <a>Team</a>
                        <a>Articles</a>
                        <a>News</a>
                        <a>Contact Us</a>
                        <a>Apps</a>
                        <a>Maps</a>

                    </div> */}
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

export default connect(state => state, mapDispatchToProps)(HomePage);

//for more see supportify