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
 		fetch('https://peaceful-sea-70256.herokuapp.com/getnotes', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
		id: this.props.id
		})
		})
	.then(response => response.json())
	.then(res => {
		this.setState({cardArray : [...res[0].notes] })
	})
}
	render() {
		return(
			<div>
			{
				this.state.cardArray.map((note, i) => {
					return (<Card key={i} note={note} id={this.props.id}/>)
				})
			}
			</div>
		)
	}
}

export default CardList
