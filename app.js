/*
	This sample application showcase a primary level of reactjs component extraction.
	What that means is that section of the application could be modelled into components
	giving the application a clear view of which part does what. although this sample does not show 
	so much imformation being rendered by the component but gives an idea how it could be done for a start.
	
	the Application would be modelled into 3 components which would be composed into the 
	main component, source of true, that would eventually be rendered to the view... index.html.

	The webpack-dev-server was needed for watching the changes in our application and run the application 
	without having to go back to our command line to re-run the command.
	Alot could still be done to the webpack.config.js if needed for styling and js files ordering. 


*/
import React from 'react';
import ReactDOM from 'react-dom';

// main component

class App extends React.Component {

	// app construct method contains the shared component
	constructor(prop){
		 super(prop);
		
      this.state = {
      	program: "Muftau",
      	programA: {
   	     		"theme": "programA",
               "Name":"Introduction to Reactjs",
               "date": "2nd of Feb",
               "visitor": "Mikko",
               "location": "2nd Avenue"
            },
        programB: {
            	"theme": "programB",
               "Name":"Making Computer Science Be heard",
               "date": "2nd of Feb",
               "visitor": "Jenni",
               "location": "4th Avenue"
            }
      }

      // Binding the function to the application. It is actually 
      // needed for it to have access to the application states and properties
     
      this.eventChecker = this.eventChecker.bind(this);

   } // end of the constructor

   // chekcing for changes
  
   eventChecker(event){
   	     const events = { 
   	     	
        }

   		if (event.target.value == this.state.programA.theme){
   			this.setState({program: this.state.programA})
   			
   		}
   		else if (event.target.value == this.state.programB.theme){
   			this.setState({program: this.state.programB})
   		}
   }
   render() {
   	// inline styling applying the camelCase syntax.
   	// the styling could also be applied to the application externally
   	// and then using the webpack bundler to re-render the stylesheet
   	// to the right components.
   	 const mystyle ={
   	 	 'main' : {
	  		backgroundColor: '#55a191',
	  		color:'white'
		},
		'div' : {
	  		backgroundColor: '#55a191',
	  		padding:'20px 20px',
	  		marginTop:'20px',
	  		marginLeft:'40px',
	  		marginRight:'20px',
	  		borderRadius:'10px',
	  		color:'white'
	  		
		}
	  }
      return (
         <div className="container">
         	<h2>Enter either the programA or programB to see the component extraction in action</h2>
         	<div className="row">
           		<input className="col-sm-6" type="text" onChange={this.eventChecker} />
           	</div>
           <div className="row">
	           <div style={mystyle['div']} className="col-sm-3"><Programs program={this.state.program} /></div>
	           <div style={mystyle['div']} className="col-sm-3"> <Visitor program={this.state.program}/></div>
	           <div style={mystyle['div']} className="col-sm-3"> <Location program={this.state.program}/></div>
           </div>
         </div>
      );
   }
}

// component

class Programs extends React.Component {

	constructor(){
		 super();
	}
   render() {
      return (
         <div>
            <h2>Theme: {this.props.program.Name}</h2>
            <h3>more info can be here... why not</h3>
         </div>
      );
   }
}


// component

class Visitor extends React.Component {
	constructor(){
		 super();
	}
   render() {
      return (
         <div>
         	<h2>Visitor: {this.props.program.visitor}</h2>
            <h2>program Date: {this.props.program.date} </h2>
            <h3>more info can be here.... why not</h3>
         </div>
      );
   }
}

// component

class Location extends React.Component {
	constructor(prop){
		 super(prop);
	}
   render() {
      return (
         <div>
            <h2>Event location:{this.props.program.location}</h2>
            <h3>more info can be here.... why not</h3>
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'))