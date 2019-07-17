import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import Title from './Components/Title/Title'
import CardList from './Components/CardList/CardList'
import SpeechRecognition from './Components/SpeechRecognition/SpeechRecognition'
import Signin from './Components/Signin/Signin'
import Register from './Components/Register/Register'

import './App.css'
import 'tachyons'

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
  
  if ('SpeechRecognition' in window) {
    var speechRecognizer = new window.SpeechRecognition()
    speechRecognizer.continuous = true
    speechRecognizer.interimResults = true
    speechRecognizer.lang = 'en-IN'
  }

  let finalTranscripts = '';

class App extends React.Component {
    constructor() {
    super()
    this.state = {
      input: '',
      speechroute: '',
      route: 'signin',
      isSignedIn: false
    }
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress = () => {
    let note = document.getElementById('result')
    
      speechRecognizer.start()
  
  
      speechRecognizer.onresult = (event) => {
        let interimTranscripts = ''
        for(var i = 0;i < event.results.length; i++){
          let transcript = event.results[i][0].transcript
          if (event.results[i].isFinal){
            finalTranscripts += transcript
          } else {
            interimTranscripts += transcript
          }
        }
        note.innerHTML = finalTranscripts + '<span style="color:#999>' + interimTranscripts + '</span>'
        this.setState({ input: finalTranscripts + interimTranscripts })
      }
      console.log('Working')

  
      speechRecognizer.onerror = (event) => {
        console.log(event)
  
      } 
  }

  changeSpeechRouteStop = () => {
    speechRecognizer.stop() 
    console.log(this.state.input)
   }

  changeSpeechRouteStart = () => {
    this.setState({speechroute: 'start'})
    this.onButtonPress();
   }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  onReset = () => {
    let note = document.getElementById('result')
    this.setState({ input: '' })
    note.innerHTML =  ''
  }

  onSave = () => {
    console.log('Save')
  }

  render(){
    return (
      <div className="App">
        <Navigation 
        onRouteChange={this.onRouteChange} 
        isSignedIn={this.state.isSignedIn} 
        />
        { this.state.route === 'home' ?
        <div>
                      <Logo />
                      <Title />
                      <CardList />
                      <SpeechRecognition 
                      onButtonPress={this.onButtonPress} 
                      changeSpeechRouteStop={this.changeSpeechRouteStop}
                      onReset={this.onReset}
                      onSave={this.onSave}
                      />
                    </div>
                    : (
                      this.state.route === 'signin' ? 
                      <Signin onRouteChange={this.onRouteChange} />
                      : <Register onRouteChange={this.onRouteChange} />)
                    
                
                  
        }
      </div>
    )
  }
}

export default App;
