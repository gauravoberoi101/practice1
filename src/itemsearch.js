import React, { Component } from 'react'

export default class ItemSearch extends Component {
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
		  title: [],
		  searchFilter:[],
		  seachValue: null,
		  startSearch: false
	  }
  }
  componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/todos/')
	.then(response => response.json())
	.then(json => {//console.log(json)
		this.setState({title:json})
	}
	)
  }
	render() {
		console.log('this.state.title',this.state.title)
		let filteredValue = this.state.startSearch ? this.state.title.filter(each=>{
		//	console.log(each.toLowerCase().includes(this.state.seachValue))
			return each.title.includes(this.state.seachValue)
		}) : this.state.title
		console.log('filteredValue',filteredValue)
	return (
	  <div>
		  {/*{this.state.robots.map((robot, i)=>{
		  return(<>{this.state.click === i ? 'Hi, ' : ''} <b>{robot.name} - {i+1}</b>
				<p>{robot.color}</p>
				<button onClick={(e)=>{console.log(e.target); this.setState(()=>{return {click: i}}, ()=>{console.log('this.state.click',this.state.click)})}}>click</button>
			</>)
	  })
	  
	  }*/}
	  <input type="text" onChange={(e)=>{
		this.setState({startSearch: true})
		this.setState({seachValue: e.target.value}, ()=>{
			console.log('seachValue',this.state.seachValue)
		})
	  }}/>
	  {filteredValue.map((eachTitle, i)=>{
		//  console.log(eachTitle.title)
		  return(
			  <>
			  <p key={i}>{i+1}) {eachTitle.title}</p>
			  </>
		  )
	  })}
	  
	  </div>
	)
  }
}



