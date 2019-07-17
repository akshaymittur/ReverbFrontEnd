import React from 'react'
import './SpeechRecognition.css'

const SpeechRecognition = ({ onButtonPress, changeSpeechRouteStop }) => {

	return(
		<div> 
			<div id='result' className='paper'></div>
				<button className='btn w-20 grow f4 mt6 link mb2 ph3 pv2 dib white bg-light-purple pointer' onClick={onButtonPress}>
				Detect
				</button>
				<button className='btn w-20 grow f4 link mb2 ph3 pv2 dib white bg-light-purple pointer' onClick={changeSpeechRouteStop}>
				Stop
				</button>
		</div>
			
	)
}

export default SpeechRecognition