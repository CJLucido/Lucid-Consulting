This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `craco start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `craco test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `craco build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Frontend Steps
### React + AntD + LESS

READ ME

npx create-react-app lucid-fe
ls (a check)
cd lucid-fe
npm start (a check)
ctrl+c
code .
App.js
	 import {Button} from 'antd';
	<Button type="primary">Button</Button>
App.css
	@import '~antd/dist/antd.css'; //can change to antd.dark.less or antd.compact.less to try out different offical themes
npm start (test import and button on App.js)
ctrl+c
index.js
	import {DatePicker} from 'antd';
	place <DatePicker/> in same div as <App/>
npm start (test datepicker)

_installing npm packages_

npm install axios --save
npm i redux
npm i react-redux
npm i redux-thunk
npm i dotenv (in case you want to add internal app that uses some api)
npm i --save react-router-dom

_custom themes in antd_													
																
npm install less														
npm install @craco/craco --save (high level api for interacting with webpack config)						
npm i -S craco-less (or craco-antd plugin which includes less, according to craco-less page. Following antd docs on it here)	
																
add craco.config.js file

const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color' : '#1DA57A'},
                        javascriptEnabled: true,
                    }
                }
            }
        }
    ]
}
																|
change App.css to App.less													|
change App.css to App.less in App.js												|
																|
----------------------------------------------------------------------------------------------------------------------------------
________________
_folder structure_

src
-axios
-actions
-components
	Pages
		01-HomePage.js
		02-MissionPage.js
		03-TeamPage.js
		04-TeamMember.js
		05-FieldworkPage.js
		06-TechPage.js
		07-GrantsPage.js
		08-ArticlesPage.js
		09-NewsPage.js
		10-GrantsPage.js
	Organisms
	Molecules
	Atoms
-reducers

public
-imgs
-less


______
_files_

reducer index.js
action index.js
axiosWithAuth.js
components component_name.js
index.less (use less-watch-compiler public/less src index.less, and import less files into that file)
	test.less
		npm start to test->antd, react, and less styles all being applied without issue
	mixins.less
	navigation.less
	pg-articles.less
	pg-contact.less
	pg-fieldwork.less
	pg-grants.less
	pg-home.less
	pg-mission.less
	pg-news.less
	pg-team.less
	pg-team-individual.less
	pg-technology.less
	variables.less
	//no global or reset because using antd default


_____________________________
_functional component template_

import React, {useEffect} from "react";

import {connect} from "react-redux";

//ACTION FUNCTIONS
import{
    somefunction,
    someFailure
} from "../../actions";

//STYLE COMING FROM LESS CLASSES AND ANTD COMPONENTS

//PAGES
import {Route, Link} from "react-router-dom";

//THIS FUNCTIONAL COMPONENT

function HomePage(props){
    useEffect(() => {
        props.somefunction()
    }, []);

    return(
        <div>
            <p>Some JSX</p>
        </div>
        
    )
};



const mapDispatchToProps ={
    somefunction,
    someFailure
}

export default connect(state => state, mapDispatchToProps)(HomePage);



_______________
_action template_

 import axios from "axios";
 import axiosWithAuth from "../axios/axiosWithAuth";

 //export as
export const SOME_ACTION = "SOME_ACTION";
export const SOME_FAILURE ="SOME-FAILURE";

//tie function entries to action's payload

 export const somefunction = (optional_data) => ({type: SOME_ACTION, payload: optional_data})
 export const functionFailure = (error) => ({type: SOME_FAILURE, payload: error})
 //apply axiosWithAuth for dispatch

 const authAxios = axiosWithAuth();

 //dispatch

 export const fetchArticles = () => dispatch => {

     authAxios
         .get('/articles')
         .then(res => {
             console.log("this is articles response.data", res)
             dispatch(somefunction(res.data))
         })
         .catch(err => {
             console.log("something went wrong with the test", err.message)
             dispatch(functionFailure(err.message))
         })
 }

________________
_reducer template_

 import {
     SOME_ACTION,
     SOME_FAILURE
 } from "../actions";

 const initialState = {
     articles: [],
     success: false,
     failure: false,
     error: null
 }

 export function reducer(state = initialState, action){
     switch(action.type){
         case SOME_ACTION:
             return{
                 ...state,
                 articles: action.payload,
                 success: true
             }
         case SOME_FAILURE:
             return{
                 ...state,
                 success: false,
                 failure:true,
                 error: action.payload
             }
         default:
             return state
     }
 }


________________________
_axios with auth template_

 import axios from 'axios';

 export default () => {
     const token = localStorage.getItem('token');

     return axios.create({
         baseURL: "http://TBD/api", //CHANGE WITH BACKEND
         headers: {
             'Authorization': token,
         }
     });
 };



________________________________________________________
_src index.js wired to reducer store addition/replacement_

import {BrowserRouter as Router} from "react-router-dom";

 import {Provider} from "react-redux";
 import {createStore, applyMiddleware} from "redux";
 import thunk from "redux-thunk";

 import {reducer} from "./reducers";

 const store = createStore(reducer, applyMiddleware(thunk));

 ReactDOM.render(
   < Provider store={store}>
     < Router>
       < App />
       < DatePicker/>
     < /Router>
   < /Provider>,
   document.getElementById('root')
 );


