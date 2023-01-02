import React, { Component } from 'react'

export default class App_cc extends Component {
  constructor(){
	  super();
	  
	  this.state={
		  click:null,
		  robots:[
			{
				name:"Robot1",
				color:"Green"
			},
			{
				name:"Robot2",
				color:"blue"
			},
			{
				name:"Robot3",
				color:"red"
			}
			
		  ],
		  title: []
	  }
  }
  componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/todos/')
	.then(response => response.json())
	.then(json => {console.log(json)
		this.setState({title:json}, ()=>{
			console.log(this.state.title)
		})
	}
	)
  }
	render() {
	return (
	  <div>
		  {/*{this.state.robots.map((robot, i)=>{
		  return(<>{this.state.click === i ? 'Hi, ' : ''} <b>{robot.name} - {i+1}</b>
				<p>{robot.color}</p>
				<button onClick={(e)=>{console.log(e.target); this.setState(()=>{return {click: i}}, ()=>{console.log('this.state.click',this.state.click)})}}>click</button>
			</>)
	  })
	  
	  }*/}
	  
	  {this.state.title.map((eachTitle, i)=>{
		//  console.log(eachTitle.title)
		  return(
			  <>
			  <p key={i}>{eachTitle.title}</p>
			  </>
		  )
	  })}
	  
	  </div>
	)
  }
}



