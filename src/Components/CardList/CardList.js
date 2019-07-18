import React from 'react'
import Card from  '../Card/Card'

 class CardList extends React.Component {
 	constructor(props){
 		super(props)
 		this.state = {
 			cardArray: []
 		}
 	}
	
 	componentDidMount(props){
 		fetch('http://localhost:3000/getnotes', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
		id: this.props.id
		})
		})
	.then(response => response.json())
	.then(notes => {
		this.setState({cardArray : notes})
		})
}
	render() {
		return(
			<div>
			{
				this.state.cardArray.map((note, i) => {
					return (<Card key={i} note={note} />)
				})
			}
			</div>
		)}
}

export default CardList