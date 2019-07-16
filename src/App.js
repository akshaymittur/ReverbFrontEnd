import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import Title from './Components/Title/Title'
import CardList from './Components/CardList/CardList'
import SpeechRecognition from './Components/SpeechRecognition/SpeechRecognition'
import './App.css'
import 'tachyons'

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
  
  if ('SpeechRecognition' in window) {
    var speechRecognizer = new window.SpeechRecognition()
    speechRecognizer.continuous = true
    speechRecognizer.interimResults = true
    speechRecognizer.lang = 'en-IN'
  }

class App extends React.Component {
    constructor() {
    super()
    this.state = {
      input: '',
      speechroute: ''
    }
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    var r = document.getElementById('result')
    
      speechRecognizer.start()
  
      var finalTranscripts = '';
  
      speechRecognizer.onresult = (event) => {
        var interimTranscripts = ''
        for(var i = 0;i < event.results.length; i++){
          var transcript = event.results[i][0].transcript
          if (event.results[i].isFinal){
            finalTranscripts += transcript
          } else {
            interimTranscripts += transcript
          }
        }
        r.innerHTML = finalTranscripts + '<span style="color:#999>' + interimTranscripts + '</span>'
      }
      console.log('Working')
  
      speechRecognizer.onerror = (event) => {
        console.log(event)
  
      } 
  }

  changeSpeechRouteStop() {
    speechRecognizer.stop()
   }

  changeSpeechRouteStart() {
    this.setState({speechroute: 'start'})
    this.onButtonPress();
   }

  render(){
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Title />
        <CardList />
        <SpeechRecognition 
        onButtonPress={this.onButtonPress} 
        changeSpeechRouteStop={this.changeSpeechRouteStop}
        />
      </div>
    )
  }
}

export default App;
