import './App.css';
import Navbar from './navbar';
import icon from './artassets/icon_64x64.png';
import boat from './artassets/animated_boat.gif';
import Resume from './components/resume.js'
import EngineVe from './components/engineve';
import Vandal5 from './components/vandal5';
import AboutMe from './components/aboutme';
import React from 'react';
import Snippet from './components/snippet';
import personalvars from './personalvars.json';
import resumedata from './resume.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: personalvars,
      resumedata: resumedata
    };
  }
  render() {
    return (
      <div className="App">

        <div className="App-Body">
          {/* <Navbar /> */}
          <img src={boat} alt="icon" />
          <h2 className='SectionTitle'>DirePeacock</h2>
          <AboutMe data={this.state.data} />
          <Vandal5 data={this.state.data} />
          <EngineVe data={this.state.data} />
          <Resume data={this.state.data} />
          <Snippet data={this.state.data} />


        </div>

      </div>
    );
  }
}
export default App;
