import { textAlign } from "@mui/system";
import React from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import yaml from 'react-syntax-highlighter/dist/esm/languages/hljs/yaml';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import solaire_yaml from "./solaire_yml";
import uml from '../artassets/basic_omd.png';
class EngineVe extends React.Component {

    render() {
        return (
            <div className="AppSection">  <h3 className="SectionTitle">EngineVe</h3>
                <h5 className="SectionSubtitle">A python lib and game engine for the 5th edition of DnD rules.</h5>
                <div class="SectionBody">                
                <div class="SectionText">
                    <br/><br/>What is it? 
                    <br/>    It is an object oriented representation of a DnD game in python. It uses Commands to represent atomic events that happen to the game state, 
                        and the invoker pattern to get reactions of things and applying effects/bonuses.

                    <br/><br/>Why is it?
                    <br/>   Because I don't think there is any other lightweight DnD Simulation like this for 5e.
                    
                    <br/><br/>When is it?
                    <br/>    I've been cursed for my hubris and my work is never finished.<br/>                    
                </div>

                <div class="SectionText"><br/><br/>Here's some uml for the high level things that won't change much.<br/></div>
                <br/><img src={uml} alt="diagram" style={{width:"100%", height:"auto"}} />
                
                <div class="SectionText">
                <br/><br/>This is what a character sheet looks like in yaml for this engine
                </div>
                <SyntaxHighlighter className="CodePreview"
                lineProps={{style: {whiteSpace: 'pre-wrap'}}}
                language='yaml'
                wrapLongLines='true' 
                style={stackoverflowDark}>{solaire_yaml}</SyntaxHighlighter>
                
                <div class="SectionText">
                    Lessons learned:
                    <br/>    Spending time making a game engine takes time away from making the game itself.
                    <br/>    Unit Tests are great.
                    <br/>    yaml is more aesthetic than xml and cfg.
                </div>
                </div>
                    
                        
            </div>);
    }
}
export default EngineVe