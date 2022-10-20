import './App.css';
import icon from './artassets/icon_25.png';
import Resume from './components/resume.js'
import EngineVe from './components/engineve';
import Vandal5 from './components/vandal5';
import AboutMe from './components/aboutme';
import Links from './components/links';
import AlternateSite from './components/alternatesite';
import React from 'react';
import personalvars from './personalvars.json';
import resumedata from './resume.json';
import SectionHeader from './components/sectionheader.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: personalvars,
      resumedata: resumedata
    };
  }
  render() {
    var alternate_site = null;
    var xtra_header=null;
    if (this.state.data.psuedonymurl !== "")
    {
      alternate_site = (
        <AlternateSite className='Section' data={this.state.data}></ AlternateSite>
      )
      xtra_header = (<SectionHeader data={this.state.data} title="SCREENNAME.html" subtitle="Primary site is under my 'Nom de Dev'." />)
    }
    var fullname = " " + this.state.data['firstname'] + this.state.data['namejoin'] + this.state.data['lastname']
    return (
      <div className="App">
        <div className="TopBar">
        <img id="icon" src={icon} alt="icon" />
          <div> {this.state.data.firstname}{this.state.data.namejoin}{this.state.data.lastname}
          </div>
        </div>
        <div className='AppMain'>
          <div className='SideBar'>Explorer</div>
          <div className="AppBody">
            {xtra_header}
            {alternate_site}
            
            <SectionHeader title='aboutme.md' subtitle={fullname} file_symbol="i" data={this.state.data}/>
            <AboutMe id="AboutMe" className='Section' data={this.state.data} />
            
            <SectionHeader title='HIRE_ME.pdf' subtitle="I'm > looking > for > work." file_symbol="$" data={this.state.data}/>
            <Resume id="Resume" className='Section' data={this.state.data} />

            <SectionHeader title='vandal5.py' subtitle="A game of DnD Auto-Chess" data={this.state.data}/>
            <Vandal5 id="Vandal5" className='Section' data={this.state.data} />

            <SectionHeader title='Engineve.py' subtitle="python > engine > for > DnD" data={this.state.data}/>
            <EngineVe id="EngineVe" className='Section' data={this.state.data} />
            
            <SectionHeader title='Links.' subtitle="Find > me > on > the > web.html" data={this.state.data}/>
            <Links id="Links" className='Section' data={this.state.data} />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
