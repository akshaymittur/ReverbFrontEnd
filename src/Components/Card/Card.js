import React from 'react'

const Card = ({ note }) => {

	return(
		<div className='dib br3 pa3 ma2 grow bw2 shadow-5 paper' style={{overflowY: 'scroll', border: '1px solid black', height: '200px', width: '200px'}}>
			<p className='f3 result'>
				{ note }
			</p>
		</div>
	)
}

export default Card