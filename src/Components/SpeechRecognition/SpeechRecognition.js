import React from 'react'
import './SpeechRecognition.css'

const SpeechRecognition = ({ onButtonPress, changeSpeechRouteStop, onReset, onSave }) => {

	return(
		<div> 
			<div id='result' className='paper'></div>
				<button className='ma3 btn w-10 grow br-pill f4 mt6 link mb2 ph3 pv2 dib white bg-light-purple pointer' onClick={onButtonPress}>
				Detect
				</button>
				<button className='ma3 btn w-10 grow br-pill f4 link mb2 ph3 pv2 dib white bg-red pointer' onClick={changeSpeechRouteStop}>
				Stop
				</button>
				<button className='ma3 btn w-10 grow br-pill f4 link mb2 ph3 pv2 dib white bg-green pointer' onClick={onSave}>
				Save
				</button>
				<button className='ma3 btn w-10 grow br-pill f4 link mb2 ph3 pv2 dib white bg-light-purple pointer' onClick={onReset}>
				Reset
				</button>
		</div>
			
	)
}

export default SpeechRecognition