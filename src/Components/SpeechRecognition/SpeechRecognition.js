import React from 'react'
import './SpeechRecognition.css'

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
  
  if ('SpeechRecognition' in window) {
    var speechRecognizer = new window.SpeechRecognition()
    speechRecognizer.continuous = true
    speechRecognizer.interimResults = true
    speechRecognizer.lang = 'en-IN'
  }

  let finalTranscripts = ''
  let interimTranscripts = ''

class SpeechRecognition extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			input: '',
			text: [],
			id: this.props.id
		}
	}

	 onButtonPress = () => {
    	let note = document.getElementById('result')
      	speechRecognizer.start()
  	    speechRecognizer.onresult = (event) => {
	        for(var i = 0;i < event.results.length; i++){
	          let transcript = event.results[i][0].transcript
	          if (event.results[i].isFinal){
	            finalTranscripts += transcript
	          } else {
	            interimTranscripts += transcript
	          }
	        }
	        note.innerHTML = finalTranscripts + '<span style="color:#999>' + interimTranscripts + '</span>'
	      }
	      speechRecognizer.onerror = (event) => {
	        console.log(event)
	    } 
	}

	onStop = () => {
		speechRecognizer.stop()
   	}

   changeSpeechRouteStart = () => {
    this.onButtonPress();
   	}

   onReset = () => {
    let note = document.getElementById('result')
    setTimeout(() => {
    	speechRecognizer.abort()
    	finalTranscripts = ''
  		interimTranscripts = ''
    	this.setState({ input: '' })
    	note.innerHTML =  ''	
	}, 500)
  }

  onSave = () => {
  	setTimeout(() => {
			this.setState({ input: document.getElementById("result").textContent })
	      	this.setState({ text: [...this.state.text, this.state.input] })
	      	fetch('http://localhost:3000/notesave', {
			method:'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				text: this.state.text,
				id: this.state.id
			})
		})
		.then(response => response.json())
		.catch(err => console.log(err))

		}, 500)
  }

	render() {
		return(
			<div> 
				<div id='result' className='paper'></div>
					<button 
					className='ma3 btn w-10 grow br-pill f4 mt6 link mb2 ph3 pv2 dib white bg-light-purple pointer' 
					onClick={this.onButtonPress}>
					Detect
					</button>
					<button 
					className='ma3 btn w-10 grow br-pill f4 link mb2 ph3 pv2 dib white bg-red pointer' 
					onClick={this.onStop}>
					Stop
					</button>
					<button 
					className='ma3 btn w-10 grow br-pill f4 link mb2 ph3 pv2 dib white bg-light-purple pointer' 
					onClick={this.onReset}>
					Reset
					</button>
					<button 
					className='ma3 btn w-10 grow br-pill f4 link mb2 ph3 pv2 dib white bg-green pointer' 
					onClick={this.onSave}>
					Save
					</button>
			</div>
				
		)
	}
}

export default SpeechRecognition