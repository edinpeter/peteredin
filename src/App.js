import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DotsThing from './components/DotsThing';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {selected : "home"};
  }
  setSelected(newState){
    this.setState({selected: newState});
    console.log("Set selected to: " + this.selected);
    this.render()
  }
  return_homepage(){
    return(          
    <div className="two">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 onClick={(e) => this.setSelected("projects", e)}>PROJECTS</h2>
      <h2 onClick={(e) => this.setSelected("about", e)}>ABOUT</h2>
      <a href="https://www.linkedin.com/in/edinpeter/">
        <img className="linkedin" src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png"></img>
      </a>
      <a href="https://github.com/edinpeter">
        <img className="linkedin" src="https://image.flaticon.com/icons/svg/25/25231.svg"></img>
      </a>
    </div>)
  }
  return_about(){
    return(          
      <div className="two">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-two"> Software Engineer at Capital One working in the 'big data' area, graduate of THE Ohio State University ( BS Computer Science and Engineering ), MS student at Georgia Tech, amateur chef, scuba diver, bicyclist, avid reader, and afficionado of all things computers. </p>
        <p className="text-two"> Pretty good with most things back-end engineering, but as this stellar website demonstrates, no stranger to front-end development either. </p>
        <p className="text-two"> Technology dump: Python, Java, Spark, Scala, AWS, EMR, Lambda, a little Golang, Javascript, React, Tensorflow, PyTorch, Jenkins, Maven, Shell scripting, Docker, ECS, and really anything else given a couple of hours and a requirement.</p>
        <p onClick={(e) => this.setSelected("home", e)} className="back-button">Back</p>
      </div>)
  }

  return_projects(){
    return(          
      <div className="two">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-two">I have a lot of ideas, but not a lot of time, so check back often</p>
        <p>{this.state.selected}</p>

        <p onClick={(e) => this.setSelected("home", e)} className="back-button">Back</p>
      </div>)
  }

  return_right(){
    console.log("Rendering based on selection: " + this.state.selected)
    console.log(this.state.selected, this.state.selected.value)
    switch(this.state.selected) {
      case "home":
        console.log("Returning homepage...")
        return this.return_homepage()
      case "about":
        console.log("Returning about...")
        return this.return_about()
      case "projects":
        console.log("Returning projects...")
        return this.return_projects()
      default:
        console.log("Returning about (default)...")
        return this.return_about()
        // code block
    }
    
  }
  render() {
    return (
      <div className="App">
        <div className="App-header"><DotsThing /></div>
        <div className="App-body">
          <div className="one">
            <p className="name">Peter</p>
            <p className="name-small">"Pete"</p>
            <p className="name">Edin</p>
          </div>
          {this.return_right()}
        </div>
      </div>
    );
  }
}

export default App;
