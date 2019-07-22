import React from 'react'
import Tilt from 'react-tilt'
import audio from './audio.png'

const Logo = () => {
	return(
		<Tilt 
		className="Tilt" 
		options={{ max : 55 }} 
		style={{ height: 150, width: 150 }} >
			<div className="Tilt-inner pa3"> 
				<img 
				src={audio} 
				alt='Logo' s
				tyle={{paddingTop: '3px'}}/> 
			</div>
		</Tilt>
		)
}

export default Logo