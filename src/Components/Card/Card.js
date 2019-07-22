import React from 'react'

class Card extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			note: this.props.note,
			id: this.props.id
		}
	}

	deleteNote = () => {
		fetch('http://localhost:3000/deletenote', {
			method: 'delete',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				note: this.state.note,
				id: this.state.id
			})
		})
		.then(response => response.json)
		.catch(err => console.log)
	}

	render() {
		const { note } = this.props
		return(
			<div className='dib br3 pa3 ma2 grow bw2 shadow-5 paper' style={{overflowY: 'scroll', border: '1px solid black', height: '200px', width: '200px'}}>
				<p className='f3 result'>
					{ note }
				</p>
				<a className='w-20 grow f4 mt3 link dib black pointer' href='#'
					onClick={this.deleteNote}>
				Delete
				</a>
			</div>
		)
	}
}

export default Card