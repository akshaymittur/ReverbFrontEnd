import React from 'react'
import Tilt from 'react-tilt'
import audio from './logo.png'

const Logo = () => {
	return(
		<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
			<div className="Tilt-inner pa3"> 
				<img src={audio} alt='Logo' style={{paddingTop: '3px'}}/> 
			</div>
		</Tilt>
		)
}

export default Logo